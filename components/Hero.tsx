"use client";

import { FiGithub, FiMail, FiArrowRight, FiTerminal } from "react-icons/fi";
import { useState, useEffect } from "react";

const Hero = () => {
  const [showCommand1, setShowCommand1] = useState(false);
  const [showOutput1, setShowOutput1] = useState(false);
  const [showCommand2, setShowCommand2] = useState(false);
  const [showOutput2, setShowOutput2] = useState(false);
  const [showPrompt, setShowPrompt] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setShowCommand1(true), 500);
    const timer2 = setTimeout(() => setShowOutput1(true), 1500);
    const timer3 = setTimeout(() => setShowCommand2(true), 2000);
    const timer4 = setTimeout(() => setShowOutput2(true), 3000);
    const timer5 = setTimeout(() => setShowPrompt(true), 3500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
      clearTimeout(timer5);
    };
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated Star Background */}
      <div className="absolute inset-0 stars-bg"></div>
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-1 h-1 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-1 h-1 bg-purple-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-32 left-1/4 w-1 h-1 bg-cyan-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-pink-400 rounded-full animate-pulse" style={{animationDelay: '1.5s'}}></div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="space-y-6 animate-fade-in">
          {/* Section Number */}
          <div className="text-6xl md:text-7xl font-bold text-gray-800/20 select-none font-mono">
            01.
          </div>

          {/* Terminal Window */}
          <div className="max-w-4xl bg-[#1e293b]/80 backdrop-blur-sm border border-gray-700/50 rounded-lg overflow-hidden shadow-2xl">
            {/* Terminal Header */}
            <div className="bg-[#0f172a] px-4 py-3 flex items-center justify-between border-b border-gray-700/50">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="text-gray-400 text-xs font-mono">diyan@portfolio: ~</div>
              <div className="w-16"></div>
            </div>

            {/* Terminal Content */}
            <div className="p-6 md:p-8 font-mono text-sm md:text-base h-[280px] flex flex-col">
              {/* whoami command */}
              <div className="mb-4">
                <div className="mb-2 h-6">
                  {showCommand1 && (
                    <>
                      <span className="text-green-400">diyan</span>
                      <span className="text-gray-500">@</span>
                      <span className="text-blue-400">portfolio</span>
                      <span className="text-gray-500">:</span>
                      <span className="text-purple-400">~</span>
                      <span className="text-gray-500">$</span>
                      <span className="text-gray-300 ml-2 typing-animation">whoami</span>
                    </>
                  )}
                </div>
                <div className="ml-4 h-6">
                  {showOutput1 && (
                    <div className="animate-fade-in">
                      <span className="text-blue-400">&gt;</span> Diyan Thimeesha <span className="text-blue-400">&gt;</span> Full Stack Developer
                    </div>
                  )}
                </div>
              </div>

              {/* cat about.txt command */}
              <div className="mb-4">
                <div className="mb-2 h-6">
                  {showCommand2 && (
                    <>
                      <span className="text-green-400">diyan</span>
                      <span className="text-gray-500">@</span>
                      <span className="text-blue-400">portfolio</span>
                      <span className="text-gray-500">:</span>
                      <span className="text-purple-400">~</span>
                      <span className="text-gray-500">$</span>
                      <span className="text-gray-300 ml-2 typing-animation">cat about.txt</span>
                    </>
                  )}
                </div>
                <div className="ml-4 min-h-[3rem]">
                  {showOutput2 && (
                    <div className="text-gray-400 leading-relaxed animate-fade-in">
                      Passionate about building innovative web applications and creating seamless user experiences with modern technologies.
                    </div>
                  )}
                </div>
              </div>

              {/* Empty prompt with cursor */}
              <div className="h-6">
                {showPrompt && (
                  <div className="animate-fade-in">
                    <span className="text-green-400">diyan</span>
                    <span className="text-gray-500">@</span>
                    <span className="text-blue-400">portfolio</span>
                    <span className="text-gray-500">:</span>
                    <span className="text-purple-400">~</span>
                    <span className="text-gray-500">$</span>
                    <span className="animate-pulse ml-2">_</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 items-start pt-4">
            <a
              href="#projects"
              className="group flex items-center space-x-2 px-6 py-3 bg-blue-600/20 border border-blue-500/50 hover:bg-blue-600/30 text-blue-400 hover:text-blue-300 rounded font-mono text-sm transition-all duration-300"
            >
              <span>View my work →</span>
            </a>
            <a
              href="#contact"
              className="group flex items-center space-x-2 px-6 py-3 bg-gray-800/50 border border-gray-700 hover:border-blue-500/50 text-gray-300 hover:text-blue-400 rounded font-mono text-sm transition-all duration-300"
            >
              <span>Get in touch</span>
            </a>
          </div>

          {/* Availability Status */}
          <div className="flex items-center space-x-2 text-sm font-mono pt-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-gray-500">// Available for new projects</span>
          </div>


        </div>
      </div>

      {/* Section Number */}
      <div className="absolute bottom-12 left-8 text-8xl font-bold text-gray-900/50">
        01.
      </div>
    </section>
  );
};

export default Hero;
