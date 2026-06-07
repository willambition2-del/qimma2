import React from "react";

interface SectionHeadingProps {
  title: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
  badge?: string;
}

export default function SectionHeading({
  title,
  description,
  centered = true,
  light = false,
  className = "",
  badge,
}: SectionHeadingProps) {
  return (
    <div
      className={`mb-12 md:mb-16 ${centered ? "text-center" : ""} ${className}`}
    >
      {badge && (
        <span
          className={`inline-block mb-4 px-4 py-1.5 text-xs font-semibold tracking-wide rounded-full ${
            light
              ? "bg-white/10 text-gold"
              : "bg-gold-soft text-gold"
          }`}
        >
          {badge}
        </span>
      )}
      <div
        className={`gold-accent-line mb-5 ${
          centered ? "mx-auto" : ""
        }`}
      />
      <h2
        className={`text-2xl md:text-3xl lg:text-4xl font-bold leading-tight ${
          light ? "text-white" : "text-foreground"
        }`}
      >
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-base md:text-lg max-w-2xl leading-relaxed ${
            centered ? "mx-auto" : ""
          } ${light ? "text-white/70" : "text-muted"}`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
