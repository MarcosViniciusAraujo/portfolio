"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { BookCheck, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";
import { Section } from "@/components/layout";
import { SectionHeading, GlowCard, Badge, Button } from "@/components/ui";
import { courses } from "@/data/courses";

const CARD_WIDTH = 340;
const CARD_GAP = 24;

export function CoursesSection() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (!carouselRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
    setCanScrollLeft(scrollLeft > 5);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 5);
  };

  const scroll = (direction: "left" | "right") => {
    if (!carouselRef.current) return;
    const amount = CARD_WIDTH + CARD_GAP;
    carouselRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
    setTimeout(checkScroll, 350);
  };

  return (
    <Section id="courses">
      <SectionHeading
        title="Courses & Certifications"
        subtitle="Continuous learning and professional development"
      />

      <div className="relative">
        <button
          onClick={() => scroll("left")}
          className={`absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-bg-card border border-white/10 flex items-center justify-center transition-all duration-300 cursor-pointer ${
            canScrollLeft
              ? "opacity-100 hover:border-accent-gold/30 hover:shadow-[0_0_15px_rgba(201,168,76,0.15)]"
              : "opacity-0 pointer-events-none"
          }`}
          aria-label="Scroll left"
        >
          <ChevronLeft size={18} className="text-text-secondary" />
        </button>

        <button
          onClick={() => scroll("right")}
          className={`absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-bg-card border border-white/10 flex items-center justify-center transition-all duration-300 cursor-pointer ${
            canScrollRight
              ? "opacity-100 hover:border-accent-gold/30 hover:shadow-[0_0_15px_rgba(201,168,76,0.15)]"
              : "opacity-0 pointer-events-none"
          }`}
          aria-label="Scroll right"
        >
          <ChevronRight size={18} className="text-text-secondary" />
        </button>

        <div className="overflow-hidden mx-5">
          <div className="absolute left-5 top-0 bottom-0 w-6 bg-gradient-to-r from-bg-primary to-transparent z-[1] pointer-events-none" />
          <div className="absolute right-5 top-0 bottom-0 w-6 bg-gradient-to-l from-bg-primary to-transparent z-[1] pointer-events-none" />

          <div
            ref={carouselRef}
            onScroll={checkScroll}
            className="flex gap-6 overflow-x-auto scrollbar-hide py-2 snap-x snap-mandatory"
            style={{
              scrollbarWidth: "none",
              msOverflowStyle: "none",
              WebkitOverflowScrolling: "touch",
            }}
          >
          {courses.map((course, index) => (
            <motion.div
              key={`${course.name}-${course.year}`}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className="snap-start"
              style={{ minWidth: CARD_WIDTH, maxWidth: CARD_WIDTH }}
            >
              <GlowCard
                glowColor={index % 3 === 0 ? "gold" : index % 3 === 1 ? "blue" : "ember"}
                delay={0}
                animate={false}
                className="flex flex-col h-full"
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-accent-gold/10 flex items-center justify-center">
                    <BookCheck size={18} className="text-accent-gold" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-base font-semibold text-text-primary leading-tight">
                      {course.name}
                    </h3>
                    <p className="text-sm text-accent-blue mt-0.5">
                      {course.provider}
                    </p>
                  </div>
                </div>

                <span className="text-xs font-mono text-text-secondary/50 mb-3">
                  {course.year}
                </span>

                {course.tags && course.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mb-4 flex-1 content-start">
                    {course.tags.map((tag) => (
                      <Badge key={tag} variant="gold">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}

                {course.certificate && (
                  <div className="pt-3 border-t border-white/[0.06] mt-auto">
                    <Button variant="ghost" size="sm" href={course.certificate}>
                      <ExternalLink size={14} />
                      View Certificate
                    </Button>
                  </div>
                )}
              </GlowCard>
            </motion.div>
          ))}
          </div>
        </div>

        <div className="flex justify-center gap-1.5 mt-6">
          {courses.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                if (!carouselRef.current) return;
                carouselRef.current.scrollTo({
                  left: index * (CARD_WIDTH + CARD_GAP),
                  behavior: "smooth",
                });
                setTimeout(checkScroll, 350);
              }}
              className="w-1.5 h-1.5 rounded-full bg-white/20 hover:bg-accent-gold/50 transition-colors cursor-pointer"
              aria-label={`Go to course ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
