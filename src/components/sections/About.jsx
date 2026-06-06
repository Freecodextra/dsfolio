import { useState } from "react";
import user_info from "../../data/user_info.js";
import { Briefcase, GraduationCap, Calendar, User, ArrowUpRight } from "lucide-react";

function About() {
  const [activeTab, setActiveTab] = useState("experience");

  return (
    <section id="about" className="lg:py-24 py-20 px-6 sm:px-12 lg:px-24 border-t border-zinc-100 dark:border-zinc-900 bg-zinc-50/50 dark:bg-zinc-950/20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left Column: Biography */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 text-xs font-semibold mb-6">
                <User size={12} />
                About Me
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-zinc-50 tracking-tight">
                Bridging Frontend Elegance & <span className="gradient-text">Backend Scale</span>
              </h2>
              <p className="mt-6 text-zinc-600 dark:text-zinc-300 font-light leading-relaxed">
                As a software engineer, I believe that technology should solve business problems first. I specialize in building complete systems from database tuning and security to animations and smooth user interfaces.
              </p>
              <p className="mt-4 text-zinc-600 dark:text-zinc-300 font-light leading-relaxed">
                Whether working in a fast-paced team at Codehub or partnering directly with founders on freelance mvps, I maintain a strict adherence to code cleanliness, type safety, and fast load times.
              </p>
            </div>

            <div className="mt-8 p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800/50 shadow-sm">
              <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-50 mb-2">Primary Focus Areas</h3>
              <ul className="space-y-2.5 text-xs font-medium text-zinc-500 dark:text-zinc-400">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                  Full-stack SaaS Architecture (Next.js & Django/Laravel)
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                  E-commerce drops & secure checkouts
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                  Realtime web services and data synchronization
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500" />
                  Performance optimization (40% average loading improvement)
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Interactive Career & Education Timeline */}
          <div className="lg:col-span-7">
            {/* Tab Toggles */}
            <div className="flex gap-4 border-b border-zinc-200 dark:border-zinc-800 pb-4">
              <button
                onClick={() => setActiveTab("experience")}
                className={`flex items-center gap-2 pb-2 text-sm font-semibold transition-all border-b-2 ${
                  activeTab === "experience"
                    ? "border-indigo-600 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400"
                    : "border-transparent text-zinc-400 hover:text-zinc-600"
                }`}
              >
                <Briefcase size={16} />
                Work Experience
              </button>
              <button
                onClick={() => setActiveTab("education")}
                className={`flex items-center gap-2 pb-2 text-sm font-semibold transition-all border-b-2 ${
                  activeTab === "education"
                    ? "border-indigo-600 text-indigo-600 dark:border-indigo-400 dark:text-indigo-400"
                    : "border-transparent text-zinc-400 hover:text-zinc-600"
                }`}
              >
                <GraduationCap size={16} />
                Education
              </button>
            </div>

            {/* Experience Panel */}
            {activeTab === "experience" && (
              <div className="mt-8 space-y-8">
                {user_info.experience.map((exp, idx) => (
                  <div key={idx} className="relative pl-8 border-l border-zinc-200 dark:border-zinc-800 last:border-transparent">
                    {/* Circle timeline dot */}
                    <div className="absolute left-0 top-1.5 -translate-x-[50%] w-3.5 h-3.5 rounded-full bg-white dark:bg-zinc-950 border-2 border-indigo-600 dark:border-indigo-400 z-10" />

                    <div className="flex items-center gap-4 flex-wrap sm:flex-nowrap justify-between">
                      <div>
                        <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50">
                          {exp.position}
                        </h3>
                        <p className="text-sm text-zinc-500 dark:text-zinc-400 font-medium">
                          {exp.company}
                        </p>
                      </div>
                      <span className="flex items-center gap-1.5 text-xs font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/30 px-3 py-1 rounded-full border border-indigo-100/50 dark:border-indigo-900/30">
                        <Calendar size={12} />
                        {exp.duration}
                      </span>
                    </div>

                    <ul className="mt-4 space-y-2">
                      {exp.descriptions.map((desc, i) => (
                        <li key={i} className="flex gap-2.5 items-start text-sm text-zinc-600 dark:text-zinc-300 font-light leading-relaxed">
                          <span className="mt-1.5 w-1 h-1 rounded-full bg-indigo-500 flex-shrink-0" />
                          <span>{desc}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}

            {/* Education Panel */}
            {activeTab === "education" && (
              <div className="mt-8 space-y-8">
                {user_info.education.map((edu, idx) => (
                  <div key={idx} className="relative pl-8 border-l border-zinc-200 dark:border-zinc-800 last:border-transparent">
                    <div className="absolute left-0 top-1.5 -translate-x-[50%] w-3.5 h-3.5 rounded-full bg-white dark:bg-zinc-950 border-2 border-indigo-600 dark:border-indigo-400 z-10" />

                    <div className="flex items-center gap-4 flex-wrap sm:flex-nowrap justify-between">
                      <div className="flex gap-3 items-center">
                        {edu.image && (
                          <img
                            src={edu.image}
                            alt={edu.school}
                            className="w-10 h-10 object-contain rounded-lg p-1 bg-white border border-zinc-200/50"
                            onError={(e) => {
                              e.target.style.display = "none";
                            }}
                          />
                        )}
                        <div>
                          <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50">
                            {edu.degree}
                          </h3>
                          <p className="text-sm text-zinc-500 dark:text-zinc-400 font-medium">
                            {edu.school}
                          </p>
                        </div>
                      </div>
                      <span className="flex items-center gap-1.5 text-xs font-semibold text-indigo-600 dark:text-indigo-400 bg-indigo-50 dark:bg-indigo-950/30 px-3 py-1 rounded-full border border-indigo-100/50 dark:border-indigo-900/30">
                        <Calendar size={12} />
                        {edu.duration}
                      </span>
                    </div>

                    <p className="mt-4 text-sm text-zinc-600 dark:text-zinc-300 font-light leading-relaxed">
                      Studied Botany with an emphasis on research methodologies, analytical models, and complex biological problem-solving. This academic training shaped my logical thinking, scientific approach to debugging, and capacity to dissect complex computational challenges.
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
