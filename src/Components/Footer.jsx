import { Cherry, Github, Instagram, Mail, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#4B0082] px-6 text-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and About */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center">
              <Cherry size={24} className="text-[#ffb7c5] mr-2" />
              <span className="text-xl font-bold">
                Lingo<span className="text-[#ffb7c5]">Bingo</span>
              </span>
            </Link>
            <p className="text-gray-300 text-sm mt-2 max-w-xs">
              Making Japanese language learning fun, interactive, and accessible
              for everyone. Learn at your own pace with our engaging vocabulary
              tools.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-accent-300">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-primary-300 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/start-learning"
                  className="text-gray-300 hover:text-primary-300 transition-colors"
                >
                  Start Learning
                </Link>
              </li>
              <li>
                <Link
                  to="/tutorials"
                  className="text-gray-300 hover:text-primary-300 transition-colors"
                >
                  Tutorials
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-primary-300 transition-colors"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-accent-300">
              Connect With Us
            </h3>
            <div className="space-y-3">
              <a
                href="mailto:info@lingobingo.com"
                className="flex items-center text-gray-300 hover:text-primary-300 transition-colors"
              >
                <Mail size={18} className="mr-2" />
                info@lingobingo.com
              </a>
              <div className="flex space-x-4 mt-4">
                <a
                  href="#"
                  className="text-gray-300 hover:text-primary-300 transition-colors"
                >
                  <Twitter size={20} />
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-primary-300 transition-colors"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-primary-300 transition-colors"
                >
                  <Github size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            &copy; {currentYear} LingoBingo. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-sm text-gray-400 hover:text-gray-300">
              Privacy Policy
            </a>
            <a href="#" className="text-sm text-gray-400 hover:text-gray-300">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
