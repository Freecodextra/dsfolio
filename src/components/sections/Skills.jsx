import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaAws,
  FaDigitalOcean,
  FaGitAlt,
  FaLaravel,
  FaPython
} from "react-icons/fa6";
import {
  BiLogoPostgresql,
  BiLogoTypescript
} from "react-icons/bi";
import { SiTailwindcss, SiDjango, SiSupabase, SiPostman, SiMysql, SiFramer } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { CgVercel } from "react-icons/cg";
import { IoLogoFirebase, IoLogoJavascript } from "react-icons/io5";
import { Code, Server, Database, Cpu } from "lucide-react";

function Skills() {
  const skillCategories = [
    {
      title: "Frontend Core",
      icon: <Code size={20} className="text-indigo-600 dark:text-indigo-400" />,
      description: "Developing interactive, fluid, and type-safe user interfaces.",
      skills: [
        { name: "React", icon: <FaReact className="text-sky-500" /> },
        { name: "Next.js", icon: <TbBrandNextjs className="text-black dark:text-white" /> },
        { name: "TypeScript", icon: <BiLogoTypescript className="text-blue-500" /> },
        { name: "JavaScript", icon: <IoLogoJavascript className="text-yellow-500" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
        { name: "Framer Motion", icon: <SiFramer className="text-pink-500" /> }
      ]
    },
    {
      title: "Backend Engines",
      icon: <Server size={20} className="text-indigo-600 dark:text-indigo-400" />,
      description: "Architecting secure, modular, and fast-response server APIs.",
      skills: [
        { name: "Laravel (PHP)", icon: <FaLaravel className="text-red-500" /> },
        { name: "Django (Python)", icon: <SiDjango className="text-emerald-600" /> },
        { name: "Python", icon: <FaPython className="text-blue-400" /> },
        { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> }
      ]
    },
    {
      title: "Databases & BaaS",
      icon: <Database size={20} className="text-indigo-600 dark:text-indigo-400" />,
      description: "Designing transaction-safe relational schemas and cloud storage.",
      skills: [
        { name: "PostgreSQL", icon: <BiLogoPostgresql className="text-sky-600" /> },
        { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
        { name: "Supabase", icon: <SiSupabase className="text-emerald-500" /> },
        { name: "Firebase", icon: <IoLogoFirebase className="text-amber-500" /> }
      ]
    },
    {
      title: "DevOps & Tooling",
      icon: <Cpu size={20} className="text-indigo-600 dark:text-indigo-400" />,
      description: "Automating pipelines, running server environments, and debugging APIs.",
      skills: [
        { name: "Docker", icon: <FaDocker className="text-blue-500" /> },
        { name: "AWS EC2", icon: <FaAws className="text-amber-500" /> },
        { name: "DigitalOcean", icon: <FaDigitalOcean className="text-blue-600" /> },
        { name: "Vercel / Netlify", icon: <CgVercel className="text-black dark:text-white" /> },
        { name: "Git & GitHub", icon: <FaGitAlt className="text-orange-500" /> },
        { name: "Postman", icon: <SiPostman className="text-orange-600" /> }
      ]
    }
  ];

  return (
    <section id="skills" className="lg:py-24 py-20 px-6 sm:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-zinc-900 dark:text-zinc-50 tracking-tight">
            My Technical <span className="gradient-text">Ecosystem</span>
          </h2>
          <p className="mt-4 text-zinc-500 dark:text-zinc-400 font-light text-base leading-relaxed">
            I select the most reliable, industry-proven stacks to construct robust client interfaces and secure databases.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200/50 dark:border-zinc-800/50 shadow-sm hover:shadow-md transition-all duration-300"
            >
              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-indigo-50 dark:bg-indigo-950/30">
                  {category.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-50">
                    {category.title}
                  </h3>
                  <p className="text-xs text-zinc-400 mt-0.5">
                    {category.description}
                  </p>
                </div>
              </div>

              {/* Skills Badges Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-6">
                {category.skills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="flex items-center gap-2 p-2.5 rounded-xl bg-zinc-50 hover:bg-zinc-100 dark:bg-zinc-950/50 dark:hover:bg-zinc-950 transition-colors border border-zinc-100/50 dark:border-zinc-800/20"
                  >
                    <span className="text-lg flex-shrink-0">{skill.icon}</span>
                    <span className="text-xs font-semibold text-zinc-700 dark:text-zinc-300 truncate">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
