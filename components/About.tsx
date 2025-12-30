"use client";

const About = () => {
  const stats = [
    { value: "3+", label: "Years Experience", subtitle: "in development" },
    { value: "Full Stack", label: "Developer", subtitle: "End-to-end solutions" },
    { value: "Modern", label: "Tech Stack", subtitle: "Latest technologies" },
  ];

  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Number */}
        <div className="text-8xl font-bold text-gray-800/20 mb-8">02.</div>

        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">About Me</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-[#64ffda] to-purple-500"></div>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Description */}
          <div className="lg:col-span-2 space-y-6">
            <p className="text-gray-300 text-lg leading-relaxed border-l-4 border-[#64ffda] pl-6">
              I&apos;m a <span className="text-[#64ffda] font-semibold">Full Stack Developer</span> with 
              experience building enterprise management systems and large-scale corporate solutions.
            </p>
            
            <p className="text-gray-400 leading-relaxed">
              My journey includes development of web applications used by various organizations, 
              technical team leadership, and creation of solutions with modern technologies for 
              business process automation.
            </p>

            <p className="text-gray-400 leading-relaxed">
              What sets me apart is the combination of technical expertise with strategic business 
              vision. I don&apos;t just write code — I understand the problem, design the 
              architectural solution, and deliver measurable results.
            </p>

            <p className="text-gray-400 leading-relaxed">
              Currently working as a developer, helping companies optimize processes and scale 
              operations through well-applied technology.
            </p>

            <div className="pt-6">
              <a
                href="#contact"
                className="inline-flex items-center space-x-2 px-6 py-3 bg-[#64ffda] hover:bg-[#64ffda]/80 text-gray-900 rounded font-medium transition-all duration-300"
              >
                <span>Let&apos;s Connect</span>
                <span>→</span>
              </a>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="space-y-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="glass p-6 rounded hover:bg-white/5 transition-all duration-300 border-l-4 border-[#64ffda]"
              >
                <div className="text-3xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-white font-semibold mb-1">
                  {stat.label}
                </div>
                <div className="text-gray-500 text-sm">
                  {stat.subtitle}
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
