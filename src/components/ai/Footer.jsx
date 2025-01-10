import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube } from "react-icons/fa";

export const Footer = () => {
  return (
    <div
      className="text-black py-10"
      style={{
        background: "linear-gradient(to bottom, rgba(62, 88, 121, 0.8), rgba(33, 53, 85, 1))",
      }}
    >
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 text-center md:text-left">
        <div className="space-y-10 md:text-left">
          <div>
            <h4 className="font-bold text-lg mb-4 ">About Danson AI</h4>
            <p className="text-sm leading-6">
              Danson AI specializes in cutting-edge artificial intelligence solutions, transforming businesses with innovative technology. Join us on our journey to shape the future of AI.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Follow Us</h4>
            <p className="text-sm mb-4">
              Stay connected with us on social media for the latest updates and news.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-400"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-400"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-400"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-400"
              >
                <FaLinkedinIn size={20} />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-gray-400"
              >
                <FaYoutube size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="text-center md:text-left md:text-right">
        
        </div>
      </div>

      <div className="bg-gray-800 text-black py-5 border-t border-gray-700 text-center" style={{ fontSize: "12px" }}>
        <p>© {new Date().getFullYear()} Danson AI. All Rights Reserved.</p>
        <p>Designed with ❤️ by <strong>Danson AI Team</strong>.</p>
      </div>
    </div>
  );
};
