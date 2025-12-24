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
    <section id="contact" className="py-32 relative bg-black/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Number */}
        <div className="text-8xl md:text-9xl font-bold text-gray-800/20 absolute left-8 -top-8 select-none">
          05.
        </div>

        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <p className="text-gray-400 max-w-2xl font-mono">
            {"// Let's work together"}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6 font-mono">
                Let&apos;s Connect
              </h3>
              <p className="text-gray-400 leading-relaxed mb-8 text-sm">
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
                  className="flex items-center space-x-4 p-4 bg-gray-900/50 border border-gray-800 rounded-lg hover:border-blue-500/50 transition-all duration-300 group"
                >
                  <div className="text-blue-400 text-2xl group-hover:text-blue-300 transition-colors duration-300">
                    {method.icon}
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 font-mono">{method.title}</p>
                    <p className="text-gray-300 font-mono text-sm group-hover:text-blue-400 transition-colors duration-200">
                      {method.value}
                    </p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-900/50 border border-gray-800 rounded-lg p-6">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-mono text-gray-400 mb-2"
                >
                  name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded focus:outline-none focus:border-blue-500 text-white transition-colors duration-200 font-mono text-sm"
                  placeholder="your_name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-mono text-gray-400 mb-2"
                >
                  email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded focus:outline-none focus:border-blue-500 text-white transition-colors duration-200 font-mono text-sm"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-mono text-gray-400 mb-2"
                >
                  message:
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-black/50 border border-gray-700 rounded focus:outline-none focus:border-blue-500 text-white transition-colors duration-200 resize-none font-mono text-sm"
                  placeholder="your_message_here..."
                />
              </div>

              <button
                type="submit"
                disabled={isSending}
                className="w-full flex items-center justify-center space-x-2 px-6 py-3 bg-blue-600/20 border border-blue-500/50 hover:bg-blue-600/30 text-blue-400 hover:text-blue-300 rounded font-mono text-sm transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                aria-label="Send message"
              >
                <span>{isSending ? "sending..." : "send_message()"}</span>
                <FiSend className="text-sm" />
              </button>

              {status && (
                <p 
                  className={`text-center font-mono text-sm ${
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
