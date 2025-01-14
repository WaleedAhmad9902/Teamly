"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import WorkspaceCard from '../../components/WorkspaceCard';
import Amenities from '../../components/Amenities';

const PrivateOfficePage = () => {
  const [selectedWorkspace, setSelectedWorkspace] = useState(null); // State for selected workspace
  const [privateOffices, setPrivateOffices] = useState([]); // State for workspace data

  // Fetch private offices data on component mount
  useEffect(() => {
    const fetchPrivateOffices = async () => {
      const response = await fetch('/data/privateOffices.json'); // Adjust the path if needed
      const data = await response.json();
      setPrivateOffices(data);
    };
    fetchPrivateOffices();
  }, []);

  return (
    <div>
      <Navbar />

      {/* Hero Section with Background Image */}
      <div 
        className="relative h-[50vh] bg-cover bg-center text-white flex items-center justify-center"
        style={{ backgroundImage: "url('https://images.squarespace-cdn.com/content/v1/5877fcf8ebbd1a0e70bf993e/1612977764262-I0UOYLBCFNVLYG0B24BY/A+desk+set+up+inside+a+shared+workspace')" }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-left px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl text-gray-200">
            <Link href="/" className="underline hover:text-gray-300">Home</Link> / Private Office
          </h2>
          <h1 className="text-7xl font-bold mt-4">Private Office</h1>
          <p className="mt-4 text-2xl max-w-2xl mx-auto">
            A private, fully serviced office for your team to focus and collaborate, tailored for small and growing teams of 1-58. It's the perfect solution if you need your own space while still enjoying the benefits of a vibrant community.
          </p>
        </div>
      </div>

      {/* Content Section with Workspace Cards */}
      <div className="p-8">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Our Private Offices</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {privateOffices.map(workspace => (
            <WorkspaceCard
              key={workspace.id}
              workspace={workspace}
              onSelect={setSelectedWorkspace} // Pass setSelectedWorkspace here
            />
          ))}
        </div>
      </div>

      {/* Amenities Section */}
      <Amenities/>

      <Footer />
    </div>
  );
};

export default PrivateOfficePage;
