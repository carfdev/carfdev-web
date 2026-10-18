import { beforeEach, expect, it, vi } from "vitest";
import { getCollection } from "astro:content";
import { sortProjects } from "../../src/lib/project-data";
import { getProjects } from "../../src/lib/projects";

vi.mock("astro:content", () => ({ getCollection: vi.fn() }));
vi.mock("../../src/lib/project-data", () => ({ sortProjects: vi.fn() }));

beforeEach(() => {
  vi.resetAllMocks();
  vi.mocked(getCollection).mockResolvedValue([]);
  vi.mocked(sortProjects).mockReturnValue([]);
});

it("requests the projects collection", async () => {
  await getProjects();
  expect(getCollection).toHaveBeenCalledExactlyOnceWith("projects");
});

it("passes loaded entries to the ordering boundary", async () => {
  const loaded = [{ id: "fixture", data: { order: 1, title: "Fixture" } }];
  vi.mocked(getCollection).mockResolvedValue(loaded as never);
  await getProjects();
  expect(sortProjects).toHaveBeenCalledExactlyOnceWith(loaded);
});

it("returns the ordering boundary result", async () => {
  const ordered = [{ id: "fixture", data: { order: 1, title: "Fixture" } }];
  vi.mocked(sortProjects).mockReturnValue(ordered);
  expect(await getProjects()).toBe(ordered);
});

it("propagates collection loading failure", async () => {
  const error = new Error("fixture failure");
  vi.mocked(getCollection).mockRejectedValue(error);
  await expect(getProjects()).rejects.toBe(error);
});
