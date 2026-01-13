import React, { useState, useEffect, useRef } from 'react';
import { motion, Variants, AnimatePresence, LayoutGroup } from 'framer-motion';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectCard from './components/ProjectCard';
import ComingSoon from './components/ComingSoon';
import Notes from './components/Notes';
import Footer from './components/Footer';
import { projects } from './constants';

type ViewState = 'home' | 'coming-soon' | 'notes';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentView, setCurrentView] = useState<ViewState>('home');
  const pendingScrollRef = useRef<string | null>(null);
  
  // Responsive breakpoints state for Framer Motion layout animations
  const [isLg, setIsLg] = useState(false);
  const [isMd, setIsMd] = useState(false);

  const scrollToTarget = (target: string) => {
    if (target === '#home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const id = target.substring(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  useEffect(() => {
    // Theme logic
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else if (savedTheme === 'light') {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    } else {
      // Default to system preference, otherwise Light
      const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      if (systemPrefersDark) {
          setIsDarkMode(true);
          document.documentElement.classList.add('dark');
      } else {
          setIsDarkMode(false);
          document.documentElement.classList.remove('dark');
      }
    }

    // Responsive logic
    const handleResize = () => {
      const width = window.innerWidth;
      setIsLg(width >= 1024);
      setIsMd(width >= 768);
    };
    
    // Initial check
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Navigation Logic
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;

      if (hash === '#notes') {
        if (currentView !== 'notes') {
          setCurrentView('notes');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      } else if (hash.startsWith('#project')) {
        if (currentView !== 'coming-soon') {
          setCurrentView('coming-soon');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      } else {
        // Home routes: #home, #work, #about, or empty
        const target = hash || '#home';
        
        if (currentView !== 'home') {
          // Switch view and queue scroll
          pendingScrollRef.current = target;
          setCurrentView('home');
        } else {
          // Already on home, scroll immediately
          scrollToTarget(target);
        }
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [currentView]);

  // Initial Load Handling
  useEffect(() => {
    const hash = window.location.hash;
    if (hash === '#notes') {
      setCurrentView('notes');
    } else if (hash.startsWith('#project')) {
      setCurrentView('coming-soon');
    } else if (hash === '#work' || hash === '#about') {
      // Small timeout to allow initial render
      setTimeout(() => scrollToTarget(hash), 500);
    }
  }, []);

  const handleExitComplete = () => {
    if (pendingScrollRef.current) {
      const target = pendingScrollRef.current;
      pendingScrollRef.current = null;
      // Timeout ensures the entering component is mounted and layout is ready
      setTimeout(() => {
        scrollToTarget(target);
      }, 100);
    }
  };

  const toggleTheme = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    
    if (newMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  const showComingSoon = () => {
    window.location.hash = '#project';
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.8, 
        ease: [0.2, 0.8, 0.2, 1] as [number, number, number, number]
      }
    }
  };

  return (
    <div className="relative min-h-screen bg-background-light dark:bg-[#13141C] text-primary dark:text-gray-100 font-display transition-colors duration-300 overflow-x-hidden flex flex-col">
      <Navbar isDarkMode={isDarkMode} toggleTheme={toggleTheme} />

      <LayoutGroup>
        <AnimatePresence mode="wait" onExitComplete={handleExitComplete}>
          {currentView === 'home' ? (
            <motion.main 
              key="home"
              className="relative z-10 flex-grow"
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={containerVariants}
            >
              
              {/* Hero Section */}
              <motion.div variants={itemVariants}>
                <HeroSection />
              </motion.div>

              {/* Selected Works Section */}
              <motion.div id="work" className="max-w-7xl mx-auto px-6 space-y-6 pt-12 pb-20 scroll-mt-24" variants={itemVariants}>
                <div className="flex items-center justify-between mb-8">
                  <h2 className="font-mono text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-[0.2em] pl-1">
                    Selected Works
                  </h2>
                </div>
                
                <motion.div 
                  className={`grid gap-6 ${
                    isMd 
                      ? "grid-cols-2" 
                      : "grid-cols-1"
                  }`}
                >
                  {projects.map((project, index) => (
                    <motion.div key={index} layoutId={`project-${index}`}>
                      <ProjectCard 
                        project={project} 
                        featured={index === 0} 
                        onClick={showComingSoon}
                      />
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>

              {/* About Section */}
              <motion.div variants={itemVariants}>
                <AboutSection />
              </motion.div>

            </motion.main>
          ) : currentView === 'notes' ? (
            <motion.main
              key="notes"
              className="relative z-10 flex-grow"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Notes />
            </motion.main>
          ) : (
            <motion.main
              key="coming-soon"
              className="relative z-10 flex-grow flex flex-col justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <ComingSoon />
            </motion.main>
          )}
        </AnimatePresence>
      </LayoutGroup>

      <Footer />
    </div>
  );
};

export default App;