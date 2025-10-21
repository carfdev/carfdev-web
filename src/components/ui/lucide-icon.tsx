import * as Icons from "lucide-react";
import type { LucideProps } from "lucide-react";
import React from "react";

type IconComponent = React.FC<LucideProps>;
export type LucideIconName = {
  [K in keyof typeof Icons]: (typeof Icons)[K] extends IconComponent
    ? K
    : never;
}[keyof typeof Icons];

interface IconProps extends LucideProps {
  name: LucideIconName;
}

export const LucideIcon = ({ name, ...props }: IconProps) => {
  const LucideIcon = Icons[name] as IconComponent;
  return <LucideIcon {...props} />;
};
