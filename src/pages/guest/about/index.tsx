import Header from "@/components/common/header";
import { AboutHero } from "@/components/features/about/about-hero";
import { MainSection } from "@/components/features/about/main-section";
import { ExperienceSection } from "@/components/features/about/experience-section";
import { TechSection } from "@/components/features/about/tech-section";

export default function About() {

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <Header />
      <AboutHero />
      <MainSection /> 
      <ExperienceSection />
      <TechSection />
    </div>
  );
}
