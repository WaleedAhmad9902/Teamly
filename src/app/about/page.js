// src/app/about/page.js
"use client";

import React from 'react';

const AboutPage = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 p-6">
      {/* Title Section */}
      <h1 className="text-5xl font-bold text-gray-800 mb-10 tracking-wide">
        About Us
      </h1>
      <p className="text-center text-gray-600 max-w-2xl mb-16 text-lg leading-relaxed">
        At Teamly, we are dedicated to creating collaborative workspaces that foster innovation and productivity, making every workspace as inspiring as the work it holds.
      </p>

      {/* Mission Section */}
      <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-3xl mb-12 transform transition hover:scale-105 duration-300 ease-in-out">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          Our Mission
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Our mission is to design work environments where teams can perform at their best. We combine innovative design, functionality, and comfort to empower teams to collaborate effectively and bring ideas to life.
        </p>
      </div>

      {/* Team Section */}
      <div className="bg-white p-10 rounded-lg shadow-lg w-full max-w-3xl transform transition hover:scale-105 duration-300 ease-in-out">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          Meet the Team
        </h2>
        <p className="text-gray-700 mb-8 leading-relaxed">
          Our diverse team brings expertise and creativity from various fields, all united by a passion for creating exceptional workspaces that inspire.
        </p>

        {/* Team Members */}
        <div className="flex flex-col md:flex-row md:space-x-8 space-y-8 md:space-y-0">
          <div className="flex flex-col items-center text-center transition-transform duration-200 transform hover:scale-105">
            <img src="/images/sir shaffique.PNG" alt="Shafique-ur-Rehman" className="w-24 h-24 rounded-full mb-4 shadow-md" />
            <h3 className="text-lg font-medium text-gray-800">Shafique-ur-Rehman</h3>
            <p className="text-gray-500">CEO</p>
          </div>
          <div className="flex flex-col items-center text-center transition-transform duration-200 transform hover:scale-105">
            <img src="/images/waleed.jpeg" alt="Shafique-ur-Rehman" className="w-24 h-24 rounded-full mb-4 shadow-md" />
            <h3 className="text-lg font-medium text-gray-800">Waleed Ahmad</h3>
            <p className="text-gray-500">Head of Design</p>
          </div>
          <div className="flex flex-col items-center text-center transition-transform duration-200 transform hover:scale-105">
            <img src="/images/hamza.PNG" alt="Ali Hamza" className="w-24 h-24 rounded-full mb-4 shadow-md" />
            <h3 className="text-lg font-medium text-gray-800">Ali Hamza</h3>
            <p className="text-gray-500">Product Manager</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
