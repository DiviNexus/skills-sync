
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const SkillsShowcase = () => {
  const skillCategories = [
    {
      category: "Technology",
      skills: ["React", "Python", "Machine Learning", "DevOps", "Cybersecurity", "Cloud Computing"],
      color: "bg-blue-100 text-blue-800",
      route: "/technology-skills"
    },
    {
      category: "Design",
      skills: ["UI/UX Design", "Graphic Design", "Web Design", "Product Design", "Branding", "Typography"],
      color: "bg-purple-100 text-purple-800",
      route: "/design-skills"
    },
    {
      category: "Business",
      skills: ["Digital Marketing", "Project Management", "Data Analysis", "Sales", "Leadership", "Strategy"],
      color: "bg-green-100 text-green-800",
      route: "/business-skills"
    },
    {
      category: "Creative",
      skills: ["Content Writing", "Video Editing", "Photography", "Animation", "Music Production", "Storytelling"],
      color: "bg-orange-100 text-orange-800",
      route: "/creative-skills"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Explore Popular Skills
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover trending skills and find the perfect learning path for your career goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <Card key={index} className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-gray-900">
                  {category.category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge key={skillIndex} className={category.color} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
                <Button asChild variant="ghost" className="text-primary hover:text-primary/80">
                  <Link to={category.route}>
                    View All {category.category} Skills
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="text-lg px-8 py-3">
            Browse All Skills
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SkillsShowcase;
