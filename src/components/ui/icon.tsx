import * as Icons from "lucide-react";
import type { LucideProps } from "lucide-react";
import React from "react";

type IconComponent = React.FC<LucideProps>;
export type IconName = {
  [K in keyof typeof Icons]: (typeof Icons)[K] extends IconComponent
    ? K
    : never;
}[keyof typeof Icons];

interface IconProps extends LucideProps {
  name: IconName;
}

export const Icon = ({ name, ...props }: IconProps) => {
  const LucideIcon = Icons[name] as IconComponent;
  return <LucideIcon {...props} />;
};
