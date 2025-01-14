"use client";

import Navbar from '@/components/Navbar'; 
import Footer from '@/components/Footer';
import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

const RentPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [workspaceDetails, setWorkspaceDetails] = useState(null);

  useEffect(() => {
    const details = {
      id: searchParams.get('id'),
      name: searchParams.get('name'),
      description: searchParams.get('description'),
      price: searchParams.get('price'),
      image: searchParams.get('image'),
    };
    setWorkspaceDetails(details);
  }, [searchParams]);

  if (!workspaceDetails) return <p>Loading...</p>;

  const handleProceedToRent = () => {
    router.push('/Confirmation'); // Redirect to the confirmation page
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-blue-100 to-blue-300">
      <Navbar />

      <div className="flex flex-grow items-center justify-center p-10">
        {/* Left Section: Description and Button */}
        <div className="flex flex-col justify-center w-1/2 p-6 bg-white rounded-lg shadow-lg mr-8 transition-transform transform hover:scale-105">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">{workspaceDetails.name}</h2>
          <p className="text-gray-700 text-lg mb-4">{workspaceDetails.description}</p>
          <p className="text-xl font-semibold text-blue-500 mb-6">{workspaceDetails.price}</p>
          <button
            onClick={handleProceedToRent}
            className="w-1/2 py-3 px-5 bg-gray-500 hover:bg-orange-600 text-white font-bold rounded-lg transition-colors duration-200"
          >
            Proceed to Rent
          </button>
        </div>

        {/* Right Section: Image */}
        <div className="w-1/2 max-w-sm overflow-hidden rounded-lg shadow-lg">
          <img
            src={workspaceDetails.image}
            alt={workspaceDetails.name}
            className="w-full h-auto object-cover"
            style={{
              imageRendering: 'auto',
              filter: 'contrast(1.2) brightness(1.1)',
              maxHeight: '300px',
            }}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default RentPage;
