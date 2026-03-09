"use client";

import { Trophy } from "lucide-react";
import { Section } from "@/components/layout";
import { SectionHeading, GlowCard } from "@/components/ui";
import { awards } from "@/data/awards";

export function AwardsSection() {
  return (
    <Section id="awards" className="bg-bg-secondary/30">
      <SectionHeading
        title="Awards & Recognition"
        subtitle="Achievements and milestones along the way"
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {awards.map((award, index) => (
          <GlowCard
            key={`${award.title}-${award.year}`}
            glowColor="gold"
            delay={index * 0.15}
            className="text-center"
          >
            <div className="w-12 h-12 rounded-full bg-accent-gold/10 flex items-center justify-center mx-auto mb-4">
              <Trophy size={22} className="text-accent-gold" />
            </div>

            <h3 className="text-lg font-semibold text-text-primary mb-1">
              {award.title}
            </h3>

            <p className="text-sm text-accent-blue mb-1">
              {award.issuer}
            </p>

            <span className="text-xs font-mono text-text-secondary/50">
              {award.year}
            </span>

            {award.description && (
              <p className="text-sm text-text-secondary leading-relaxed mt-4">
                {award.description}
              </p>
            )}
          </GlowCard>
        ))}
      </div>
    </Section>
  );
}
