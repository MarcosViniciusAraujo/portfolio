"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface GlowCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: "gold" | "ember" | "blue";
  hover?: boolean;
  delay?: number;
}

const glowColors = {
  gold: "hover:shadow-[0_0_30px_rgba(201,168,76,0.12)] hover:border-accent-gold/30",
  ember:
    "hover:shadow-[0_0_30px_rgba(232,102,60,0.12)] hover:border-accent-ember/30",
  blue: "hover:shadow-[0_0_30px_rgba(74,158,255,0.12)] hover:border-accent-blue/30",
};

export function GlowCard({
  children,
  className,
  glowColor = "gold",
  hover = true,
  delay = 0,
}: GlowCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      className={cn(
        "relative rounded-xl border border-white/[0.06] bg-bg-card/80 backdrop-blur-sm p-6 transition-all duration-500",
        hover && glowColors[glowColor],
        className
      )}
    >
      {children}
    </motion.div>
  );
}
