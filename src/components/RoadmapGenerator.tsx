
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Brain, ArrowRight, CheckCircle, Clock, Star, Sparkles } from "lucide-react";

const RoadmapGenerator = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [domain, setDomain] = useState('');
  const [formData, setFormData] = useState({
    domain: '',
    experience: '',
    timeCommitment: '',
    goals: '',
    learningStyle: '',
    background: ''
  });
  const [roadmap, setRoadmap] = useState<any>(null);

  const getQuestionsForDomain = (domain: string) => {
    const domainLower = domain.toLowerCase();
    
    if (domainLower.includes('web') || domainLower.includes('frontend') || domainLower.includes('fullstack')) {
      return [
        {
          question: "What's your current experience with web development?",
          options: ["Complete Beginner", "Know HTML/CSS basics", "Built a few projects", "Professional developer looking to advance"]
        },
        {
          question: "How much time can you dedicate per week?",
          options: ["5-10 hours", "10-15 hours", "15-20 hours", "20+ hours"]
        },
        {
          question: "What's your primary goal?",
          options: ["Get First Job", "Career Switch", "Build Personal Projects", "Freelancing"]
        },
        {
          question: "Which area interests you most?",
          options: ["Frontend Development", "Backend Development", "Full-Stack Development", "Mobile-First Development"]
        },
        {
          question: "What's your preferred learning style?",
          options: ["Hands-on Projects", "Theory then Practice", "Video Tutorials", "Reading Documentation"]
        }
      ];
    } else if (domainLower.includes('data') || domainLower.includes('analytics') || domainLower.includes('science')) {
      return [
        {
          question: "What's your experience with data and programming?",
          options: ["Complete Beginner", "Basic Excel/Spreadsheets", "Some Programming Knowledge", "Professional looking to specialize"]
        },
        {
          question: "How much time can you dedicate per week?",
          options: ["5-10 hours", "10-15 hours", "15-20 hours", "20+ hours"]
        },
        {
          question: "What's your primary goal?",
          options: ["Career Transition", "Enhance Current Role", "Start Data Career", "Academic Research"]
        },
        {
          question: "Which area interests you most?",
          options: ["Data Analysis", "Machine Learning", "Data Visualization", "Big Data Engineering"]
        },
        {
          question: "What's your mathematical background?",
          options: ["Basic Math", "College Statistics", "Strong in Math/Stats", "Advanced Mathematics"]
        }
      ];
    } else if (domainLower.includes('cyber') || domainLower.includes('security') || domainLower.includes('ethical')) {
      return [
        {
          question: "What's your current IT/Security experience?",
          options: ["Complete Beginner", "Basic IT Knowledge", "Some Networking Experience", "IT Professional"]
        },
        {
          question: "How much time can you dedicate per week?",
          options: ["5-10 hours", "10-15 hours", "15-20 hours", "20+ hours"]
        },
        {
          question: "What's your primary goal?",
          options: ["Career Change to Cybersecurity", "Enhance Current Security Role", "Ethical Hacking Skills", "Compliance and Governance"]
        },
        {
          question: "Which area interests you most?",
          options: ["Network Security", "Ethical Hacking", "Security Analysis", "Incident Response"]
        },
        {
          question: "Do you have any certifications or technical background?",
          options: ["No Technical Background", "Basic IT Certifications", "Network/System Admin Experience", "Programming Background"]
        }
      ];
    } else if (domainLower.includes('ai') || domainLower.includes('machine') || domainLower.includes('ml') || domainLower.includes('artificial')) {
      return [
        {
          question: "What's your programming and math background?",
          options: ["Complete Beginner", "Basic Programming", "Strong Programming Skills", "Advanced Math & Programming"]
        },
        {
          question: "How much time can you dedicate per week?",
          options: ["5-10 hours", "10-15 hours", "15-20 hours", "20+ hours"]
        },
        {
          question: "What's your primary goal?",
          options: ["Career Transition to AI", "Research and Development", "Apply AI to Current Role", "Build AI Products"]
        },
        {
          question: "Which area interests you most?",
          options: ["Machine Learning", "Deep Learning", "Natural Language Processing", "Computer Vision"]
        },
        {
          question: "What's your mathematical foundation?",
          options: ["Basic Math", "College Calculus/Statistics", "Strong Mathematical Background", "Research-level Mathematics"]
        }
      ];
    } else {
      // Generic questions for other domains
      return [
        {
          question: `What's your current experience in ${domain}?`,
          options: ["Complete Beginner", "Some Knowledge", "Intermediate Level", "Looking to Specialize"]
        },
        {
          question: "How much time can you dedicate per week?",
          options: ["5-10 hours", "10-15 hours", "15-20 hours", "20+ hours"]
        },
        {
          question: "What's your primary goal?",
          options: ["Career Change", "Skill Enhancement", "Personal Interest", "Professional Growth"]
        },
        {
          question: "What's your preferred learning approach?",
          options: ["Hands-on Practice", "Structured Courses", "Self-Directed Learning", "Mentored Learning"]
        },
        {
          question: "What's your timeline for achieving proficiency?",
          options: ["3-6 months", "6-12 months", "1-2 years", "Long-term (2+ years)"]
        }
      ];
    }
  };

  const generateDomainSpecificRoadmap = (domain: string, answers: any) => {
    const domainLower = domain.toLowerCase();
    
    if (domainLower.includes('web') || domainLower.includes('frontend') || domainLower.includes('fullstack')) {
      return {
        title: `${domain} Developer Roadmap`,
        duration: "4-8 months",
        phases: [
          {
            phase: "Phase 1: Web Fundamentals",
            duration: "4-6 weeks",
            skills: ["HTML5 & Semantic Markup", "CSS3 & Flexbox/Grid", "JavaScript ES6+", "Git & Version Control"],
            projects: ["Personal Portfolio Website", "Responsive Landing Page", "Interactive Calculator"]
          },
          {
            phase: "Phase 2: Modern Frontend",
            duration: "6-8 weeks",
            skills: ["React.js & Component Architecture", "State Management (Context/Redux)", "API Integration", "CSS Frameworks (Tailwind)"],
            projects: ["Todo App with React", "Weather Dashboard", "E-commerce Product Catalog"]
          },
          {
            phase: "Phase 3: Backend & Databases",
            duration: "6-8 weeks",
            skills: ["Node.js & Express.js", "RESTful API Design", "MongoDB/PostgreSQL", "Authentication & Security"],
            projects: ["Blog API with CRUD", "User Authentication System", "Full-stack Social App"]
          },
          {
            phase: "Phase 4: Advanced Topics & Deployment",
            duration: "4-6 weeks",
            skills: ["Testing (Jest/Cypress)", "CI/CD Pipelines", "Cloud Deployment", "Performance Optimization"],
            projects: ["Production-Ready Full-stack App", "Deployed Portfolio", "Open Source Contribution"]
          }
        ]
      };
    } else if (domainLower.includes('data') || domainLower.includes('analytics') || domainLower.includes('science')) {
      return {
        title: `${domain} Professional Roadmap`,
        duration: "6-10 months",
        phases: [
          {
            phase: "Phase 1: Programming & Statistics Foundation",
            duration: "6-8 weeks",
            skills: ["Python Programming", "Statistics & Probability", "Pandas & NumPy", "Jupyter Notebooks"],
            projects: ["Data Cleaning Project", "Exploratory Data Analysis", "Statistical Analysis Report"]
          },
          {
            phase: "Phase 2: Data Visualization & Analysis",
            duration: "6-8 weeks",
            skills: ["Matplotlib & Seaborn", "Plotly & Interactive Viz", "SQL & Database Querying", "Excel Advanced Features"],
            projects: ["Sales Dashboard", "Market Analysis Report", "Interactive Data Story"]
          },
          {
            phase: "Phase 3: Machine Learning",
            duration: "8-10 weeks",
            skills: ["Scikit-learn", "Supervised & Unsupervised Learning", "Model Evaluation", "Feature Engineering"],
            projects: ["Predictive Model", "Classification Project", "Clustering Analysis"]
          },
          {
            phase: "Phase 4: Advanced Analytics & Deployment",
            duration: "6-8 weeks",
            skills: ["Deep Learning Basics", "Time Series Analysis", "Model Deployment", "Cloud Platforms (AWS/GCP)"],
            projects: ["End-to-End ML Pipeline", "Deployed ML Model", "Portfolio Website with Projects"]
          }
        ]
      };
    } else if (domainLower.includes('cyber') || domainLower.includes('security') || domainLower.includes('ethical')) {
      return {
        title: `${domain} Professional Roadmap`,
        duration: "6-12 months",
        phases: [
          {
            phase: "Phase 1: IT & Networking Fundamentals",
            duration: "6-8 weeks",
            skills: ["Network Protocols (TCP/IP)", "Operating Systems (Linux/Windows)", "Command Line Proficiency", "Basic Scripting"],
            projects: ["Home Lab Setup", "Network Mapping Exercise", "System Hardening Project"]
          },
          {
            phase: "Phase 2: Security Fundamentals",
            duration: "8-10 weeks",
            skills: ["Security Principles", "Risk Assessment", "Vulnerability Assessment", "Security Tools (Nmap, Wireshark)"],
            projects: ["Vulnerability Scan Report", "Risk Assessment Document", "Security Audit"]
          },
          {
            phase: "Phase 3: Specialized Security Skills",
            duration: "10-12 weeks",
            skills: ["Ethical Hacking Techniques", "Penetration Testing", "Incident Response", "Digital Forensics"],
            projects: ["Penetration Testing Report", "Incident Response Plan", "Forensics Analysis"]
          },
          {
            phase: "Phase 4: Certifications & Career Prep",
            duration: "6-8 weeks",
            skills: ["CompTIA Security+", "CEH Preparation", "CISSP Fundamentals", "Professional Communication"],
            projects: ["Certification Achievement", "Professional Portfolio", "Industry Networking"]
          }
        ]
      };
    } else if (domainLower.includes('ai') || domainLower.includes('machine') || domainLower.includes('ml') || domainLower.includes('artificial')) {
      return {
        title: `${domain} Engineer Roadmap`,
        duration: "8-12 months",
        phases: [
          {
            phase: "Phase 1: Mathematical & Programming Foundation",
            duration: "8-10 weeks",
            skills: ["Linear Algebra", "Calculus & Statistics", "Python Programming", "NumPy & Pandas"],
            projects: ["Mathematical Implementations", "Data Analysis Projects", "Statistical Modeling"]
          },
          {
            phase: "Phase 2: Machine Learning Fundamentals",
            duration: "10-12 weeks",
            skills: ["Supervised Learning", "Unsupervised Learning", "Model Evaluation", "Scikit-learn"],
            projects: ["Classification Models", "Regression Analysis", "Clustering Projects"]
          },
          {
            phase: "Phase 3: Deep Learning & Neural Networks",
            duration: "10-12 weeks",
            skills: ["Neural Network Architecture", "TensorFlow/PyTorch", "CNN & RNN", "Transfer Learning"],
            projects: ["Image Classification", "Natural Language Processing", "Time Series Prediction"]
          },
          {
            phase: "Phase 4: Specialized AI & Production",
            duration: "8-10 weeks",
            skills: ["Model Deployment", "MLOps", "Cloud AI Services", "AI Ethics"],
            projects: ["Production ML System", "AI Application", "Research Paper Implementation"]
          }
        ]
      };
    } else {
      // Generic roadmap for other domains
      return {
        title: `${domain} Learning Roadmap`,
        duration: "4-6 months",
        phases: [
          {
            phase: "Phase 1: Foundation Building",
            duration: "4-6 weeks",
            skills: [`${domain} Fundamentals`, "Industry Overview", "Basic Tools", "Best Practices"],
            projects: ["Basic Project", "Learning Portfolio", "Skill Assessment"]
          },
          {
            phase: "Phase 2: Intermediate Skills",
            duration: "6-8 weeks",
            skills: ["Advanced Concepts", "Professional Tools", "Industry Standards", "Collaboration"],
            projects: ["Intermediate Project", "Case Study", "Peer Review"]
          },
          {
            phase: "Phase 3: Advanced Applications",
            duration: "6-8 weeks",
            skills: ["Expert Techniques", "Innovation", "Problem Solving", "Leadership"],
            projects: ["Complex Project", "Innovation Challenge", "Mentoring Others"]
          },
          {
            phase: "Phase 4: Professional Development",
            duration: "4-6 weeks",
            skills: ["Industry Networking", "Continuous Learning", "Career Planning", "Professional Portfolio"],
            projects: ["Capstone Project", "Professional Network", "Career Plan"]
          }
        ]
      };
    }
  };

  const handleDomainSubmit = () => {
    if (domain.trim()) {
      setFormData(prev => ({ ...prev, domain: domain.trim() }));
      setCurrentStep(1);
    }
  };

  const handleOptionSelect = (value: string) => {
    const questionKeys = ['experience', 'timeCommitment', 'goals', 'learningStyle', 'background'];
    const currentKey = questionKeys[currentStep - 1];
    
    setFormData(prev => ({
      ...prev,
      [currentKey]: value
    }));

    const questions = getQuestionsForDomain(formData.domain);
    if (currentStep < questions.length) {
      setCurrentStep(currentStep + 1);
    } else {
      const generatedRoadmap = generateDomainSpecificRoadmap(formData.domain, { ...formData, [currentKey]: value });
      setRoadmap(generatedRoadmap);
    }
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setDomain('');
    setFormData({ domain: '', experience: '', timeCommitment: '', goals: '', learningStyle: '', background: '' });
    setRoadmap(null);
  };

  if (roadmap) {
    return (
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full mb-4">
            <Sparkles className="h-8 w-8 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-2">
            🎉 {roadmap.title}
          </h3>
          <div className="flex items-center justify-center gap-4 text-gray-600">
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              <span>{roadmap.duration}</span>
            </div>
            <div className="flex items-center">
              <Star className="h-4 w-4 mr-1 text-yellow-500" />
              <span>Personalized for you</span>
            </div>
          </div>
        </div>

        <div className="grid gap-6">
          {roadmap.phases.map((phase: any, index: number) => (
            <Card key={index} className="border-l-4 border-l-primary shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg text-gray-900">{phase.phase}</CardTitle>
                  <Badge variant="outline" className="bg-primary/5 text-primary border-primary/20">
                    {phase.duration}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-gray-700">🎯 Skills to Learn:</h4>
                    <div className="flex flex-wrap gap-2">
                      {phase.skills.map((skill: string, skillIndex: number) => (
                        <Badge key={skillIndex} className="bg-gradient-to-r from-blue-50 to-cyan-50 text-blue-700 border-blue-200" variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-gray-700">🚀 Projects:</h4>
                    <div className="space-y-1">
                      {phase.projects.map((project: string, projectIndex: number) => (
                        <div key={projectIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="h-4 w-4 mr-2 text-green-500" />
                          {project}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center pt-6">
          <Button onClick={resetQuiz} variant="outline" className="hover:bg-primary/5">
            ✨ Generate Another Roadmap
          </Button>
        </div>
      </div>
    );
  }

  if (currentStep === 0) {
    return (
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-gradient-to-r from-primary/10 to-purple-600/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Brain className="h-8 w-8 text-primary" />
          </div>
          <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-2">
            🤖 AI-Powered Roadmap Generator
          </h3>
          <p className="text-gray-600">
            Tell us your domain and we'll create a personalized learning roadmap just for you! ✨
          </p>
        </div>

        <Card className="shadow-lg bg-white/80 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-lg text-center">
              🎯 What domain do you want to learn?
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <Input
                placeholder="e.g., Web Development, Data Science, Cybersecurity, AI/Machine Learning..."
                value={domain}
                onChange={(e) => setDomain(e.target.value)}
                className="text-center text-lg py-3"
                onKeyPress={(e) => e.key === 'Enter' && handleDomainSubmit()}
              />
              <Button 
                onClick={handleDomainSubmit} 
                disabled={!domain.trim()}
                className="w-full bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 shadow-lg hover:shadow-xl transition-all duration-300"
                size="lg"
              >
                🚀 Continue
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="mt-6 text-center">
              <p className="text-sm text-gray-500 mb-2">Popular domains:</p>
              <div className="flex flex-wrap gap-2 justify-center">
                {["Web Development", "Data Science", "Cybersecurity", "AI/Machine Learning", "Digital Marketing"].map((suggestion) => (
                  <Badge 
                    key={suggestion} 
                    variant="outline" 
                    className="cursor-pointer hover:bg-primary/5 hover:border-primary/30 transition-colors"
                    onClick={() => setDomain(suggestion)}
                  >
                    {suggestion}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  const questions = getQuestionsForDomain(formData.domain);
  const currentQuestion = questions[currentStep - 1];

  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-gradient-to-r from-primary/10 to-purple-600/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <Brain className="h-8 w-8 text-primary" />
        </div>
        <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-2">
          🎯 {formData.domain} Roadmap
        </h3>
        <p className="text-gray-600">
          A few more questions to personalize your learning journey! ✨
        </p>
      </div>

      <Card className="shadow-lg bg-white/80 backdrop-blur-sm">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg">
              Question {currentStep} of {questions.length}
            </CardTitle>
            <div className="text-sm text-gray-500">
              {Math.round((currentStep / questions.length) * 100)}% Complete
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-primary to-purple-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / questions.length) * 100}%` }}
            />
          </div>
        </CardHeader>
        <CardContent>
          <h4 className="text-xl font-semibold mb-6 text-gray-900">
            {currentQuestion.question}
          </h4>
          <div className="grid gap-3">
            {currentQuestion.options.map((option, index) => (
              <Button
                key={index}
                variant="outline"
                className="justify-start text-left p-4 h-auto hover:bg-primary/5 hover:border-primary/30 transition-all duration-200"
                onClick={() => handleOptionSelect(option)}
              >
                <span>{option}</span>
                <ArrowRight className="h-4 w-4 ml-auto" />
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RoadmapGenerator;
