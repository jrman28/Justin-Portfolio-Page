import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";
import TerminalHeroCard from "./TerminalHeroCard";

export default function HeroSection() {
  const [hasInteracted, setHasInteracted] = useState(false);

  useEffect(() => {
    const interacted = sessionStorage.getItem('npx_interacted');
    if (interacted === 'true') {
      setHasInteracted(true);
    }
  }, []);

  const handleInteraction = () => {
    if (!hasInteracted) {
      setHasInteracted(true);
      sessionStorage.setItem('npx_interacted', 'true');
    }
  };

  return (
    <section className="relative max-w-7xl mx-auto px-6 pt-32 md:pt-40 lg:pt-48 pb-12 md:pb-16 lg:pb-20 overflow-visible">
      <motion.div 
        layout="position"
        transition={{ type: "spring", stiffness: 200, damping: 25 }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-24 items-center"
      >
        
        {/* LEFT: Text Content */}
        <motion.div 
          layout="position"
          className="relative z-10 flex flex-col justify-center order-1 w-full max-w-[92vw] sm:max-w-xl mx-auto lg:mx-0 lg:max-w-none"
        >
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-[0.95] tracking-tight text-primary dark:text-white mb-6 md:mb-8">
            Building <br />
            <span 
              className="inline-block text-secondary dark:text-[#a097cc] [text-shadow:0_6px_16px_rgba(126,120,156,0.25),0_1px_2px_rgba(0,0,0,0.05)] dark:[text-shadow:0_0_24px_rgba(160,151,204,0.3),0_4px_12px_rgba(0,0,0,0.5)] transition-all duration-300"
            >
              digital
            </span> <br />
            products.
          </h1>

          <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 font-light leading-relaxed max-w-[65ch] mb-8 md:mb-10">
            I'm Justin Ragland, a Full Stack Developer crafting seamless web
            experiences with modern tools. Deploying clean, scalable code for
            your next big idea.
          </p>

          {/* NPX Command CTA */}
          <div>
            <a 
              href="mailto:hello@raglandlabs.com"
              onClick={handleInteraction}
              onFocus={handleInteraction}
              className="relative group inline-flex items-center px-5 py-3 rounded-lg bg-white dark:bg-[#050505] border border-gray-200 dark:border-white/10 font-mono text-sm shadow-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:border-gray-300 dark:hover:border-white/20 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500/50 cursor-pointer overflow-hidden"
            >
              <AnimatePresence>
                {!hasInteracted && (
                  <motion.svg
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 w-full h-full pointer-events-none z-0"
                  >
                    <motion.rect
                      x="1"
                      y="1"
                      width="calc(100% - 2px)"
                      height="calc(100% - 2px)"
                      rx="7"
                      fill="none"
                      stroke="currentColor"
                      className="text-purple-400/80 dark:text-purple-400/90"
                      strokeWidth="2"
                      strokeLinecap="round"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{
                        pathLength: [0, 0.25, 0],
                        pathOffset: [0, 1],
                        opacity: [0, 1, 0]
                      }}
                      transition={{
                        duration: 3,
                        ease: "easeInOut",
                        repeat: Infinity,
                        repeatDelay: 6
                      }}
                    />
                  </motion.svg>
                )}
              </AnimatePresence>
              
              <span className="relative z-10 text-gray-400 dark:text-gray-600 mr-2.5 select-none">&gt;</span>
              <span className="relative z-10 text-gray-800 dark:text-gray-100 font-medium mr-2.5">npx</span>
              <span className="relative z-10 text-purple-600 dark:text-[#c084fc] font-medium group-hover:text-purple-700 dark:group-hover:text-purple-400 transition-colors">
                contact-justin
              </span>
              <span className="relative z-10 ml-2.5 w-2.5 h-5 bg-gray-400/80 dark:bg-gray-500 group-hover:animate-cursor-blink group-focus:animate-cursor-blink" />
            </a>
          </div>
        </motion.div>

        {/* RIGHT: Terminal Card */}
        <motion.div 
          layout="position"
          className="relative flex justify-center lg:justify-end order-2"
        >
          <TerminalHeroCard />
        </motion.div>
      </motion.div>
    </section>
  );
}