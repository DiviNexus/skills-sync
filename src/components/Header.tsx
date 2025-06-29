
import { Button } from "@/components/ui/button";
import { Menu, X, User, Search } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-primary">SkillSync Sarthi</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-primary transition-colors">
              Home
            </a>
            <a href="#" className="text-gray-700 hover:text-primary transition-colors">
              Skills
            </a>
            <a href="#" className="text-gray-700 hover:text-primary transition-colors">
              Roadmaps
            </a>
            <a href="#" className="text-gray-700 hover:text-primary transition-colors">
              Resources
            </a>
            <a href="#" className="text-gray-700 hover:text-primary transition-colors">
              About
            </a>
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="sm">
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
            <Button variant="ghost" size="sm">
              <User className="h-4 w-4 mr-2" />
              Login
            </Button>
            <Button size="sm">
              Sign Up
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-4">
              <a href="#" className="text-gray-700 hover:text-primary transition-colors">
                Home
              </a>
              <a href="#" className="text-gray-700 hover:text-primary transition-colors">
                Skills
              </a>
              <a href="#" className="text-gray-700 hover:text-primary transition-colors">
                Roadmaps
              </a>
              <a href="#" className="text-gray-700 hover:text-primary transition-colors">
                Resources
              </a>
              <a href="#" className="text-gray-700 hover:text-primary transition-colors">
                About
              </a>
              <div className="flex flex-col space-y-2 pt-4 border-t">
                <Button variant="ghost" size="sm" className="justify-start">
                  <User className="h-4 w-4 mr-2" />
                  Login
                </Button>
                <Button size="sm">
                  Sign Up
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
