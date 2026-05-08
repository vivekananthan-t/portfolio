import { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { User, Briefcase, Award, FileText, Menu, X, ChevronDown } from 'lucide-react';

const navItems = [
  { name: 'About Me', path: '/', icon: <User size={18} /> },
  { name: 'Projects', path: '/projects', icon: <Briefcase size={18} /> },
  { name: 'Certifications', path: '/certifications', icon: <Award size={18} /> },
  { name: 'Resume', path: '/resume', icon: <FileText size={18} /> },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setOpenDropdown(null);
  }, [location]);

  const toggleDropdown = (itemName: string) => {
    setOpenDropdown(openDropdown === itemName ? null : itemName);
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? 'py-3 glass shadow-md' : 'py-5 bg-transparent'}`}>
      <div className="container mx-auto px-4 md:px-8">
        <nav className="flex items-center justify-between">
          <NavLink to="/" className="font-display text-xl font-bold text-gray-800">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Portfolio
            </motion.div>
          </NavLink>

          <ul className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <li key={item.path} className="relative">
                {item.subItems ? (
                  <div className="relative">
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className={`px-4 py-2 rounded-lg font-medium flex items-center gap-2 transition-all duration-200 ${
                        location.pathname.startsWith(item.path)
                          ? 'text-gray-800 bg-white/50' 
                          : 'text-gray-700 hover:text-gray-800 hover:bg-white/50'
                      }`}
                    >
                      {item.icon}
                      {item.name}
                      <ChevronDown size={14} className={`transition-transform ${openDropdown === item.name ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {openDropdown === item.name && (
                      <motion.div
                        className="absolute top-full left-0 mt-1 glass-card rounded-lg shadow-lg min-w-[160px]"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                      >
                        {item.subItems.map((subItem) => (
                          <NavLink
                            key={subItem.path}
                            to={subItem.path}
                            className={({ isActive }) => 
                              `block px-4 py-2 text-sm font-medium transition-colors first:rounded-t-lg last:rounded-b-lg ${
                                isActive 
                                  ? 'text-gray-800 bg-white/50' 
                                  : 'text-gray-700 hover:text-gray-800 hover:bg-white/50'
                              }`
                            }
                          >
                            {subItem.name}
                          </NavLink>
                        ))}
                      </motion.div>
                    )}
                  </div>
                ) : (
                  <NavLink
                    to={item.path}
                    className={({ isActive }) => 
                      `relative px-4 py-2 rounded-lg font-medium flex items-center gap-2 transition-all duration-200 ${
                        isActive 
                          ? 'text-gray-800 bg-white/50' 
                          : 'text-gray-700 hover:text-gray-800 hover:bg-white/50'
                      }`
                    }
                  >
                    {item.icon}
                    {item.name}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>

          <button 
            className="md:hidden text-gray-700 p-1" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </div>

      {isMenuOpen && (
        <motion.div 
          className="md:hidden glass-card m-4 rounded-xl overflow-hidden shadow-xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
        >
          <ul className="py-2">
            {navItems.map((item) => (
              <li key={item.path}>
                {item.subItems ? (
                  <div>
                    <button
                      onClick={() => toggleDropdown(item.name)}
                      className={`w-full text-left px-6 py-3 font-medium flex items-center justify-between ${
                        location.pathname.startsWith(item.path)
                          ? 'text-gray-800 bg-white/50' 
                          : 'text-gray-700 hover:text-gray-800 hover:bg-white/50'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        {item.icon}
                        {item.name}
                      </div>
                      <ChevronDown size={14} className={`transition-transform ${openDropdown === item.name ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {openDropdown === item.name && (
                      <div className="bg-white/30">
                        {item.subItems.map((subItem) => (
                          <NavLink
                            key={subItem.path}
                            to={subItem.path}
                            className={({ isActive }) => 
                              `block px-12 py-2 text-sm font-medium ${
                                isActive 
                                  ? 'text-gray-800 bg-white/50' 
                                  : 'text-gray-700 hover:text-gray-800 hover:bg-white/50'
                              }`
                            }
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {subItem.name}
                          </NavLink>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <NavLink
                    to={item.path}
                    className={({ isActive }) => 
                      `block px-6 py-3 font-medium flex items-center gap-3 ${
                        isActive 
                          ? 'text-gray-800 bg-white/50' 
                          : 'text-gray-700 hover:text-gray-800 hover:bg-white/50'
                      }`
                    }
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.icon}
                    {item.name}
                  </NavLink>
                )}
              </li>
            ))}
          </ul>
        </motion.div>
      )}
    </header>
  );
}