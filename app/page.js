import AccordionPathways from "./components/AccordionPathways";
import BenefitsSection from "./components/Benefits";
import HomeAbout from "./components/HomeAbout";
import HomeHero from "./components/HomeHero";
import LearningApproach from "./components/LearningApproach";
import LearningPathways from "./components/LearningPathways";
import TestimonialsSection from "./components/Testimonials";
import WorkSteps from "./components/WorkSteps";

export default function Home() {
  return (
    <>
      <HomeHero />;
      <HomeAbout />
      <LearningPathways />
      <WorkSteps />
      <AccordionPathways />
      <BenefitsSection />
      <LearningApproach />
      <TestimonialsSection />
    </>
  );
}
