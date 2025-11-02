import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import React from "react";

import { useState } from "react";
import { TablerIcon, type TablerIconName } from "./tabler-icon";

export const HoverEffect = ({
  items,
  className,
}: {
  items: {
    name: string;
    description?: string;
    link: string;
    icon: TablerIconName;
  }[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className={cn("grid gap-4 md:grid-cols-4", className)}>
      {items.map((item, idx) => (
        <a
          href={item?.link}
          key={item?.link}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative block h-full w-full p-2"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 block h-full w-full rounded-3xl bg-neutral-200 dark:bg-slate-800/[0.8]"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardIcon icon={item.icon} />
            <CardTitle>{item.name}</CardTitle>
            {item.description && (
              <CardDescription>{item.description}</CardDescription>
            )}
          </Card>
        </a>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "bg-background border-border relative z-20 h-full w-full overflow-hidden rounded-2xl border p-4 text-center",
        className,
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};
export const CardTitle = ({
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return <h3 className="mb-0">{children}</h3>;
};
export const CardDescription = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p className={cn("text-muted-foreground mt-4 text-sm", className)}>
      {children}
    </p>
  );
};

export const CardIcon = ({ icon }: { icon: TablerIconName }) => {
  return (
    <div className="bg-secondary mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full">
      <TablerIcon name={icon} />
    </div>
  );
};
