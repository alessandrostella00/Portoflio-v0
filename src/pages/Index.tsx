
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { NewsletterSection } from "@/components/NewsletterSection";
import { ContactSection } from "@/components/ContactSection";
import { Navigation } from "@/components/Navigation";
import { AccessibilityButton } from "@/components/AccessibilityButton";
import { SetupInstructions } from "@/components/SetupInstructions";

const Index = () => {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <Navigation />
      <main>
        <HeroSection />
        <SetupInstructions />
        <AboutSection />
        <ServicesSection />
        <SkillsSection />
        <ProjectsSection />
        <NewsletterSection />
        <ContactSection />
      </main>
      <AccessibilityButton />
    </div>
  );
};

export default Index;
