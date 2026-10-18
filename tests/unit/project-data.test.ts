import { describe, expect, it } from "vitest";
import { projectReference, sortProjects } from "../../src/lib/project-data";

const entries = () => [
  { id: "beta", data: { title: "Fixture B", order: 20 } },
  { id: "alpha", data: { title: "Fixture A", order: 10 } },
];

describe("sortProjects", () => {
  it("orders by ascending numeric order", () => {
    expect(sortProjects(entries()).map(({ id }) => id)).toEqual([
      "alpha",
      "beta",
    ]);
  });
  it("does not mutate the input array", () => {
    const input = entries();
    const original = structuredClone(input);
    sortProjects(input);
    expect(input).toEqual(original);
  });
  it("accepts an empty collection", () => {
    expect(sortProjects([])).toEqual([]);
  });
  it("preserves relative order for equal priorities", () => {
    const input = entries().map((entry) => ({
      ...entry,
      data: { ...entry.data, order: 1 },
    }));
    expect(sortProjects(input).map(({ id }) => id)).toEqual(["beta", "alpha"]);
  });
});

describe("projectReference", () => {
  it("uses the selected entry title", () => {
    const input = entries();
    expect(projectReference(input, "alpha").name).toBe(input[1].data.title);
  });
  it("derives the destination from the selected ID", () => {
    expect(projectReference(entries(), "alpha").href).toBe("/projects/alpha");
  });
  it("rejects an unknown ID", () => {
    expect(() => projectReference(entries(), "unknown")).toThrow(Error);
  });
});
