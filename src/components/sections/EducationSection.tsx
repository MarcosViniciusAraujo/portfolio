"use client";

import { GraduationCap } from "lucide-react";
import { Section } from "@/components/layout";
import { SectionHeading, GlowCard } from "@/components/ui";
import { education } from "@/data/education";

export function EducationSection() {
  return (
    <Section id="education" className="bg-bg-secondary/30">
      <SectionHeading
        title="Education"
        subtitle="My academic background and foundation"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {education.map((edu, index) => (
          <GlowCard
            key={`${edu.institution}-${edu.period}`}
            glowColor={index % 2 === 0 ? "blue" : "gold"}
            delay={index * 0.15}
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent-blue/10 flex items-center justify-center">
                <GraduationCap size={20} className="text-accent-blue" />
              </div>

              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                  <h3 className="text-lg font-semibold text-text-primary">
                    {edu.degree}
                  </h3>
                  <span className="text-xs font-mono text-accent-gold/80 flex-shrink-0">
                    {edu.period}
                  </span>
                </div>

                <p className="text-sm font-medium text-accent-blue mb-1">
                  {edu.institution}
                </p>

                <p className="text-sm text-text-secondary/80 mb-3">
                  {edu.field}
                </p>

                {edu.description && (
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {edu.description}
                  </p>
                )}
              </div>
            </div>
          </GlowCard>
        ))}
      </div>
    </Section>
  );
}
