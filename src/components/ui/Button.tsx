"use client";

import { ArrowRight, ArrowUpRight } from "lucide-react";
import { ButtonHTMLAttributes, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "tertiary";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  icon?: "arrow-right" | "arrow-up-right";
  className?: string;
}

export function Button({
  children,
  variant = "primary",
  icon,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 font-semibold transition-all duration-200 cursor-pointer";

  const variants = {
    primary:
      "h-11 px-5 bg-brand-primary text-white rounded-full hover:bg-[#161C1A]",
    secondary:
      "h-11 px-5 bg-white/15 text-white rounded-full border border-white/30 backdrop-blur-sm hover:bg-white/25",
    tertiary:
      "h-9 px-0 bg-transparent text-brand-primary hover:underline underline-offset-4",
  };

  const IconComponent = icon === "arrow-up-right" ? ArrowUpRight : ArrowRight;

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
      {icon && <IconComponent size={16} />}
    </button>
  );
}
