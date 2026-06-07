"use client";

import { stats } from "@/data/stats";
import { useCountUp } from "@/components/animations/useCountUp";
import type { Stat } from "@/types";

function StatItem({ stat }: { stat: Stat }) {
  const ref = useCountUp({ end: stat.value, suffix: stat.suffix });

  return (
    <div className="text-center px-4 py-6">
      <span
        ref={ref}
        className="block font-inter text-4xl md:text-5xl font-bold text-gold mb-2"
      >
        0{stat.suffix}
      </span>
      <span className="text-sm md:text-base text-white/70 font-medium">
        {stat.label}
      </span>
    </div>
  );
}

export default function StatsSection() {
  return (
    <section className="relative py-16 md:py-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-l from-primary-dark via-primary to-primary-dark" />

      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 start-[25%] w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent" />
        <div className="absolute top-0 end-[25%] w-px h-full bg-gradient-to-b from-transparent via-white/5 to-transparent" />
        <div className="absolute top-0 start-[50%] w-px h-full bg-gradient-to-b from-transparent via-gold/5 to-transparent" />
        <div className="absolute top-[20%] start-[10%] w-32 h-32 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-[10%] end-[15%] w-48 h-48 bg-primary-light/5 rounded-full blur-3xl" />
      </div>

      <div className="relative container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          {stats.map((stat, idx) => (
            <StatItem key={idx} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
