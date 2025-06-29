
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Brain, ArrowRight, CheckCircle, Clock, Star } from "lucide-react";

const RoadmapGenerator = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    domain: '',
    experience: '',
    timeCommitment: '',
    goals: ''
  });
  const [roadmap, setRoadmap] = useState<any>(null);

  const questions = [
    {
      question: "Which domain are you interested in?",
      options: ["Web Development", "Data Science", "Mobile Development", "DevOps", "AI/Machine Learning", "Cybersecurity"]
    },
    {
      question: "What's your current experience level?",
      options: ["Complete Beginner", "Some Knowledge", "Intermediate", "Looking to Switch"]
    },
    {
      question: "How much time can you dedicate per week?",
      options: ["5-10 hours", "10-15 hours", "15-20 hours", "20+ hours"]
    },
    {
      question: "What's your primary goal?",
      options: ["Get First Job", "Career Switch", "Skill Enhancement", "Freelancing"]
    }
  ];

  const generateRoadmap = () => {
    // Mock roadmap generation based on user inputs
    const roadmaps = {
      "Web Development": {
        title: "Full Stack Web Developer Roadmap",
        duration: "4-6 months",
        phases: [
          {
            phase: "Phase 1: Foundations",
            duration: "4-6 weeks",
            skills: ["HTML5", "CSS3", "JavaScript Fundamentals", "Git/GitHub"],
            projects: ["Personal Portfolio", "Landing Page"]
          },
          {
            phase: "Phase 2: Frontend Framework",
            duration: "6-8 weeks", 
            skills: ["React.js", "State Management", "API Integration", "Responsive Design"],
            projects: ["Todo App", "Weather App", "E-commerce Frontend"]
          },
          {
            phase: "Phase 3: Backend Development",
            duration: "6-8 weeks",
            skills: ["Node.js", "Express.js", "MongoDB", "RESTful APIs"],
            projects: ["Blog API", "User Authentication System"]
          },
          {
            phase: "Phase 4: Job Preparation",
            duration: "2-4 weeks",
            skills: ["System Design Basics", "Interview Prep", "Portfolio Polish"],
            projects: ["Full Stack Project", "Deploy to Production"]
          }
        ]
      },
      "Data Science": {
        title: "Data Science Career Roadmap",
        duration: "5-7 months",
        phases: [
          {
            phase: "Phase 1: Programming Foundation",
            duration: "4-6 weeks",
            skills: ["Python Basics", "Pandas", "NumPy", "Jupyter Notebooks"],
            projects: ["Data Cleaning Project", "Basic Analysis"]
          },
          {
            phase: "Phase 2: Statistics & Math",
            duration: "6-8 weeks",
            skills: ["Statistics", "Probability", "Linear Algebra", "Data Visualization"],
            projects: ["Statistical Analysis", "Dashboard Creation"]
          },
          {
            phase: "Phase 3: Machine Learning",
            duration: "8-10 weeks",
            skills: ["Scikit-learn", "Model Selection", "Feature Engineering", "ML Algorithms"],
            projects: ["Prediction Models", "Classification Project"]
          },
          {
            phase: "Phase 4: Specialization",
            duration: "4-6 weeks",
            skills: ["Deep Learning", "SQL", "Cloud Platforms", "Model Deployment"],
            projects: ["End-to-End ML Project", "Portfolio Website"]
          }
        ]
      }
    };

    const selectedRoadmap = roadmaps[formData.domain as keyof typeof roadmaps] || roadmaps["Web Development"];
    setRoadmap(selectedRoadmap);
  };

  const handleOptionSelect = (value: string) => {
    const questionKeys = ['domain', 'experience', 'timeCommitment', 'goals'];
    setFormData(prev => ({
      ...prev,
      [questionKeys[currentStep]]: value
    }));

    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      generateRoadmap();
    }
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setFormData({ domain: '', experience: '', timeCommitment: '', goals: '' });
    setRoadmap(null);
  };

  if (roadmap) {
    return (
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">{roadmap.title}</h3>
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
            <Card key={index} className="border-l-4 border-l-primary">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">{phase.phase}</CardTitle>
                  <Badge variant="outline">{phase.duration}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-gray-700">Skills to Learn:</h4>
                    <div className="flex flex-wrap gap-2">
                      {phase.skills.map((skill: string, skillIndex: number) => (
                        <Badge key={skillIndex} variant="secondary">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-gray-700">Projects:</h4>
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
          <Button onClick={resetQuiz} variant="outline">
            Generate Another Roadmap
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <Brain className="h-8 w-8 text-primary" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">
          AI-Powered Roadmap Generator
        </h3>
        <p className="text-gray-600">
          Answer a few questions to get your personalized learning roadmap
        </p>
      </div>

      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg">
              Question {currentStep + 1} of {questions.length}
            </CardTitle>
            <div className="text-sm text-gray-500">
              {Math.round(((currentStep + 1) / questions.length) * 100)}% Complete
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-primary h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
            />
          </div>
        </CardHeader>
        <CardContent>
          <h4 className="text-xl font-semibold mb-6 text-gray-900">
            {questions[currentStep].question}
          </h4>
          <div className="grid gap-3">
            {questions[currentStep].options.map((option, index) => (
              <Button
                key={index}
                variant="outline"
                className="justify-start text-left p-4 h-auto hover:bg-primary/5 hover:border-primary"
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
