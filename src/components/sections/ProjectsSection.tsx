"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Star } from "lucide-react";
import Image from "next/image";
import { Section } from "@/components/layout";
import { SectionHeading, Badge, GlowCard, Button } from "@/components/ui";
import { projects } from "@/data/projects";

export function ProjectsSection() {
  const [activeTag, setActiveTag] = useState<string>("All");

  const allTags = useMemo(() => {
    const tags = new Set<string>();
    projects.forEach((p) => p.tags.forEach((t) => tags.add(t)));
    return ["All", ...Array.from(tags).sort()];
  }, []);

  const filtered = useMemo(() => {
    if (activeTag === "All") return projects;
    return projects.filter((p) => p.tags.includes(activeTag));
  }, [activeTag]);

  return (
    <Section id="projects" className="bg-bg-secondary/30">
      <SectionHeading
        title="Projects"
        subtitle="A collection of things I've built over the years"
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-wrap justify-center gap-2 mb-12"
      >
        {allTags.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag)}
            className={`px-3 py-1.5 text-xs font-medium rounded-full border transition-all duration-300 cursor-pointer ${
              activeTag === tag
                ? "bg-accent-gold/15 text-accent-gold border-accent-gold/30"
                : "bg-white/5 text-text-secondary border-white/10 hover:border-white/20 hover:text-text-primary"
            }`}
          >
            {tag}
          </button>
        ))}
      </motion.div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTag}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {filtered.map((project, index) => (
            <GlowCard
              key={project.id}
              glowColor={project.featured ? "gold" : "blue"}
              delay={index * 0.1}
              className="flex flex-col"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-lg font-semibold text-text-primary">
                      {project.title}
                    </h3>
                    {project.featured && (
                      <Star
                        size={14}
                        className="text-accent-gold fill-accent-gold/50"
                      />
                    )}
                  </div>
                  <span className="text-xs font-mono text-text-secondary/50">
                    {project.year}
                  </span>
                </div>
              </div>

              {project.image && (
                <div className="relative w-full h-40 rounded-lg overflow-hidden mb-4 bg-bg-primary/50">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}

              <p className="text-sm text-text-secondary leading-relaxed mb-4 flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="default">
                    {tag}
                  </Badge>
                ))}
              </div>

              <div className="flex items-center gap-3 mt-auto pt-4 border-t border-white/[0.06]">
                {project.repoUrl && (
                  <Button variant="ghost" size="sm" href={project.repoUrl}>
                    <Github size={16} />
                    Code
                  </Button>
                )}
                {project.liveUrl && (
                  <Button variant="ghost" size="sm" href={project.liveUrl}>
                    <ExternalLink size={16} />
                    Live Demo
                  </Button>
                )}
              </div>
            </GlowCard>
          ))}
        </motion.div>
      </AnimatePresence>
    </Section>
  );
}
