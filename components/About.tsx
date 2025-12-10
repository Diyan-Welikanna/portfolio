"use client";

import { FiCode, FiZap, FiHeart } from "react-icons/fi";

const About = () => {
  const highlights = [
    {
      icon: <FiCode className="text-3xl" />,
      title: "Clean Code",
      description: "Writing maintainable and scalable code following best practices",
    },
    {
      icon: <FiZap className="text-3xl" />,
      title: "Performance",
      description: "Building fast and optimized applications for the best user experience",
    },
    {
      icon: <FiHeart className="text-3xl" />,
      title: "Passion",
      description: "Dedicated to continuous learning and staying updated with latest technologies",
    },
  ];

  return (
    <section id="about" className="py-20 bg-black/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
           <span className="gradient-text">About Me</span>
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Description */}
          <div className="space-y-6 animate-slide-up">
            <p className="text-gray-300 text-lg leading-relaxed">
              Hello! I&apos;m <span className="text-blue-500 font-semibold">Diyan Thimeesha</span>, 
              a passionate Full Stack Developer who loves creating beautiful and functional web applications.
            </p>
            <p className="text-gray-400 leading-relaxed">
              I specialize in building modern web applications using cutting-edge technologies. 
              My journey in software development has equipped me with a diverse skill set and 
              a problem-solving mindset that helps me tackle complex challenges.
            </p>
            <p className="text-gray-400 leading-relaxed">
              When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing to 
              open-source projects, or learning something new to enhance my skills.
            </p>
            <div className="pt-4">
              <a
                href="#contact"
                className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/50"
              >
                Let&apos;s Connect
              </a>
            </div>
          </div>

          {/* Right Side - Highlights */}
          <div className="space-y-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="glass p-6 rounded-lg hover:bg-white/10 transition-all duration-300 transform hover:scale-105"
                style={{
                  animationDelay: `${index * 0.2}s`,
                }}
              >
                <div className="flex items-start space-x-4">
                  <div className="text-blue-500 flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
