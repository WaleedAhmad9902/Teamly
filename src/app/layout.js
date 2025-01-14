// src/app/layout.js
"use client"; // Use this if you have client-side logic in your layout
import { useEffect } from 'react';
import { useRouter } from 'next/navigation'; // Use the router from next/navigation
import { AuthProvider, useAuth } from '../components/AuthContext'; // Adjust path as necessary

import './globals.css';

const AuthenticatedLayout = ({ children }) => {
  const { isAuthenticated } = useAuth(); // Access auth context
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push('/signin'); // Redirect to sign-in page if not authenticated
    }
  }, [isAuthenticated, router]);

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

const RootLayout = ({ children }) => {
  return (
    <AuthProvider>
      <AuthenticatedLayout>{children}</AuthenticatedLayout>
    </AuthProvider>
  );
};

export default RootLayout;
