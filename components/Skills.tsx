"use client";

import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaDocker,
  FaDatabase,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiMongodb,
  SiPostgresql,
  SiExpress,
  SiPhp,
  SiLaravel,
} from "react-icons/si";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: <FaReact />, color: "text-blue-400" },
        { name: "Next.js", icon: <SiNextdotjs />, color: "text-white" },
        { name: "TypeScript", icon: <SiTypescript />, color: "text-blue-500" },
        { name: "JavaScript", icon: <SiJavascript />, color: "text-yellow-400" },
        { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-cyan-400" },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: <FaNodeJs />, color: "text-green-500" },
        { name: "Express", icon: <SiExpress />, color: "text-gray-300" },
        { name: "Python", icon: <FaPython />, color: "text-blue-400" },
        { name: "PHP (Laravel)", icon: <SiLaravel />, color: "text-purple-500" },
      ],
    },
    {
      title: "Database & Tools",
      skills: [
        { name: "MongoDB", icon: <SiMongodb />, color: "text-green-500" },
        { name: "PostgreSQL", icon: <SiPostgresql />, color: "text-blue-400" },
        { name: "Git", icon: <FaGitAlt />, color: "text-orange-500" },
        { name: "Docker", icon: <FaDocker />, color: "text-blue-500" },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-black/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text"> My Skills</span>
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="glass p-8 rounded-xl hover:bg-white/10 transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className="flex items-center space-x-4 p-3 rounded-lg hover:bg-white/5 transition-all duration-200 group"
                  >
                    <span className={`text-3xl ${skill.color} group-hover:scale-110 transition-transform duration-200`}>
                      {skill.icon}
                    </span>
                    <span className="text-gray-300 font-medium group-hover:text-white transition-colors duration-200">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <p className="text-gray-400 text-lg">
            Always learning and exploring new technologies to stay ahead in the ever-evolving tech landscape
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
