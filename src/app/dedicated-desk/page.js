
"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import WorkspaceCard from '../../components/WorkspaceCard';
import Amenities from '../../components/Amenities';

const dedicateddeskPage = () => {
  const [workspaces, setWorkspaces] = useState([]); // State to store fetched workspaces
  const [selectedWorkspace, setSelectedWorkspace] = useState(null); // State for selected workspace

  useEffect(() => {
    const fetchWorkspaces = async () => {
      try {
        const response = await fetch('/data/dedicateddeskdata.json'); // Adjust path if needed
        const data = await response.json();
        setWorkspaces(data); // Set fetched data to state
      } catch (error) {
        console.error('Error fetching workspaces:', error);
      }
    };

    fetchWorkspaces();
  }, []); // Empty dependency array to run once

  return (
    <div>
      <Navbar />

      {/* Hero Section with Background Image */}
      <div 
        className="relative h-[50vh] bg-cover bg-center text-white flex items-center justify-center"
        style={{ backgroundImage: "url('https://www.appliedglobal.com/wp-content/uploads/How-to-Create-a-Modern-Meeting-Room-Setup-1024x576.png')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-left px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl text-gray-200">
            <Link href="/" className="underline hover:text-gray-300">Home</Link> / DEDICATED DESK
          </h2>
          <h1 className="text-7xl font-bold mt-4">DEDICATED DESK</h1>
          <p className="mt-4 text-2xl max-w-2xl mx-auto">
           Your own, permanent desk in a beautifully designed shared workspace. Perfect for individuals who use the space regularly.
          </p>
        </div>
      </div>

      {/* Centered Image and Text Section */}
      <div className="mt-8 flex flex-col items-center px-4">
        <img 
          src="https://comence.io/wp-content/uploads/2024/09/comence-homepage-coworking-lahore-1536x864.webp" 
          alt="Flagship Location" 
          className="w-full max-w-3xl rounded-lg shadow-lg"
        />
        <div className="bg-gray-100 text-center p-8 mt-4 max-w-3xl rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800">Welcome to our Flagship Location</h2>
          <p className="mt-4 text-base sm:text-lg text-gray-700 leading-relaxed">
            Welcome to our Flagship Location – a flexible workspace like no other. Say goodbye to grey walls, monotonous desks, 
            and uninspiring break rooms. Instead, envision sleek design, abundant natural light, and a community of people who 
            love coming to the office. Grow your business in beautifully crafted private offices, complete with access to meeting 
            rooms, breakout spaces, event venues, a bouldering wall, and outdoor terraces. Plus, enjoy the convenience of an onsite 
            café. This Fitwel-accredited building is the ideal environment for you and your team to collaborate, connect, and thrive.
          </p>
        </div>
      </div>
 
      {/* Content Section with Workspace Cards */}
      <div className="p-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Our Dedicated Desks</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {workspaces.map(workspace => (
            <WorkspaceCard
              key={workspace.id}
              workspace={workspace}
              onSelect={setSelectedWorkspace} // Pass setSelectedWorkspace here
            />
          ))}
        </div>
      </div>

      {/* Amenities Section */}
      <Amenities />

      <Footer />
    </div>
  );
};

export default dedicateddeskPage;

