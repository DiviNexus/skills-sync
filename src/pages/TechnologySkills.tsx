
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ExternalLink, Play, Star, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLazyLoading } from "@/hooks/useLazyLoading";

const TechnologySkills = () => {
  const allResources = [
    {
      title: "Complete React Developer Course",
      platform: "YouTube",
      instructor: "Traversy Media",
      duration: "12 hours",
      rating: "4.8",
      link: "https://www.youtube.com/watch?v=w7ejDZ8SWv8",
      tags: ["React", "JavaScript", "Frontend"],
      trending: true
    },
    {
      title: "Python for Everybody Specialization",
      platform: "Coursera",
      instructor: "University of Michigan",
      duration: "8 months",
      rating: "4.7",
      link: "https://www.coursera.org/specializations/python",
      tags: ["Python", "Programming", "Data Science"],
      trending: true
    },
    {
      title: "The Complete 2024 Web Development Bootcamp",
      platform: "Udemy",
      instructor: "Dr. Angela Yu",
      duration: "65 hours",
      rating: "4.7",
      link: "https://www.udemy.com/course/the-complete-web-development-bootcamp/",
      tags: ["Web Development", "Full Stack", "JavaScript"],
      trending: false
    },
    {
      title: "Machine Learning Course",
      platform: "YouTube",
      instructor: "freeCodeCamp",
      duration: "10 hours",
      rating: "4.9",
      link: "https://www.youtube.com/watch?v=NWONeJKn6kc",
      tags: ["Machine Learning", "AI", "Python"],
      trending: true
    },
    {
      title: "AWS Certified Solutions Architect",
      platform: "Udemy",
      instructor: "Stephane Maarek",
      duration: "27 hours",
      rating: "4.6",
      link: "https://www.udemy.com/course/aws-certified-solutions-architect-associate-saa-c03/",
      tags: ["AWS", "Cloud", "DevOps"],
      trending: true
    },
    {
      title: "Docker and Kubernetes Complete Guide",
      platform: "YouTube",
      instructor: "TechWorld with Nana",
      duration: "6 hours",
      rating: "4.8",
      link: "https://www.youtube.com/watch?v=3c-iBn73dDE",
      tags: ["Docker", "Kubernetes", "DevOps"],
      trending: false
    },
    {
      title: "Complete Node.js Developer Course",
      platform: "Udemy",
      instructor: "Andrew Mead",
      duration: "35 hours",
      rating: "4.7",
      link: "https://www.udemy.com/course/the-complete-nodejs-developer-course-2/",
      tags: ["Node.js", "Backend", "JavaScript"],
      trending: true
    },
    {
      title: "Java Programming Masterclass",
      platform: "Udemy",
      instructor: "Tim Buchalka",
      duration: "80 hours",
      rating: "4.5",
      link: "https://www.udemy.com/course/java-the-complete-java-developer-course/",
      tags: ["Java", "Programming", "OOP"],
      trending: false
    },
    {
      title: "Complete C++ Developer Course",
      platform: "YouTube",
      instructor: "CodeWithHarry",
      duration: "15 hours",
      rating: "4.6",
      link: "https://www.youtube.com/watch?v=yGB9jhsEsr8",
      tags: ["C++", "Programming", "DSA"],
      trending: false
    },
    {
      title: "Data Structures and Algorithms",
      platform: "YouTube",
      instructor: "Abdul Bari",
      duration: "20 hours",
      rating: "4.9",
      link: "https://www.youtube.com/watch?v=0IAPZzGSbME",
      tags: ["DSA", "Algorithms", "Problem Solving"],
      trending: true
    },
    {
      title: "Complete Flutter Development Bootcamp",
      platform: "Udemy",
      instructor: "Dr. Angela Yu",
      duration: "31 hours",
      rating: "4.6",
      link: "https://www.udemy.com/course/flutter-bootcamp-with-dart/",
      tags: ["Flutter", "Mobile Development", "Dart"],
      trending: true
    },
    {
      title: "iOS Development with Swift",
      platform: "YouTube",
      instructor: "CodeWithChris",
      duration: "12 hours",
      rating: "4.7",
      link: "https://www.youtube.com/watch?v=comQ1-x2a1Q",
      tags: ["iOS", "Swift", "Mobile Development"],
      trending: false
    },
    {
      title: "Android Development with Kotlin",
      platform: "YouTube",
      instructor: "Philipp Lackner",
      duration: "18 hours",
      rating: "4.8",
      link: "https://www.youtube.com/watch?v=Iz08OTTjR04",
      tags: ["Android", "Kotlin", "Mobile Development"],
      trending: true
    },
    {
      title: "Complete PostgreSQL Database Course",
      platform: "YouTube",
      instructor: "freeCodeCamp",
      duration: "8 hours",
      rating: "4.7",
      link: "https://www.youtube.com/watch?v=qw--VYLpxG4",
      tags: ["PostgreSQL", "Database", "SQL"],
      trending: false
    },
    {
      title: "MongoDB Complete Developer's Guide",
      platform: "Udemy",
      instructor: "Maximilian Schwarzmüller",
      duration: "17 hours",
      rating: "4.6",
      link: "https://www.udemy.com/course/mongodb-the-complete-developers-guide/",
      tags: ["MongoDB", "NoSQL", "Database"],
      trending: true
    },
    {
      title: "Complete DevOps Engineer Course",
      platform: "YouTube",
      instructor: "TechWorld with Nana",
      duration: "25 hours",
      rating: "4.8",
      link: "https://www.youtube.com/watch?v=hQcFE0RD0cQ",
      tags: ["DevOps", "CI/CD", "Infrastructure"],
      trending: true
    },
    {
      title: "Cybersecurity Full Course",
      platform: "Coursera",
      instructor: "IBM",
      duration: "6 months",
      rating: "4.5",
      link: "https://www.coursera.org/professional-certificates/ibm-cybersecurity-analyst",
      tags: ["Cybersecurity", "Security", "Ethical Hacking"],
      trending: true
    },
    {
      title: "Complete Git and GitHub Tutorial",
      platform: "YouTube",
      instructor: "Kunal Kushwaha",
      duration: "5 hours",
      rating: "4.9",
      link: "https://www.youtube.com/watch?v=apGV9Kg7ics",
      tags: ["Git", "GitHub", "Version Control"],
      trending: false
    },
    {
      title: "Blockchain Development Complete Course",
      platform: "YouTube",
      instructor: "Patrick Collins",
      duration: "32 hours",
      rating: "4.8",
      link: "https://www.youtube.com/watch?v=M576WGiDBdQ",
      tags: ["Blockchain", "Web3", "Smart Contracts"],
      trending: true
    },
    {
      title: "Complete Artificial Intelligence Course",
      platform: "edX",
      instructor: "MIT",
      duration: "12 weeks",
      rating: "4.7",
      link: "https://www.edx.org/course/artificial-intelligence-ai",
      tags: ["AI", "Machine Learning", "Deep Learning"],
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
            Technology Skills Resources
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Curated collection of trending technology courses to help you land your dream job
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

export default TechnologySkills;
