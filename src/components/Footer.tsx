
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-400 bg-clip-text text-transparent">
                SkillSync ✨
              </h3>
            </Link>
            <p className="text-gray-300 mb-4 max-w-md">
              Your personalized learning companion. Discover amazing courses, get AI-powered roadmaps, 
              and accelerate your career growth with curated resources from top platforms! 🚀
            </p>
            <p className="text-sm text-gray-400">
              © 2024 SkillSync. Made with ❤️ for learners worldwide.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">🎯 Explore</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/technology-skills" className="text-gray-300 hover:text-primary transition-colors">
                  Technology Skills
                </Link>
              </li>
              <li>
                <Link to="/design-skills" className="text-gray-300 hover:text-primary transition-colors">
                  Design Skills
                </Link>
              </li>
              <li>
                <Link to="/business-skills" className="text-gray-300 hover:text-primary transition-colors">
                  Business Skills
                </Link>
              </li>
              <li>
                <Link to="/creative-skills" className="text-gray-300 hover:text-primary transition-colors">
                  Creative Skills
                </Link>
              </li>
              <li>
                <Link to="/all-tech-domains" className="text-gray-300 hover:text-primary transition-colors">
                  All Resources
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">🤝 Support</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-primary transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400">
            🌟 Empowering learners to achieve their dreams through personalized education
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
