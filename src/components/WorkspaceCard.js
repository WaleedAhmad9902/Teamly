"use client";

import { useRouter } from 'next/navigation';
import { useState } from 'react';

const WorkspaceCard = ({ workspace }) => {
  const router = useRouter();
  const [showDialog, setShowDialog] = useState(false); // State for dialog visibility

  const handleRentNowClick = () => {
    // Ensure you're passing the correct parameters
    router.push(`/rent?id=${workspace.id}&name=${encodeURIComponent(workspace.name)}&description=${encodeURIComponent(workspace.description)}&price=${encodeURIComponent(workspace.price)}&image=${encodeURIComponent(workspace.image)}`);
  };

  const handleCardClick = () => {
    setShowDialog(true); // Show dialog when card is clicked
  };

  const closeDialog = () => {
    setShowDialog(false); // Close dialog
  };

  return (
    <div>
      {/* Workspace Card */}
      <div 
        className="relative bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105 cursor-pointer" 
        onClick={handleCardClick}
      >
        <img 
          src={workspace.image} 
          alt={workspace.name} 
          className="w-full h-48 object-cover rounded-t-lg" 
        />
        <div className="p-4">
          <h3 className="text-2xl font-semibold text-gray-800">{workspace.name}</h3>
          <p className="text-gray-600 mt-2">{workspace.description}</p>
          <p className="font-semibold text-xl text-gray-900 mt-4">{workspace.price}</p>
        </div>
      </div>

      {/* Dialog */}
      {showDialog && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 backdrop-blur transition-all duration-300 ease-in-out">
          <div className="bg-white rounded-lg shadow-lg p-8 w-96 transition-transform transform scale-100">
            <h2 className="text-3xl font-bold text-center mb-6">{workspace.name}</h2>
            <p className="text-lg text-gray-700 text-center mb-4">{workspace.description}</p>
            <p className="font-semibold text-2xl text-center text-gray-900 mb-6">{workspace.price}</p>
            <div className="flex justify-center space-x-4">
              <button 
                className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-orange-700 transition duration-300"
                onClick={() => {
                  closeDialog(); // Close the dialog
                  handleRentNowClick(); // Redirect to rent page
                }}
              >
                Rent Now
              </button>
              <button 
                className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition duration-300"
                onClick={closeDialog}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WorkspaceCard;
