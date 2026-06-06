import { useState } from "react";
import user_info from "../../data/user_info.js";
import ProjectModal from "./ProjectModal.jsx";
import { FolderGit2, ArrowUpRight, Search } from "lucide-react";

function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ["All", "Full-Stack", "Frontend", "Web3 / NGO"];

  const filteredProjects = selectedCategory === "All"
    ? user_info.projects
    : user_info.projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="lg:py-24 py-20 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Title & Subtitle */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 text-xs font-semibold mb-4">
              <FolderGit2 size={12} />
              Portfolio
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-zinc-50 tracking-tight">
              Featured <span className="gradient-text">Case Studies</span>
            </h2>
            <p className="mt-2 text-zinc-500 dark:text-zinc-400 font-light text-sm">
              Click on any project to read the detailed engineering case study.
            </p>
          </div>

          {/* Filtering Tabs */}
          <div className="flex flex-wrap gap-2 p-1 bg-zinc-100 dark:bg-zinc-900/60 rounded-xl border border-zinc-200/50 dark:border-zinc-800/50 w-fit">
            {categories.map((category, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg text-xs font-semibold tracking-wide transition-all ${
                  selectedCategory === category
                    ? "bg-white dark:bg-zinc-800 text-indigo-600 dark:text-indigo-400 shadow-sm"
                    : "text-zinc-500 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800/50 hover:border-indigo-500/55 dark:hover:border-indigo-400/55 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {project.technologies.split(",").slice(0, 3).map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 rounded-md text-[10px] font-bold bg-zinc-50 dark:bg-zinc-950 text-zinc-500 dark:text-zinc-400 border border-zinc-200/20 dark:border-zinc-800/40"
                    >
                      {tech.trim()}
                    </span>
                  ))}
                  {project.technologies.split(",").length > 3 && (
                    <span className="px-2 py-0.5 rounded-md text-[10px] font-bold bg-zinc-100 dark:bg-zinc-850 text-zinc-500 dark:text-zinc-400">
                      +{project.technologies.split(",").length - 3}
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-zinc-950 dark:text-zinc-50 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors flex items-center gap-1.5">
                  {project.title}
                  <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 transition-opacity text-indigo-600 dark:text-indigo-400" />
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm text-zinc-500 dark:text-zinc-400 font-light leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Metrics Highlights */}
              <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-800/50">
                <span className="text-[10px] uppercase tracking-wider font-extrabold text-indigo-600 dark:text-indigo-400 bg-indigo-50/50 dark:bg-indigo-950/20 px-2.5 py-1.5 rounded-lg border border-indigo-100/30 dark:border-indigo-900/10 block text-center truncate">
                  {project.metrics.split("|")[0]}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Modal Overlay */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}

export default Projects;
