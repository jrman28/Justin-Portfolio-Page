import React from 'react';
import { motion } from 'framer-motion';

export default function ComingSoon() {
  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-[70vh] flex flex-col items-center justify-center text-center px-6 relative w-full"
    >
      {/* Background Pattern - Subtle & Quiet */}
      <div 
        className="absolute inset-0 grid-pattern opacity-[0.02] dark:opacity-[0.05] pointer-events-none" 
        style={{ 
          maskImage: 'radial-gradient(circle at center, black 30%, transparent 70%)', 
          WebkitMaskImage: 'radial-gradient(circle at center, black 30%, transparent 70%)' 
        }} 
      />
      
      <div className="relative z-10 flex flex-col items-center max-w-lg mx-auto">
        {/* Metadata */}
        <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-gray-400 dark:text-gray-500 mb-8">
          Status: Building
        </div>
        
        {/* Headline with Static Lift Effect */}
        <h1 className="text-4xl md:text-5xl font-bold text-primary dark:text-gray-100 mb-8 tracking-tight leading-tight">
          <span className="inline-block transition-all duration-300 text-primary dark:text-white drop-shadow-lg dark:drop-shadow-[0_8px_16px_rgba(255,255,255,0.08)]">
            Work
          </span>{" "}
          <span className="text-gray-900 dark:text-gray-100">
            in progress.
          </span>
        </h1>
        
        {/* Supporting Text */}
        <p className="text-gray-500 dark:text-gray-400 text-lg sm:text-xl font-light leading-relaxed max-w-md mx-auto">
          Full details will be published when ready.
        </p>
      </div>
    </motion.div>
  );
}