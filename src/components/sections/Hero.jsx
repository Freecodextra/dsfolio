import user_info from "../../data/user_info.js";
import { ArrowRight, Download, Award } from "lucide-react";

function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[90vh] flex flex-col justify-center pt-32 pb-20 px-6 sm:px-12 lg:px-24 bg-grid-pattern overflow-hidden"
    >
      {/* Background radial highlight */}
      <div className="absolute top-1/4 right-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-[120px] -z-10 pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left column: Copy & CTAs */}
        <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left order-2 lg:order-1">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50/80 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 text-xs font-semibold mb-6 mx-auto lg:mx-0 w-fit border border-indigo-100 dark:border-indigo-800/50">
            <Award size={14} className="animate-pulse" />
            Open to Global Remote Opportunities
          </div>

          <h2 className="text-lg font-bold text-indigo-600 dark:text-indigo-400 mb-2 uppercase tracking-wider">
            {user_info.main.role}
          </h2>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight text-zinc-900 dark:text-zinc-50 tracking-tight font-sans">
            Hi, I'm <span className="gradient-text">{user_info.main.name}</span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-zinc-600 dark:text-zinc-300 font-light leading-relaxed max-w-2xl">
            {user_info.main.description}
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-md shadow-indigo-600/20 active:scale-[0.98] transition-all"
            >
              Explore My Projects
              <ArrowRight size={16} />
            </a>
            <a
              href={user_info.main.resume}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold text-zinc-700 dark:text-zinc-200 bg-white dark:bg-zinc-900 hover:bg-zinc-50 dark:hover:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-800 shadow-sm active:scale-[0.98] transition-all"
            >
              <Download size={16} />
              Download Resume
            </a>
          </div>
        </div>

        {/* Right column: Profile Image Setup */}
        <div className="lg:col-span-5 flex justify-center order-1 lg:order-2">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
            {/* Visual backdrop rings */}
            <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500 to-purple-600 rounded-3xl rotate-6 opacity-10 blur-sm animate-pulse" />
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl -rotate-3 opacity-15" />
            
            <div className="absolute inset-2 bg-zinc-100 dark:bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-200/50 dark:border-zinc-800/50 shadow-2xl">
              <img
                src="/photo.png"
                alt={user_info.main.name}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500 scale-100 hover:scale-105"
                onError={(e) => {
                  e.target.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1000"; // Fallback URL
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal Stats Panel */}
      <div className="max-w-7xl mx-auto w-full mt-24 border-t border-zinc-200/50 dark:border-zinc-800/50 pt-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {user_info.stats.map((stat, idx) => (
            <div key={idx} className="text-center md:text-left flex flex-col gap-1">
              <span className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-zinc-50 font-sans">
                <span className="gradient-text">{stat.value}</span>
              </span>
              <span className="text-xs uppercase tracking-wider text-zinc-500 dark:text-zinc-400 font-semibold mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
