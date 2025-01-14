// src/app/privacy-policy/page.js
"use client";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

import Link from 'next/link';




const PrivacyPolicyPage = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />

      {/* Dark Brown Section with Privacy Policy Intro */}
      <div className="bg-[#4E3629] py-8">
        <div className="container mx-auto px-4 text-white">
          <p className="text-sm mb-2">
            <Link href="/" className="hover:underline text-blue-300">Home</Link> / Privacy Policy
          </p>
          <h1 className="text-2xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-lg">
            Reading this privacy notice will help you understand your privacy rights and choices. If you do not agree with our policies and practices, please do not use our Services. If you still have any questions or concerns, please contact us at <a href="mailto:privacy@spacemade.co" className="underline">privacy@spacemade.co</a>.
          </p>
        </div>
      </div>

      {/* Main Content with Full-Screen Left-to-Right Direction */}
      <div className="w-full h-screen px-8 bg-white shadow-md overflow-y-scroll">
        {/* Last Updated Section */}
        <h2 className="text-xl font-semibold mb-2 text-gray-700">Last updated September 2, 2024</h2>
        
        {/* Introduction Paragraph */}
        <p className="text-gray-700 leading-relaxed mt-4 text-left">
          At Teamly, we greatly value the privacy of our users. The purpose of this Privacy Policy is to help you understand how and why we collect, use, and share your information when you browse our website, subscribe to our services, otherwise interact with us, or receive any communication from our end.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4 text-left">
          We collect minimal data and protect it to the best of our abilities. Any information we collect is used primarily to provide services i.e., helping people find a high-performance and vibrant coworking space that is well-suited to adapt to the evolving needs of the modern day.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4 text-left">
          If you have any further questions or concerns regarding our privacy practices, please feel free to reach out, and the Teamly team shall be happy to assist.
        </p>

        {/* Information We Collect Section */}
        <h2 className="text-lg font-semibold mt-6 mb-2 text-gray-800 text-left">INFORMATION WE COLLECT</h2>
        <p className="text-gray-700 leading-relaxed mb-4 text-left">
          The information we collect is primarily divided into two categories:
        </p>

        {/* Information from Website Browsers */}
        <h3 className="text-md font-semibold mt-4 text-gray-800 text-left">1. Information from website browsers</h3>
        <p className="text-gray-700 leading-relaxed mt-2 text-left">
          If you are just browsing the website, we will just collect general information which most websites collect. We use common internet technologies, such as cookies and web server logs. We collect this information from all website browsers, whether they subscribe to our services or not.
        </p>
        <p className="text-gray-700 leading-relaxed mt-2 text-left">
          The information we collect from all our website browsers includes the visitor’s browser type, language preference, referring site, and the date and time of each visitor’s request. We also collect potentially identifying information like Internet Protocol (IP) addresses.
        </p>
        <p className="text-gray-700 leading-relaxed mt-2 text-left">
          We collect this information to better understand how our website browsers use Comence and to monitor and protect the security of websites.
        </p>

        {/* Information from Subscribers */}
        <h3 className="text-md font-semibold mt-4 text-gray-800 text-left">2. INFORMATION FROM SUBSCRIBERS</h3>
        <p className="text-gray-700 leading-relaxed mt-2 text-left">
          If you subscribe to our newsletters and other services, we shall require some basic information at the time of subscription. You will be required to share your email address. We collect this information to be able to email you our newsletters on a monthly basis.
        </p>
        <p className="text-gray-700 leading-relaxed mt-2 text-left">
          If you book a tour of one or more of our locations via our website, you shall be required to provide your full name, email address, contact number, organization name, and the industry you are associated with. We collect this information to learn about your background and gauge your needs in order to provide you with services of the highest quality.
        </p>

        {/* How We Use Information Section */}
        <h2 className="text-lg font-semibold mt-6 mb-2 text-gray-800 text-left">HOW WE USE THE INFORMATION WE COLLECT</h2>
        <p className="text-gray-700 leading-relaxed mt-2 text-left">
          We take measures to help protect your information from loss, theft, misuse, and unauthorized access, disclosure, alteration, and destruction. We have also enforced technical and administrative access controls to limit which of our employees have access to non-public personal information.
        </p>
        <p className="text-gray-700 leading-relaxed mt-2 text-left">
          We store the information we collect for as long as it is necessary for the purpose(s) for which we originally collected it. We may retain certain information for legitimate business purposes or as required by law.
        </p>

        {/* Sharing of Information */}
        <h2 className="text-lg font-semibold mt-6 mb-2 text-gray-800 text-left">SHARING OF INFORMATION</h2>
        <p className="text-gray-700 leading-relaxed mt-2 text-left">
          Ensuring your privacy is vital to us. We do not share your personal information with third parties except as described in this Privacy Policy. We may share your personal information with the following:
        </p>

        {/* Sharing Details */}
        <ul className="list-disc list-inside text-gray-700 mt-2 text-left">
          <li>Third-party service providers</li>
          <li>Business partners</li>
          <li>Affiliated companies within our corporate structure</li>
          <li>As required for legal purposes</li>
        </ul>
        
        {/* Protection and Contact Information */}
        <h2 className="text-lg font-semibold mt-6 mb-2 text-gray-800 text-left">HOW WE PROTECT YOUR INFORMATION</h2>
        <p className="text-gray-700 leading-relaxed mt-2 text-left">
          We take measures to help protect your information from loss, theft, misuse, and unauthorized access. We may retain certain information for legitimate business purposes or as required by law.
        </p>
        
        <h2 className="text-lg font-semibold mt-6 mb-2 text-gray-800 text-left">CONTACT US</h2>
        <p className="text-gray-700 leading-relaxed mt-2 text-left">
          For any queries or concerns regarding this Privacy Policy, please contact us at:
        </p>
        <p className="text-gray-700 mt-1 text-left">Phone: 0304-846 1000</p>
        <p className="text-gray-700 mb-8 text-left">Email: <a href="mailto:info@comence.io" className="text-blue-600 underline">info@comence.io</a></p>
      </div>

      <Footer />
    </div>
  );
};

export default PrivacyPolicyPage;
