import { useState, useEffect, MouseEvent } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';

interface NavbarProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

const Navbar = ({ isDarkMode, toggleTheme }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMenuOpen]);

  const navLinks = [
    { href: "#work", label: "Work" },
    { href: "#about", label: "About" },
    { href: "#notes", label: "Notes", secondary: true },
    { href: "mailto:hello@raglandlabs.com", label: "Contact" }
  ];

  const socialLinks = [
    { icon: "fab fa-github", href: "https://github.com/jrman28", label: "Github" },
    { icon: "fab fa-twitter", href: "https://x.com/BTConnector", label: "Twitter" },
    { icon: "fab fa-linkedin", href: "https://www.linkedin.com/in/justin-ragland-0b924125", label: "LinkedIn" }
  ];

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('mailto:')) return;
    
    e.preventDefault();
    window.location.hash = href;
    setIsMenuOpen(false);
  };

  const themeToggleClasses = "p-2 text-gray-400 hover:text-purple-600 dark:text-gray-500 dark:hover:text-purple-400 transition-colors rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background-light dark:focus-visible:ring-offset-background-dark";

  return (
    <>
      <nav className="fixed top-0 inset-x-0 z-50 w-full backdrop-blur-xl bg-white/50 dark:bg-[#13141C]/50 border-b border-gray-200/30 dark:border-gray-800/30 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a 
            href="#home" 
            onClick={(e) => handleNavClick(e, '#home')}
            className="font-mono font-bold text-lg tracking-tight text-primary dark:text-gray-100 z-50 focus:outline-none"
          >
            JR<span className="text-secondary">.dev</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6 text-sm font-medium text-gray-600 dark:text-gray-400">
              {navLinks.map((link) => (
                <a 
                  key={link.label}
                  href={link.href} 
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`transition-colors ${
                    link.secondary 
                      ? "text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300" 
                      : "hover:text-primary dark:hover:text-white"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
            <button 
              onClick={toggleTheme}
              className={themeToggleClasses}
              aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
            >
              {isDarkMode ? (
                <i className="fas fa-sun text-sm"></i>
              ) : (
                <i className="fas fa-moon text-sm"></i>
              )}
            </button>
          </div>

          {/* Mobile Actions */}
          <div className="flex items-center space-x-4 md:hidden z-50">
            <button 
              onClick={toggleTheme}
              className={themeToggleClasses}
              aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
            >
              {isDarkMode ? (
                <i className="fas fa-sun text-sm"></i>
              ) : (
                <i className="fas fa-moon text-sm"></i>
              )}
            </button>
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-gray-600 dark:text-gray-300 focus:outline-none"
              aria-label="Toggle menu"
            >
              <i className="fas fa-bars text-xl"></i>
            </button>
          </div>
        </div>
      </nav>

      {/* Full Screen Mobile Menu Portal */}
      {createPortal(
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
              animate={{ opacity: 1, clipPath: "circle(150% at 100% 0%)" }}
              exit={{ opacity: 0, clipPath: "circle(0% at 100% 0%)" }}
              transition={{ duration: 0.4, ease: [0.32, 0, 0.67, 0] }}
              className="fixed inset-0 z-[100] bg-white/95 dark:bg-[#13141C]/95 backdrop-blur-xl md:hidden flex flex-col"
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 grid-pattern opacity-[0.1] dark:opacity-[0.15] pointer-events-none" />

              {/* Header inside Menu (to replicate Nav position) */}
              <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between w-full shrink-0 relative z-20">
                <a href="#home" onClick={(e) => handleNavClick(e, '#home')} className="font-mono font-bold text-lg tracking-tight text-primary dark:text-gray-100">
                  JR<span className="text-secondary">.dev</span>
                </a>
                <div className="flex items-center space-x-4">
                    <button 
                      onClick={toggleTheme}
                      className={themeToggleClasses}
                      aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
                    >
                      {isDarkMode ? (
                        <i className="fas fa-sun text-sm"></i>
                      ) : (
                        <i className="fas fa-moon text-sm"></i>
                      )}
                    </button>
                    <button 
                      onClick={() => setIsMenuOpen(false)}
                      className="p-2 text-gray-600 dark:text-gray-300 focus:outline-none"
                      aria-label="Close menu"
                    >
                      <i className="fas fa-times text-xl"></i>
                    </button>
                </div>
              </div>

              {/* Menu Content */}
              <div className="flex-1 flex flex-col items-center justify-center space-y-10 relative z-20 pb-20">
                <div className="flex flex-col items-center space-y-8">
                  {navLinks.map((link, idx) => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ delay: 0.1 + (idx * 0.1), duration: 0.4, ease: "easeOut" }}
                      className={`text-4xl font-display font-bold transition-colors ${
                        link.secondary
                          ? "text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300"
                          : "text-primary dark:text-white hover:text-secondary dark:hover:text-purple-400"
                      }`}
                    >
                      {link.label}
                    </motion.a>
                  ))}
                </div>

                <motion.div 
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: "60px" }}
                  transition={{ delay: 0.4, duration: 0.4 }}
                  className="h-px bg-gray-200 dark:bg-gray-800"
                />

                {/* Social Icons */}
                <motion.div 
                  className="flex space-x-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.4 }}
                >
                   {socialLinks.map((social) => (
                      <a 
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noreferrer"
                        className="text-gray-400 hover:text-primary dark:hover:text-white transition-colors transform hover:scale-110 active:scale-95 duration-200 p-2"
                        aria-label={social.label}
                      >
                        <i className={`${social.icon} text-2xl`}></i>
                      </a>
                   ))}
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
};

export default Navbar;