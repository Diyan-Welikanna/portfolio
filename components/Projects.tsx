"use client";

import { FiGithub, FiExternalLink } from "react-icons/fi";
import { useState } from "react";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("all");

  const projects = [
    {
      title: "POS System",
      description:
        "A full-featured Point of Sale system built with Next.js, TypeScript, and Supabase. Features real-time inventory management, role-based access control, offline support, and comprehensive analytics.",
      technologies: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS"],
      github: "https://github.com/Diyan-Welikanna/POS-System",
      live: "https://pos-system-delta-woad.vercel.app",
      gradient: "from-blue-500 to-cyan-500",
      category: "fullstack",
    },
    {
      title: "ACMA Total Solutions",
      description:
        "Modern responsive website for ACMA Total Solutions - the official Hitachi air conditioning channel partner in Sri Lanka. Features product catalog with Sanity CMS, contact form with email notifications, and customer reviews.",
      technologies: ["Next.js", "TypeScript", "Sanity CMS", "SendGrid"],
      github: "https://github.com/Diyan-Welikanna/ACMA-Solutions",
      live: "https://acma-solutions.vercel.app",
      gradient: "from-indigo-500 to-blue-500",
      category: "web",
    },
    {
      title: "Maria Leader",
      description:
        "A desktop application built with Electron and React for calculating fresh water tank volumes from sounding measurements. Features automatic volume calculation based on calibration tables.",
      technologies: ["Electron", "React", "Vite", "JavaScript"],
      github: "https://github.com/Diyan-Welikanna/Maria_leader",
      live: "#",
      gradient: "from-purple-500 to-pink-500",
      category: "desktop",
    },
    {
      title: "Portfolio Website",
      description:
        "My personal portfolio website built with Next.js and TypeScript, featuring a terminal-themed design with animated command prompts and modern UI/UX.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
      github: "https://github.com/Diyan-Welikanna/portfolio",
      live: "https://diyan-welikanna.github.io/portfolio",
      gradient: "from-green-500 to-teal-500",
      category: "web",
    },
  ];

  const categories = [
    { id: "all", label: "all projects" },
    { id: "fullstack", label: "full stack" },
    { id: "web", label: "web apps" },
    { id: "desktop", label: "desktop apps" },
  ];

  const filteredProjects = activeTab === "all" 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  return (
    <section id="projects" className="py-32 relative bg-black/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Number */}
        <div className="text-8xl md:text-9xl font-bold text-gray-800/20 absolute left-8 -top-8 select-none">
          04.
        </div>

        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
             <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl font-mono">
            {"// Some things I've built"}
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-3 mb-8 border-b border-gray-800 pb-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveTab(category.id)}
              className={`px-4 py-2 rounded font-mono text-sm transition-all duration-300 ${
                activeTab === category.id
                  ? "bg-blue-600/20 border border-blue-500/50 text-blue-400"
                  : "bg-gray-800/50 border border-gray-700 text-gray-400 hover:border-blue-500/30 hover:text-gray-300"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-900/50 border border-gray-800 rounded-lg overflow-hidden hover:border-blue-500/50 transition-all duration-300 group"
            >
              {/* Project Header with Gradient */}
              <div className={`h-1 bg-gradient-to-r ${project.gradient}`}></div>

              {/* Project Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-200 font-mono">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed min-h-[4rem]">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 text-xs font-mono bg-gray-800/50 text-gray-300 rounded border border-gray-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex space-x-4 pt-2 border-t border-gray-800 mt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm font-mono pt-4"
                  >
                    <FiGithub className="text-lg" />
                    <span>code</span>
                  </a>
                  {project.live !== "#" && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-400 hover:text-blue-400 transition-colors duration-200 text-sm font-mono pt-4"
                    >
                      <FiExternalLink className="text-lg" />
                      <span>live</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 font-mono">No projects found in this category.</p>
          </div>
        )}

        {/* View More */}
        <div className="mt-12">
          <a
            href="https://github.com/Diyan-Welikanna"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-6 py-3 bg-gray-900/50 border border-gray-800 text-gray-300 hover:border-blue-500 hover:text-blue-400 rounded-lg font-mono text-sm transition-all duration-300"
          >
            <FiGithub className="text-lg" />
            <span>view more on github</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
