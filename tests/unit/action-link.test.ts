import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { parseHTML } from "linkedom";
import { expect, it } from "vitest";
import ActionLink from "../../src/components/shared/ActionLink.astro";

async function render(props: Record<string, unknown> = {}, slots = {}) {
  const container = await AstroContainer.create();
  return parseHTML(
    await container.renderToString(ActionLink, {
      props: { href: "/fixture", ...props },
      slots,
    }),
  ).document;
}

it.each([
  ["href", "/fixture"],
  ["target", "_blank"],
  ["rel", "noopener noreferrer"],
  ["aria-label", "Fixture label"],
] as const)("forwards the %s anchor attribute", async (attribute, value) => {
  const document = await render({ [attribute]: value });
  expect(document.querySelector("a")!.getAttribute(attribute)).toBe(value);
});
it("renders caller content in the default slot", async () => {
  const document = await render(
    {},
    { default: '<em data-fixture="content">Arbitrary copy</em>' },
  );
  expect(document.querySelector("a > em[data-fixture=content]")).not.toBeNull();
});
it("hides the decorative arrow from accessibility APIs", async () => {
  expect(
    (await render()).querySelector("a > span")!.getAttribute("aria-hidden"),
  ).toBe("true");
});
it("replaces the default arrow with the supplied icon slot", async () => {
  const document = await render(
    {},
    { icon: '<svg data-fixture="icon"></svg>' },
  );
  const arrow = document.querySelector("a > span")!;
  expect(arrow.childNodes).toHaveLength(1);
  expect(arrow.querySelector("svg[data-fixture=icon]")).not.toBeNull();
});
