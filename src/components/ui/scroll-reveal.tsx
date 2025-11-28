import { motion } from "motion/react";
import type { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  width?: "fit-content" | "100%";
}

export const ScrollReveal = ({
  children,
  className = "",
  delay = 0.1,
  duration = 0.5,
  width = "100%",
}: ScrollRevealProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
      style={{ width }}
    >
      {children}
    </motion.div>
  );
};
