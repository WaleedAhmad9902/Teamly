"use client";

import Link from 'next/link';
import { useState, useRef, useEffect, useCallback } from 'react';

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const navRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleDropdown = useCallback((dropdown) => {
    setOpenDropdown(prev => prev === dropdown ? null : dropdown);
  }, []);

  const handleLinkClick = useCallback((e) => {
    e.stopPropagation();
    setOpenDropdown(null);
  }, []);

  return (
    <nav className="bg-slate-100 shadow" ref={navRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center text-gray-800 text-2xl font-bold mr-4">
              <img src="/images/logo.jpeg" alt="Logo" className="h-8 mr-2 rounded-full" />
              TEAMLY
            </Link>
          </div>

          {/* Center Navigation Links */}
          <div className="flex-grow flex justify-center space-x-4">
            <Link href="/contacts" className="text-gray-800 hover:text-orange-500 transform hover:scale-105 transition duration-300">
              CONTACT US!
            </Link>
            <div className="relative">
              <button
                onClick={() => toggleDropdown('locations')}
                className="text-gray-800 hover:text-orange-500 transform hover:scale-105 transition duration-300 focus:outline-none"
                aria-haspopup="true"
                aria-expanded={openDropdown === 'locations'}
              >
                LOCATIONS
              </button>
              {openDropdown === 'locations' && (
                <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg z-50 rounded-md overflow-hidden">
                  <Link href="/locations/lahore" className="block px-4 py-2 text-gray-800 hover:bg-orange-200" onClick={handleLinkClick}>LAHORE</Link>
                  <Link href="/locations/islamabad" className="block px-4 py-2 text-gray-800 hover:bg-orange-200" onClick={handleLinkClick}>ISLAMABAD</Link>
                </div>
              )}
            </div>
            <div className="relative">
              <button
                onClick={() => toggleDropdown('solutions')}
                className="text-gray-800 hover:text-orange-500 transform hover:scale-105 transition duration-300 focus:outline-none"
                aria-haspopup="true"
                aria-expanded={openDropdown === 'solutions'}
              >
                OUR SOLUTIONS
              </button>
              {openDropdown === 'solutions' && (
                <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg z-50 rounded-md overflow-hidden">
                  <Link href="/private-office" className="block px-4 py-2 text-gray-800 hover:bg-orange-200" onClick={handleLinkClick}>PRIVATE OFFICES</Link>
                  <Link href="/dedicated-desk" className="block px-4 py-2 text-gray-800 hover:bg-orange-200" onClick={handleLinkClick}>DEDICATED DESK</Link>
                  <Link href="/meeting-rooms" className="block px-4 py-2 text-gray-800 hover:bg-orange-200" onClick={handleLinkClick}>MEETING ROOMS</Link>
                </div>
              )}
            </div>
          </div>

          {/* Seller Button */}
          <div className="ml-4">
            <Link href="/seller" className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transform hover:scale-105 transition duration-300">
              Seller
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

