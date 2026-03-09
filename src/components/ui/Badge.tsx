import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "gold" | "blue" | "ember";
  className?: string;
}

export function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  const variants = {
    default: "bg-white/5 text-text-secondary border-white/10",
    gold: "bg-accent-gold/10 text-accent-gold border-accent-gold/20",
    blue: "bg-accent-blue/10 text-accent-blue border-accent-blue/20",
    ember: "bg-accent-ember/10 text-accent-ember border-accent-ember/20",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-1 text-xs font-medium rounded-full border transition-colors duration-200",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
