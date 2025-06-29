
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ExternalLink, Play, Star } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const BusinessSkills = () => {
  const resources = [
    {
      title: "Digital Marketing Complete Course",
      platform: "YouTube",
      instructor: "Neil Patel",
      duration: "10 hours",
      rating: "4.7",
      link: "https://www.youtube.com/watch?v=bixR-KIJKYM",
      tags: ["Digital Marketing", "SEO", "Social Media"],
      trending: true
    },
    {
      title: "Google Data Analytics Professional Certificate",
      platform: "Coursera",
      instructor: "Google",
      duration: "6 months",
      rating: "4.8",
      link: "https://www.coursera.org/professional-certificates/google-data-analytics",
      tags: ["Data Analysis", "SQL", "Tableau"],
      trending: true
    },
    {
      title: "Project Management Professional (PMP)",
      platform: "Udemy",
      instructor: "Joseph Phillips",
      duration: "35 hours",
      rating: "4.6",
      link: "https://www.udemy.com/course/pmp-certification-exam-prep-course-pmbok-6th-edition/",
      tags: ["Project Management", "PMP", "Agile"],
      trending: false
    },
    {
      title: "Sales Funnel Mastery",
      platform: "YouTube",
      instructor: "Russell Brunson",
      duration: "5 hours",
      rating: "4.5",
      link: "https://www.youtube.com/watch?v=1UuIzNfdYlQ",
      tags: ["Sales", "Marketing", "Conversion"],
      trending: true
    },
    {
      title: "Leadership and Management Course",
      platform: "LinkedIn Learning",
      instructor: "Simon Sinek",
      duration: "4 hours",
      rating: "4.9",
      link: "https://www.linkedin.com/learning/simon-sinek-on-leadership",
      tags: ["Leadership", "Management", "Team Building"],
      trending: false
    },
    {
      title: "Business Strategy Fundamentals",
      platform: "edX",
      instructor: "MIT",
      duration: "8 weeks",
      rating: "4.7",
      link: "https://www.edx.org/course/introduction-to-business-strategy",
      tags: ["Strategy", "Business Planning", "Analytics"],
      trending: true
    }
  ];

  const getPlatformColor = (platform: string) => {
    switch (platform) {
      case "YouTube":
        return "bg-red-100 text-red-800";
      case "Udemy":
        return "bg-purple-100 text-purple-800";
      case "Coursera":
        return "bg-blue-100 text-blue-800";
      case "LinkedIn Learning":
        return "bg-blue-100 text-blue-800";
      case "edX":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center mb-8">
          <Link to="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>

        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Business Skills Resources
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Develop essential business skills with these market-leading courses
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <Badge className={getPlatformColor(resource.platform)} variant="secondary">
                    {resource.platform}
                  </Badge>
                  {resource.trending && (
                    <Badge className="bg-orange-100 text-orange-800" variant="secondary">
                      🔥 Trending
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-lg leading-tight">{resource.title}</CardTitle>
                <CardDescription>
                  By {resource.instructor} • {resource.duration}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center mb-4">
                  <Star className="h-4 w-4 text-yellow-500 fill-current" />
                  <span className="ml-1 text-sm font-medium">{resource.rating}</span>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {resource.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <Button 
                  asChild 
                  className="w-full"
                  onClick={() => window.open(resource.link, '_blank')}
                >
                  <a href={resource.link} target="_blank" rel="noopener noreferrer">
                    <Play className="h-4 w-4 mr-2" />
                    Start Learning
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BusinessSkills;
