
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Users, Target, Zap, BookOpen, Trophy } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Matching",
      description: "Our intelligent algorithm matches you with the perfect mentors and learning paths based on your goals and current skill level."
    },
    {
      icon: Users,
      title: "Expert Mentors",
      description: "Learn from industry professionals who have real-world experience and are passionate about sharing their knowledge."
    },
    {
      icon: Target,
      title: "Personalized Learning",
      description: "Get customized learning plans that adapt to your pace, preferences, and career objectives."
    },
    {
      icon: Zap,
      title: "Fast-Track Progress",
      description: "Accelerate your learning with structured programs designed to help you achieve results quickly."
    },
    {
      icon: BookOpen,
      title: "Comprehensive Resources",
      description: "Access a vast library of courses, tutorials, and practical exercises across multiple skill domains."
    },
    {
      icon: Trophy,
      title: "Skill Certification",
      description: "Earn recognized certificates and badges to showcase your achievements to potential employers."
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Why Choose SkillSync Sarthi?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We combine cutting-edge technology with human expertise to create 
            the most effective learning experience possible.
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
