import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "gold" | "blue" | "light";
  className?: string;
}

export default function Badge({
  children,
  variant = "gold",
  className = "",
}: BadgeProps) {
  const variants = {
    gold: "bg-gold-soft text-gold border-gold/20",
    blue: "bg-primary-light text-primary border-primary/10",
    light: "bg-white/10 text-white border-white/20",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-full border ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
