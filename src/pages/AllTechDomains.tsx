
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, ExternalLink, Play, Star, Loader2, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLazyLoading } from "@/hooks/useLazyLoading";
import { ResourceFilters } from "@/components/ResourceFilters";
import { allResources } from "@/data/resources";
import { useState, useMemo } from "react";

const AllTechDomains = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedExperience, setSelectedExperience] = useState("All Levels");

  // Filter resources based on selected filters
  const filteredResources = useMemo(() => {
    return allResources.filter(resource => {
      const categoryMatch = selectedCategory === "All" || resource.category === selectedCategory;
      const experienceMatch = selectedExperience === "All Levels" || resource.experienceLevel === selectedExperience;
      return categoryMatch && experienceMatch;
    });
  }, [selectedCategory, selectedExperience]);

  const { displayedItems, loading, hasMore, scrollCount } = useLazyLoading({
    initialItems: filteredResources,
    itemsPerLoad: 6, // Increased from 3 to show more resources at once
    maxScrolls: 30 // Increased to accommodate more resources
  });

  const handleClearFilters = () => {
    setSelectedCategory("All");
    setSelectedExperience("All Levels");
  };

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
      case "Healthcare":
        return "bg-gradient-to-r from-pink-100 to-rose-100 text-pink-800 border-pink-200";
      case "Finance":
        return "bg-gradient-to-r from-yellow-100 to-amber-100 text-yellow-800 border-yellow-200";
      case "Education":
        return "bg-gradient-to-r from-indigo-100 to-blue-100 text-indigo-800 border-indigo-200";
      case "Science":
        return "bg-gradient-to-r from-teal-100 to-cyan-100 text-teal-800 border-teal-200";
      case "Law":
        return "bg-gradient-to-r from-slate-100 to-gray-100 text-slate-800 border-slate-200";
      default:
        return "bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 border-gray-200";
    }
  };

  const getExperienceColor = (level: string) => {
    switch (level) {
      case "Beginner":
        return "bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 border-green-200";
      case "Intermediate":
        return "bg-gradient-to-r from-yellow-100 to-amber-100 text-yellow-800 border-yellow-200";
      case "Advanced":
        return "bg-gradient-to-r from-orange-100 to-red-100 text-orange-800 border-orange-200";
      case "Expert":
        return "bg-gradient-to-r from-red-100 to-pink-100 text-red-800 border-red-200";
      default:
        return "bg-gradient-to-r from-gray-100 to-gray-200 text-gray-800 border-gray-200";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center mb-8">
          <Link to="/">
            <Button variant="ghost" size="sm" className="hover:bg-primary/5">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>

        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-primary to-purple-600 rounded-full mb-6">
            <Sparkles className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent mb-4">
            🚀 All Skills & Resources
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover amazing learning resources across all domains. Your next skill is just a click away! ✨
          </p>
          <div className="mt-4 text-sm text-gray-500">
            {allResources.length}+ resources from diverse domains worldwide
          </div>
        </div>

        <ResourceFilters
          selectedCategory={selectedCategory}
          selectedExperience={selectedExperience}
          onCategoryChange={setSelectedCategory}
          onExperienceChange={setSelectedExperience}
          onClearFilters={handleClearFilters}
          totalResources={allResources.length}
          filteredCount={filteredResources.length}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedItems.map((resource, index) => (
            <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:scale-105 bg-white/80 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <div className="flex items-start justify-between mb-3">
                  <div className="flex flex-wrap gap-2">
                    <Badge className={`${getPlatformColor(resource.platform)} shadow-sm`} variant="secondary">
                      {resource.platform}
                    </Badge>
                    <Badge className={`${getCategoryColor(resource.category)} shadow-sm`} variant="secondary">
                      {resource.category}
                    </Badge>
                    <Badge className={`${getExperienceColor(resource.experienceLevel)} shadow-sm text-xs`} variant="secondary">
                      {resource.experienceLevel}
                    </Badge>
                  </div>
                  {resource.trending && (
                    <Badge className="bg-gradient-to-r from-orange-100 to-red-100 text-orange-800 border-orange-200 shadow-sm animate-pulse" variant="secondary">
                      🔥 Trending
                    </Badge>
                  )}
                </div>
                <CardTitle className="text-lg leading-tight hover:text-primary transition-colors">
                  {resource.title}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  By {resource.instructor} • {resource.duration}
                </CardDescription>
                {resource.description && (
                  <p className="text-sm text-gray-500 mt-2">{resource.description}</p>
                )}
              </CardHeader>
              <CardContent>
                <div className="flex items-center mb-4">
                  <Star className="h-4 w-4 text-yellow-500 fill-current" />
                  <span className="ml-1 text-sm font-medium">{resource.rating}</span>
                  <span className="ml-1 text-xs text-gray-500">rating</span>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {resource.tags.slice(0, 3).map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="text-xs bg-gray-50/80 hover:bg-gray-100 transition-colors">
                      {tag}
                    </Badge>
                  ))}
                  {resource.tags.length > 3 && (
                    <Badge variant="outline" className="text-xs bg-gray-50/80">
                      +{resource.tags.length - 3}
                    </Badge>
                  )}
                </div>

                <Button 
                  asChild 
                  className="w-full bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 shadow-lg hover:shadow-xl transition-all duration-300"
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
          <div className="flex justify-center items-center py-12">
            <div className="text-center">
              <Loader2 className="h-12 w-12 animate-spin text-primary mx-auto mb-4" />
              <span className="text-lg text-gray-600 font-medium">Loading more amazing resources...</span>
              <p className="text-sm text-gray-500 mt-1">Get ready for your next learning adventure! 🎯</p>
            </div>
          </div>
        )}

        {!hasMore && scrollCount >= 30 && (
          <div className="text-center py-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-100 to-emerald-100 rounded-full mb-4">
              <Sparkles className="h-8 w-8 text-green-600" />
            </div>
            <p className="text-xl font-semibold text-gray-700 mb-2">🎉 You've explored all filtered resources!</p>
            <p className="text-gray-600">Try adjusting your filters to discover more amazing content! 🚀</p>
          </div>
        )}

        {filteredResources.length === 0 && (
          <div className="text-center py-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-gray-100 to-gray-200 rounded-full mb-4">
              <Sparkles className="h-8 w-8 text-gray-400" />
            </div>
            <p className="text-xl font-semibold text-gray-700 mb-2">No resources found</p>
            <p className="text-gray-600 mb-4">Try adjusting your filters to see more resources</p>
            <Button onClick={handleClearFilters} variant="outline">
              Clear All Filters
            </Button>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default AllTechDomains;
