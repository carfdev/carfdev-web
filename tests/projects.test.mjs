import assert from "node:assert/strict";
import test from "node:test";
import { projectReference, sortProjects } from "../src/lib/project-data.ts";

const entries = [
  { id: "second", data: { title: "Second project", order: 2 } },
  { id: "first", data: { title: "First project", order: 1 } },
];

test("collection order is shared without mutating the source", () => {
  assert.deepEqual(
    sortProjects(entries).map(({ id }) => id),
    ["first", "second"],
  );
  assert.equal(entries[0].id, "second");
});

test("curated references keep selection order and use canonical titles", () => {
  assert.deepEqual(
    ["second", "first"].map((id) => projectReference(entries, id)),
    [
      { name: "Second project", href: "/projects/second" },
      { name: "First project", href: "/projects/first" },
    ],
  );
});

test("a missing curated project fails visibly instead of disappearing", () => {
  assert.throws(
    () => projectReference(entries, "missing"),
    /Unknown project ID: missing/,
  );
});
