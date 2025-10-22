import {
  IconBrandReact,
  IconBrandNodejs,
  IconBrandAstro,
  IconBrandAmazon,
  IconBrandTypescript,
  IconBrandTailwind,
  IconBrandDocker,
  IconBrandGit,
  type IconProps,
} from "@tabler/icons-react";

const Icons = {
  IconBrandReact,
  IconBrandNodejs,
  IconBrandAstro,
  IconBrandAmazon,
  IconBrandTypescript,
  IconBrandTailwind,
  IconBrandDocker,
  IconBrandGit,
} as const;

export type TablerIconName = keyof typeof Icons;

type TablerIconProps = {
  name: TablerIconName;
} & IconProps;

export function TablerIcon({ name, ...props }: TablerIconProps) {
  const Icon = Icons[name];
  return <Icon {...props} />;
}
