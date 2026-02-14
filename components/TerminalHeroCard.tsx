import { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";

export default function TerminalHeroCard() {
  const [copied, setCopied] = useState(false);

  const codeSnippet = `const stack = new Developer({
  name: "Justin Ragland",
  role: "Product Engineer",
  skills: [
    "React",
    "TypeScript",
    "Design Systems"
  ],
  build: () => {
    return {
      clean: true,
      scalable: true,
      userFocused: true
    }
  }
});`;

  const handleCopy = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative group w-full max-w-[92vw] sm:max-w-xl mx-auto lg:mx-0"
    >
      {/* Localized Dot Pattern with Radial Fade */}
      <div 
        aria-hidden="true"
        className="absolute -inset-24 -z-10 grid-pattern opacity-60 md:opacity-100"
        style={{
          maskImage: "radial-gradient(circle closest-side at center, black 60%, transparent 100%)",
          WebkitMaskImage: "radial-gradient(circle closest-side at center, black 60%, transparent 100%)"
        }}
      />

      {/* Ambient Glow */}
      <motion.div
        aria-hidden
        className="absolute -inset-2 md:-inset-1 rounded-2xl blur-xl bg-gradient-to-r from-purple-500/40 to-blue-500/40 md:from-purple-500/20 md:to-blue-500/20 dark:from-purple-500/30 dark:to-blue-500/30"
        animate={{ 
          opacity: [0.5, 0.7, 0.5],
          scale: [1, 1.02, 1]
        }}
        transition={{ 
          duration: 10, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />

      {/* Card */}
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="relative bg-white dark:bg-[#15161E] border border-gray-200 dark:border-gray-800 rounded-xl shadow-2xl overflow-hidden z-10"
      >
        {/* Header */}
        <div className="relative flex items-center justify-between px-3 sm:px-4 py-2.5 border-b border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-[#1A1B26]">
          <div className="flex space-x-2">
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-red-400 dark:bg-red-500/80" />
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-amber-400 dark:bg-amber-500/80" />
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-emerald-400 dark:bg-emerald-500/80" />
          </div>

          <div className="absolute left-1/2 transform -translate-x-1/2 text-[10px] sm:text-xs text-gray-400 font-mono tracking-wide truncate max-w-[50%] select-none">
            portfolio.config.ts
          </div>

          <div className="flex items-center">
            <button
              onClick={handleCopy}
              className="group/btn relative flex items-center justify-center p-1.5 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700/50 transition-colors focus:outline-none focus-visible:ring-1 focus-visible:ring-purple-500/50"
              aria-label={copied ? "Copied" : "Copy code"}
            >
              {copied ? (
                <i className="fas fa-check text-xs text-emerald-500 dark:text-emerald-400"></i>
              ) : (
                <i className="far fa-copy text-xs text-gray-400 dark:text-gray-500 group-hover/btn:text-gray-600 dark:group-hover/btn:text-gray-300 transition-colors"></i>
              )}
            </button>
            
            <AnimatePresence>
              {copied && (
                <motion.div
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0 }}
                  className="absolute right-full mr-2 top-1/2 -translate-y-1/2 px-2 py-1 bg-gray-900 dark:bg-white text-white dark:text-gray-900 text-[10px] font-medium rounded shadow-sm whitespace-nowrap pointer-events-none"
                >
                  Copied
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Code */}
        <div className="px-4 py-4 sm:p-6 font-mono text-[12px] sm:text-[13px] md:text-sm overflow-x-auto bg-code-bg-light dark:bg-[#07080C]">
          <pre className="leading-relaxed whitespace-pre min-w-max">
<span className="text-purple-600 dark:text-[#c792ea]">const</span>{" "}
<span className="text-blue-600 dark:text-[#82aaff]">stack</span>{" "}
= <span className="text-purple-600 dark:text-[#c792ea]">new</span>{" "}
<span className="text-gray-800 dark:text-[#ffcb6b]">Developer</span>({"{"}
{"\n"}  <span className="text-gray-500 dark:text-slate-400">name:</span>{" "}
<span className="text-green-600 dark:text-[#c3e88d]">"Justin Ragland"</span>,
{"\n"}  <span className="text-gray-500 dark:text-slate-400">role:</span>{" "}
<span className="text-green-600 dark:text-[#c3e88d]">
  "Product Engineer"
</span>,
{"\n"}  <span className="text-gray-500 dark:text-slate-400">skills:</span> [
{"\n"}    <span className="text-green-600 dark:text-[#c3e88d]">"React"</span>,
{"\n"}    <span className="text-green-600 dark:text-[#c3e88d]">
  "TypeScript"
</span>,
{"\n"}    <span className="text-green-600 dark:text-[#c3e88d]">"Design Systems"</span>
{"\n"}  ],
{"\n"}  <span className="text-purple-600 dark:text-[#c792ea]">build</span>: () =&gt; {"{"}
{"\n"}    <span className="text-purple-600 dark:text-[#c792ea]">return</span> {"{"}
{"\n"}      <span className="text-gray-500 dark:text-slate-400">clean:</span>{" "}
<span className="text-yellow-600 dark:text-[#f78c6c]">true</span>,
{"\n"}      <span className="text-gray-500 dark:text-slate-400">
  scalable:
</span>{" "}
<span className="text-yellow-600 dark:text-[#f78c6c]">true</span>,
{"\n"}      <span className="text-gray-500 dark:text-slate-400">
  userFocused:
</span>{" "}
<span className="text-yellow-600 dark:text-[#f78c6c]">true</span>
{"\n"}    {"}"}
{"\n"}  {"}"}
{"\n"}{"}"});<span className="inline-block w-2.5 h-5 bg-gray-400 dark:bg-gray-500 ml-1 cursor align-bottom"></span>
          </pre>
        </div>
      </motion.div>
    </motion.div>
  );
}