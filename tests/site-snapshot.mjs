import { createHash } from "node:crypto";

export function pageSnapshot(html) {
  const text = html
    .replace(/<(style|script)\b[^>]*>[\s\S]*?<\/\1>/g, "")
    .replace(/<!--[\s\S]*?-->/g, "")
    .replace(/<[^>]+>/g, "")
    .replace(/\s+/g, " ")
    .trim();
  const links = [...html.matchAll(/<a\s([^>]+)>/g)].map(([, attributes]) =>
    [
      ...attributes.matchAll(
        /(href|target|rel|aria-label|aria-current)="([^"]*)"/g,
      ),
    ]
      .map(([, key, value]) => [key, value])
      .sort(([a], [b]) => a.localeCompare(b)),
  );
  const headings = [...html.matchAll(/<(h[1-6])\b([^>]*)>/g)].map(
    ([, tag, attributes]) => [tag, attributes.match(/id="([^"]*)"/)?.[1]],
  );
  return createHash("sha256")
    .update(JSON.stringify({ text, links, headings }))
    .digest("hex");
}
