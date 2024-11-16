"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="h-16 bg-purple-700 flex justify-between items-center px-6 text-white shadow-lg">
      {/* Logo Section */}
      <div className="flex items-center gap-2">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/link.gif"
            alt="BitLinks Logo"
            width={40}
            height={40}
            className="rounded-full border-2 border-purple-500"
          />
          <span className="font-bold text-xl cursor-pointer hover:text-purple-300 transition">
            BitLinks
          </span>
        </Link>
      </div>

      {/* Desktop Navigation Links */}
      <ul className="hidden md:flex items-center gap-8 font-medium">
        <li>
          <Link href="/">
            <span className="cursor-pointer hover:text-purple-300 transition">
              Home
            </span>
          </Link>
        </li>
        <li>
          <Link href="/about">
            <span className="cursor-pointer hover:text-purple-300 transition">
              About
            </span>
          </Link>
        </li>
        <li>
          <Link href="/contact">
            <span className="cursor-pointer hover:text-purple-300 transition">
              Contact
            </span>
          </Link>
        </li>
      </ul>

      {/* CTA Button */}
      <div className="hidden md:flex">
        <Link href="/shorten">
          <button className="bg-purple-500 rounded-full shadow-lg px-5 py-2 text-white font-bold text-sm md:text-lg hover:bg-purple-600 transform hover:scale-105 transition">
            Try Now
          </button>
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden ml-auto">
        <button onClick={toggleMobileMenu} className="focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu Links */}
      {isMobileMenuOpen && (
        <ul className="absolute top-16 left-0 w-full bg-purple-700 text-white flex flex-col items-center gap-4 py-6 shadow-md md:hidden">
          <li>
            <Link href="/">
              <span
                className="cursor-pointer hover:text-purple-300 transition"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </span>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <span
                className="cursor-pointer hover:text-purple-300 transition"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About
              </span>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <span
                className="cursor-pointer hover:text-purple-300 transition"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </span>
            </Link>
          </li>
          <li>
            <Link href="/shorten">
              <button
                className="bg-purple-500 rounded-full shadow-lg px-5 py-2 text-white font-bold text-sm hover:bg-purple-600 transform hover:scale-105 transition"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Try Now
              </button>
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
