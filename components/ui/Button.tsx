"use client";

import { motion } from "framer-motion";
import React from "react";

type ButtonVariant = "primary" | "secondary" | "gold" | "whatsapp" | "ghost" | "white";
type ButtonSize = "sm" | "md" | "lg";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  target?: string;
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: "start" | "end";
  fullWidth?: boolean;
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-white hover:bg-primary-dark shadow-sm hover:shadow-md",
  secondary:
    "bg-transparent border border-primary text-primary hover:bg-primary-light",
  gold: "bg-gold text-white hover:brightness-110",
  whatsapp: "bg-whatsapp text-white hover:brightness-110",
  ghost: "bg-transparent text-primary hover:bg-primary-light",
  white:
    "bg-white text-primary hover:bg-primary-light shadow-sm",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-5 py-2.5 text-sm gap-1.5",
  md: "px-7 py-3.5 text-base gap-2",
  lg: "px-9 py-4 text-lg gap-2.5",
};

export default function Button({
  variant = "primary",
  size = "md",
  href,
  target,
  children,
  icon,
  iconPosition = "start",
  fullWidth = false,
  className = "",
  ...props
}: ButtonProps) {
  const baseClasses = `
    inline-flex items-center justify-center
    font-semibold rounded-xl
    transition-all duration-300 ease-out
    cursor-pointer select-none
    disabled:opacity-50 disabled:pointer-events-none
    ${variantClasses[variant]}
    ${sizeClasses[size]}
    ${fullWidth ? "w-full" : ""}
    ${className}
  `.trim();

  const content = (
    <>
      {icon && iconPosition === "start" && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "end" && <span className="shrink-0">{icon}</span>}
    </>
  );

  const MotionComponent = href ? motion.a : motion.button;

  return (
    <MotionComponent
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={baseClasses}
      {...(href ? { href, target, rel: target === "_blank" ? "noopener noreferrer" : undefined } : {})}
      {...(props as Record<string, unknown>)}
    >
      {content}
    </MotionComponent>
  );
}
