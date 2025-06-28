
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Sync Your Skills,{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Unlock Your Future
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Connect with expert mentors, learn in-demand skills, and accelerate your career growth 
            with our AI-powered skill matching platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8 py-3">
              Start Learning Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-3">
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>
        </div>
        
        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">10K+</div>
            <div className="text-gray-600">Active Learners</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">500+</div>
            <div className="text-gray-600">Expert Mentors</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary">100+</div>
            <div className="text-gray-600">Skill Categories</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
