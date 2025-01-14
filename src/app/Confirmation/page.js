"use client";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { AiOutlineCheckCircle } from 'react-icons/ai'; // Add this import for the check icon

const ConfirmationPage = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const handleBackToHome = () => {
    router.push('/');
  };

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-100">
      <Navbar />

      <div className="flex-grow flex items-center justify-center p-6 sm:p-10">
        {!formSubmitted ? (
          <div className="bg-white rounded-2xl shadow-2xl p-10 max-w-lg w-full text-center transition duration-500 ease-in-out hover:scale-105">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Ready to be a part of our supercommunity?
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Please fill out the form below, and our team will schedule a tour for you!
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                placeholder="Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 shadow-sm"
                required
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 shadow-sm"
                required
              />
              <input
                type="tel"
                placeholder="Phone"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 shadow-sm"
                required
              />
              <button
                type="submit"
                className="w-full py-3 bg-gray-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition duration-300 shadow-lg"
              >
                Submit
              </button>
            </form>
          </div>
        ) : (
          <div className="bg-white rounded-2xl shadow-2xl p-10 max-w-md w-full text-center transition duration-500 ease-in-out">
            <div className="flex justify-center mb-4">
              <AiOutlineCheckCircle className="text-green-500 text-6xl" /> {/* Green checkmark */}
            </div>
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Thanks!</h2>
            <p className="text-gray-600 text-lg mb-6">
              Thank you for joining our supercommunity! Our team will reach out soon to confirm your tour.
            </p>
            <button
              onClick={handleBackToHome}
              className="mt-6 px-6 py-3 bg-gray-600 text-white font-semibold rounded-full hover:bg-orange-700 transition duration-300 shadow-lg"
            >
              Look For More 
            </button>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default ConfirmationPage;
