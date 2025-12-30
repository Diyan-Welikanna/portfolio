"use client";

const Skills = () => {
  const skillCategories = [
    {
      title: "Backend",
      extension: ".js",
      skills: [
        '"Node.js"',
        '"Express"',
        '"Python"',
        '"PHP (Laravel)"',
      ],
    },
    {
      title: "Frontend",
      extension: ".jsx",
      skills: [
        '"React"',
        '"Next.js"',
        '"TypeScript"',
        '"JavaScript ES6+"',
        '"Tailwind CSS"',
      ],
    },
    {
      title: "Database",
      extension: ".sql",
      skills: [
        '"PostgreSQL"',
        '"MongoDB"',
        '"MySQL"',
      ],
    },
    {
      title: "DevOps",
      extension: ".yml",
      skills: [
        '"Docker"',
        '"Git/GitHub"',
        '"CI/CD"',
      ],
    },
  ];

  return (
    <section id="skills" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Number */}
        <div className="text-8xl md:text-9xl font-bold text-gray-800/20 absolute left-8 -top-8 select-none">
          03.
        </div>

        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Skills & Technologies</span>
          </h2>
          <p className="text-gray-400 max-w-2xl font-mono">
            {"// My technical toolkit"}
          </p>
        </div>

        {/* Skills Grid - Code Editor Style */}
        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gray-900/50 border border-gray-800 rounded-lg overflow-hidden hover:border-[#64ffda]/50 transition-all duration-300"
            >
              {/* Code Editor Header */}
              <div className="bg-gray-800/50 px-4 py-3 border-b border-gray-700 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <span className="text-gray-400 text-sm font-mono ml-4">
                    {category.title.toLowerCase()}{category.extension}
                  </span>
                </div>
              </div>

              {/* Code Content */}
              <div className="p-6 font-mono text-sm">
                <div className="space-y-1">
                  <div>
                    <span className="text-purple-400">const</span>{" "}
                    <span className="text-[#64ffda]">{category.title.toLowerCase()}</span>{" "}
                    <span className="text-gray-400">=</span>{" "}
                    <span className="text-yellow-400">[</span>
                  </div>
                  {category.skills.map((skill, idx) => (
                    <div key={idx} className="pl-8">
                      <span className="text-green-400">{skill}</span>
                      {idx < category.skills.length - 1 && (
                        <span className="text-gray-400">,</span>
                      )}
                    </div>
                  ))}
                  <div>
                    <span className="text-yellow-400">];</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
