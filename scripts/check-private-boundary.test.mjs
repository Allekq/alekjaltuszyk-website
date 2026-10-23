import { spawnSync } from "node:child_process";
import { copyFileSync, mkdirSync, mkdtempSync, rmSync, symlinkSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { test } from "node:test";
import assert from "node:assert/strict";

const source = fileURLToPath(new URL("./check-private-boundary.mjs", import.meta.url));
function fixture(t) {
  const root = mkdtempSync(join(tmpdir(), "publication-boundary-"));
  t.after(() => rmSync(root, { recursive: true, force: true }));
  for (const path of ["scripts", "src", "public", "docs", "private/career-context", "dist"]) {
    mkdirSync(join(root, path), { recursive: true });
  }
  assert.equal(spawnSync("git", ["init", "-q"], { cwd: root }).status, 0);
  writeFileSync(join(root, ".gitignore"), "private/\ndist/\n");
  copyFileSync(source, join(root, "scripts/check-private-boundary.mjs"));
  return {
    write: (path, content) => writeFileSync(join(root, path), content),
    run: (...args) => spawnSync(process.execPath, ["scripts/check-private-boundary.mjs", ...args], { cwd: root, encoding: "utf8" }),
    git: (...args) => spawnSync("git", args, { cwd: root }),
    root,
  };
}

test("clean repository works with and without local rules", (t) => {
  const f = fixture(t);
  f.write("src/index.astro", "<p>Public profile</p>");
  assert.equal(f.run("--include-dist").status, 0);
  f.write("private/career-context/publication-rules.json", JSON.stringify({ forbiddenPatterns: ["PRIVATE_FACT_SENTINEL"] }));
  assert.equal(f.run("--include-dist").status, 0);
});

test("restricted source and built text fail without printing the matched content", (t) => {
  const f = fixture(t);
  const token = "PRIVATE_FACT_SENTINEL";
  f.write("private/career-context/publication-rules.json", JSON.stringify({ forbiddenPatterns: [token] }));
  f.write("src/index.astro", `<p>${token}</p>`);
  let result = f.run();
  assert.equal(result.status, 1);
  assert.ok(!result.stderr.includes(token));
  f.write("src/index.astro", "<p>Public</p>");
  f.write("dist/index.html", `<p>${token}</p>`);
  assert.equal(f.run().status, 0);
  result = f.run("--include-dist");
  assert.equal(result.status, 1);
  assert.ok(!result.stderr.includes(token));
});

test("exact public exceptions keep other restricted text blocked in source and builds", (t) => {
  const f = fixture(t);
  const token = "PRIVATE_FACT_SENTINEL";
  const approved = `The public company is named ${token}.`;
  f.write("private/career-context/publication-rules.json", JSON.stringify({
    forbiddenPatterns: [token], approvedPublicText: [approved, ""],
  }));
  f.write("src/index.astro", `<p>${approved}</p>`);
  f.write("dist/index.html", `<p>${approved}</p>`);
  assert.equal(f.run("--include-dist").status, 0);
  f.write("src/index.astro", `<p>${approved}</p><p>${token}</p>`);
  assert.equal(f.run().status, 1);
  f.write("src/index.astro", `<p>${approved}</p>`);
  f.write("dist/index.html", `<p>${approved}</p><p>${token}</p>`);
  const result = f.run("--include-dist");
  assert.equal(result.status, 1);
  assert.ok(!result.stderr.includes(token));
});

test("a copied private binary fails in public and generated output", (t) => {
  const f = fixture(t);
  const content = Buffer.from([0, 1, 2, 3, 255]);
  f.write("private/recipient.pdf", content);
  f.write("public/download.pdf", content);
  assert.equal(f.run().status, 1);
  rmSync(join(f.root, "public/download.pdf"));
  f.write("docs/download.pdf", content);
  assert.equal(f.run().status, 1);
  rmSync(join(f.root, "docs/download.pdf"));
  f.write("dist/download.pdf", content);
  assert.equal(f.run("--include-dist").status, 1);
});

test("private imports, symlinks and force-added local files fail even without local rules", (t) => {
  const f = fixture(t);
  f.write("src/context.ts", 'import data from "../private/data.json";');
  assert.equal(f.run().status, 1);
  rmSync(join(f.root, "src/context.ts"));
  f.write("private/data.json", "{}");
  symlinkSync("../private/data.json", join(f.root, "public/data.json"));
  assert.equal(f.run().status, 1);
  rmSync(join(f.root, "public/data.json"));
  assert.equal(f.git("add", "-f", "private/data.json").status, 0);
  assert.equal(f.run().status, 1);
});

test("removing the ignore rule fails before local files can be added accidentally", (t) => {
  const f = fixture(t);
  f.write("private/data.json", "{}");
  assert.equal(f.run().status, 0);
  f.write(".gitignore", "dist/\n");
  assert.equal(f.run().status, 1);
});
