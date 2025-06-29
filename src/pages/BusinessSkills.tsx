
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ExternalLink, Play, Star, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLazyLoading } from "@/hooks/useLazyLoading";

const BusinessSkills = () => {
  const allResources = [
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
    },
    {
      title: "Excel Advanced Formulas and Functions",
      platform: "YouTube",
      instructor: "ExcelIsFun",
      duration: "15 hours",
      rating: "4.6",
      link: "https://www.youtube.com/watch?v=Vl0H-qTclOg",
      tags: ["Excel", "Data Analysis", "Spreadsheets"],
      trending: false
    },
    {
      title: "Google Ads Certification Course",
      platform: "YouTube",
      instructor: "Surfside PPC",
      duration: "12 hours",
      rating: "4.7",
      link: "https://www.youtube.com/watch?v=mQKAsb14Pnw",
      tags: ["Google Ads", "PPC", "Digital Marketing"],
      trending: true
    },
    {
      title: "Facebook Ads Complete Course",
      platform: "Udemy",
      instructor: "Ben Heath",
      duration: "18 hours",
      rating: "4.5",
      link: "https://www.udemy.com/course/the-complete-facebook-ads-course/",
      tags: ["Facebook Ads", "Social Media Marketing", "Advertising"],
      trending: true
    },
    {
      title: "Financial Analysis and Modeling",
      platform: "Coursera",
      instructor: "University of Pennsylvania",
      duration: "6 weeks",
      rating: "4.6",
      link: "https://www.coursera.org/learn/wharton-financial-analysis",
      tags: ["Finance", "Financial Modeling", "Investment"],
      trending: false
    },
    {
      title: "Supply Chain Management Course",
      platform: "edX",
      instructor: "MIT",
      duration: "10 weeks",
      rating: "4.7",
      link: "https://www.edx.org/course/supply-chain-management",
      tags: ["Supply Chain", "Operations", "Logistics"],
      trending: false
    },
    {
      title: "Business Intelligence with Power BI",
      platform: "YouTube",
      instructor: "Guy in a Cube",
      duration: "20 hours",
      rating: "4.8",
      link: "https://www.youtube.com/watch?v=AGrl-H87pRU",
      tags: ["Power BI", "Business Intelligence", "Data Visualization"],
      trending: true
    },
    {
      title: "Scrum Master Certification Prep",
      platform: "Udemy",
      instructor: "Pawel Strykowski",
      duration: "8 hours",
      rating: "4.6",
      link: "https://www.udemy.com/course/scrum-master-certification/",
      tags: ["Scrum", "Agile", "Project Management"],
      trending: true
    },
    {
      title: "Business Communication Skills",
      platform: "Coursera",
      instructor: "University of Washington",
      duration: "4 weeks",
      rating: "4.5",
      link: "https://www.coursera.org/learn/business-communication",
      tags: ["Communication", "Presentation Skills", "Professional Skills"],
      trending: false
    },
    {
      title: "Entrepreneurship Fundamentals",
      platform: "YouTube",
      instructor: "Gary Vaynerchuk",
      duration: "8 hours",
      rating: "4.7",
      link: "https://www.youtube.com/watch?v=xzSpO4jX26A",
      tags: ["Entrepreneurship", "Startup", "Business Development"],
      trending: true
    },
    {
      title: "Customer Relationship Management (CRM)",
      platform: "LinkedIn Learning",
      instructor: "Salesforce",
      duration: "6 hours",
      rating: "4.6",
      link: "https://www.linkedin.com/learning/salesforce-essential-training",
      tags: ["CRM", "Salesforce", "Customer Management"],
      trending: false
    },
    {
      title: "Human Resource Management",
      platform: "Coursera",
      instructor: "University of Minnesota",
      duration: "5 weeks",
      rating: "4.4",
      link: "https://www.coursera.org/learn/hr-management",
      tags: ["HR", "Human Resources", "People Management"],
      trending: false
    },
    {
      title: "Business Analytics with R",
      platform: "edX",
      instructor: "Columbia University",
      duration: "8 weeks",
      rating: "4.5",
      link: "https://www.edx.org/course/analytics-in-r",
      tags: ["Business Analytics", "R Programming", "Statistics"],
      trending: true
    },
    {
      title: "E-commerce Business Complete Guide",
      platform: "YouTube",
      instructor: "Wholesale Ted",
      duration: "12 hours",
      rating: "4.6",
      link: "https://www.youtube.com/watch?v=X4YM7fuOKPY",
      tags: ["E-commerce", "Online Business", "Dropshipping"],
      trending: true
    },
    {
      title: "Negotiation Skills Masterclass",
      platform: "Udemy",
      instructor: "Chris Croft",
      duration: "7 hours",
      rating: "4.7",
      link: "https://www.udemy.com/course/negotiation-skills/",
      tags: ["Negotiation", "Sales Skills", "Communication"],
      trending: false
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

export default BusinessSkills;
