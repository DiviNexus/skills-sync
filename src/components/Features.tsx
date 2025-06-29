
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Globe, Target, Zap, BookOpen, Trophy } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Roadmaps",
      description: "Our intelligent system creates personalized learning paths based on your career goals and current skill level to bridge employment gaps."
    },
    {
      icon: Globe,
      title: "Curated Web Resources",
      description: "Access the best learning materials from across the internet, carefully selected and organized for maximum learning efficiency."
    },
    {
      icon: Target,
      title: "Job-Focused Learning",
      description: "Every skill and resource is chosen based on current market demands and what employers are actively seeking."
    },
    {
      icon: Zap,
      title: "Fast-Track to Employment",
      description: "Accelerate your job readiness with structured programs designed to help you gain employable skills quickly."
    },
    {
      icon: BookOpen,
      title: "Comprehensive Coverage",
      description: "From beginner to advanced levels, access tutorials, courses, and practical exercises across multiple skill domains."
    },
    {
      icon: Trophy,
      title: "Progress Tracking",
      description: "Monitor your learning journey and showcase your skill development to potential employers with detailed progress reports."
    }
  ];

  return (
    <section id="features-section" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Why Choose SkillSync?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We combine AI-powered learning paths with the best resources from across the web 
            to help you overcome skill gaps and land your dream job.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl font-semibold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-gray-600 leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
