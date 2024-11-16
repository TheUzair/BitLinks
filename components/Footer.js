import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-purple-700 text-white py-6">
      <div className="container mx-auto px-6 flex flex-col sm:flex-row sm:justify-between sm:items-center">
        <div className="sm:text-left mb-4 sm:mb-0">
          <h2 className="text-2xl font-bold">BitLinks</h2>
          <p className="text-sm mt-1">Shorten, manage, and track your links.</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/about" className="hover:underline">
            About
          </Link>
          <Link href="/features" className="hover:underline">
            Features
          </Link>
          <Link href="/contact" className="hover:underline">
            Contact
          </Link>
          <Link href="/privacy" className="hover:underline">
            Privacy Policy
          </Link>
        </div>

        <div className="flex gap-4 mt-4 sm:mt-0">
          <Link href="https://x.com/TheUzair4" target="_blank">
            <span className="hover:text-gray-300">Twitter</span>
          </Link>
          <Link href="https://www.linkedin.com/in/mohd-uzair-33b166204/" target="_blank">
            <span className="hover:text-gray-300">Linkedin</span>
          </Link>
          <Link href="https://github.com/TheUzair" target="_blank">
            <span className="hover:text-gray-300">GitHub</span>
          </Link>
        </div>
      </div>
      <div className="sm:text-center sm:px-0 px-6 mt-4 text-sm text-gray-200">
        © {new Date().getFullYear()} BitLinks. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
