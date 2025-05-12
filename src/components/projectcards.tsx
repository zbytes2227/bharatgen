import React from "react";

const ProjectCards: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-200 flex flex-col items-center py-12 px-4">
      <h1 className="text-5xl h-auto font-heading bg-clip-text text-transparent bg-gradient-to-r from-cyan-600 to-teal-800 mb-12">
        Our Awesome Projects
      </h1>
      <br />
      {/* FGP College Official Website Card */}
      <div className="bg-white rounded-xl shadow-xl p-8 mb-10 w-full max-w-4xl transform transition-all hover:scale-105 hover:shadow-2xl">
        <h2 className="text-3xl font-bold text-blue-600 mb-5">
          FGP College Official Website
        </h2>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <ul className="list-disc list-inside text-gray-700 space-y-3">
              <li>Dynamic Site, with sliders, images</li>
              <li>Notice Section</li>
              <li>Admin Panel & Staff Panel</li>
              <li>Contact Forms & SEO</li>
              <li>Hosting, Domain & Maintenance</li>
            </ul>
          </div>
          <div className="flex-shrink-0">
            <div className="w-28 h-28 bg-gradient-to-r from-green-100 to-green-200 flex items-center justify-center rounded-lg">
              <img
                src="/quantam-assets/QR Codes/FGP Project.png"
                alt="QR Code"
              />
            </div>
          </div>
        </div>
        <div className="mt-8 flex gap-6">
          <div className="w-full max-h-64 rounded-lg overflow-hidden transition-transform">
            <img
              src="/quantam-assets/Project images/FGP Project.png"
              alt="website"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <div className="mt-6 flex justify-center">
          <a
            href="https://fgp.org.in/"
            className="bg-gradient-to-r from-red-900 to-red-700 text-white font-heading py-2 px-6 rounded-full hover:bg-teal-700 transition-colors"
          >
            View More
          </a>
        </div>
      </div>

      {/* Samrat PathLabs App & Website Card */}
      <div className="bg-white rounded-xl shadow-xl p-8 mb-10 w-full max-w-4xl transform transition-all hover:scale-105 hover:shadow-2xl">
        <h2 className="text-3xl font-bold text-teal-600 mb-5">
          Samrat PathLabs App & Website
        </h2>
        <div className="flex flex-col md:flex-row gap-8">
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
          <div className="flex-shrink-0">
            <div className="w-28 h-28 bg-gradient-to-r from-green-100 to-green-200 flex items-center justify-center rounded-lg">
              <img
                src="/quantam-assets/QR Codes/Samrath Path Labs.png"
                alt="QR Code"
              />
            </div>
          </div>
        </div>
        <div className="mt-8 flex gap-6">
          <div className="w-full max-h-64 rounded-lg overflow-hidden transition-transform">
            <img
              src="/quantam-assets/Project images/Samrath Path Labs.png"
              alt="website"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <div className="mt-6 flex justify-center">
          <a
            href="https://samratpathlabs.com/"
            className="bg-gradient-to-r from-red-900 to-red-700 text-white font-heading py-2 px-6 rounded-full hover:bg-teal-700 transition-colors"
          >
            View More
          </a>
        </div>
      </div>

      {/* Agni Accessories ERP System Card */}
      <div className="bg-white rounded-xl shadow-xl p-8 mb-10 w-full max-w-4xl transform transition-all hover:scale-105 hover:shadow-2xl">
        <h2 className="text-3xl font-bold text-blue-600 mb-5">
          Agni Accessories ERP System
        </h2>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <ul className="list-disc list-inside text-gray-700 space-y-3">
              <li>Dynamic Site</li>
              <li>Basic Admin Panel</li>
              <li>Login for Staff & Admin</li>
              <li>Product & Stocks Tracking</li>
              <li>Inventory Management System</li>
              <li>Export reports in Excel</li>
            </ul>
          </div>
          <div className="flex-shrink-0">
            <div className="w-28 h-28 bg-gradient-to-r from-green-100 to-green-200 flex items-center justify-center rounded-lg">
              <img src="/quantam-assets/QR Codes/Agni ERP.png" alt="QR Code" />
            </div>
          </div>
        </div>
        <div className="mt-8 flex gap-6">
          <div className="w-full max-h-64 rounded-lg overflow-hidden transition-transform">
            <img
              src="/quantam-assets/Project images/Agni ERP.png"
              alt="website"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <div className="mt-6 flex justify-center">
          <a
            href="https://agni-accessories.vercel.app"
            className="bg-gradient-to-r from-red-900 to-red-700 text-white font-heading py-2 px-6 rounded-full hover:bg-teal-700 transition-colors"
          >
            View More
          </a>
        </div>
      </div>

      {/* Smart Attendance System Card */}
      <div className="bg-white rounded-xl shadow-xl p-8 mb-10 w-full max-w-4xl transform transition-all hover:scale-105 hover:shadow-2xl">
        <h2 className="text-3xl font-bold text-teal-600 mb-5">
          Smart Attendance System
        </h2>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <ul className="list-disc list-inside text-gray-700 space-y-3">
              <li>Attendance Machine & Cards</li>
              <li>Admin Panel with Live Attendance</li>
              <li>Login for Staff & Admin</li>
              <li>Specific User Tracking</li>
              <li>Attendance records upto 4 Years</li>
              <li>Export reports in Excel</li>
            </ul>
          </div>
          <div className="flex-shrink-0">
            <div className="w-28 h-28 bg-gradient-to-r from-green-100 to-green-200 flex items-center justify-center rounded-lg">
              <img
                src="/quantam-assets/QR Codes/Smart Attendance System.png"
                alt="QR Code"
              />
            </div>
          </div>
        </div>
        <div className="mt-8 flex gap-6">
          <div className="w-full max-h-64 rounded-lg overflow-hidden transition-transform">
            <img
              src="/quantam-assets/Project images/Smart Attendance System.png"
              alt="website"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <div className="mt-6 flex justify-center">
          <a
            href="https://smart-attendance-elex.vercel.app"
            className="bg-gradient-to-r from-red-900 to-red-700 text-white font-heading py-2 px-6 rounded-full hover:bg-teal-700 transition-colors"
          >
            View More
          </a>
        </div>
      </div>

      {/* ROBOX - Ecommerce store Card */}
      <div className="bg-white rounded-xl shadow-xl p-8 mb-10 w-full max-w-4xl transform transition-all hover:scale-105 hover:shadow-2xl">
        <h2 className="text-3xl font-bold text-blue-600 mb-5">
          ROBOX - Ecommerce store
        </h2>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <ul className="list-disc list-inside text-gray-700 space-y-3">
              <li>Ecommerce Website</li>
              <li>Admin Login & Customer Login</li>
              <li>Manage Products, Take Orders</li>
              <li>Manage Orders and Update Tracking status</li>
              <li>Manual Payment System (0% Commission)</li>
            </ul>
          </div>
          <div className="flex-shrink-0">
            <div className="w-28 h-28 bg-gradient-to-r from-green-100 to-green-200 flex items-center justify-center rounded-lg">
              <img src="/quantam-assets/QR Codes/Robox.png" alt="QR Code" />
            </div>
          </div>
        </div>
        <div className="mt-8 flex gap-6">
          <div className="w-full max-h-64 rounded-lg overflow-hidden transition-transform">
            <img
              src="/quantam-assets/Project images/Robox.png"
              alt="website"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <div className="mt-6 flex justify-center">
          <a
            href="https://robox-shop.vercel.app"
            className="bg-gradient-to-r from-red-900 to-red-700 text-white font-heading py-2 px-6 rounded-full hover:bg-teal-700 transition-colors"
          >
            View More
          </a>
        </div>
      </div>

      {/* QuickPic-last minute App Card */}
      <div className="bg-white rounded-xl shadow-xl p-8 mb-10 w-full max-w-4xl transform transition-all hover:scale-105 hover:shadow-2xl">
        <h2 className="text-3xl font-bold text-teal-600 mb-5">
          QuickPic-last minute App
        </h2>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <ul className="list-disc list-inside text-gray-700 space-y-3">
              <li>Last minute website</li>
              <li>Admin Login & Customer Login</li>
              <li>Manage Products, Take Orders</li>
              <li>Manage Orders and Update Tracking status</li>
              <li>Manual Payment System (0% Commission)</li>
            </ul>
          </div>
          <div className="flex-shrink-0">
            <div className="w-28 h-28 bg-gradient-to-r from-green-100 to-green-200 flex items-center justify-center rounded-lg">
              <img src="/quantam-assets/QR Codes/QuickPic.png" alt="QR Code" />
            </div>
          </div>
        </div>
        <div className="mt-8 flex gap-6">
          <div className="w-full max-h-64 rounded-lg overflow-hidden transition-transform">
            <img
              src="/quantam-assets/Project images/QuickPic.png"
              alt="website"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <div className="mt-6 flex justify-center">
          <a
            href="https://manash.pythonanywhere.com/"
            className="bg-gradient-to-r from-red-900 to-red-700 text-white font-heading py-2 px-6 rounded-full hover:bg-teal-700 transition-colors"
          >
            View More
          </a>
        </div>
      </div>

      {/* PolyA2z-Study Material Platform Card */}
      <div className="bg-white rounded-xl shadow-xl p-8 mb-10 w-full max-w-4xl transform transition-all hover:scale-105 hover:shadow-2xl">
        <h2 className="text-3xl font-bold text-blue-600 mb-5">
          PolyA2z-Study Material Platform
        </h2>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <ul className="list-disc list-inside text-gray-700 space-y-3">
              <li>Notes Distribution Site</li>
              <li>No login</li>
              <li>Direct Visit and Select Details</li>
              <li>Download pdf and manage users</li>
              <li>Contact Form</li>
            </ul>
          </div>
          <div className="flex-shrink-0">
            <div className="w-28 h-28 bg-gradient-to-r from-green-100 to-green-200 flex items-center justify-center rounded-lg">
              <img src="/quantam-assets/QR Codes/PolyA2z.png" alt="QR Code" />
            </div>
          </div>
        </div>
        <div className="mt-8 flex gap-6">
          <div className="w-full max-h-64 rounded-lg overflow-hidden transition-transform">
            <img
              src="/quantam-assets/Project images/PolyA2z.png"
              alt="website"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <div className="mt-6 flex justify-center">
          <a
            href="https://polya2z.github.io/"
            className="bg-gradient-to-r from-red-900 to-red-700 text-white font-heading py-2 px-6 rounded-full hover:bg-teal-700 transition-colors"
          >
            View More
          </a>
        </div>
      </div>

      {/* Code Crafter-Community Card */}
      <div className="bg-white rounded-xl shadow-xl p-8 mb-10 w-full max-w-4xl transform transition-all hover:scale-105 hover:shadow-2xl">
        <h2 className="text-3xl font-bold text-teal-600 mb-5">
          Code Crafter-Community
        </h2>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <ul className="list-disc list-inside text-gray-700 space-y-3">
              <li>Ecommerce Website</li>
              <li>Admin Login & Student Login</li>
              <li>Manage Notes & Students</li>
              <li>Students can Login, Share and Download PDF</li>
              <li>Automatic EMails on Login</li>
            </ul>
          </div>
          <div className="flex-shrink-0">
            <div className="w-28 h-28 bg-gradient-to-r from-green-100 to-green-200 flex items-center justify-center rounded-lg">
              <img
                src="/quantam-assets/QR Codes/Code crafters Community.png"
                alt="QR Code"
              />
            </div>
          </div>
        </div>
        <div className="mt-8 flex gap-6">
          <div className="w-full max-h-64 rounded-lg overflow-hidden transition-transform">
            <img
              src="/quantam-assets/Project images/Code Crafters Community.png"
              alt="website"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <div className="mt-6 flex justify-center">
          <a
            href="https://fgpcodecrafters.site/"
            className="bg-gradient-to-r from-red-900 to-red-700 text-white font-heading py-2 px-6 rounded-full hover:bg-teal-700 transition-colors"
          >
            View More
          </a>
        </div>
      </div>

      {/* Sonu Sir Classes-Student Management System Card */}
      <div className="bg-white rounded-xl shadow-xl p-8 mb-10 w-full max-w-4xl transform transition-all hover:scale-105 hover:shadow-2xl">
        <h2 className="text-3xl font-bold text-blue-600 mb-5">
          Sonu Sir Classes-Student Management System
        </h2>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <ul className="list-disc list-inside text-gray-700 space-y-3">
              <li>Dynamic Site</li>
              <li>Admin Panel with Live Students List</li>
              <li>Login for Admin</li>
              <li>Specific Student Token Tracking</li>
              <li>Automatic Token Generation</li>
              <li>Export reports in Excel</li>
            </ul>
          </div>
          <div className="flex-shrink-0">
            <div className="w-28 h-28 bg-gradient-to-r from-green-100 to-green-200 flex items-center justify-center rounded-lg">
              <img
                src="/quantam-assets/QR Codes/Sonu Sir Classes.png"
                alt="QR Code"
              />
            </div>
          </div>
        </div>
        <div className="mt-8 flex gap-6">
          <div className="w-full max-h-64 rounded-lg overflow-hidden transition-transform">
            <img
              src="/quantam-assets/Project images/Sonu Sir Classes.png"
              alt="website"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <div className="mt-6 flex justify-center">
          <a
            href="https://edu4u-seven.vercel.app/"
            className="bg-gradient-to-r from-red-900 to-red-700 text-white font-heading py-2 px-6 rounded-full hover:bg-teal-700 transition-colors"
          >
            View More
          </a>
        </div>
      </div>

      {/* Mahi Tours & Travels-Travel Website Card */}
      <div className="bg-white rounded-xl shadow-xl p-8 mb-10 w-full max-w-4xl transform transition-all hover:scale-105 hover:shadow-2xl">
        <h2 className="text-3xl font-bold text-teal-600 mb-5">
          Mahi Tours & Travels-Travel Website
        </h2>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <ul className="list-disc list-inside text-gray-700 space-y-3">
              <li>Dynamic Site</li>
              <li>Real-Time Booking Update</li>
              <li>Vehicle & Driver Assignment System</li>
              <li>Notification via Email</li>
              <li>Image Gallery for Destinations</li>
              <li>Best User Experience</li>
            </ul>
          </div>
          <div className="flex-shrink-0">
            <div className="w-28 h-28 bg-gradient-to-r from-green-100 to-green-200 flex items-center justify-center rounded-lg">
              <img
                src="/quantam-assets/QR Codes/Mahi Tour & Travel.png"
                alt="QR Code"
              />
            </div>
          </div>
        </div>
        <div className="mt-8 flex gap-6">
          <div className="w-full max-h-64 rounded-lg overflow-hidden transition-transform">
            <img
              src="/quantam-assets/Project images/Mahi Tour & Travel.png"
              alt="website"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
        <div className="mt-6 flex justify-center">
          <a
            href="https://mahitoursandtravel.com/"
            className="bg-gradient-to-r from-red-900 to-red-700 text-white font-heading py-2 px-6 rounded-full hover:bg-teal-700 transition-colors"
          >
            View More
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCards;
