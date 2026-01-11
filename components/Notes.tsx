import React from 'react';
import { motion } from 'framer-motion';

export default function Notes() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="min-h-[80vh] w-full px-6 pt-24 md:pt-32 pb-20 flex justify-center"
    >
      <div className="w-full max-w-2xl">
        <div className="bg-white dark:bg-[#23242f] rounded-2xl p-8 md:p-12 shadow-sm dark:shadow-none border border-gray-100 dark:border-gray-800">
           {/* Label */}
           <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-gray-400 dark:text-gray-500 mb-8">
             Manifesto
           </div>

           {/* Title */}
           <h1 className="text-3xl md:text-4xl font-bold text-primary dark:text-gray-100 mb-10 tracking-tight leading-tight">
             Intentional De-escalation
           </h1>

           {/* Body */}
           <div className="text-gray-600 dark:text-gray-300 leading-relaxed font-light space-y-8 text-lg">
             <div className="space-y-3">
               <p className="font-medium text-gray-900 dark:text-white">Interaction hierarchy</p>
               <ul className="list-none space-y-1 pl-0 m-0 text-base md:text-lg">
                 <li>Hero: expressive, atmospheric, animated</li>
                 <li>About: restrained, human, lightly tactile</li>
                 <li>Work: solid, factual, utilitarian</li>
               </ul>
             </div>

             <p>
               Motion de-escalates as the page progresses.
               The hero creates emotion.
               The work creates trust.
             </p>

             <p>
               This philosophy favors clarity over novelty and intention over excess.
               Every visual decision should earn its place.
               Motion should guide, not distract.
               Interfaces should feel calm, confident, and human.
             </p>

             <p>
               Good design is not loud.
               It is composed.
               It respects attention and builds trust over time.
             </p>
           </div>
        </div>
      </div>
    </motion.div>
  );
}