import React from 'react';
import { FaCoffee, FaWifi, FaLock, FaChair, FaParking, FaLeaf } from 'react-icons/fa';
import { GiKitchenScale, GiSofa } from 'react-icons/gi';
import { MdBikeScooter, MdOutlineLightMode, MdPeople } from 'react-icons/md';

const Amenities = () => {
  return (
    <div className="bg-gray-200 py-12">
      <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Everything You Need to Do Your Best Work
      </h2>
      <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        At Teamly, you can focus entirely on your work without any distractions...
      </p>
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-lg">
        {/* Essentials */}
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4">The Essentials</h3>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-center justify-center space-x-3">
              <GiKitchenScale size={24} /> <span>Fully-equipped kitchen</span>
            </li>
            <li className="flex items-center justify-center space-x-3">
              <GiSofa size={24} /> <span>Breakout space</span>
            </li>
            <li className="flex items-center justify-center space-x-3">
              <FaWifi size={24} /> <span>Speedy wifi</span>
            </li>
            <li className="flex items-center justify-center space-x-3">
              <FaLock size={24} /> <span>Secure access</span>
            </li>
          </ul>
        </div>

        {/* Handy Extras */}
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4">Handy Extras</h3>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-center justify-center space-x-3">
              <FaLock size={24} /> <span>Lockers</span>
            </li>
            <li className="flex items-center justify-center space-x-3">
              <FaParking size={24} /> <span>Ample Car Parking</span>
            </li>
            <li className="flex items-center justify-center space-x-3">
              <MdBikeScooter size={24} /> <span>Bike storage</span>
            </li>
            <li className="flex items-center justify-center space-x-3">
              <FaCoffee size={24} /> <span>Unlimited Tea & artisanal coffee</span>
            </li>
          </ul>
        </div>

        {/* Feel Good Factors */}
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4">Feel Good Factors</h3>
          <ul className="space-y-4 text-gray-700">
            <li className="flex items-center justify-center space-x-3">
              <MdOutlineLightMode size={24} /> <span>Light & airy environment</span>
            </li>
            <li className="flex items-center justify-center space-x-3">
              <MdPeople size={24} /> <span>Community feel</span>
            </li>
            <li className="flex items-center justify-center space-x-3">
              <FaChair size={24} /> <span>Ergonomic chairs</span>
            </li>
            <li className="flex items-center justify-center space-x-3">
              <FaLeaf size={24} /> <span>Plenty of plants</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Amenities;
