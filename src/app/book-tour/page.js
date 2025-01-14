// src/app/book-tour/page.js
"use client";

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useRouter } from 'next/navigation'; // Import useRouter for navigation



const BookTourPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [lookingFor, setLookingFor] = useState('');
  const [dialogVisible, setDialogVisible] = useState(false);
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    setDialogVisible(true);
    setName('');
    setEmail('');
    setPhone('');
    setLocation('');
    setLookingFor('');
  };

  const closeDialog = () => {
    setDialogVisible(false);
    router.push('/');
  };

  return (
    <div className={`flex flex-col min-h-screen bg-gradient-to-r from-blue-50 to-blue-200 ${dialogVisible ? 'blur-md' : ''}`}>
      <Navbar />
      <div className="flex-grow flex items-center justify-center p-10">
        <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md transition-transform duration-300 transform hover:scale-105">
          <h1 className="text-3xl font-bold mb-4 text-center text-orange-500">Ready to be a part of our supercommunity?</h1>
          <p className="text-lg text-center mb-6 text-gray-600">Please fill out the form below and our team will schedule a tour for you!</p>
          
          <form onSubmit={handleSubmit} className="flex flex-col">
            <input
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="mb-4 p-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="mb-4 p-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <input
              type="tel"
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="mb-4 p-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              required
              className="mb-4 p-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <option value="" disabled>Select Location</option>
              <option value="Lahore">Lahore</option>
              <option value="Islamabad">Islamabad</option>
              <option value="Karachi">Karachi</option>
            </select>
            <select
              value={lookingFor}
              onChange={(e) => setLookingFor(e.target.value)}
              required
              className="mb-4 p-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="" disabled>What are you looking for?</option>
              <option value="Flexible Workspace">Flexible Workspace</option>
              <option value="Private Office">Private Office</option>
              <option value="Meeting Room">Meeting Room</option>
            </select>
            <button
              type="submit"
              className="bg-gray-500 hover:bg-orange-600 text-white font-bold py-2 rounded-full transition duration-200"
            >
              Submit
            </button>
          </form>
        </div>
      </div>

      {/* Enhanced Dialog Box with Smooth Transition and Background Blur */}
      {dialogVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 backdrop-blur-sm">
          <div className="bg-white p-8 rounded-lg shadow-xl text-center max-w-lg w-full transition-all duration-300 transform scale-95 animate-fade-in">
            <div className="flex justify-end mb-4">
              <button
                onClick={closeDialog}
                className="text-gray-600 hover:text-gray-900 focus:outline-none"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex justify-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h2 className="text-xl font-bold mb-2">Thank You!</h2>
            <p className="mb-4 text-gray-600">Our team will reach out to you soon.</p>
            <button
              onClick={closeDialog}
              className="bg-gray-500 hover:bg-orange-600 text-white font-bold py-2 px-6 rounded-none transition duration-200"
            >
              Go to Home
            </button>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default BookTourPage;
