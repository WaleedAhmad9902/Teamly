// src/app/contacts/page.js
"use client";

import React from 'react';

const ContactsPage = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gradient-to-r from-blue-100 via-blue-50 to-white p-6">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Contact Us</h1>
      <p className="text-center text-gray-600 max-w-2xl mb-10">
        We're here to help! If you have any questions or need support, feel free to reach out using the contact form below, or get in touch with us through the information provided.
      </p>

      {/* Contact Form */}
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-lg">
        <form>
          <div className="mb-6">
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
            <input 
              type="text" 
              id="name" 
              placeholder="Your Name" 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-400"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
            <input 
              type="email" 
              id="email" 
              placeholder="you@example.com" 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-400"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Message</label>
            <textarea 
              id="message" 
              rows="4" 
              placeholder="How can we help you?" 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-400"
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="w-full bg-gray-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-500 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Contact Information */}
      <div className="mt-12 text-center text-gray-700">
        <h2 className="text-2xl font-semibold mb-4">Reach Us Directly</h2>
        <p className="mb-2">Email: support@teamly.com</p>
        <p className="mb-2">Phone: +123 456 7890</p>
        <p className="mb-2">Address: 123 Teamly HQ, Business Park, City, Country</p>
      </div>
    </div>
  );
};

export default ContactsPage;
