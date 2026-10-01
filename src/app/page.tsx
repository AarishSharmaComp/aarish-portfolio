import { AboutSection } from "@/components/sections/about-section";
import { ContactSection } from "@/components/sections/contact-section";
import { DsaSection } from "@/components/sections/dsa-section";
import { HeroSection } from "@/components/sections/hero-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { SkillsSection } from "@/components/sections/skills-section";

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <DsaSection />
      <ContactSection />
    </main>
  );
}
