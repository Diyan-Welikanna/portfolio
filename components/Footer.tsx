import { FiGithub, FiLinkedin, FiMail, FiHeart } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-black/50 backdrop-blur-md border-t border-gray-800 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-4">
          {/* Social Links */}
          <div className="flex space-x-6">
            <a
              href="https://github.com/Diyan-Welikanna"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-200"
              aria-label="GitHub"
            >
              <FiGithub className="text-2xl" />
            </a>
            <a
              href="mailto:thimeesharandika@gmail.com"
              className="text-gray-400 hover:text-white transition-colors duration-200"
              aria-label="Email"
            >
              <FiMail className="text-2xl" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-gray-400 text-sm flex items-center space-x-1">
            <span>© {new Date().getFullYear()} Diyan Thimeesha. Made with</span>
            <FiHeart className="text-red-500" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
