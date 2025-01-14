// src/app/signup/page.js
"use client";

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const SignUpPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Sign-up failed');
      }

      // Redirect to sign-in page on successful sign-up
      router.push('/signin');
    } catch (error) {
      setError(error.message); // Show error message if sign-up fails
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-100 via-blue-50 to-white">
      <div className="p-8 bg-white rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">Create an Account</h2>
        <p className="text-center text-gray-500 mb-8">
          Join Teamly and start collaborating seamlessly!
        </p>
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
            <input 
              type="email" 
              id="email" 
              placeholder="you@example.com" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Password</label>
            <input 
              type="password" 
              id="password" 
              placeholder="Create a password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
              required
            />
          </div>
          <div className="mb-8">
            <label htmlFor="confirmPassword" className="block text-gray-700 font-medium mb-2">Confirm Password</label>
            <input 
              type="password" 
              id="confirmPassword" 
              placeholder="Confirm your password" 
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-400"
              required
            />
          </div>
          <button 
            type="submit" 
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Sign Up
          </button>
        </form>
        <p className="mt-8 text-center text-gray-600">
          Already have an account?{' '}
          <a href="/signin" className="text-blue-500 hover:text-blue-600 font-medium transition duration-200">
            Sign In
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
