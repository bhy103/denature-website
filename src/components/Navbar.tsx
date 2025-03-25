'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // 如果滚动到顶部，显示导航栏
      if (currentScrollY < 10) {
        setIsVisible(true);
      } else {
        // 向下滚动时隐藏，向上滚动时显示
        setIsVisible(currentScrollY < lastScrollY);
      }
      
      setIsScrolled(currentScrollY > 0);
      lastScrollY = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`w-full z-40 transition-all duration-300 ${
      isScrolled 
        ? 'fixed top-[40px] bg-transparent' 
        : 'absolute top-[40px] bg-transparent'
    } ${isVisible ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-3xl font-bold text-green-700 hover:text-green-800 transition-colors">
              DE NATURE
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-lg font-medium text-gray-700 hover:text-green-700 transition-colors"
            >
              Home
            </Link>
            <div className="relative group">
              <button
                className="text-lg font-medium text-gray-700 hover:text-green-700 transition-colors flex items-center"
              >
                About Us
                <ChevronDown className="w-4 h-4 ml-1" />
              </button>
              <div className="absolute top-full left-0 w-48 bg-gradient-to-br from-green-50 via-emerald-50 to-green-100 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <Link
                  href="/about/our-story"
                  className="block px-4 py-2 text-gray-700 hover:bg-green-100 hover:text-green-700 transition-colors"
                >
                  Our Story
                </Link>
                <Link
                  href="/about/our-mission"
                  className="block px-4 py-2 text-gray-700 hover:bg-green-100 hover:text-green-700 transition-colors"
                >
                  Our Mission
                </Link>
                <Link
                  href="/about/why-i-started"
                  className="block px-4 py-2 text-gray-700 hover:bg-green-100 hover:text-green-700 transition-colors"
                >
                  Messages from Founder
                </Link>
              </div>
            </div>
            <Link
              href="/menu"
              className="text-lg font-medium text-gray-700 hover:text-green-700 transition-colors"
            >
              Service Areas
            </Link>
            <Link
              href="/community"
              className="text-lg font-medium text-gray-700 hover:text-green-700 transition-colors"
            >
              Community
            </Link>
            <Link
              href="/contact"
              className="text-lg font-medium text-gray-700 hover:text-green-700 transition-colors"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-green-700 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-br from-green-50 via-emerald-50 to-green-100 shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              href="/"
              className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-green-700 hover:bg-green-100 rounded-md transition-colors"
            >
              Home
            </Link>
            <div className="relative group">
              <button
                className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-green-700 hover:bg-green-100 rounded-md transition-colors"
              >
                About Us
              </button>
              <div className="absolute top-full left-0 w-48 bg-gradient-to-br from-green-50 via-emerald-50 to-green-100 rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                <Link
                  href="/about/our-story"
                  className="block px-4 py-2 text-gray-700 hover:bg-green-100 hover:text-green-700 transition-colors"
                >
                  Our Story
                </Link>
                <Link
                  href="/about/our-mission"
                  className="block px-4 py-2 text-gray-700 hover:bg-green-100 hover:text-green-700 transition-colors"
                >
                  Our Mission
                </Link>
                <Link
                  href="/about/why-i-started"
                  className="block px-4 py-2 text-gray-700 hover:bg-green-100 hover:text-green-700 transition-colors"
                >
                  Messages from Founder
                </Link>
              </div>
            </div>
            <Link
              href="/menu"
              className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-green-700 hover:bg-green-100 rounded-md transition-colors"
            >
              Service Areas
            </Link>
            <Link
              href="/community"
              className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-green-700 hover:bg-green-100 rounded-md transition-colors"
            >
              Community
            </Link>
            <Link
              href="/contact"
              className="block px-4 py-3 text-base font-medium text-gray-700 hover:text-green-700 hover:bg-green-100 rounded-md transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
} 