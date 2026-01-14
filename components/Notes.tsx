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
           <div className="text-gray-600 dark:text-gray-300 leading-relaxed font-light space-y-10 text-lg">
             
             {/* Preamble */}
             <div className="space-y-2">
               <p>I design interfaces that become calmer as you move through them.</p>
               <p>The first moment creates emotion.</p>
               <p>The next builds understanding.</p>
               <p>The rest earns trust.</p>
             </div>

             {/* 1 */}
             <div className="space-y-3">
               <h3 className="font-medium text-gray-900 dark:text-white">1. Hierarchy comes before decoration</h3>
               <p>Every interface must answer three questions, in order:</p>
               <ul className="list-disc pl-5 space-y-1 text-base md:text-lg marker:text-gray-400">
                 <li>What should the user feel first?</li>
                 <li>What should they understand next?</li>
                 <li>What should they trust last?</li>
               </ul>
               <p>If something doesn’t serve one of those, it doesn’t belong.</p>
             </div>

             {/* 2 */}
             <div className="space-y-3">
               <h3 className="font-medium text-gray-900 dark:text-white">2. Motion is a teaching tool, not a personality</h3>
               <p>Motion exists to guide, explain, and confirm.</p>
               <p>It should teach once, then step aside.</p>
               <p>Repeated animation is noise.</p>
               <p>Restraint is confidence.</p>
             </div>

             {/* 3 */}
             <div className="space-y-3">
               <h3 className="font-medium text-gray-900 dark:text-white">3. Expressiveness de-escalates with depth</h3>
               <p>Interfaces should calm down as users move deeper.</p>
               <p>Landing pages may be atmospheric.</p>
               <p>Work and tools should be factual.</p>
               <p>Daily-use surfaces should be quiet.</p>
               <p>Emotion opens the door.</p>
               <p>Clarity keeps it open.</p>
             </div>

             {/* 4 */}
             <div className="space-y-3">
               <h3 className="font-medium text-gray-900 dark:text-white">4. Affordances must be respectful</h3>
               <p>I show users what’s possible, then trust them.</p>
               <p>Affordances pause after discovery.</p>
               <p>Interfaces do not nag.</p>
               <p>Stillness is allowed.</p>
             </div>

             {/* 5 */}
             <div className="space-y-3">
               <h3 className="font-medium text-gray-900 dark:text-white">5. Light, depth, and space replace ornament</h3>
               <p>I favor optical depth over texture.</p>
               <p>Light over decoration.</p>
               <p>Spacing over borders.</p>
               <p>Visual richness should feel engineered, not illustrated.</p>
             </div>

             {/* 6 */}
             <div className="space-y-3">
               <h3 className="font-medium text-gray-900 dark:text-white">6. Confidence over persuasion</h3>
               <p>I don’t design to convince.</p>
               <p>I design to be understood.</p>
               <p>Trust is built through clarity, consistency, and restraint.</p>
             </div>

           </div>
        </div>
      </div>
    </motion.div>
  );
}