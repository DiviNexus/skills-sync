
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
    
    // Simulate search delay of 1 second for better UX
    setTimeout(() => {
      const queryLower = query.toLowerCase();
      const results = allResources.filter(resource => 
        resource.title.toLowerCase().includes(queryLower) ||
        resource.tags.some(tag => tag.toLowerCase().includes(queryLower)) ||
        resource.category.toLowerCase().includes(queryLower) ||
        resource.instructor.toLowerCase().includes(queryLower) ||
        resource.platform.toLowerCase().includes(queryLower) ||
        (resource.description && resource.description.toLowerCase().includes(queryLower))
      );
      
      // Sort by relevance - exact matches first, then partial matches
      const sortedResults = results.sort((a, b) => {
        const aTitle = a.title.toLowerCase();
        const bTitle = b.title.toLowerCase();
        const aExact = aTitle.includes(queryLower);
        const bExact = bTitle.includes(queryLower);
        
        if (aExact && !bExact) return -1;
        if (!aExact && bExact) return 1;
        
        // If both or neither are exact matches, sort by trending first
        if (a.trending && !b.trending) return -1;
        if (!a.trending && b.trending) return 1;
        
        // Then by rating
        return parseFloat(b.rating) - parseFloat(a.rating);
      });
      
      setSearchResults(sortedResults);
      setIsSearching(false);
    }, 500); // Reduced delay for better real-time feel
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
