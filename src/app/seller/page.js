// src/app/seller.js
"use client";

import { useState } from 'react';

export default function Seller() {
  const [images, setImages] = useState([]);
  const [location, setLocation] = useState('');
  const [workspaceType, setWorkspaceType] = useState('');

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length <= 3) {
      setImages(files);
    } else {
      alert("You can upload a maximum of 3 images.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement form submission logic here
    console.log("Images:", images);
    console.log("Location:", location);
    console.log("Workspace Type:", workspaceType);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-4">Become a Seller</h1>
      <p className="text-gray-600 mb-6">
        Join our vibrant community of sellers at Teamly! Fill out the form below to get started.
      </p>

      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Full Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="John Doe"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            placeholder="you@example.com"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            placeholder="123-456-7890"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="business">
            Business Name
          </label>
          <input
            type="text"
            id="business"
            placeholder="Your Business Name"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
            Business Description
          </label>
          <textarea
            id="description"
            placeholder="Describe your business..."
            rows="4"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          ></textarea>
        </div>

        {/* Image Upload Section */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="images">
            Upload Images (max 3)
          </label>
          <input
            type="file"
            id="images"
            accept="image/*"
            multiple
            onChange={handleImageChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          />
        </div>

        {/* Location Selection */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Select Location</label>
          <select
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          >
            <option value="" disabled>Select a location</option>
            <option value="islamabad">Islamabad</option>
            <option value="lahore">Lahore</option>
          </select>
        </div>

        {/* Workspace Type Selection */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Select Workspace Type</label>
          <select
            value={workspaceType}
            onChange={(e) => setWorkspaceType(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required
          >
            <option value="" disabled>Select workspace type</option>
            <option value="private_offices">Private Offices</option>
            <option value="coworking">Coworking</option>
            <option value="collaborate">Collaborate</option>
          </select>
        </div>

        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
