import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { test } from "node:test";
import { runInNewContext } from "node:vm";

const source = readFileSync(new URL("../src/scripts/theme.js", import.meta.url), "utf8");

function browser({ saved, dark = false, blocked = false } = {}) {
  const storage = new Map(saved ? [["site-appearance", saved]] : []);
  const writes = [];
  const events = {};
  const root = { dataset: {}, removeAttribute() { delete this.dataset.theme; } };
  const meta = {
    content: "",
    getAttribute: (name) => name === "data-theme-dark" ? "#181c19" : "#f5f3ed",
    setAttribute(name, value) { this[name] = value; },
  };
  const select = { value: "system", addEventListener(name, handler) { events[name] = handler; } };
  const picker = { hidden: true };
  const media = { matches: dark, addEventListener(_name, handler) { events.media = handler; } };
  const listen = (name, handler) => { events[name] = handler; };
  const context = {
    document: {
      documentElement: root,
      querySelectorAll: (selector) => selector.startsWith("meta") ? [meta]
        : selector === "[data-theme-select]" ? [select] : [picker],
      addEventListener: listen,
    },
    window: { matchMedia: () => media, addEventListener: listen },
    localStorage: {
      getItem: (key) => { if (blocked) throw Error("blocked"); return storage.get(key) ?? null; },
      setItem: (key, value) => { if (blocked) throw Error("blocked"); writes.push(key); storage.set(key, value); },
      removeItem: (key) => { if (blocked) throw Error("blocked"); writes.push(key); storage.delete(key); },
    },
  };
  runInNewContext(source, context);
  return {
    root, meta, select, picker, media, events, storage, writes,
    mount() { events.DOMContentLoaded(); },
    choose(value) { select.value = value; events.change(); },
  };
}

test("System follows the device before first paint and writes no preference", () => {
  const b = browser({ dark: true });
  assert.equal(b.root.dataset.theme, undefined);
  assert.equal(b.meta.content, "#181c19");
  assert.equal(b.picker.hidden, true);
  b.mount();
  assert.equal(b.picker.hidden, false);
  assert.equal(b.select.value, "system");
  b.media.matches = false;
  b.events.media();
  assert.equal(b.meta.content, "#f5f3ed");
  assert.deepEqual(b.writes, []);
});

test("Saved overrides apply before mounting and survive device changes", () => {
  for (const saved of ["light", "dark"]) {
    const b = browser({ saved, dark: saved !== "dark" });
    assert.equal(b.root.dataset.theme, saved);
    b.mount();
    b.media.matches = !b.media.matches;
    b.events.media();
    assert.equal(b.select.value, saved);
    assert.equal(b.root.dataset.theme, saved);
    assert.equal(b.meta.content, saved === "light" ? "#f5f3ed" : "#181c19");
  }
});

test("An explicit choice stores only appearance; System erases it", () => {
  const b = browser();
  b.storage.set("unrelated", "preserve");
  b.mount();
  b.choose("dark");
  assert.equal(b.storage.get("site-appearance"), "dark");
  assert.equal(b.root.dataset.theme, "dark");
  b.choose("system");
  assert.equal(b.storage.has("site-appearance"), false);
  assert.equal(b.root.dataset.theme, undefined);
  assert.equal(b.storage.get("unrelated"), "preserve");
});

test("Blocked storage still allows a current-page override", () => {
  const b = browser({ blocked: true });
  b.mount();
  b.choose("dark");
  assert.equal(b.root.dataset.theme, "dark");
  assert.equal(b.meta.content, "#181c19");
  b.choose("system");
  assert.equal(b.root.dataset.theme, undefined);
});

test("Unknown stored values fall back to System", () => {
  const b = browser({ saved: "invalid", dark: true });
  b.mount();
  assert.equal(b.select.value, "system");
  assert.equal(b.root.dataset.theme, undefined);
  assert.equal(b.meta.content, "#181c19");
});

test("Other tabs and back/forward restoration refresh the preference", () => {
  const b = browser();
  b.mount();
  b.storage.set("site-appearance", "dark");
  b.events.storage({ key: "unrelated" });
  assert.equal(b.root.dataset.theme, undefined);
  b.events.storage({ key: "site-appearance" });
  assert.equal(b.root.dataset.theme, "dark");
  b.storage.set("site-appearance", "light");
  b.events.pageshow();
  assert.equal(b.select.value, "light");
  b.storage.clear();
  b.events.storage({ key: null });
  assert.equal(b.select.value, "system");
});
