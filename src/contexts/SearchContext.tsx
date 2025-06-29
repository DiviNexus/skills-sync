
import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Resource {
  title: string;
  platform: string;
  instructor: string;
  duration: string;
  rating: string;
  link: string;
  tags: string[];
  trending: boolean;
  category: string;
}

interface SearchContextType {
  searchResults: Resource[];
  isSearching: boolean;
  searchQuery: string;
  performSearch: (query: string) => void;
  clearSearch: () => void;
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error('useSearch must be used within a SearchProvider');
  }
  return context;
};

export const SearchProvider = ({ children }: { children: ReactNode }) => {
  const [searchResults, setSearchResults] = useState<Resource[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // All resources consolidated
  const allResources: Resource[] = [
    // Technology Resources
    { title: "Complete React Developer Course", platform: "YouTube", instructor: "Traversy Media", duration: "12 hours", rating: "4.8", link: "https://www.youtube.com/watch?v=w7ejDZ8SWv8", tags: ["React", "JavaScript", "Frontend"], trending: true, category: "Technology" },
    { title: "Python for Everybody Specialization", platform: "Coursera", instructor: "University of Michigan", duration: "8 months", rating: "4.7", link: "https://www.coursera.org/specializations/python", tags: ["Python", "Programming", "Data Science"], trending: true, category: "Technology" },
    { title: "The Complete 2024 Web Development Bootcamp", platform: "Udemy", instructor: "Dr. Angela Yu", duration: "65 hours", rating: "4.7", link: "https://www.udemy.com/course/the-complete-web-development-bootcamp/", tags: ["Web Development", "Full Stack", "JavaScript"], trending: false, category: "Technology" },
    { title: "Machine Learning Course", platform: "YouTube", instructor: "freeCodeCamp", duration: "10 hours", rating: "4.9", link: "https://www.youtube.com/watch?v=NWONeJKn6kc", tags: ["Machine Learning", "AI", "Python"], trending: true, category: "Technology" },
    { title: "AWS Certified Solutions Architect", platform: "Udemy", instructor: "Stephane Maarek", duration: "27 hours", rating: "4.6", link: "https://www.udemy.com/course/aws-certified-solutions-architect-associate-saa-c03/", tags: ["AWS", "Cloud", "DevOps"], trending: true, category: "Technology" },
    { title: "Docker and Kubernetes Complete Guide", platform: "YouTube", instructor: "TechWorld with Nana", duration: "6 hours", rating: "4.8", link: "https://www.youtube.com/watch?v=3c-iBn73dDE", tags: ["Docker", "Kubernetes", "DevOps"], trending: false, category: "Technology" },
    
    // Design Resources
    { title: "UI/UX Design Complete Course", platform: "YouTube", instructor: "DesignCourse", duration: "8 hours", rating: "4.9", link: "https://www.youtube.com/watch?v=c9Wg6Cb_YlU", tags: ["UI/UX", "Figma", "Design Thinking"], trending: true, category: "Design" },
    { title: "Adobe Creative Suite Masterclass", platform: "Udemy", instructor: "Lindsay Marsh", duration: "45 hours", rating: "4.6", link: "https://www.udemy.com/course/adobe-cc-masterclass-photoshop-illustrator-indesign-and-more/", tags: ["Photoshop", "Illustrator", "InDesign"], trending: false, category: "Design" },
    { title: "Google UX Design Professional Certificate", platform: "Coursera", instructor: "Google", duration: "6 months", rating: "4.8", link: "https://www.coursera.org/professional-certificates/google-ux-design", tags: ["UX Research", "Prototyping", "User Testing"], trending: true, category: "Design" },
    { title: "Figma UI Design Tutorial", platform: "YouTube", instructor: "Flux", duration: "4 hours", rating: "4.7", link: "https://www.youtube.com/watch?v=FTFaQWZBqQ8", tags: ["Figma", "UI Design", "Prototyping"], trending: true, category: "Design" },
    { title: "Brand Identity Design Course", platform: "Skillshare", instructor: "Satori Graphics", duration: "3 hours", rating: "4.5", link: "https://www.skillshare.com/classes/Brand-Identity-Design-Complete-Course/1234567890", tags: ["Branding", "Logo Design", "Visual Identity"], trending: false, category: "Design" },
    { title: "Web Design for Beginners", platform: "YouTube", instructor: "Kevin Powell", duration: "6 hours", rating: "4.8", link: "https://www.youtube.com/watch?v=B-ytMSuwbf8", tags: ["Web Design", "CSS", "Responsive Design"], trending: true, category: "Design" },
    
    // Business Resources
    { title: "Digital Marketing Complete Course", platform: "YouTube", instructor: "Neil Patel", duration: "10 hours", rating: "4.7", link: "https://www.youtube.com/watch?v=bixR-KIJKYM", tags: ["Digital Marketing", "SEO", "Social Media"], trending: true, category: "Business" },
    { title: "Google Data Analytics Professional Certificate", platform: "Coursera", instructor: "Google", duration: "6 months", rating: "4.8", link: "https://www.coursera.org/professional-certificates/google-data-analytics", tags: ["Data Analysis", "SQL", "Tableau"], trending: true, category: "Business" },
    { title: "Project Management Professional (PMP)", platform: "Udemy", instructor: "Joseph Phillips", duration: "35 hours", rating: "4.6", link: "https://www.udemy.com/course/pmp-certification-exam-prep-course-pmbok-6th-edition/", tags: ["Project Management", "PMP", "Agile"], trending: false, category: "Business" },
    { title: "Sales Funnel Mastery", platform: "YouTube", instructor: "Russell Brunson", duration: "5 hours", rating: "4.5", link: "https://www.youtube.com/watch?v=1UuIzNfdYlQ", tags: ["Sales", "Marketing", "Conversion"], trending: true, category: "Business" },
    { title: "Leadership and Management Course", platform: "LinkedIn Learning", instructor: "Simon Sinek", duration: "4 hours", rating: "4.9", link: "https://www.linkedin.com/learning/simon-sinek-on-leadership", tags: ["Leadership", "Management", "Team Building"], trending: false, category: "Business" },
    { title: "Business Strategy Fundamentals", platform: "edX", instructor: "MIT", duration: "8 weeks", rating: "4.7", link: "https://www.edx.org/course/introduction-to-business-strategy", tags: ["Strategy", "Business Planning", "Analytics"], trending: true, category: "Business" },
    
    // Creative Resources
    { title: "Content Writing Masterclass", platform: "YouTube", instructor: "Alex Cattoni", duration: "6 hours", rating: "4.8", link: "https://www.youtube.com/watch?v=8S7IeEEj-ks", tags: ["Content Writing", "Copywriting", "Marketing"], trending: true, category: "Creative" },
    { title: "Video Editing with Adobe Premiere Pro", platform: "Udemy", instructor: "Louay Zambarakji", duration: "23 hours", rating: "4.7", link: "https://www.udemy.com/course/adobe-premiere-pro-video-editing/", tags: ["Video Editing", "Premiere Pro", "Post Production"], trending: true, category: "Creative" },
    { title: "Photography Fundamentals", platform: "YouTube", instructor: "Mango Street", duration: "8 hours", rating: "4.6", link: "https://www.youtube.com/watch?v=V7z7BAZdt2M", tags: ["Photography", "Composition", "Lighting"], trending: false, category: "Creative" },
    { title: "Animation and Motion Graphics", platform: "School of Motion", instructor: "Joey Korenman", duration: "12 weeks", rating: "4.9", link: "https://www.schoolofmotion.com/courses/animation-bootcamp", tags: ["Animation", "After Effects", "Motion Graphics"], trending: true, category: "Creative" },
    { title: "Music Production Complete Course", platform: "YouTube", instructor: "In The Mix", duration: "15 hours", rating: "4.5", link: "https://www.youtube.com/watch?v=TEjOdqjjAOY", tags: ["Music Production", "Audio Engineering", "DAW"], trending: false, category: "Creative" },
    { title: "Creative Storytelling Workshop", platform: "MasterClass", instructor: "Aaron Sorkin", duration: "3 hours", rating: "4.8", link: "https://www.masterclass.com/classes/aaron-sorkin-teaches-screenwriting", tags: ["Storytelling", "Writing", "Screenwriting"], trending: true, category: "Creative" }
  ];

  const performSearch = (query: string) => {
    setSearchQuery(query);
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    setIsSearching(true);
    
    // Simulate search delay of 2-3 seconds
    setTimeout(() => {
      const results = allResources.filter(resource => 
        resource.title.toLowerCase().includes(query.toLowerCase()) ||
        resource.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase())) ||
        resource.category.toLowerCase().includes(query.toLowerCase()) ||
        resource.instructor.toLowerCase().includes(query.toLowerCase())
      );
      
      setSearchResults(results);
      setIsSearching(false);
    }, 2000);
  };

  const clearSearch = () => {
    setSearchQuery('');
    setSearchResults([]);
    setIsSearching(false);
  };

  return (
    <SearchContext.Provider value={{
      searchResults,
      isSearching,
      searchQuery,
      performSearch,
      clearSearch
    }}>
      {children}
    </SearchContext.Provider>
  );
};
