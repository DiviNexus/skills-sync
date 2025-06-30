
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { allResources, Resource } from '@/data/resources';

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

  const performSearch = (query: string) => {
    setSearchQuery(query);
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    setIsSearching(true);
    
    setTimeout(() => {
      const queryLower = query.toLowerCase();
      
      // Enhanced search algorithm for better matching
      const results = allResources.filter(resource => {
        const titleMatch = resource.title.toLowerCase().includes(queryLower);
        const tagMatch = resource.tags.some(tag => tag.toLowerCase().includes(queryLower));
        const categoryMatch = resource.category.toLowerCase().includes(queryLower);
        const instructorMatch = resource.instructor.toLowerCase().includes(queryLower);
        const platformMatch = resource.platform.toLowerCase().includes(queryLower);
        const descriptionMatch = resource.description && resource.description.toLowerCase().includes(queryLower);
        const domainMatch = resource.specificDomain.toLowerCase().includes(queryLower);
        
        // Enhanced keyword matching for simple course names
        const commonKeywords = [
          'html', 'css', 'javascript', 'js', 'python', 'react', 'reactjs', 'node', 'nodejs',
          'database', 'dbms', 'sql', 'mysql', 'java', 'c++', 'cpp', 'php', 'angular',
          'vue', 'vuejs', 'bootstrap', 'jquery', 'mongodb', 'express', 'django', 'flask',
          'git', 'github', 'docker', 'kubernetes', 'aws', 'azure', 'machine learning', 'ml',
          'artificial intelligence', 'ai', 'data science', 'cybersecurity', 'blockchain',
          'web development', 'frontend', 'backend', 'fullstack', 'mobile', 'android', 'ios',
          'swift', 'kotlin', 'flutter', 'dart', 'unity', 'c#', 'csharp', 'typescript', 'ts'
        ];
        
        const keywordMatch = commonKeywords.some(keyword => {
          if (queryLower.includes(keyword) || keyword.includes(queryLower)) {
            return resource.tags.some(tag => tag.toLowerCase().includes(keyword)) ||
                   resource.title.toLowerCase().includes(keyword) ||
                   resource.description?.toLowerCase().includes(keyword);
          }
          return false;
        });
        
        // Partial word matching for short queries
        const partialMatch = queryLower.length >= 2 && (
          resource.title.toLowerCase().includes(queryLower) ||
          resource.tags.some(tag => tag.toLowerCase().includes(queryLower))
        );
        
        return titleMatch || tagMatch || categoryMatch || instructorMatch || 
               platformMatch || descriptionMatch || domainMatch || keywordMatch || partialMatch;
      });
      
      // Enhanced sorting by relevance
      const sortedResults = results.sort((a, b) => {
        const aTitle = a.title.toLowerCase();
        const bTitle = b.title.toLowerCase();
        
        // Exact title matches first
        const aExactTitle = aTitle === queryLower;
        const bExactTitle = bTitle === queryLower;
        if (aExactTitle && !bExactTitle) return -1;
        if (!aExactTitle && bExactTitle) return 1;
        
        // Title starts with query
        const aTitleStarts = aTitle.startsWith(queryLower);
        const bTitleStarts = bTitle.startsWith(queryLower);
        if (aTitleStarts && !bTitleStarts) return -1;
        if (!aTitleStarts && bTitleStarts) return 1;
        
        // Tag exact matches
        const aTagExact = a.tags.some(tag => tag.toLowerCase() === queryLower);
        const bTagExact = b.tags.some(tag => tag.toLowerCase() === queryLower);
        if (aTagExact && !bTagExact) return -1;
        if (!aTagExact && bTagExact) return 1;
        
        // Title contains query
        const aTitleContains = aTitle.includes(queryLower);
        const bTitleContains = bTitle.includes(queryLower);
        if (aTitleContains && !bTitleContains) return -1;
        if (!aTitleContains && bTitleContains) return 1;
        
        // Trending resources
        if (a.trending && !b.trending) return -1;
        if (!a.trending && b.trending) return 1;
        
        // Rating
        return parseFloat(b.rating) - parseFloat(a.rating);
      });
      
      setSearchResults(sortedResults);
      setIsSearching(false);
    }, 200); // Even faster response time
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
