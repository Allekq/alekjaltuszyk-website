import test from "node:test";
import assert from "node:assert/strict";
import {
  approach,
  sceneProgress,
  landscapeHeight,
  galleryAvailability,
} from "../src/scripts/landing/workshop/geometry.ts";

test("demand-driven motion reaches an exact rest and remains stable", () => {
  let value = 0;
  for (let frame = 0; frame < 180; frame++) value = approach(value, 1, 1 / 60);
  assert.equal(value, 1);
  assert.equal(approach(value, 1, 1 / 60), 1);
});

test("reduced motion applies controls immediately; a resumed tab cannot overshoot", () => {
  assert.equal(approach(0, 1, 1 / 60, true), 1);
  const resumed = approach(0.2, 1, 90);
  assert.ok(resumed > 0.2 && resumed < 1);
  assert.equal(approach(0.2, 1, -1), 0.2);
});

test("motion converges consistently across refresh rates", () => {
  const run = (rate) => {
    let v = 0;
    for (let i = 0; i < rate; i++) v = approach(v, 1, 1 / rate);
    return v;
  };
  assert.ok(Math.abs(run(30) - run(120)) < 0.001);
});

test("scene progress is bounded when scrolling beyond or resizing a view", () => {
  assert.equal(sceneProgress(900, 500, 900), 0);
  assert.equal(sceneProgress(-500, 500, 900), 1);
  assert.equal(sceneProgress(200, 500, 900), 0.5);
  assert.equal(sceneProgress(2000, 300, 800), 0);
  assert.equal(sceneProgress(-2000, 300, 800), 1);
});

test("procedural worlds repeat by seed, vary between seeds, and contain bounded land and water", () => {
  const sample = (seed) =>
    Array.from({ length: 169 }, (_, i) =>
      landscapeHeight((i % 13) - 6, Math.floor(i / 13) - 6, seed),
    );
  assert.deepEqual(sample(0), sample(0));
  assert.notDeepEqual(sample(0), sample(1));
  for (let seed = 0; seed < 10; seed++) {
    const heights = sample(seed);
    assert.ok(heights.every((h) => Number.isFinite(h) && h >= 0.12 && h < 1.9));
    assert.ok(heights.includes(0.12));
    assert.ok(heights.some((h) => h > 0.5));
  }
});

test("gallery controls account for ends, fractional scroll and fitting content", () => {
  assert.deepEqual(galleryAvailability(0, 400, 1500), {
    previous: false,
    next: true,
  });
  assert.deepEqual(galleryAvailability(420, 400, 1500), {
    previous: true,
    next: true,
  });
  assert.deepEqual(galleryAvailability(1099.5, 400, 1500), {
    previous: true,
    next: false,
  });
  assert.deepEqual(galleryAvailability(0, 1500, 1500), {
    previous: false,
    next: false,
  });
});
