import FloatingPetals from "@/components/FloatingPetals";
import HeroSection from "@/components/HeroSection";
import LoveMessageSection from "@/components/LoveMessageSection";
import PhotoMemoriesSection from "@/components/PhotoMemoriesSection";
import RoseMeaningSection from "@/components/RoseMeaningSection";
import PromiseSection from "@/components/PromiseSection";
import SurpriseSection from "@/components/SurpriseSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden scroll-smooth">
      <FloatingPetals />
      <HeroSection />
      <LoveMessageSection />
      <PhotoMemoriesSection />
      <RoseMeaningSection />
      <PromiseSection />
      <SurpriseSection />
      <FooterSection />
    </div>
  );
};

export default Index;
