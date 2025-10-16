import * as React from "react";
import { buttonVariants } from "./button";
import { type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

export const Link = ({
  className,
  variant,
  size,
  ...props
}: React.ComponentProps<"a"> & VariantProps<typeof buttonVariants>) => {
  return (
    <a
      data-slot="a"
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
};
