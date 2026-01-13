const skills = [
  "React",
  "TypeScript",
  "Next.js",
  "Design Systems",
  "Convex",
  "Node.js",
  "AI SDK",
  "Claude SDK",
  "Cloudflare"
];

export default function AboutSection() {
  return (
    <section id="about" className="max-w-7xl mx-auto px-6 py-24 scroll-mt-16">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
        
        {/* About Me Card - Spans 2 columns on lg, full width on md/sm */}
        <div className="lg:col-span-2 p-6 md:p-10 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#23242f] shadow-md dark:shadow-black/20 flex flex-col justify-center">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
            {/* Headshot Image Component */}
            <div className="flex-shrink-0 self-center">
              <img 
                src="https://ik.imagekit.io/xrtdefb8l/Portfolio_profile.jpg?updatedAt=1767990006410" 
                alt="Justin Ragland"
                className="w-32 h-32 md:w-44 md:h-44 lg:w-52 lg:h-52 rounded-xl object-cover border border-gray-200 dark:border-gray-700 shadow-sm"
              />
            </div>

            {/* Text Content Wrapper */}
            <div className="flex-1 text-left w-full space-y-4">
              <h2 className="font-mono text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-[0.2em] mb-4 md:mb-6">
                About Me
              </h2>
              <div className="text-base sm:text-lg text-primary dark:text-gray-100 font-normal leading-relaxed space-y-4">
                <p>
                  I’m Justin Ragland, a full stack developer focused on turning complex ideas into clear, usable products — and founder of{" "}
                  <a 
                    href="https://www.raglandlabs.com"
                    target="_blank"
                    rel="noreferrer"
                    className="font-medium text-inherit hover:text-purple-600 dark:hover:text-purple-400 transition-colors rounded-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500/40 focus-visible:ring-offset-1 focus-visible:ring-offset-white dark:focus-visible:ring-offset-[#23242f]"
                  >
                    Ragland Labs
                  </a>.
                  I enjoy working with startups, teams, and individuals to build software that’s thoughtful, scalable, and genuinely useful.
                </p>
                <p>
                  I’m always learning, whether that’s refining a design system, exploring new tools, or finding better ways to solve familiar problems. Outside of work, I spend time with my family and stay active in my church. My faith keeps me grounded and focused on building things that matter.
                </p>
                <p>
                  I believe good software should make life a little easier, a little clearer, and a little better, one project at a time.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Expertise Card - Spans 1 column on lg, full width on md/sm */}
        <div className="lg:col-span-1 p-6 md:p-8 lg:py-6 rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-[#23242f] shadow-md dark:shadow-black/20 flex flex-col lg:justify-center">
          <h3 className="font-mono text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-[0.2em] mb-6 md:mb-8 lg:mb-6">
            Core Expertise
          </h3>
          <div className="flex flex-wrap gap-2 content-start">
            {skills.map((skill) => (
              <div
                key={skill}
                className="px-3 py-2 rounded-md border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-black/20 text-sm font-mono font-medium text-gray-700 dark:text-gray-300"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}