
import RoadmapGenerator from "./RoadmapGenerator";

const RoadmapsSection = () => {
  return (
    <section id="roadmaps-section" className="py-16 lg:py-24 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Get Your Personalized Learning Roadmap
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Our AI analyzes your goals and creates a step-by-step learning path tailored specifically for you.
          </p>
        </div>
        
        <RoadmapGenerator />
      </div>
    </section>
  );
};

export default RoadmapsSection;
