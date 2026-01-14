import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
  onClick?: () => void;
}

const ProjectCard = ({ project, featured = false, onClick }: ProjectCardProps) => {
  return (
    <div 
      onClick={(e) => {
        e.preventDefault();
        if (onClick) onClick();
      }}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          if (onClick) onClick();
        }
      }}
      className="block group h-full cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500/50 rounded-lg"
    >
      <div 
        className={`
          p-6 rounded-lg transition-all duration-300 h-full flex flex-col transform md:group-hover:-translate-y-1
          ${featured 
            ? "bg-white dark:bg-[#23242f] border border-purple-100/50 dark:border-gray-700 shadow-sm dark:shadow-none" 
            : "bg-gray-50 dark:bg-surface-dark border border-gray-100 dark:border-gray-800"
          }
          hover:shadow-lg dark:hover:shadow-black/20
        `}
      >
        <div className="flex justify-between items-start mb-4 min-h-[3rem]">
          <h3 className={`font-bold text-lg leading-tight ${featured ? "text-primary dark:text-white" : "text-gray-900 dark:text-gray-100"}`}>
            {project.title}
          </h3>
          <i className="fas fa-arrow-right -rotate-45 group-hover:rotate-0 transition-transform duration-300 transform mt-1 text-gray-300 dark:text-gray-600"></i>
        </div>
        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-6 font-light flex-grow max-w-[65ch] min-h-[4.5rem]">
          {project.description}
        </p>
        <div className="flex gap-2 flex-wrap mt-auto">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className={`text-[10px] font-mono px-2.5 py-1 rounded border text-gray-500 dark:text-gray-400 ${featured ? "bg-gray-50 dark:bg-black/40 border-gray-200 dark:border-gray-600/50" : "bg-white dark:bg-black/30 border-gray-200 dark:border-gray-700"}`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;