"use client";

import { motion } from "framer-motion";
import { MapPin, BookOpen, Gamepad2, Code, User } from "lucide-react";
import { Section } from "@/components/layout";
import { SectionHeading, Badge, GlowCard } from "@/components/ui";
import { profile } from "@/data/profile";
import type { Skill } from "@/types";

const categoryLabels: Record<Skill["category"], string> = {
  ai: "AI Systems",
  cloud: "Cloud & Infrastructure",
  data: "Data Engineering",
  backend: "Backend",
  frontend: "Frontend",
  tools: "Tools",
  other: "Other",
};

const categoryVariants: Record<Skill["category"], "gold" | "blue" | "ember" | "default"> = {
  ai: "gold",
  cloud: "blue",
  data: "ember",
  backend: "blue",
  frontend: "blue",
  tools: "default",
  other: "default",
};

const interestIcons: Record<string, React.ReactNode> = {
  "Fantasy & Sci-Fi Books": <BookOpen size={14} />,
  "Video Games": <Gamepad2 size={14} />,
  "Open Source": <Code size={14} />,
  "Problem Solving": <Code size={14} />,
};

export function AboutSection() {
  const groupedSkills = profile.skills.reduce(
    (acc, skill) => {
      if (!acc[skill.category]) acc[skill.category] = [];
      acc[skill.category].push(skill);
      return acc;
    },
    {} as Record<string, Skill[]>
  );

  return (
    <Section id="about" className="bg-bg-secondary/30">
      <SectionHeading
        title="About Me"
        subtitle="A little bit about who I am and what I do"
      />

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-2 flex flex-col items-center lg:items-start gap-6"
        >
          <div className="relative">
            <div className="w-48 h-48 rounded-2xl bg-gradient-to-br from-accent-gold/20 via-bg-card to-accent-blue/20 p-[2px]">
              <div className="w-full h-full rounded-2xl bg-bg-card flex items-center justify-center overflow-hidden">
                <User size={64} className="text-text-secondary/30" />
              </div>
            </div>
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-accent-gold/10 to-accent-blue/10 blur-xl -z-10" />
          </div>

          {profile.location && (
            <div className="flex items-center gap-2 text-text-secondary text-sm">
              <MapPin size={16} className="text-accent-gold" />
              <span>{profile.location}</span>
            </div>
          )}

          {profile.interests && profile.interests.length > 0 && (
            <GlowCard glowColor="ember" className="w-full">
              <h4 className="text-sm font-semibold text-text-primary mb-3">
                Beyond Code
              </h4>
              <div className="flex flex-wrap gap-2">
                {profile.interests.map((interest) => (
                  <span
                    key={interest}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs text-text-secondary bg-white/5 rounded-full border border-white/[0.06]"
                  >
                    {interestIcons[interest] || <Code size={14} />}
                    {interest}
                  </span>
                ))}
              </div>
            </GlowCard>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-3 space-y-8"
        >
          <div>
            <p className="text-text-secondary leading-relaxed text-base sm:text-lg">
              {profile.bio}
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-text-primary">
              Skills & Technologies
            </h3>

            {Object.entries(groupedSkills).map(([category, skills]) => (
              <div key={category}>
                <p className="text-xs uppercase tracking-wider text-text-secondary/60 mb-2 font-mono">
                  {categoryLabels[category as Skill["category"]] || category}
                </p>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <Badge
                      key={skill.name}
                      variant={categoryVariants[skill.category] || "default"}
                    >
                      {skill.name}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
