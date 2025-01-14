"use client";

import { Suspense } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import RentContent from '@/components/RentContent';

const RentPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-blue-100 to-blue-300">
      <Navbar />
      <Suspense fallback={<p>Loading...</p>}>
        <RentContent />
      </Suspense>
      <Footer />
    </div>
  );
};

export default RentPage;

