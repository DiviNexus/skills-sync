
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Filter, X } from "lucide-react";
import { categories, experienceLevels } from "@/data/resources";

interface ResourceFiltersProps {
  selectedCategory: string;
  selectedExperience: string;
  onCategoryChange: (category: string) => void;
  onExperienceChange: (experience: string) => void;
  onClearFilters: () => void;
  totalResources: number;
  filteredCount: number;
}

export const ResourceFilters = ({
  selectedCategory,
  selectedExperience,
  onCategoryChange,
  onExperienceChange,
  onClearFilters,
  totalResources,
  filteredCount
}: ResourceFiltersProps) => {
  const hasActiveFilters = selectedCategory !== "All" || selectedExperience !== "All Levels";

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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700">Domain</label>
          <Select value={selectedCategory} onValueChange={onCategoryChange}>
            <SelectTrigger className="bg-white">
              <SelectValue placeholder="Select domain" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category} value={category}>
                  {category}
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
              {experienceLevels.map((level) => (
                <SelectItem key={level} value={level}>
                  {level}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-end">
          <div className="bg-gradient-to-r from-primary/10 to-purple-600/10 rounded-lg p-3 w-full">
            <p className="text-sm font-medium text-gray-800">
              Showing {filteredCount} of {totalResources} resources
            </p>
            <p className="text-xs text-gray-600 mt-1">
              🎯 {hasActiveFilters ? "Filtered results" : "All resources"}
            </p>
          </div>
        </div>
      </div>

      {hasActiveFilters && (
        <div className="flex flex-wrap gap-2">
          <span className="text-sm text-gray-600">Active filters:</span>
          {selectedCategory !== "All" && (
            <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
              Domain: {selectedCategory}
            </Badge>
          )}
          {selectedExperience !== "All Levels" && (
            <Badge variant="secondary" className="bg-purple-100 text-purple-800 border-purple-200">
              Level: {selectedExperience}
            </Badge>
          )}
        </div>
      )}
    </div>
  );
};
