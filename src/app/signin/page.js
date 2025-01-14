// src/app/signin/page.js
"use client";

import React, { useContext, useState } from 'react';
import { useRouter } from 'next/navigation'; // Use the correct import for the router
import AuthContext from '../../components/AuthContext'; // Ensure the import path is correct

const SignInPage = () => {
  const { login } = useContext(AuthContext); // Get login from context
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your login logic here
    login(); // Call the login function from context
    router.push('/'); // Redirect to the home page after logging in
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-100 via-blue-50 to-white">
      <div className="p-8 bg-white rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">Welcome Back!</h2>
        <p className="text-center text-gray-500 mb-8">
          Sign in to your Teamly account
        </p>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
            <input 
              type="email" 
              id="email" 
              placeholder="you@example.com" 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-8">
            <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Password</label>
            <input 
              type="password" 
              id="password" 
              placeholder="Enter your password" 
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-orange-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button 
            type="submit" 
            className="w-full bg-gray-600 text-white py-3 rounded-lg font-semibold hover:bg-orange-700 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Sign In
          </button>
        </form>
        <p className="mt-8 text-center text-gray-600">
          Don’t have an account?{' '}
          <a href="/signup" className="text-gray-500 hover:text-orange-600 font-medium transition duration-200">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignInPage;
