import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-purple-700 text-white py-6">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-2xl font-bold">BitLinks</h2>
          <p className="text-sm mt-1">Shorten, manage, and track your links.</p>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
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

        <div className="flex gap-4 mt-4 md:mt-0">
          <Link href="https://twitter.com" target="_blank">
            <span className="hover:text-gray-300">Twitter</span>
          </Link>
          <Link href="https://facebook.com" target="_blank">
            <span className="hover:text-gray-300">Facebook</span>
          </Link>
          <Link href="https://github.com" target="_blank">
            <span className="hover:text-gray-300">GitHub</span>
          </Link>
        </div>
      </div>
      <div className="text-center mt-4 text-sm text-gray-200">
        © {new Date().getFullYear()} BitLinks. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
