"use client";

import * as React from "react";
import { motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  text: string;
  underlinePath?: string;
  underlineHoverPath?: string;
  underlineDuration?: number;
  strokeColor?: string;
  strokeWidth?: number;
}

const AnimatedText = React.forwardRef<HTMLSpanElement, AnimatedTextProps>(
  (
    {
      text,
      underlinePath = "M 0,10 Q 75,0 150,10 Q 225,20 300,10",
      underlineHoverPath = "M 0,10 Q 75,20 150,10 Q 225,0 300,10",
      underlineDuration = 1.4,
      strokeColor = "currentColor",
      strokeWidth = 3,
      style,
      className,
      ...props
    },
    ref
  ) => {
    const pathVariants: Variants = {
      hidden: { pathLength: 0, opacity: 0 },
      visible: {
        pathLength: 1,
        opacity: 1,
        transition: { duration: underlineDuration, ease: "easeInOut" },
      },
    };

    return (
      <span
        ref={ref}
        className={cn(className)}
        style={{ position: "relative", display: "inline-block", paddingBottom: "14px", ...style }}
        {...props}
      >
        {text}
        <motion.svg
          width="100%"
          height="20"
          viewBox="0 0 300 20"
          preserveAspectRatio="none"
          style={{
            position: "absolute",
            bottom: "-2px",
            left: 0,
            color: strokeColor,
            pointerEvents: "none",
          }}
        >
          <motion.path
            d={underlinePath}
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            fill="none"
            variants={pathVariants}
            initial="hidden"
            animate="visible"
            whileHover={{
              d: underlineHoverPath,
              transition: { duration: 0.8 },
            }}
          />
        </motion.svg>
      </span>
    );
  }
);

AnimatedText.displayName = "AnimatedText";

export { AnimatedText };
