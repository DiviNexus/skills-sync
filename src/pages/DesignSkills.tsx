
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ExternalLink, Play, Star, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLazyLoading } from "@/hooks/useLazyLoading";

const DesignSkills = () => {
  const allResources = [
    {
      title: "UI/UX Design Complete Course",
      platform: "YouTube",
      instructor: "DesignCourse",
      duration: "8 hours",
      rating: "4.9",
      link: "https://www.youtube.com/watch?v=c9Wg6Cb_YlU",
      tags: ["UI/UX", "Figma", "Design Thinking"],
      trending: true
    },
    {
      title: "Adobe Creative Suite Masterclass",
      platform: "Udemy",
      instructor: "Lindsay Marsh",
      duration: "45 hours",
      rating: "4.6",
      link: "https://www.udemy.com/course/adobe-cc-masterclass-photoshop-illustrator-indesign-and-more/",
      tags: ["Photoshop", "Illustrator", "InDesign"],
      trending: false
    },
    {
      title: "Google UX Design Professional Certificate",
      platform: "Coursera",
      instructor: "Google",
      duration: "6 months",
      rating: "4.8",
      link: "https://www.coursera.org/professional-certificates/google-ux-design",
      tags: ["UX Research", "Prototyping", "User Testing"],
      trending: true
    },
    {
      title: "Figma UI Design Tutorial",
      platform: "YouTube",
      instructor: "Flux",
      duration: "4 hours",
      rating: "4.7",
      link: "https://www.youtube.com/watch?v=FTFaQWZBqQ8",
      tags: ["Figma", "UI Design", "Prototyping"],
      trending: true
    },
    {
      title: "Brand Identity Design Course",
      platform: "Skillshare",
      instructor: "Satori Graphics",
      duration: "3 hours",
      rating: "4.5",
      link: "https://www.skillshare.com/classes/Brand-Identity-Design-Complete-Course/1234567890",
      tags: ["Branding", "Logo Design", "Visual Identity"],
      trending: false
    },
    {
      title: "Web Design for Beginners",
      platform: "YouTube",
      instructor: "Kevin Powell",
      duration: "6 hours",
      rating: "4.8",
      link: "https://www.youtube.com/watch?v=B-ytMSuwbf8",
      tags: ["Web Design", "CSS", "Responsive Design"],
      trending: true
    },
    {
      title: "Complete Photoshop Course",
      platform: "YouTube",
      instructor: "Photoshop Training Channel",
      duration: "12 hours",
      rating: "4.7",
      link: "https://www.youtube.com/watch?v=IyR_uYsRdPs",
      tags: ["Photoshop", "Photo Editing", "Digital Art"],
      trending: false
    },
    {
      title: "Illustrator Complete Course",
      platform: "Udemy",
      instructor: "Daniel Walter Scott",
      duration: "22 hours",
      rating: "4.8",
      link: "https://www.udemy.com/course/illustrator-cc-masterclass/",
      tags: ["Illustrator", "Vector Design", "Logo Design"],
      trending: true
    },
    {
      title: "Mobile App Design in Figma",
      platform: "YouTube",
      instructor: "CharliMarieTV",
      duration: "5 hours",
      rating: "4.6",
      link: "https://www.youtube.com/watch?v=PeGfX7W1mJk",
      tags: ["Mobile Design", "Figma", "App Design"],
      trending: true
    },
    {
      title: "Typography Fundamentals",
      platform: "Skillshare",
      instructor: "Ellen Lupton",
      duration: "2 hours",
      rating: "4.7",
      link: "https://www.skillshare.com/classes/Typography-That-Works-Typographic-Composition-and-Fonts/1234567891",
      tags: ["Typography", "Font Design", "Layout"],
      trending: false
    },
    {
      title: "Color Theory for Designers",
      platform: "YouTube",
      instructor: "Art Heroes",
      duration: "3 hours",
      rating: "4.8",
      link: "https://www.youtube.com/watch?v=Qj1FK8n7WgY",
      tags: ["Color Theory", "Design Principles", "Visual Design"],
      trending: false
    },
    {
      title: "Sketch App Complete Course",
      platform: "Udemy",
      instructor: "Daniel Walter Scott",
      duration: "15 hours",
      rating: "4.5",
      link: "https://www.udemy.com/course/sketch-app-masterclass/",
      tags: ["Sketch", "UI Design", "Prototyping"],
      trending: false
    },
    {
      title: "InDesign Complete Course",
      platform: "YouTube",
      instructor: "Terry White",
      duration: "10 hours",
      rating: "4.6",
      link: "https://www.youtube.com/watch?v=8CsM03hWMhA",
      tags: ["InDesign", "Layout Design", "Print Design"],
      trending: false
    },
    {
      title: "User Research Methods",
      platform: "Coursera",
      instructor: "University of Michigan",
      duration: "4 weeks",
      rating: "4.7",
      link: "https://www.coursera.org/learn/user-research",
      tags: ["User Research", "UX Design", "Usability Testing"],
      trending: true
    },
    {
      title: "Design Systems Complete Guide",
      platform: "YouTube",
      instructor: "Design Course",
      duration: "7 hours",
      rating: "4.8",
      link: "https://www.youtube.com/watch?v=wc5krSHtFTs",
      tags: ["Design Systems", "Component Libraries", "UI Design"],
      trending: true
    },
    {
      title: "Packaging Design Masterclass",
      platform: "Skillshare",
      instructor: "The Futur",
      duration: "4 hours",
      rating: "4.6",
      link: "https://www.skillshare.com/classes/Packaging-Design-Complete-Course/1234567892",
      tags: ["Packaging Design", "Product Design", "Brand Design"],
      trending: false
    },
    {
      title: "3D Design with Blender",
      platform: "YouTube",
      instructor: "Blender Guru",
      duration: "20 hours",
      rating: "4.9",
      link: "https://www.youtube.com/watch?v=TPrnSACiTJ4",
      tags: ["3D Design", "Blender", "3D Modeling"],
      trending: true
    },
    {
      title: "Motion Graphics with After Effects",
      platform: "Udemy",
      instructor: "Phil Ebiner",
      duration: "18 hours",
      rating: "4.7",
      link: "https://www.udemy.com/course/after-effects-cc-masterclass/",
      tags: ["Motion Graphics", "After Effects", "Animation"],
      trending: true
    },
    {
      title: "Graphic Design Theory",
      platform: "Coursera",
      instructor: "CalArts",
      duration: "4 weeks",
      rating: "4.5",
      link: "https://www.coursera.org/learn/graphic-design",
      tags: ["Design Theory", "Visual Communication", "Graphic Design"],
      trending: false
    },
    {
      title: "Portfolio Design for Designers",
      platform: "YouTube",
      instructor: "Flux",
      duration: "3 hours",
      rating: "4.8",
      link: "https://www.youtube.com/watch?v=u-jjfcVhfh8",
      tags: ["Portfolio", "Career", "Design Presentation"],
      trending: true
    }
  ];

  const { displayedItems, loading, hasMore } = useLazyLoading({
    initialItems: allResources,
    itemsPerLoad: 3,
    maxScrolls: 7
  });

  const getPlatformColor = (platform: string) => {
    switch (platform) {
      case "YouTube":
        return "bg-red-100 text-red-800";
      case "Udemy":
        return "bg-purple-100 text-purple-800";
      case "Coursera":
        return "bg-blue-100 text-blue-800";
      case "Skillshare":
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
            Design Skills Resources
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Master design skills with these trending courses from top instructors
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedItems.map((resource, index) => (
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

        {loading && (
          <div className="flex justify-center items-center py-8">
            <Loader2 className="h-8 w-8 animate-spin text-primary mr-2" />
            <span className="text-lg">Loading more resources...</span>
          </div>
        )}

        {!hasMore && displayedItems.length > 0 && (
          <div className="text-center py-8">
            <p className="text-gray-600">You've reached the end! 🎉</p>
            <p className="text-sm text-gray-500 mt-2">
              Showing {displayedItems.length} of {allResources.length} resources
            </p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default DesignSkills;
