 


 
import Header from "@/components/common/header";
import { HeroSection } from "@/components/features/home/hero-section";
import { SkillSection } from "@/components/features/home/skill-section";
import { ProjectSection } from '@/components/features/home/project-section';
// import Projects from "@/components/features/home/Projects";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <ProjectSection />
      <SkillSection />
    </>
  );
}