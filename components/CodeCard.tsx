import React from 'react';
import { motion } from "framer-motion";

export default function TerminalHeroCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative group w-full max-w-[92vw] sm:max-w-xl mx-auto lg:mx-0"
    >
      {/* Ambient Glow */}
      <motion.div
        aria-hidden
        className="absolute -inset-1 rounded-2xl blur-xl bg-gradient-to-r from-purple-500/20 to-blue-500/20"
        animate={{ opacity: [0.5, 0.75, 0.5] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Grid Background */}
      <div
        aria-hidden
        className="absolute -inset-10 sm:-inset-16 lg:-inset-24 -z-10 grid-pattern"
        style={{
          maskImage:
            "radial-gradient(circle at center, black 40%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, black 40%, transparent 80%)",
        }}
      />

      {/* Card */}
      <motion.div
        whileHover={{ y: -4 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="relative bg-white dark:bg-[#15161E] border border-gray-200 dark:border-gray-800 rounded-xl shadow-2xl overflow-hidden"
      >
        {/* Header */}
        <div className="flex items-center px-3 sm:px-4 py-2.5 border-b border-gray-100 dark:border-gray-800 bg-gray-50/50 dark:bg-[#1A1B26]">
          <div className="flex space-x-2">
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-gray-300 dark:bg-slate-700" />
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-gray-300 dark:bg-slate-700" />
            <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-gray-300 dark:bg-slate-700" />
          </div>

          <div className="mx-auto text-[10px] sm:text-xs text-gray-400 font-mono tracking-wide truncate max-w-[60%]">
            portfolio.config.ts
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
  "Frontend Architect"
</span>,
{"\n"}  <span className="text-gray-500 dark:text-slate-400">skills:</span> [
{"\n"}    <span className="text-green-600 dark:text-[#c3e88d]">"React"</span>,
{"\n"}    <span className="text-green-600 dark:text-[#c3e88d]">
  "TypeScript"
</span>,
{"\n"}    <span className="text-green-600 dark:text-[#c3e88d]">"Node.js"</span>
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