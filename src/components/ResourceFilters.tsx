
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Filter, X, Search } from "lucide-react";
import { specificTechDomains, yearsOfExperience } from "@/data/resources";
import { useState } from "react";

interface ResourceFiltersProps {
  selectedCategory: string;
  selectedExperience: string;
  selectedDomain: string;
  selectedYearsExp: string;
  onCategoryChange: (category: string) => void;
  onExperienceChange: (experience: string) => void;
  onDomainChange: (domain: string) => void;
  onYearsExpChange: (years: string) => void;
  onClearFilters: () => void;
  totalResources: number;
  filteredCount: number;
}

export const ResourceFilters = ({
  selectedCategory,
  selectedExperience,
  selectedDomain,
  selectedYearsExp,
  onCategoryChange,
  onExperienceChange,
  onDomainChange,
  onYearsExpChange,
  onClearFilters,
  totalResources,
  filteredCount
}: ResourceFiltersProps) => {
  const [domainSearchQuery, setDomainSearchQuery] = useState("");
  
  const hasActiveFilters = selectedCategory !== "All" || 
                          selectedExperience !== "All Levels" || 
                          selectedDomain !== "All Domains" ||
                          selectedYearsExp !== "All Experience Levels";

  const filteredDomains = specificTechDomains.filter(domain =>
    domain.toLowerCase().includes(domainSearchQuery.toLowerCase())
  );

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg border-0 mb-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-2">
          <Filter className="h-5 w-5 text-primary" />
          <h3 className="text-lg font-semibold text-gray-800">Filter Resources</h3>
        </div>
        {hasActiveFilters && (
          <Button
            variant="outline"
            size="sm"
            onClick={onClearFilters}
            className="text-gray-600 hover:text-gray-800"
          >
            <X className="h-4 w-4 mr-1" />
            Clear Filters
          </Button>
        )}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Category</label>
          <Select value={selectedCategory} onValueChange={onCategoryChange}>
            <SelectTrigger className="bg-white">
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              {["All", "Technology", "Business", "Design", "Creative", "Healthcare", "Finance"].map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Tech Domain</label>
          <Select value={selectedDomain} onValueChange={onDomainChange}>
            <SelectTrigger className="bg-white">
              <SelectValue placeholder="Select tech domain" />
            </SelectTrigger>
            <SelectContent className="max-h-80">
              <div className="sticky top-0 bg-white p-2 border-b">
                <div className="relative">
                  <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                  <Input
                    placeholder="Search domains..."
                    value={domainSearchQuery}
                    onChange={(e) => setDomainSearchQuery(e.target.value)}
                    className="pl-8 text-sm"
                  />
                </div>
              </div>
              {filteredDomains.map((domain) => (
                <SelectItem key={domain} value={domain}>
                  {domain}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Experience Level</label>
          <Select value={selectedExperience} onValueChange={onExperienceChange}>
            <SelectTrigger className="bg-white">
              <SelectValue placeholder="Select experience level" />
            </SelectTrigger>
            <SelectContent>
              {["All Levels", "Beginner", "Intermediate", "Advanced", "Expert"].map((level) => (
                <SelectItem key={level} value={level}>
                  {level}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Years of Experience</label>
          <Select value={selectedYearsExp} onValueChange={onYearsExpChange}>
            <SelectTrigger className="bg-white">
              <SelectValue placeholder="Select years" />
            </SelectTrigger>
            <SelectContent>
              {yearsOfExperience.map((years) => (
                <SelectItem key={years} value={years}>
                  {years}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="bg-gradient-to-r from-primary/10 to-purple-600/10 rounded-lg p-3 mb-4">
        <p className="text-sm font-medium text-gray-800">
          Showing {filteredCount} of {totalResources} resources
        </p>
        <p className="text-xs text-gray-600 mt-1">
          🎯 {hasActiveFilters ? "Filtered results" : "All resources"}
        </p>
      </div>

      {hasActiveFilters && (
        <div className="flex flex-wrap gap-2">
          <span className="text-sm text-gray-600">Active filters:</span>
          {selectedCategory !== "All" && (
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
              Category: {selectedCategory}
            </Badge>
          )}
          {selectedDomain !== "All Domains" && (
            <Badge variant="secondary" className="bg-blue-100 text-blue-800 border-blue-200">
              Domain: {selectedDomain}
            </Badge>
          )}
          {selectedExperience !== "All Levels" && (
            <Badge variant="secondary" className="bg-purple-100 text-purple-800 border-purple-200">
              Level: {selectedExperience}
            </Badge>
          )}
          {selectedYearsExp !== "All Experience Levels" && (
            <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-200">
              Years: {selectedYearsExp}
            </Badge>
          )}
        </div>
      )}
    </div>
  );
};
