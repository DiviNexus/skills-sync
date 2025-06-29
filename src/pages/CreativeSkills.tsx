
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ExternalLink, Play, Star } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CreativeSkills = () => {
  const resources = [
    {
      title: "Content Writing Masterclass",
      platform: "YouTube",
      instructor: "Alex Cattoni",
      duration: "6 hours",
      rating: "4.8",
      link: "https://www.youtube.com/watch?v=8S7IeEEj-ks",
      tags: ["Content Writing", "Copywriting", "Marketing"],
      trending: true
    },
    {
      title: "Video Editing with Adobe Premiere Pro",
      platform: "Udemy",
      instructor: "Louay Zambarakji",
      duration: "23 hours",
      rating: "4.7",
      link: "https://www.udemy.com/course/adobe-premiere-pro-video-editing/",
      tags: ["Video Editing", "Premiere Pro", "Post Production"],
      trending: true
    },
    {
      title: "Photography Fundamentals",
      platform: "YouTube",
      instructor: "Mango Street",
      duration: "8 hours",
      rating: "4.6",
      link: "https://www.youtube.com/watch?v=V7z7BAZdt2M",
      tags: ["Photography", "Composition", "Lighting"],
      trending: false
    },
    {
      title: "Animation and Motion Graphics",
      platform: "School of Motion",
      instructor: "Joey Korenman",
      duration: "12 weeks",
      rating: "4.9",
      link: "https://www.schoolofmotion.com/courses/animation-bootcamp",
      tags: ["Animation", "After Effects", "Motion Graphics"],
      trending: true
    },
    {
      title: "Music Production Complete Course",
      platform: "YouTube",
      instructor: "In The Mix",
      duration: "15 hours",
      rating: "4.5",
      link: "https://www.youtube.com/watch?v=TEjOdqjjAOY",
      tags: ["Music Production", "Audio Engineering", "DAW"],
      trending: false
    },
    {
      title: "Creative Storytelling Workshop",
      platform: "MasterClass",
      instructor: "Aaron Sorkin",
      duration: "3 hours",
      rating: "4.8",
      link: "https://www.masterclass.com/classes/aaron-sorkin-teaches-screenwriting",
      tags: ["Storytelling", "Writing", "Screenwriting"],
      trending: true
    }
  ];

  const getPlatformColor = (platform: string) => {
    switch (platform) {
      case "YouTube":
        return "bg-red-100 text-red-800";
      case "Udemy":
        return "bg-purple-100 text-purple-800";
      case "School of Motion":
        return "bg-orange-100 text-orange-800";
      case "MasterClass":
        return "bg-yellow-100 text-yellow-800";
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
            Creative Skills Resources
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Unleash your creativity with these inspiring courses from industry experts
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

export default CreativeSkills;
