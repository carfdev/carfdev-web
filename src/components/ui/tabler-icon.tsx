import * as Icons from "@tabler/icons-react";
import type { ForwardRefExoticComponent, RefAttributes } from "react";
import type { IconProps } from "@tabler/icons-react";

export type TablerIconName = keyof typeof Icons;
type TablerIconProps = {
  name: TablerIconName;
} & IconProps;

export function TablerIcon({ name, ...props }: TablerIconProps) {
  const Icon = Icons[name] as ForwardRefExoticComponent<
    IconProps & RefAttributes<SVGSVGElement>
  >;
  return Icon ? <Icon {...props} /> : null;
}
