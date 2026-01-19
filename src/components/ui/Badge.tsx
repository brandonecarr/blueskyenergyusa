import { ReactNode } from "react";

type BadgeVariant = "light" | "dark" | "outline";

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

export function Badge({ children, variant = "outline", className = "" }: BadgeProps) {
  const baseStyles =
    "inline-flex items-center justify-center px-3 py-2 text-xs font-medium rounded-full";

  const variants = {
    light:
      "bg-white/10 text-white/90 border border-white/20",
    dark:
      "bg-brand-primary text-white",
    outline:
      "bg-white text-brand-primary border border-line",
  };

  return (
    <span className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </span>
  );
}
