import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

// Container that staggers its direct children
export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

// Card entrance — scale up from slightly below with blur fade
export const cardVariant: Variants = {
  hidden: { opacity: 0, y: 32, scale: 0.96, filter: "blur(4px)" },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

// Slide in from left
export const slideLeft: Variants = {
  hidden: { opacity: 0, x: -32 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

// Slide in from right
export const slideRight: Variants = {
  hidden: { opacity: 0, x: 32 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

// Section heading fade up
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

interface StaggerGridProps {
  children: ReactNode;
  className?: string;
}

/** Wraps a grid so children animate in with stagger on scroll */
export function StaggerGrid({ children, className }: StaggerGridProps) {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** Single card that uses cardVariant — must be inside a StaggerGrid */
export function AnimCard({ children, className }: StaggerGridProps) {
  return (
    <motion.div variants={cardVariant} className={className}>
      {children}
    </motion.div>
  );
}
