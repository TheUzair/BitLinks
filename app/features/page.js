import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import React from 'react';

const Features = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="p-8 bg-white flex-grow">
        <h2 className="text-3xl font-bold text-center mb-6">
          Our Amazing Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
          <div className="bg-purple-200 p-6 rounded-md shadow-md text-center">
            <h3 className="text-xl font-semibold">Custom Short Links</h3>
            <p className="mt-2">
              Personalize your links with custom aliases that reflect your brand.
            </p>
          </div>
          <div className="bg-purple-200 p-6 rounded-md shadow-md text-center">
            <h3 className="text-xl font-semibold">Real-Time Analytics</h3>
            <p className="mt-2">
              Gain insights into your link performance with real-time tracking.
            </p>
          </div>
          <div className="bg-purple-200 p-6 rounded-md shadow-md text-center">
            <h3 className="text-xl font-semibold">Link Management</h3>
            <p className="mt-2">
              Organize and manage all your short links easily in one dashboard.
            </p>
          </div>
          <div className="bg-purple-200 p-6 rounded-md shadow-md text-center">
            <h3 className="text-xl font-semibold">QR Code Generation</h3>
            <p className="mt-2">
              Generate QR codes for your shortened links to share offline.
            </p>
          </div>
          <div className="bg-purple-200 p-6 rounded-md shadow-md text-center">
            <h3 className="text-xl font-semibold">Link Expiration</h3>
            <p className="mt-2">
              Set expiration dates for your links for better control and privacy.
            </p>
          </div>
          <div className="bg-purple-200 p-6 rounded-md shadow-md text-center">
            <h3 className="text-xl font-semibold">API Access</h3>
            <p className="mt-2">
              Integrate our URL shortener into your applications with our API.
            </p>
          </div>
          <div className="bg-purple-200 p-6 rounded-md shadow-md text-center">
            <h3 className="text-xl font-semibold">Custom Branding</h3>
            <p className="mt-2">
              Apply your branding on the link shortener interface for a personalized experience.
            </p>
          </div>
          <div className="bg-purple-200 p-6 rounded-md shadow-md text-center">
            <h3 className="text-xl font-semibold">Multi-Language Support</h3>
            <p className="mt-2">
              Reach a global audience with multi-language support for your links.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Features;
