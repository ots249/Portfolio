import React from "react";
import { motion, HTMLMotionProps } from "motion/react";

interface ScrollRevealProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  delay = 0,
  direction = "up",
  className,
  ...props
}) => {
  const directionOffsetMap = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { y: 0, x: 40 },
    right: { y: 0, x: -40 },
    none: { y: 0, x: 0 },
  };

  const offset = directionOffsetMap[direction];

  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        y: offset.y, 
        x: offset.x 
      }}
      whileInView={{ 
        opacity: 1, 
        y: 0, 
        x: 0 
      }}
      viewport={{ 
        once: true, 
        amount: 0.1,
        margin: "-60px"
      }}
      transition={{ 
        duration: 0.7, 
        ease: [0.215, 0.61, 0.355, 1], // Fast start and slow finish for organic responsiveness
        delay 
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};
