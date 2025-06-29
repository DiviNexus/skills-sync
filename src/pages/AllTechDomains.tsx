
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ExternalLink, Play, Star } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AllTechDomains = () => {
  const techDomains = [
    {
      domain: "Frontend Development",
      description: "Build stunning user interfaces and web experiences",
      resources: [
        {
          title: "Complete React Developer Course",
          platform: "YouTube",
          instructor: "Traversy Media",
          duration: "12 hours",
          rating: "4.8",
          link: "https://www.youtube.com/watch?v=w7ejDZ8SWv8",
          tags: ["React", "JavaScript", "Frontend"]
        },
        {
          title: "Modern JavaScript From Scratch",
          platform: "Udemy",
          instructor: "Brad Traversy",
          duration: "21 hours",
          rating: "4.7",
          link: "https://www.udemy.com/course/modern-javascript-from-the-beginning/",
          tags: ["JavaScript", "ES6", "DOM"]
        }
      ]
    },
    {
      domain: "Backend Development",
      description: "Create robust server-side applications and APIs",
      resources: [
        {
          title: "Node.js Complete Guide",
          platform: "YouTube",
          instructor: "Academind",
          duration: "15 hours",
          rating: "4.8",
          link: "https://www.youtube.com/watch?v=RLtyhwFtXQA",
          tags: ["Node.js", "Express", "MongoDB"]
        },
        {
          title: "Python Django Framework",
          platform: "YouTube",
          instructor: "Programming with Mosh",
          duration: "10 hours",
          rating: "4.9",
          link: "https://www.youtube.com/watch?v=rHux0gMZ3Eg",
          tags: ["Python", "Django", "REST API"]
        }
      ]
    },
    {
      domain: "Full Stack Development",
      description: "Master both frontend and backend technologies",
      resources: [
        {
          title: "MERN Stack Complete Course",
          platform: "YouTube",
          instructor: "freeCodeCamp",
          duration: "14 hours",
          rating: "4.8",
          link: "https://www.youtube.com/watch?v=7CqJlxBYj-M",
          tags: ["React", "Node.js", "MongoDB", "Express"]
        },
        {
          title: "Full Stack Web Development Bootcamp",
          platform: "Udemy",
          instructor: "Angela Yu",
          duration: "65 hours",
          rating: "4.7",
          link: "https://www.udemy.com/course/the-complete-web-development-bootcamp/",
          tags: ["HTML", "CSS", "JavaScript", "Node.js"]
        }
      ]
    },
    {
      domain: "Mobile App Development",
      description: "Build native and cross-platform mobile applications",
      resources: [
        {
          title: "React Native Complete Guide",
          platform: "YouTube",
          instructor: "Academind",
          duration: "18 hours",
          rating: "4.7",
          link: "https://www.youtube.com/watch?v=qSRrxpdMpVc",
          tags: ["React Native", "Mobile", "iOS", "Android"]
        },
        {
          title: "Flutter Development Course",
          platform: "YouTube",
          instructor: "The Net Ninja",
          duration: "12 hours",
          rating: "4.8",
          link: "https://www.youtube.com/watch?v=1ukSR1GRtMU",
          tags: ["Flutter", "Dart", "Mobile", "Cross-platform"]
        }
      ]
    },
    {
      domain: "Data Science & Analytics",
      description: "Extract insights from data and build predictive models",
      resources: [
        {
          title: "Python for Data Science",
          platform: "Coursera",
          instructor: "IBM",
          duration: "6 months",
          rating: "4.6",
          link: "https://www.coursera.org/professional-certificates/ibm-data-science",
          tags: ["Python", "Pandas", "NumPy", "Matplotlib"]
        },
        {
          title: "Data Analysis with R",
          platform: "YouTube",
          instructor: "MarinStatsLectures",
          duration: "8 hours",
          rating: "4.7",
          link: "https://www.youtube.com/watch?v=_V8eKsto3Ug",
          tags: ["R", "Statistics", "Data Visualization"]
        }
      ]
    },
    {
      domain: "Machine Learning & AI",
      description: "Build intelligent systems and predictive models",
      resources: [
        {
          title: "Machine Learning Course",
          platform: "YouTube",
          instructor: "freeCodeCamp",
          duration: "10 hours",
          rating: "4.9",
          link: "https://www.youtube.com/watch?v=NWONeJKn6kc",
          tags: ["Machine Learning", "AI", "Python", "TensorFlow"]
        },
        {
          title: "Deep Learning Specialization",
          platform: "Coursera",
          instructor: "Andrew Ng",
          duration: "5 months",
          rating: "4.9",
          link: "https://www.coursera.org/specializations/deep-learning",
          tags: ["Deep Learning", "Neural Networks", "TensorFlow"]
        }
      ]
    },
    {
      domain: "Cloud Computing & DevOps",
      description: "Deploy and manage applications in the cloud",
      resources: [
        {
          title: "AWS Certified Solutions Architect",
          platform: "Udemy",
          instructor: "Stephane Maarek",
          duration: "27 hours",
          rating: "4.6",
          link: "https://www.udemy.com/course/aws-certified-solutions-architect-associate-saa-c03/",
          tags: ["AWS", "Cloud", "DevOps", "Architecture"]
        },
        {
          title: "Docker and Kubernetes Guide",
          platform: "YouTube",
          instructor: "TechWorld with Nana",
          duration: "6 hours",
          rating: "4.8",
          link: "https://www.youtube.com/watch?v=3c-iBn73dDE",
          tags: ["Docker", "Kubernetes", "DevOps", "Containers"]
        }
      ]
    },
    {
      domain: "Cybersecurity",
      description: "Protect systems and data from digital threats",
      resources: [
        {
          title: "Ethical Hacking Complete Course",
          platform: "YouTube",
          instructor: "freeCodeCamp",
          duration: "15 hours",
          rating: "4.7",
          link: "https://www.youtube.com/watch?v=3Kq1MIfTWCE",
          tags: ["Ethical Hacking", "Penetration Testing", "Security"]
        },
        {
          title: "CompTIA Security+ Course",
          platform: "YouTube",
          instructor: "Professor Messer",
          duration: "20 hours",
          rating: "4.8",
          link: "https://www.youtube.com/watch?v=9NE33fpQuw8",
          tags: ["CompTIA", "Security", "Certification"]
        }
      ]
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
            All Tech Domains & Resources
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive collection of technology learning resources across all major domains to boost your career
          </p>
        </div>

        <div className="space-y-12">
          {techDomains.map((domain, domainIndex) => (
            <div key={domainIndex}>
              <div className="mb-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{domain.domain}</h2>
                <p className="text-gray-600">{domain.description}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {domain.resources.map((resource, resourceIndex) => (
                  <Card key={resourceIndex} className="hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <Badge className={getPlatformColor(resource.platform)} variant="secondary">
                          {resource.platform}
                        </Badge>
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
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AllTechDomains;
