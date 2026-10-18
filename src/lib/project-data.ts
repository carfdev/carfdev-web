interface ProjectIdentity {
  id: string;
  data: { title: string; order: number };
}

export function sortProjects<T extends ProjectIdentity>(
  projects: readonly T[],
): T[] {
  return [...projects].sort((a, b) => a.data.order - b.data.order);
}

export function projectReference(
  projects: readonly ProjectIdentity[],
  id: string,
) {
  const project = projects.find((entry) => entry.id === id);
  if (!project) throw new Error(`Unknown project ID: ${id}`);
  return { name: project.data.title, href: `/projects/${project.id}` };
}
