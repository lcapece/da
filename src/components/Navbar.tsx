import React, { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img src="/dataautomation_logo_800px.png" alt="Company Logo" className="h-10 w-auto" />
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <a href="#services" className="text-gray-600 hover:text-indigo-600 flex items-center">
                Services <ChevronDown className="ml-1 h-4 w-4" />
              </a>
              <Link to="/solutions" className="text-gray-600 hover:text-indigo-600">Solutions</Link>
              <a href="#case-studies" className="text-gray-600 hover:text-indigo-600">Case Studies</a>
              <a href="#contact" className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition-colors duration-300">
                Get Started
              </a>
            </div>
          </div>
          
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-b">
            <a href="#services" className="block px-3 py-2 text-gray-600 hover:text-indigo-600">Services</a>
            <Link to="/solutions" className="block px-3 py-2 text-gray-600 hover:text-indigo-600">Solutions</Link>
            <a href="#case-studies" className="block px-3 py-2 text-gray-600 hover:text-indigo-600">Case Studies</a>
            <a href="#contact" className="block px-3 py-2 text-indigo-600 font-medium">Get Started</a>
          </div>
        </div>
      )}
    </nav>
  );
}