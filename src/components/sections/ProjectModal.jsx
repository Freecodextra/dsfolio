import { useEffect } from "react";
import { X, ExternalLink, Github, Layers, Award, Target, Settings2 } from "lucide-react";

function ProjectModal({ project, onClose }) {
  // Prevent body scroll when modal is active
  useEffect(() => {
    document.body.style.overflow = "hidden";
    
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-zinc-950/60 backdrop-blur-sm animate-fade-in">
      {/* Background click close */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Modal Card */}
      <div className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 shadow-2xl p-6 sm:p-8 animate-slide-up scroll-smooth">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg bg-zinc-50 dark:bg-zinc-800 text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200 border border-zinc-200/40 dark:border-zinc-700/50 hover:bg-zinc-100 dark:hover:bg-zinc-700/80 transition-colors"
          aria-label="Close modal"
        >
          <X size={18} />
        </button>

        {/* Category & Role */}
        <div className="flex items-center gap-2 flex-wrap text-xs font-bold uppercase tracking-wider mb-2">
          <span className="text-indigo-600 dark:text-indigo-400">
            {project.category}
          </span>
          <span className="text-zinc-300 dark:text-zinc-700">•</span>
          <span className="text-zinc-500 dark:text-zinc-400 flex items-center gap-1">
            <Layers size={12} />
            {project.role}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-2xl sm:text-3xl font-extrabold text-zinc-950 dark:text-zinc-50 leading-tight">
          {project.title}
        </h3>

        {/* Metrics Banner */}
        {project.metrics && (
          <div className="mt-4 p-4 rounded-xl bg-indigo-50/50 dark:bg-indigo-950/20 border border-indigo-100/50 dark:border-indigo-900/10 flex items-center gap-2">
            <Award className="text-indigo-600 dark:text-indigo-400 flex-shrink-0" size={18} />
            <span className="text-xs sm:text-sm font-extrabold text-indigo-600 dark:text-indigo-400 tracking-wide">
              {project.metrics}
            </span>
          </div>
        )}

        {/* Grid Content */}
        <div className="mt-6 space-y-6">
          {/* Tech Stack */}
          <div>
            <h4 className="text-sm font-extrabold text-zinc-900 dark:text-zinc-50 uppercase tracking-wider mb-3 flex items-center gap-1.5">
              <Settings2 size={14} className="text-zinc-400" />
              Tech Stack
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.split(",").map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-xl text-xs font-semibold bg-zinc-100 dark:bg-zinc-950 text-zinc-600 dark:text-zinc-300 border border-zinc-200/20 dark:border-zinc-800/40"
                >
                  {tech.trim()}
                </span>
              ))}
            </div>
          </div>

          {/* Challenge */}
          <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800/60">
            <h4 className="text-sm font-extrabold text-zinc-900 dark:text-zinc-50 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
              <Target size={14} className="text-zinc-400" />
              The Challenge
            </h4>
            <p className="text-sm text-zinc-600 dark:text-zinc-300 font-light leading-relaxed">
              {project.challenge}
            </p>
          </div>

          {/* Solution */}
          <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800/60">
            <h4 className="text-sm font-extrabold text-zinc-900 dark:text-zinc-50 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
              <Layers size={14} className="text-zinc-400" />
              The Implementation
            </h4>
            <p className="text-sm text-zinc-600 dark:text-zinc-300 font-light leading-relaxed">
              {project.solution}
            </p>
          </div>

          {/* Results */}
          <div className="pt-4 border-t border-zinc-100 dark:border-zinc-800/60">
            <h4 className="text-sm font-extrabold text-zinc-900 dark:text-zinc-50 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
              <Award size={14} className="text-zinc-400" />
              Key Results
            </h4>
            <p className="text-sm text-zinc-600 dark:text-zinc-300 font-light leading-relaxed">
              {project.results}
            </p>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="mt-8 pt-6 border-t border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row gap-4 items-center justify-end">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-zinc-700 dark:text-zinc-200 bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-800/80 border border-zinc-200/50 dark:border-zinc-700/50 transition-colors"
            >
              <Github size={14} />
              View Source Code
            </a>
          )}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-md shadow-indigo-600/10 transition-colors"
            >
              <ExternalLink size={14} />
              Visit Live Project
            </a>
          )}
        </div>

      </div>
    </div>
  );
}

export default ProjectModal;
