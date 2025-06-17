
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ContactSection } from "@/components/ContactSection";
import { Navigation } from "@/components/Navigation";
import { AccessibilityButton } from "@/components/AccessibilityButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <AccessibilityButton />
    </div>
  );
};

export default Index;
