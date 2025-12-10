"use client";

import { FiGithub, FiExternalLink } from "react-icons/fi";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce application with shopping cart, payment integration, and admin dashboard.",
      technologies: ["Next.js", "TypeScript", "MongoDB", "Stripe"],
      github: "https://github.com/Diyan-Welikanna",
      live: "#",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      title: "Task Management App",
      description:
        "A collaborative task management tool with real-time updates, user authentication, and team features.",
      technologies: ["React", "Node.js", "Socket.io", "PostgreSQL"],
      github: "https://github.com/Diyan-Welikanna",
      live: "#",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      title: "Weather Dashboard",
      description:
        "Real-time weather application with location-based forecasts, interactive maps, and weather alerts.",
      technologies: ["React", "Tailwind CSS", "Weather API", "Chart.js"],
      github: "https://github.com/Diyan-Welikanna",
      live: "#",
      gradient: "from-orange-500 to-red-500",
    },
    {
      title: "Social Media Analytics",
      description:
        "Analytics dashboard for social media metrics with data visualization and reporting features.",
      technologies: ["Next.js", "Python", "D3.js", "Redis"],
      github: "https://github.com/Diyan-Welikanna",
      live: "#",
      gradient: "from-green-500 to-teal-500",
    },
    {
      title: "Portfolio CMS",
      description:
        "Content management system for portfolios with drag-and-drop builder and customizable templates.",
      technologies: ["React", "Express", "MongoDB", "AWS S3"],
      github: "https://github.com/Diyan-Welikanna",
      live: "#",
      gradient: "from-indigo-500 to-blue-500",
    },
    {
      title: "AI Chat Assistant",
      description:
        "Intelligent chatbot with natural language processing and context-aware responses.",
      technologies: ["Python", "TensorFlow", "React", "FastAPI"],
      github: "https://github.com/Diyan-Welikanna",
      live: "#",
      gradient: "from-yellow-500 to-orange-500",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-black/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
             <span className="gradient-text">Featured Projects</span>
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="glass rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300 transform hover:scale-105 group"
            >
              {/* Project Header with Gradient */}
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-200">
                  {project.title}
                </h3>

                <p className="text-gray-400 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-xs font-medium bg-blue-500/10 text-blue-400 rounded-full border border-blue-500/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex space-x-4 pt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    <FiGithub className="text-xl" />
                    <span>Code</span>
                  </a>
                  <a
                    href={project.live}
                    className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    <FiExternalLink className="text-xl" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/Diyan-Welikanna"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-6 py-3 border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white rounded-lg font-medium transition-all duration-300 hover:scale-105"
          >
            <FiGithub className="text-xl" />
            <span>View More on GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
