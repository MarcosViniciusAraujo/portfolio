import { Navbar, Footer } from "@/components/layout";
import {
  HeroSection,
  AboutSection,
  EducationSection,
  TimelineSection,
  CoursesSection,
  ProjectsSection,
  AwardsSection,
} from "@/components/sections";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <EducationSection />
        <TimelineSection />
        <CoursesSection />
        <ProjectsSection />
        <AwardsSection />
      </main>
      <Footer />
    </>
  );
}
