"use client";

import Image from "next/image";
import { clients } from "@/data/clients";
import SectionHeading from "@/components/ui/SectionHeading";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function ClientsSection() {
  // Duplicate for seamless loop
  const row1 = [...clients, ...clients];
  const row2 = [...clients, ...clients];

  return (
    <section id="clients" className="section-padding bg-surface overflow-hidden">
      <div className="container-custom">
        <ScrollReveal>
          <SectionHeading
            title="نفخر بثقة عملائنا"
            description="نعتز بشراكاتنا مع عملائنا ونسعى دائمًا لتقديم أفضل النتائج"
            badge="عملاؤنا"
          />
        </ScrollReveal>
      </div>

      {/* Marquee Row 1 */}
      <div className="marquee-container mb-6 md:mb-8">
        <div className="flex animate-marquee w-max">
          {row1.map((client, idx) => (
            <div
              key={`row1-${client.id}-${idx}`}
              className="shrink-0 mx-4 md:mx-6 flex items-center justify-center"
            >
              <div className="w-28 h-20 md:w-36 md:h-24 relative rounded-xl border border-border bg-white p-4 flex items-center justify-center grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300">
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={120}
                  height={60}
                  className="object-contain max-h-full max-w-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Marquee Row 2 - Reverse direction */}
      <div className="marquee-container">
        <div className="flex animate-marquee-reverse w-max">
          {row2.map((client, idx) => (
            <div
              key={`row2-${client.id}-${idx}`}
              className="shrink-0 mx-4 md:mx-6 flex items-center justify-center"
            >
              <div className="w-28 h-20 md:w-36 md:h-24 relative rounded-xl border border-border bg-white p-4 flex items-center justify-center grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300">
                <Image
                  src={client.logo}
                  alt={client.name}
                  width={120}
                  height={60}
                  className="object-contain max-h-full max-w-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
