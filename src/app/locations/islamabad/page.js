// src/app/locations/lahore/page.js
"use client";

import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import WorkspaceCard from '../../../components/WorkspaceCard';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Import useRouter
import Amenities from '../../../components/Amenities';

const IslamabadPage = () => {
  const [workspaces, setWorkspaces] = useState([]);
  const [selectedWorkspace, setSelectedWorkspace] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data/lslamabaddata.json'); // Adjust the path as needed
        const data = await response.json();
        setWorkspaces(data);
      } catch (error) {
        console.error('Error fetching workspace data:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <Navbar />

      <div
        className="relative bg-cover bg-center min-h-[50vh] text-center text-white flex flex-col items-center justify-center"
        style={{
          backgroundImage: "url('https://static.wixstatic.com/media/943304_bc501499ac4d448ebe24ef2045bc4ffe~mv2.jpg/v1/fill/w_1349,h_303,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/943304_bc501499ac4d448ebe24ef2045bc4ffe~mv2.jpg')",
        }}
      >
        <h1 className="text-4xl font-bold mb-4">ISLAMABAD</h1>
        <button 
          onClick={() => router.push('/book-tour')} // Navigate to book-tour page
          className="px-6 py-3 bg-gray-500 hover:bg-orange-600 text-white font-bold rounded"
        >
          BOOK A TOUR
        </button>
      </div>

      <div className="bg-white flex items-center justify-center p-8">
        <p className="text-lg text-gray-800 text-center">
          TEAMLY has vibrant sites with easy commutes across Islamabad. From the commercial hub of Gulberg to the liveliness of DHA. Join a community of ambitious entrepreneurs in Punjab's main business districts.
        </p>
      </div>

      <div className="p-4 mt-16">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">Our Workspaces</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {workspaces.map((workspace) => (
            <WorkspaceCard
              key={workspace.id}
              workspace={workspace}
              onSelect={setSelectedWorkspace}
            />
          ))}
        </div>
      </div>
      <Amenities/>

      <Footer />

      {selectedWorkspace && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
            <h3 className="text-2xl font-bold mb-4 text-center">{selectedWorkspace.name}</h3>
            <p className="text-gray-700 mb-4 text-justify leading-relaxed">
              {selectedWorkspace.description}
            </p>
            <p className="font-bold text-xl text-gray-800 mb-4">{selectedWorkspace.price}</p>

            <button
              className="w-full bg-gray-500 hover:bg-orange-600 text-white py-2 rounded transition duration-200"
              onClick={() => setSelectedWorkspace(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
export default IslamabadPage;

