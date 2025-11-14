import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { Button } from './ui/button';
import { motion, AnimatePresence } from 'motion/react';
import { useTheme } from '../contexts/ThemeContext';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navigateToPage = (path: string) => {
    setIsMobileMenuOpen(false);
    navigate(path);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white dark:bg-gray-900 shadow-md transition-colors"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">AI</span>
            </div>
            <span className="text-2xl font-bold flex items-baseline">
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">AI</span>
              <span className="text-3xl text-orange-500 mx-0.5">M</span>
              <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">AX</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => navigateToPage('/solutions')}
              className="text-slate-800 dark:text-slate-200 font-semibold hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Solutions
            </button>
            <button
              onClick={() => navigateToPage('/process')}
              className="text-slate-800 dark:text-slate-200 font-semibold hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Process
            </button>
            <button
              onClick={() => scrollToSection('success')}
              className="text-slate-800 dark:text-slate-200 font-semibold hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Success Stories
            </button>
            <button
              onClick={() => navigateToPage('/about')}
              className="text-slate-800 dark:text-slate-200 font-semibold hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('insights')}
              className="text-slate-800 dark:text-slate-200 font-semibold hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              Insights
            </button>
            
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Moon className="w-5 h-5 text-slate-800 dark:text-slate-200" />
              ) : (
                <Sun className="w-5 h-5 text-slate-800 dark:text-slate-200" />
              )}
            </button>
            
            <Button
              onClick={() => scrollToSection('contact')}
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-bold shadow-lg"
            >
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Moon className="w-5 h-5 text-slate-800 dark:text-slate-200" />
              ) : (
                <Sun className="w-5 h-5 text-slate-800 dark:text-slate-200" />
              )}
            </button>
            <button
              className="text-slate-800 dark:text-slate-200"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white dark:bg-gray-900 border-t dark:border-gray-800"
            >
              <div className="py-4 space-y-4">
                <button
                  onClick={() => navigateToPage('/solutions')}
                  className="block w-full text-left px-4 py-2 text-slate-800 dark:text-slate-200 font-semibold hover:bg-blue-50 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Solutions
                </button>
                <button
                  onClick={() => navigateToPage('/process')}
                  className="block w-full text-left px-4 py-2 text-slate-800 dark:text-slate-200 font-semibold hover:bg-blue-50 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Process
                </button>
                <button
                  onClick={() => scrollToSection('success')}
                  className="block w-full text-left px-4 py-2 text-slate-800 dark:text-slate-200 font-semibold hover:bg-blue-50 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Success Stories
                </button>
                <button
                  onClick={() => navigateToPage('/about')}
                  className="block w-full text-left px-4 py-2 text-slate-800 dark:text-slate-200 font-semibold hover:bg-blue-50 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection('insights')}
                  className="block w-full text-left px-4 py-2 text-slate-800 dark:text-slate-200 font-semibold hover:bg-blue-50 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400"
                >
                  Insights
                </button>
                <div className="px-4">
                  <Button
                    onClick={() => scrollToSection('contact')}
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold hover:from-blue-700 hover:to-blue-800 shadow-lg"
                  >
                    Contact Us
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
