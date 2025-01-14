// src/components/AuthContext.js
"use client"; // Use this if you have client-side logic in your context
import React, { createContext, useContext, useState } from 'react';

// Create AuthContext
const AuthContext = createContext();

// AuthProvider component to wrap your app
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Change as necessary

  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Export AuthContext to be used in other components
export const useAuth = () => useContext(AuthContext);
export default AuthContext; // Export AuthContext for use in components
