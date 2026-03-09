"use client";

import { Section } from "@/components/layout";
import { SectionHeading, Badge, GlowCard } from "@/components/ui";
import { experiences } from "@/data/experience";

function FormattedText({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith("**") && part.endsWith("**")) {
          return (
            <strong key={i} className="text-text-primary font-semibold">
              {part.slice(2, -2)}
            </strong>
          );
        }
        return <span key={i}>{part}</span>;
      })}
    </>
  );
}

export function TimelineSection() {
  return (
    <Section id="experience">
      <SectionHeading
        title="Experience"
        subtitle="My professional journey so far"
      />

      <div className="relative">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px md:-translate-x-px">
          <div className="h-full w-full bg-gradient-to-b from-accent-gold/50 via-accent-blue/30 to-transparent" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-accent-gold shadow-[0_0_10px_rgba(201,168,76,0.5)]" />
        </div>

        <div className="space-y-12">
          {experiences.map((exp, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div
                key={`${exp.company}-${exp.period}`}
                className="relative pl-12 md:pl-0"
              >
                <div className="absolute left-4 md:left-1/2 top-6 w-3 h-3 -translate-x-[5px] md:-translate-x-1.5 rounded-full border-2 border-accent-gold bg-bg-primary z-10" />

                <div
                  className={`md:w-[calc(50%-2rem)] ${
                    isLeft ? "md:mr-auto md:pr-4" : "md:ml-auto md:pl-4"
                  }`}
                >
                  <GlowCard
                    glowColor={index % 2 === 0 ? "gold" : "blue"}
                    delay={index * 0.15}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-3">
                      <h3 className="text-lg font-semibold text-text-primary">
                        {exp.role}
                      </h3>
                      <span className="text-xs font-mono text-accent-gold/80">
                        {exp.period}
                      </span>
                    </div>

                    <p className="text-sm font-medium text-accent-blue mb-3">
                      {exp.company}
                    </p>

                    <p className="text-sm text-text-secondary leading-relaxed mb-3">
                      {exp.description}
                    </p>

                    {exp.highlights && exp.highlights.length > 0 && (
                      <ul className="space-y-2 mb-4">
                        {exp.highlights.map((highlight, hi) => (
                          <li
                            key={hi}
                            className="flex gap-2 text-sm text-text-secondary leading-relaxed"
                          >
                            <span className="text-accent-gold mt-1.5 flex-shrink-0 w-1 h-1 rounded-full bg-accent-gold/70" />
                            <span>
                              <FormattedText text={highlight} />
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {exp.technologies && (
                      <div className="flex flex-wrap gap-1.5">
                        {exp.technologies.map((tech) => (
                          <Badge key={tech} variant="default">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    )}
                  </GlowCard>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
