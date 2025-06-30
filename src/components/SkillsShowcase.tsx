
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Palette, TrendingUp, Sparkles, Brain, Camera, Wrench, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const SkillsShowcase = () => {
  const skillCategories = [
    {
      category: "Technology",
      skills: ["React", "Python", "Machine Learning", "DevOps", "Cybersecurity", "Cloud Computing", "Data Science", "Blockchain"],
      color: "bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-800",
      route: "/technology-skills",
      icon: <Code className="h-5 w-5" />
    },
    {
      category: "Design",
      skills: ["UI/UX Design", "Graphic Design", "Web Design", "Product Design", "Branding", "Typography", "3D Design", "Animation"],
      color: "bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800",
      route: "/design-skills",
      icon: <Palette className="h-5 w-5" />
    },
    {
      category: "Business",
      skills: ["Digital Marketing", "Project Management", "Data Analysis", "Sales", "Leadership", "Strategy", "Finance", "Entrepreneurship"],
      color: "bg-gradient-to-r from-green-100 to-emerald-100 text-green-800",
      route: "/business-skills",
      icon: <TrendingUp className="h-5 w-5" />
    },
    {
      category: "Creative",
      skills: ["Content Writing", "Video Editing", "Photography", "Animation", "Music Production", "Storytelling", "Podcasting", "Social Media"],
      color: "bg-gradient-to-r from-orange-100 to-yellow-100 text-orange-800",
      route: "/creative-skills",
      icon: <Camera className="h-5 w-5" />
    },
    {
      category: "Engineering",
      skills: ["Software Engineering", "AI/ML Engineering", "Mobile Development", "Game Development", "Embedded Systems", "Robotics", "IoT", "AR/VR"],
      color: "bg-gradient-to-r from-indigo-100 to-blue-100 text-indigo-800",
      route: "/all-tech-domains",
      icon: <Wrench className="h-5 w-5" />
    },
    {
      category: "Data & Analytics",
      skills: ["Data Visualization", "Big Data", "Business Intelligence", "Statistical Analysis", "Predictive Modeling", "Database Management", "ETL", "Machine Learning"],
      color: "bg-gradient-to-r from-teal-100 to-cyan-100 text-teal-800",
      route: "/all-tech-domains",
      icon: <Brain className="h-5 w-5" />
    },
    {
      category: "Digital Marketing",
      skills: ["SEO", "Content Marketing", "Social Media Marketing", "Email Marketing", "PPC Advertising", "Influencer Marketing", "Analytics", "Conversion Optimization"],
      color: "bg-gradient-to-r from-rose-100 to-pink-100 text-rose-800",
      route: "/all-tech-domains",
      icon: <Globe className="h-5 w-5" />
    },
    {
      category: "Personal Development",
      skills: ["Public Speaking", "Time Management", "Critical Thinking", "Emotional Intelligence", "Networking", "Negotiation", "Communication", "Problem Solving"],
      color: "bg-gradient-to-r from-violet-100 to-purple-100 text-violet-800",
      route: "/all-tech-domains",
      icon: <Sparkles className="h-5 w-5" />
    }
  ];

  return (
    <section id="skills-section" className="py-16 lg:py-24 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-primary to-purple-600 rounded-full mb-6">
            <Sparkles className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-4">
            Explore Popular Skills ✨
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover trending skills and find the perfect learning path for your career goals. Your journey to success starts here! 🚀
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-12">
          {skillCategories.map((category, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white/80 backdrop-blur-sm">
              <CardHeader className="pb-3">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="p-2 rounded-lg bg-gradient-to-r from-primary/10 to-purple-600/10">
                    {category.icon}
                  </div>
                  <CardTitle className="text-lg font-semibold text-gray-900">
                    {category.category}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {category.skills.slice(0, 6).map((skill, skillIndex) => (
                    <Badge key={skillIndex} className={`${category.color} border-0 shadow-sm`} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                  {category.skills.length > 6 && (
                    <Badge className="bg-gray-100 text-gray-600 border-0" variant="secondary">
                      +{category.skills.length - 6} more
                    </Badge>
                  )}
                </div>
                <Button asChild variant="ghost" className="text-primary hover:text-primary/80 hover:bg-primary/5 w-full justify-between">
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
          <Button asChild size="lg" className="text-lg px-8 py-3 bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 shadow-lg hover:shadow-xl transition-all duration-300">
            <Link to="/all-tech-domains">
              🎯 Browse All Skills & Resources
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SkillsShowcase;
