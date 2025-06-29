
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ArrowLeft, ExternalLink, Play, Star, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLazyLoading } from "@/hooks/useLazyLoading";

const AllTechDomains = () => {
  const allResources = [
    // Technology Resources
    {
      title: "Complete React Developer Course",
      platform: "YouTube",
      instructor: "Traversy Media",
      duration: "12 hours",
      rating: "4.8",
      link: "https://www.youtube.com/watch?v=w7ejDZ8SWv8",
      tags: ["React", "JavaScript", "Frontend"],
      category: "Technology",
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
      category: "Technology",
      trending: true
    },
    {
      title: "Machine Learning Course",
      platform: "YouTube",
      instructor: "freeCodeCamp",
      duration: "10 hours",
      rating: "4.9",
      link: "https://www.youtube.com/watch?v=NWONeJKn6kc",
      tags: ["Machine Learning", "AI", "Python"],
      category: "Technology",
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
      category: "Technology",
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
      category: "Technology",
      trending: false
    },
    {
      title: "Complete Web Development Bootcamp",
      platform: "Udemy",
      instructor: "Dr. Angela Yu",
      duration: "65 hours",
      rating: "4.7",
      link: "https://www.udemy.com/course/the-complete-web-development-bootcamp/",
      tags: ["Web Development", "Full Stack", "JavaScript"],
      category: "Technology",
      trending: false
    },
    // Design Resources
    {
      title: "UI/UX Design Complete Course",
      platform: "YouTube",
      instructor: "DesignCourse",
      duration: "8 hours",
      rating: "4.9",
      link: "https://www.youtube.com/watch?v=c9Wg6Cb_YlU",
      tags: ["UI/UX", "Figma", "Design Thinking"],
      category: "Design",
      trending: true
    },
    {
      title: "Google UX Design Professional Certificate",
      platform: "Coursera",
      instructor: "Google",
      duration: "6 months",
      rating: "4.8",
      link: "https://www.coursera.org/professional-certificates/google-ux-design",
      tags: ["UX Research", "Prototyping", "User Testing"],
      category: "Design",
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
      category: "Design",
      trending: false
    },
    {
      title: "Figma UI Design Tutorial",
      platform: "YouTube",
      instructor: "Flux",
      duration: "4 hours",
      rating: "4.7",
      link: "https://www.youtube.com/watch?v=FTFaQWZBqQ8",
      tags: ["Figma", "UI Design", "Prototyping"],
      category: "Design",
      trending: true
    },
    // Business Resources
    {
      title: "Digital Marketing Complete Course",
      platform: "YouTube",
      instructor: "Neil Patel",
      duration: "10 hours",
      rating: "4.7",
      link: "https://www.youtube.com/watch?v=bixR-KIJKYM",
      tags: ["Digital Marketing", "SEO", "Social Media"],
      category: "Business",
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
      category: "Business",
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
      category: "Business",
      trending: false
    },
    // Creative Resources
    {
      title: "Content Writing Masterclass",
      platform: "YouTube",
      instructor: "Alex Cattoni",
      duration: "6 hours",
      rating: "4.8",
      link: "https://www.youtube.com/watch?v=8S7IeEEj-ks",
      tags: ["Content Writing", "Copywriting", "Marketing"],
      category: "Creative",
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
      category: "Creative",
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
      category: "Creative",
      trending: false
    },
    // Additional resources to demonstrate lazy loading
    {
      title: "Advanced JavaScript Concepts",
      platform: "YouTube",
      instructor: "Akshay Saini",
      duration: "15 hours",
      rating: "4.9",
      link: "https://www.youtube.com/watch?v=8aGhZQkoFbQ",
      tags: ["JavaScript", "Advanced", "Concepts"],
      category: "Technology",
      trending: true
    },
    {
      title: "System Design Primer",
      platform: "YouTube",
      instructor: "Gaurav Sen",
      duration: "20 hours",
      rating: "4.8",
      link: "https://www.youtube.com/watch?v=quLrc3PbuIw",
      tags: ["System Design", "Architecture", "Scalability"],
      category: "Technology",
      trending: true
    },
    {
      title: "Cybersecurity Complete Course",
      platform: "Udemy",
      instructor: "Nathan House",
      duration: "30 hours",
      rating: "4.5",
      link: "https://www.udemy.com/course/complete-cyber-security-course-network-security-course/",
      tags: ["Cybersecurity", "Network Security", "Ethical Hacking"],
      category: "Technology",
      trending: false
    },
    {
      title: "Brand Identity Design Course",
      platform: "Skillshare",
      instructor: "Satori Graphics",
      duration: "3 hours",
      rating: "4.5",
      link: "https://www.skillshare.com/classes/Brand-Identity-Design-Complete-Course/1234567890",
      tags: ["Branding", "Logo Design", "Visual Identity"],
      category: "Design",
      trending: false
    }
  ];

  const { displayedItems, loading, hasMore, scrollCount } = useLazyLoading({
    initialItems: allResources,
    itemsPerLoad: 6,
    maxScrolls: 8
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

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Technology":
        return "bg-blue-100 text-blue-800";
      case "Design":
        return "bg-purple-100 text-purple-800";
      case "Business":
        return "bg-green-100 text-green-800";
      case "Creative":
        return "bg-orange-100 text-orange-800";
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
            All Skills & Resources
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive collection of curated learning resources across all domains
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedItems.map((resource, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-start justify-between mb-2">
                  <div className="flex flex-wrap gap-2">
                    <Badge className={getPlatformColor(resource.platform)} variant="secondary">
                      {resource.platform}
                    </Badge>
                    <Badge className={getCategoryColor(resource.category)} variant="secondary">
                      {resource.category}
                    </Badge>
                  </div>
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
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
            <span className="ml-2 text-gray-600">Loading more resources...</span>
          </div>
        )}

        {!hasMore && scrollCount >= 8 && (
          <div className="text-center py-8">
            <p className="text-gray-600">You've reached the end! That's all the resources we have for now.</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default AllTechDomains;
