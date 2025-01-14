"use client"; // Mark this file as a client component

import { useAuth } from '../components/AuthContext'; // Ensure correct import path
import { useRouter } from 'next/navigation'; // Import useRouter from next/navigation
import { useEffect, useState } from 'react';
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import WorkspaceCard from '../components/WorkspaceCard';

const HomePage = () => {
  const { isAuthenticated } = useAuth(); // Destructure isAuthenticated from useAuth
  const router = useRouter(); // Initialize router

  const [lahoreWorkspaces, setLahoreWorkspaces] = useState([]); // State for Lahore workspaces
  const [islamabadWorkspaces, setIslamabadWorkspaces] = useState([]); // State for Islamabad workspaces
  const [selectedWorkspace, setSelectedWorkspace] = useState(null); // State for selected workspace

  // Fetch workspace data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const lahoreResponse = await fetch('/data/lahoredata.json');
        const islamabadResponse = await fetch('/data/lslamabaddata.json');
    
        if (!lahoreResponse.ok) {
          throw new Error(`Failed to fetch Lahore data: ${lahoreResponse.statusText}`);
        }
    
        if (!islamabadResponse.ok) {
          throw new Error(`Failed to fetch Islamabad data: ${islamabadResponse.statusText}`);
        }
    
        const lahoreData = await lahoreResponse.json();
        const islamabadData = await islamabadResponse.json();
    
        setLahoreWorkspaces(lahoreData);
        setIslamabadWorkspaces(islamabadData);
      } catch (error) {
        console.error('Error fetching workspace data:', error);
      }
    };
    

    fetchData();
  }, []); // Empty dependency array ensures this runs only once on mount

  // Redirect to sign-in if not authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/signin'); // Redirect to the sign-in page
    }
  }, [isAuthenticated, router]);

  return (
    <div>
      {/* Navbar */}
      <Navbar />

      {/* Background Image Section */}
      <div className="relative h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('https://kickstart.pk/wp-content/uploads/2022/01/Daftarkhwan-Coworking-space-1024x576.jpg')" }}>
        <div className="absolute inset-0 bg-black opacity-50"></div> {/* Overlay for better text visibility */}
        <div className="relative text-center text-white">
          <h1 className="text-6xl font-bold">SECURE YOUR COWORKING SPACE</h1>
          <p className="text-lg mt-4">WE OFFER HIGH-PERFORMANCE & VIBRANT WORKSPACE THAT ATTRACTS AND RETAINS TALENT</p>
        </div>
      </div>

      {/* Additional Text Section */}
      <div className="text-center py-16">
        <h2 className="text-4xl font-bold">WORK THE WAY YOU WANT</h2>
        <p className="mt-4 mx-auto max-w-2xl text-lg">
          Your workspace matters. You deserve an environment that inspires and energizes you, not a dull and lifeless office. That’s why at Comence, we avoid one-size-fits-all solutions. We craft flexible workspaces, each with its own unique identity and character, tailored to the needs of the local market and community. Our spaces are thoughtfully curated and distinctively designed to offer you a truly unmatched working experience.
        </p>
      </div>

      {/* Lahore Workspace Section */}
      <div className="p-4 mt-16">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Lahore Workspaces</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {lahoreWorkspaces.map((workspace) => (
            <WorkspaceCard
              key={workspace.id}
              workspace={workspace}
              onSelect={setSelectedWorkspace} // Pass setSelectedWorkspace here
            />
          ))}
        </div>
      </div>

      {/* Islamabad Workspace Section */}
      <div className="p-4 mt-16">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Islamabad Workspaces</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {islamabadWorkspaces.map((workspace) => (
            <WorkspaceCard
              key={workspace.id}
              workspace={workspace}
              onSelect={setSelectedWorkspace}
            />
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default HomePage;
