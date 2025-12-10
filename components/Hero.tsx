"use client";

import { FiGithub, FiMail, FiArrowDown } from "react-icons/fi";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 -top-48 -left-48 bg-blue-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute w-96 h-96 -bottom-48 -right-48 bg-purple-500/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-6 animate-fade-in">
          {/* Greeting */}
          <p className="text-blue-500 text-lg md:text-xl font-medium">
            Hi, I&apos;m
          </p>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold">
            <span className="gradient-text">Diyan Thimeesha</span>
          </h1>

          {/* Title */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl text-gray-300 font-light">
            Full Stack Developer
          </h2>

          {/* Description */}
          <p className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
            Passionate about building innovative web applications and creating 
            seamless user experiences with modern technologies.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <a
              href="#projects"
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/50"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-3 border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white rounded-lg font-medium transition-all duration-300 hover:scale-105"
            >
              Get In Touch
            </a>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 pt-8">
            <a
              href="https://github.com/Diyan-Welikanna"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-200"
              aria-label="GitHub"
            >
              <FiGithub className="text-3xl" />
            </a>
            <a
              href="mailto:thimeesharandika@gmail.com"
              className="text-gray-400 hover:text-white hover:scale-110 transition-all duration-200"
              aria-label="Email"
            >
              <FiMail className="text-3xl" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-white transition-colors duration-200 animate-bounce"
      >
        <FiArrowDown className="text-3xl" />
      </a>
    </section>
  );
};

export default Hero;
