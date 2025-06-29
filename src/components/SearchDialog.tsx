
import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, ExternalLink, Play, Star, Loader2 } from "lucide-react";
import { useSearch } from "@/contexts/SearchContext";

interface SearchDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const SearchDialog = ({ open, onOpenChange }: SearchDialogProps) => {
  const [query, setQuery] = useState("");
  const { searchResults, isSearching, performSearch, clearSearch } = useSearch();

  const handleSearch = () => {
    if (query.trim()) {
      performSearch(query);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
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
        return "bg-red-100 text-red-800";
      case "Udemy":
        return "bg-purple-100 text-purple-800";
      case "Coursera":
        return "bg-blue-100 text-blue-800";
      case "Skillshare":
        return "bg-green-100 text-green-800";
      case "LinkedIn Learning":
        return "bg-blue-100 text-blue-800";
      case "edX":
        return "bg-green-100 text-green-800";
      case "School of Motion":
        return "bg-orange-100 text-orange-800";
      case "MasterClass":
        return "bg-yellow-100 text-yellow-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[800px] max-h-[80vh] overflow-hidden flex flex-col">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Search Resources</DialogTitle>
        </DialogHeader>
        
        <div className="flex space-x-2 mb-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search for courses, skills, or job domains..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyPress={handleKeyPress}
              className="pl-10"
            />
          </div>
          <Button onClick={handleSearch} disabled={!query.trim() || isSearching}>
            {isSearching ? <Loader2 className="h-4 w-4 animate-spin" /> : "Search"}
          </Button>
        </div>

        <div className="flex-1 overflow-y-auto">
          {isSearching && (
            <div className="flex items-center justify-center py-8">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
              <span className="ml-2 text-lg">Searching resources...</span>
            </div>
          )}

          {!isSearching && searchResults.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {searchResults.map((resource, index) => (
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
                      <Badge variant="outline" className="ml-2 text-xs">
                        {resource.category}
                      </Badge>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {resource.tags.slice(0, 3).map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <Button 
                      asChild 
                      className="w-full"
                      size="sm"
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
          )}

          {!isSearching && query && searchResults.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              <Search className="h-12 w-12 mx-auto mb-4 text-gray-300" />
              <p className="text-lg">No resources found for "{query}"</p>
              <p className="text-sm">Try searching for different keywords or course names</p>
            </div>
          )}

          {!query && !isSearching && (
            <div className="text-center py-8 text-gray-500">
              <Search className="h-12 w-12 mx-auto mb-4 text-gray-300" />
              <p className="text-lg">Search for courses and resources</p>
              <p className="text-sm">Enter keywords, course names, or job domains to find relevant learning materials</p>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
