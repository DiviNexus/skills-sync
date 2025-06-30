
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
        
        // Special handling for common course keywords
        const commonKeywords = ['html', 'css', 'javascript', 'python', 'react', 'node', 'database', 'dbms', 'sql', 'java', 'c++', 'php'];
        const keywordMatch = commonKeywords.some(keyword => {
          if (queryLower.includes(keyword)) {
            return resource.tags.some(tag => tag.toLowerCase().includes(keyword)) ||
                   resource.title.toLowerCase().includes(keyword);
          }
          return false;
        });
        
        return titleMatch || tagMatch || categoryMatch || instructorMatch || 
               platformMatch || descriptionMatch || domainMatch || keywordMatch;
      });
      
      // Enhanced sorting by relevance
      const sortedResults = results.sort((a, b) => {
        const aTitle = a.title.toLowerCase();
        const bTitle = b.title.toLowerCase();
        const aTags = a.tags.join(' ').toLowerCase();
        const bTags = b.tags.join(' ').toLowerCase();
        
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
    }, 300); // Faster response time
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
