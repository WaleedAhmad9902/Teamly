// src/components/Footer.js
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-slate-100 text-gray-700 py-4 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
        
        {/* Logo and Description */}
        <div className="flex items-center space-x-4 mb-4 md:mb-0">
          <img src="/images/logo.jpeg" alt="Logo" className="h-10 w-10 rounded-full" />
          <p className="font-semibold text-lg">Teamly</p>
        </div>
        
        {/* Footer Links */}
        <div className="flex space-x-8 mb-4 md:mb-0">
          <Link href="/about" className="hover:text-orange-500">About Us</Link>
          <Link href="/contacts" className="hover:text-orange-500">Contact</Link>
          <Link href="/privacy-policy" className="hover:text-orange-500">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-orange-500">Terms of Service</Link>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4">
          <Link href="https://facebook.com" target="_blank" aria-label="Facebook">
            <FaFacebook className="text-gray-700 hover:text-orange-500" size={20} />
          </Link>
          <Link href="https://twitter.com" target="_blank" aria-label="Twitter">
            <FaTwitter className="text-gray-700 hover:text-orange-500" size={20} />
          </Link>
          <Link href="https://instagram.com" target="_blank" aria-label="Instagram">
            <FaInstagram className="text-gray-700 hover:text-orange-500" size={20} />
          </Link>
          <Link href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
            <FaLinkedin className="text-gray-700 hover:text-orange-500" size={20} />
          </Link>
        </div>
      </div>

      <div className="text-center mt-6 text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Teamly. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
