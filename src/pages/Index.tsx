
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import SkillsShowcase from "@/components/SkillsShowcase";
import RoadmapsSection from "@/components/RoadmapsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <SkillsShowcase />
      <RoadmapsSection />
      <Footer />
    </div>
  );
};

export default Index;
