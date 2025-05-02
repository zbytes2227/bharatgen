import React from "react";

const ProjectCards: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-200 flex flex-col items-center py-12 px-4">
      <h1 className="text-5xl font-heading text-teal-700 mb-12 ">
        Our Awesome Projects
      </h1>

      {/* FGP College Official Website Card */}
      <div className="bg-white rounded-xl shadow-xl p-8 mb-10 w-full max-w-4xl transform transition-all hover:scale-105 hover:shadow-2xl">
        <h2 className="text-3xl font-bold text-blue-600 mb-5">
          FGP College Official Website
        </h2>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Section: Features */}
          <div className="flex-1">
            <ul className="list-disc list-inside text-gray-700 space-y-3">
              <li>Dynamic Site, with sliders, images</li>
              <li>Notice Section</li>
              <li>Admin Panel & Staff Panel</li>
              <li>Contact Forms & SEO</li>
              <li>Hosting, Domain & Maintenance</li>
            </ul>
          </div>
          {/* Right Section: QR Code Placeholder */}
          <div className="flex-shrink-0">
            <div className="w-28 h-28 bg-gradient-to-r from-green-100 to-green-200 flex items-center justify-center rounded-lg">
              <span className="text-gray-600 text-sm">QR Code</span>
            </div>
          </div>
        </div>
        {/* Image Placeholders */}
        <div className="mt-8 flex gap-6">
          <div className="w-2/3 h-52 bg-gradient-to-br from-green-50 to-gray-100 rounded-lg flex items-center justify-center transition-transform hover:scale-110">
            <span className="text-gray-500">Website Screenshot</span>
          </div>
          <div className="w-1/3 h-52 bg-gradient-to-br from-green-50 to-gray-100 rounded-lg flex items-center justify-center transition-transform hover:scale-110">
            <span className="text-gray-500">Mobile View</span>
          </div>
        </div>
      </div>

      {/* Samrat PathLabs App & Website Card */}
      <div className="bg-white rounded-xl shadow-xl p-8 w-full max-w-4xl transform transition-all hover:scale-105 hover:shadow-2xl">
        <h2 className="text-3xl font-bold text-teal-600 mb-5">
          Samrat PathLabs App & Website
        </h2>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Section: Features */}
          <div className="flex-1">
            <ul className="list-disc list-inside text-gray-700 space-y-3">
              <li>Dynamic Site and App on Playstore</li>
              <li>Advanced Admin Panel</li>
              <li>Login for Admin, Staff & Customer</li>
              <li>OTP Verification</li>
              <li>Product Listing & Cart System</li>
              <li>Notification & SEO</li>
            </ul>
          </div>
          {/* Right Section: QR Code Placeholder */}
          <div className="flex-shrink-0">
            <div className="w-28 h-28 bg-gradient-to-r from-green-100 to-green-200 flex items-center justify-center rounded-lg">
              <span className="text-gray-600 text-sm">QR Code</span>
            </div>
          </div>
        </div>
        {/* Image Placeholders */}
        <div className="mt-8 flex gap-6">
          <div className="w-2/3 h-52 bg-gradient-to-br from-green-50 to-gray-100 rounded-lg flex items-center justify-center transition-transform hover:scale-110">
            <span className="text-gray-500">Website Screenshot</span>
          </div>
          <div className="w-1/3 h-52 bg-gradient-to-br from-green-50 to-gray-100 rounded-lg flex items-center justify-center transition-transform hover:scale-110">
            <span className="text-gray-500">Mobile View</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCards;
