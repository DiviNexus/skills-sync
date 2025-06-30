
import { useState, useEffect, useCallback } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, ExternalLink, Play, Star, Loader2, Sparkles } from "lucide-react";
import { useSearch } from "@/contexts/SearchContext";

interface SearchDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const SearchDialog = ({ open, onOpenChange }: SearchDialogProps) => {
  const [query, setQuery] = useState("");
  const { searchResults, isSearching, performSearch, clearSearch } = useSearch();

  // Debounced search function
  const debouncedSearch = useCallback(
    (() => {
      let timeoutId: NodeJS.Timeout;
      return (searchQuery: string) => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          performSearch(searchQuery);
        }, 300); // 300ms delay for real-time search
      };
    })(),
    [performSearch]
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    
    if (value.trim()) {
      debouncedSearch(value);
    } else {
      clearSearch();
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && query.trim()) {
      performSearch(query);
    }
  };

  useEffect(() => {
    if (!open) {
      setQuery("");
      clearSearch();
    }
  }, [open, clearSearch]);

  const getPlatformColor = (platform: string) => {
    switch (platform) {
      case "YouTube":
        return "bg-gradient-to-r from-red-100 to-red-200 text-red-800 border-red-200";
      case "Udemy":
        return "bg-gradient-to-r from-purple-100 to-purple-200 text-purple-800 border-purple-200";
      case "Coursera":
        return "bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 border-blue-200";
      case "Skillshare":
        return "bg-gradient-to-r from-green-100 to-green-200 text-green-800 border-green-200";
      case "LinkedIn Learning":
        return "bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 border-blue-200";
      case "edX":
        return "bg-gradient-to-r from-green-100 to-green-200 text-green-800 border-green-200";
      case "School of Motion":
        return "bg-gradient-to-r from-orange-100 to-orange-200 text-orange-800 border-orange-200";
      case "MasterClass":
        return "bg-gradient-to-r from-yellow-100 to-yellow-200 text-yellow-800 border-yellow-200";
      default:
        return "bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 border-gray-200";
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case "Technology":
        return "bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-800 border-blue-200";
      case "Design":
        return "bg-gradient-to-r from-purple-100 to-pink-100 text-purple-800 border-purple-200";
      case "Business":
        return "bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 border-green-200";
      case "Creative":
        return "bg-gradient-to-r from-orange-100 to-yellow-100 text-orange-800 border-orange-200";
      default:
        return "bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 border-gray-200";
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[900px] max-h-[85vh] overflow-hidden flex flex-col bg-gradient-to-br from-white to-blue-50/30">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent flex items-center">
            <Sparkles className="h-6 w-6 mr-2 text-primary" />
            🔍 Discover Amazing Resources
          </DialogTitle>
        </DialogHeader>
        
        <div className="flex space-x-2 mb-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Start typing... e.g., 'React', 'Data Science', 'Design', 'Python'..."
              value={query}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
              className="pl-10 text-lg py-3 bg-white/80 backdrop-blur-sm border-primary/20 focus:border-primary/40"
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          {isSearching && (
            <div className="flex items-center justify-center py-12">
              <div className="text-center">
                <Loader2 className="h-10 w-10 animate-spin text-primary mx-auto mb-3" />
                <span className="text-lg text-gray-600 font-medium">Searching amazing resources...</span>
                <p className="text-sm text-gray-500 mt-1">Finding the perfect match for you! ✨</p>
              </div>
            </div>
          )}

          {!isSearching && searchResults.length > 0 && (
            <div className="space-y-4">
              <div className="flex items-center justify-between mb-4">
                <p className="text-sm text-gray-600">
                  🎯 Found {searchResults.length} amazing resources for "{query}"
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {searchResults.slice(0, 12).map((resource, index) => (
                  <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex flex-wrap gap-1">
                          <Badge className={`${getPlatformColor(resource.platform)} text-xs`} variant="secondary">
                            {resource.platform}
                          </Badge>
                          <Badge className={`${getCategoryColor(resource.category)} text-xs`} variant="secondary">
                            {resource.category}
                          </Badge>
                        </div>
                        {resource.trending && (
                          <Badge className="bg-gradient-to-r from-orange-100 to-red-100 text-orange-800 border-orange-200 text-xs animate-pulse" variant="secondary">
                            🔥 Hot
                          </Badge>
                        )}
                      </div>
                      <CardTitle className="text-base leading-tight hover:text-primary transition-colors line-clamp-2">
                        {resource.title}
                      </CardTitle>
                      <CardDescription className="text-sm">
                        By {resource.instructor} • {resource.duration}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="flex items-center mb-3">
                        <Star className="h-3 w-3 text-yellow-500 fill-current" />
                        <span className="ml-1 text-xs font-medium">{resource.rating}</span>
                      </div>
                      
                      <div className="flex flex-wrap gap-1 mb-3">
                        {resource.tags.slice(0, 3).map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="outline" className="text-xs bg-gray-50/80">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <Button 
                        asChild 
                        className="w-full text-sm bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 shadow-md"
                        size="sm"
                      >
                        <a href={resource.link} target="_blank" rel="noopener noreferrer">
                          <Play className="h-3 w-3 mr-1" />
                          Start Learning
                          <ExternalLink className="h-3 w-3 ml-1" />
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
              {searchResults.length > 12 && (
                <div className="text-center py-4">
                  <p className="text-sm text-gray-500">
                    And {searchResults.length - 12} more resources! Try refining your search for better results.
                  </p>
                </div>
              )}
            </div>
          )}

          {!isSearching && query && searchResults.length === 0 && (
            <div className="text-center py-12 text-gray-500">
              <Search className="h-16 w-16 mx-auto mb-4 text-gray-300" />
              <p className="text-xl font-medium mb-2">No resources found for "{query}" 😔</p>
              <p className="text-sm mb-4">Try searching for different keywords or explore these popular topics:</p>
              <div className="flex flex-wrap gap-2 justify-center">
                {["React", "Python", "Design", "Data Science", "Marketing"].map((suggestion) => (
                  <Badge 
                    key={suggestion} 
                    variant="outline" 
                    className="cursor-pointer hover:bg-primary/5 hover:border-primary/30 transition-colors"
                    onClick={() => {
                      setQuery(suggestion);
                      performSearch(suggestion);
                    }}
                  >
                    {suggestion}
                  </Badge>
                ))}
              </div>
            </div>
          )}

          {!query && !isSearching && (
            <div className="text-center py-12 text-gray-500">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-primary/10 to-purple-600/10 rounded-full mb-6">
                <Search className="h-10 w-10 text-primary" />
              </div>
              <p className="text-xl font-medium mb-2">🚀 Start your learning journey!</p>
              <p className="text-sm mb-6">Type anything - course names, skills, domains, or even partial words</p>
              <div className="space-y-3">
                <p className="text-sm font-medium text-gray-600">💡 Try searching for:</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {[
                    "React", "Python", "UI/UX", "Data Science", "Marketing", 
                    "Machine Learning", "Photography", "Business", "Design"
                  ].map((suggestion) => (
                    <Badge 
                      key={suggestion} 
                      variant="outline" 
                      className="cursor-pointer hover:bg-primary/5 hover:border-primary/30 transition-colors"
                      onClick={() => {
                        setQuery(suggestion);
                        performSearch(suggestion);
                      }}
                    >
                      {suggestion}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
