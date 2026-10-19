export function socialImagePath(pathname: string): string {
  const slug =
    pathname.replace(/^\/+|\/+$/g, "").replace(/\.html$/, "") || "home";
  return `/og/${slug}.png`;
}
