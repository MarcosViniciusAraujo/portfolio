"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  href?: string;
}

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  href,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-all duration-300 cursor-pointer";

  const variants = {
    primary:
      "bg-accent-gold/10 text-accent-gold border border-accent-gold/30 hover:bg-accent-gold/20 hover:border-accent-gold/50 hover:shadow-[0_0_20px_rgba(201,168,76,0.15)]",
    secondary:
      "bg-bg-card text-text-primary border border-white/10 hover:border-accent-blue/30 hover:shadow-[0_0_20px_rgba(74,158,255,0.1)]",
    ghost:
      "text-text-secondary hover:text-text-primary hover:bg-white/5",
  };

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-5 py-2.5 text-sm",
    lg: "px-7 py-3 text-base",
  };

  const classes = cn(baseStyles, variants[variant], sizes[size], className);

  if (href) {
    const isExternal = href.startsWith("http");
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classes}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
