"use client";

import { useState } from "react";
import { FiMail, FiGithub, FiLinkedin, FiSend } from "react-icons/fi";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setStatus("Sending message...");

    try {
      const resp = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "56cd3253-86ca-400e-96ad-43fd20f5edad",
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      // Some responses may be empty or not valid JSON; handle both
      const text = await resp.text();
      let data: any = null;
      try {
        data = text ? JSON.parse(text) : null;
      } catch (parseErr) {
        data = text;
      }

      if (resp.ok) {
        // treat any 2xx response as success
        setStatus("Message sent! I'll get back to you soon.");
        setFormData({ name: "", email: "", message: "" });
      } else {
        // Non-2xx response from Web3Forms
        setStatus("Failed to send message. Please try again later.");
      }
    } catch (err) {
      // Network or other error
      setStatus("An error occurred while sending. Please try again later.");
    } finally {
      setIsSending(false);
      setTimeout(() => setStatus(""), 4000);
    }
  };

  const contactMethods = [
    {
      icon: <FiMail />,
      title: "Email",
      value: "thimeesharandika@gmail.com",
      link: "mailto:thimeesharandika@gmail.com",
    },
    {
      icon: <FiGithub />,
      title: "GitHub",
      value: "Diyan-Welikanna",
      link: "https://github.com/Diyan-Welikanna",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-black/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Let&apos;s Connect
              </h3>
              <p className="text-gray-400 leading-relaxed mb-8">
                I&apos;m always interested in hearing about new projects and opportunities. 
                Whether you have a question or just want to say hi, I&apos;ll try my best 
                to get back to you!
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <a
                  key={index}
                  href={method.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-4 p-5 glass rounded-lg hover:bg-gradient-to-r hover:from-blue-500/20 hover:to-purple-500/20 border-2 border-transparent hover:border-blue-500/50 transition-all duration-300 group transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/30"
                >
                  <div className="text-blue-500 text-3xl group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
                    {method.icon}
                  </div>
                  <div>
                    <p className="text-sm text-gray-400 group-hover:text-gray-300">{method.title}</p>
                    <p className="text-white font-medium group-hover:text-blue-400 transition-colors duration-200 text-lg">
                      {method.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="glass p-8 rounded-xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white transition-colors duration-200"
                  placeholder="Your name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white transition-colors duration-200"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-300 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white transition-colors duration-200 resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                disabled={isSending}
                className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-blue-500/50 disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Send message"
              >
                <span>{isSending ? "Sending..." : "Send Message"}</span>
                <FiSend />
              </button>

              {status && (
                <p 
                  className={`text-center font-medium ${
                    status.includes("sent") || status.includes("Sending") 
                      ? "text-green-400" 
                      : "text-red-400"
                  }`}
                  role="status"
                  aria-live="polite"
                >
                  {status}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
