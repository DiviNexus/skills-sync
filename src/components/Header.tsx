
import { Button } from "@/components/ui/button";
import { Menu, X, User, Search } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { LoginDialog } from "@/components/auth/LoginDialog";
import { SignupDialog } from "@/components/auth/SignupDialog";
import { SearchDialog } from "@/components/SearchDialog";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      // If not on home page, navigate to home first then scroll
      window.location.href = `/#${sectionId}`;
      return;
    }
    
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleHomeClick = () => {
    if (location.pathname !== '/') {
      window.location.href = '/';
    }
    setIsMenuOpen(false);
  };

  const handleSwitchToSignup = () => {
    setShowLogin(false);
    setShowSignup(true);
  };

  const handleSwitchToLogin = () => {
    setShowSignup(false);
    setShowLogin(true);
  };

  return (
    <>
      <header className="bg-white shadow-sm border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/">
                <h1 className="text-2xl font-bold text-primary">SkillSync</h1>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <button 
                onClick={handleHomeClick}
                className="text-gray-700 hover:text-primary transition-colors"
              >
                Home
              </button>
              <Link to="/all-tech-domains" className="text-gray-700 hover:text-primary transition-colors">
                Skills
              </Link>
              <button 
                onClick={() => scrollToSection('roadmaps-section')}
                className="text-gray-700 hover:text-primary transition-colors"
              >
                Roadmaps
              </button>
              <Link to="/all-tech-domains" className="text-gray-700 hover:text-primary transition-colors">
                Resources
              </Link>
              <button 
                onClick={() => scrollToSection('features-section')}
                className="text-gray-700 hover:text-primary transition-colors"
              >
                About
              </button>
            </nav>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center space-x-4">
              <Button variant="ghost" size="sm" onClick={() => setShowSearch(true)}>
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
              <Button variant="ghost" size="sm" onClick={() => setShowLogin(true)}>
                <User className="h-4 w-4 mr-2" />
                Login
              </Button>
              <Button size="sm" onClick={() => setShowSignup(true)}>
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
                <button 
                  onClick={handleHomeClick}
                  className="text-gray-700 hover:text-primary transition-colors text-left"
                >
                  Home
                </button>
                <Link to="/all-tech-domains" className="text-gray-700 hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                  Skills
                </Link>
                <button 
                  onClick={() => scrollToSection('roadmaps-section')}
                  className="text-gray-700 hover:text-primary transition-colors text-left"
                >
                  Roadmaps
                </button>
                <Link to="/all-tech-domains" className="text-gray-700 hover:text-primary transition-colors" onClick={() => setIsMenuOpen(false)}>
                  Resources
                </Link>
                <button 
                  onClick={() => scrollToSection('features-section')}
                  className="text-gray-700 hover:text-primary transition-colors text-left"
                >
                  About
                </button>
                <div className="flex flex-col space-y-2 pt-4 border-t">
                  <Button variant="ghost" size="sm" className="justify-start" onClick={() => { setShowSearch(true); setIsMenuOpen(false); }}>
                    <Search className="h-4 w-4 mr-2" />
                    Search
                  </Button>
                  <Button variant="ghost" size="sm" className="justify-start" onClick={() => { setShowLogin(true); setIsMenuOpen(false); }}>
                    <User className="h-4 w-4 mr-2" />
                    Login
                  </Button>
                  <Button size="sm" onClick={() => { setShowSignup(true); setIsMenuOpen(false); }}>
                    Sign Up
                  </Button>
                </div>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Dialogs */}
      <LoginDialog 
        open={showLogin} 
        onOpenChange={setShowLogin}
        onSwitchToSignup={handleSwitchToSignup}
      />
      <SignupDialog 
        open={showSignup} 
        onOpenChange={setShowSignup}
        onSwitchToLogin={handleSwitchToLogin}
      />
      <SearchDialog 
        open={showSearch} 
        onOpenChange={setShowSearch}
      />
    </>
  );
};

export default Header;
