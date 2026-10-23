import { execFileSync } from "node:child_process";
import { createHash } from "node:crypto";
import { existsSync, lstatSync, readdirSync, readFileSync } from "node:fs";
import { dirname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const tracked = execFileSync("git", ["ls-files", "-z"], { cwd: root, encoding: "utf8" })
  .split("\0").filter(Boolean);
const candidates = execFileSync("git", ["ls-files", "--cached", "--others", "--exclude-standard", "-z"], {
  cwd: root, encoding: "utf8",
}).split("\0").filter(Boolean);
const violations = new Set();
const textFile = /\.(?:astro|[cm]?js|[cm]?ts|tsx|jsx|json|md|txt|ya?ml|html|xml|css|csv)$/i;
const localRules = join(root, "private", "career-context", "publication-rules.json");
const rules = existsSync(localRules) ? JSON.parse(readFileSync(localRules, "utf8")) : {};
const patterns = (rules.forbiddenPatterns ?? []).map((pattern) => new RegExp(pattern, "i"));
// Exact, locally approved public sentences may share words with a broad rule.
// Keep exceptions out of public source and continue scanning all remaining text.
const approvedPublicText = (rules.approvedPublicText ?? []).filter(
  (text) => typeof text === "string" && text.trim().length > 0,
);
const privateHashes = new Set();
const privatePaths = [];
function rememberPrivateFiles(directory) {
  if (!existsSync(directory)) return;
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) rememberPrivateFiles(path);
    else if (entry.isFile()) {
      privateHashes.add(createHash("sha256").update(readFileSync(path)).digest("hex"));
      privatePaths.push(relative(root, path).replaceAll("\\", "/"));
    }
  }
}
rememberPrivateFiles(join(root, "private"));
if (privatePaths.length) {
  let ignored;
  try {
    ignored = execFileSync("git", ["check-ignore", "--no-index", "-z", "--stdin"], {
      cwd: root, input: `${privatePaths.join("\0")}\0`, encoding: "utf8",
    });
  } catch (error) {
    if (error.status !== 1) throw error;
    ignored = error.stdout || "";
  }
  const ignoredPaths = new Set(ignored.split("\0").filter(Boolean));
  for (const path of privatePaths) if (!ignoredPaths.has(path)) violations.add(path);
}

for (const path of tracked) {
  if (path.startsWith("private/")) violations.add(path);
}

function inspect(path, websiteFile = false) {
  const absolute = join(root, path);
  if (!existsSync(absolute)) return;
  const stat = lstatSync(absolute);
  if (stat.isSymbolicLink()) {
    // Published roots should contain actual assets, not paths to local context.
    if (websiteFile) violations.add(path);
    return;
  }
  if (!stat.isFile()) return;
  if (privateHashes.has(createHash("sha256").update(readFileSync(absolute)).digest("hex"))) {
    violations.add(path);
  }
  if (!textFile.test(path)) return;
  const content = readFileSync(absolute, "utf8");
  const unapprovedContent = approvedPublicText.reduce(
    (text, approved) => text.replaceAll(approved, ""), content,
  );
  if (patterns.some((pattern) => pattern.test(unapprovedContent))) violations.add(path);
  if (websiteFile && /(?:\.\.\/|\/|\b)private[\\/]/i.test(content)) violations.add(path);
}

for (const path of new Set(candidates)) {
  if (path.startsWith("private/") || path.startsWith("dist/")) continue;
  inspect(path, /^(?:src|public)\//.test(path));
}

function inspectTree(directory) {
  if (!existsSync(directory)) return;
  for (const entry of readdirSync(directory, { withFileTypes: true })) {
    const absolute = join(directory, entry.name);
    const path = relative(root, absolute).replaceAll("\\", "/");
    if (/(?:^|\/)private(?:\/|$)/i.test(path)) violations.add(path);
    if (entry.isDirectory()) inspectTree(absolute);
    else inspect(path, true);
  }
}
// public/ is copied verbatim by Astro, including files ignored by Git.
inspectTree(join(root, "public"));
if (process.argv.includes("--include-dist")) inspectTree(join(root, "dist"));

if (violations.size) {
  console.error("Publication boundary check failed. Review these files locally:");
  for (const path of [...violations].sort()) console.error(`- ${path}`);
  console.error("Private content and matching excerpts have not been logged.");
  process.exitCode = 1;
} else {
  console.log(`Publication boundary check passed (${patterns.length ? "local rules and file boundaries" : "file boundaries; no local rules present"}).`);
}
