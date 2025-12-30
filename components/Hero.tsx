"use client";

import { FiGithub, FiMail, FiArrowRight, FiTerminal } from "react-icons/fi";
import { useState, useEffect } from "react";

const Hero = () => {
  const [showPrompt1, setShowPrompt1] = useState(false);
  const [command1Text, setCommand1Text] = useState("");
  const [showOutput1, setShowOutput1] = useState(false);
  const [showPrompt2, setShowPrompt2] = useState(false);
  const [command2Text, setCommand2Text] = useState("");
  const [showOutput2, setShowOutput2] = useState(false);
  const [showPrompt3, setShowPrompt3] = useState(false);

  const command1 = "whoami";
  const command2 = "cat about.txt";

  useEffect(() => {
    // Show first prompt immediately
    setShowPrompt1(true);

    // Type command 1 letter by letter
    setTimeout(() => {
      let i = 0;
      const typingInterval1 = setInterval(() => {
        if (i < command1.length) {
          setCommand1Text(command1.substring(0, i + 1));
          i++;
        } else {
          clearInterval(typingInterval1);
          // Show output after command is complete
          setTimeout(() => {
            setShowOutput1(true);
            // Show second prompt
            setTimeout(() => {
              setShowPrompt2(true);
              
              // Type command 2
              setTimeout(() => {
                let j = 0;
                const typingInterval2 = setInterval(() => {
                  if (j < command2.length) {
                    setCommand2Text(command2.substring(0, j + 1));
                    j++;
                  } else {
                    clearInterval(typingInterval2);
                    // Show output 2
                    setTimeout(() => {
                      setShowOutput2(true);
                      // Show final prompt
                      setTimeout(() => {
                        setShowPrompt3(true);
                      }, 300);
                    }, 300);
                  }
                }, 100);
              }, 300);
            }, 300);
          }, 300);
        }
      }, 100);
    }, 500);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Animated Star Background */}
      <div className="absolute inset-0 stars-bg"></div>
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-1 h-1 bg-[#64ffda] rounded-full animate-pulse"></div>
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
          <div className="w-[896px] max-w-full bg-[#1e293b]/80 backdrop-blur-sm border border-[#64ffda]/30 rounded-lg overflow-hidden shadow-2xl shadow-[#64ffda]/20">
            {/* Terminal Header */}
            <div className="bg-[#0f172a] px-4 py-3 flex items-center justify-between border-b border-[#64ffda]/30">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="text-[#64ffda] text-xs font-mono">diyan@portfolio: ~</div>
              <div className="w-16"></div>
            </div>

            {/* Terminal Content */}
            <div className="p-6 md:p-8 font-mono text-sm md:text-base h-[280px] flex flex-col">
              {/* whoami command */}
              <div className="mb-4">
                <div className="mb-2 h-6">
                  {showPrompt1 && (
                    <>
                      <span className="text-[#64ffda]">diyan</span>
                      <span className="text-gray-500">@</span>
                      <span className="text-[#64ffda]">portfolio</span>
                      <span className="text-gray-500">:</span>
                      <span className="text-[#64ffda]">~</span>
                      <span className="text-gray-500">$</span>
                      <span className="text-gray-300 ml-2">
                        {command1Text}
                        {command1Text && command1Text.length < command1.length && <span className="animate-pulse">_</span>}
                      </span>
                    </>
                  )}
                </div>
                <div className="ml-4 h-6">
                  {showOutput1 && (
                    <div className="animate-fade-in">
                      <span className="text-[#64ffda]">&gt;</span> Diyan Thimeesha <span className="text-[#64ffda]">&gt;</span> Full Stack Developer
                    </div>
                  )}
                </div>
              </div>

              {/* cat about.txt command */}
              <div className="mb-4">
                <div className="mb-2 h-6">
                  {showPrompt2 && (
                    <>
                      <span className="text-[#64ffda]">diyan</span>
                      <span className="text-gray-500">@</span>
                      <span className="text-[#64ffda]">portfolio</span>
                      <span className="text-gray-500">:</span>
                      <span className="text-[#64ffda]">~</span>
                      <span className="text-gray-500">$</span>
                      <span className="text-gray-300 ml-2">
                        {command2Text}
                        {command2Text && command2Text.length < command2.length && <span className="animate-pulse">_</span>}
                      </span>
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
                {showPrompt3 && (
                  <div className="animate-fade-in">
                    <span className="text-[#64ffda]">diyan</span>
                    <span className="text-gray-500">@</span>
                    <span className="text-[#64ffda]">portfolio</span>
                    <span className="text-gray-500">:</span>
                    <span className="text-[#64ffda]">~</span>
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
              className="group flex items-center space-x-2 px-6 py-3 bg-[#64ffda]/20 border border-[#64ffda]/50 hover:bg-[#64ffda]/30 text-[#64ffda] hover:text-[#64ffda]/80 rounded font-mono text-sm transition-all duration-300"
            >
              <span>View my work →</span>
            </a>
            <a
              href="#contact"
              className="group flex items-center space-x-2 px-6 py-3 bg-gray-800/50 border border-gray-700 hover:border-[#64ffda]/50 text-gray-300 hover:text-[#64ffda] rounded font-mono text-sm transition-all duration-300"
            >
              <span>Get in touch</span>
            </a>
          </div>

          {/* Availability Status */}
          <div className="flex items-center space-x-2 text-sm font-mono pt-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-gray-500">{"// Available for new projects"}</span>
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
