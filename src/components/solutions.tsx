"use client";

import React from "react";

const Solutions: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-gray-200 min-h-screen py-16">
      <h1 className="text-5xl font-heading text-center text-gray-900 mb-12 mt-4 tracking-tight">
        Explore Our Solutions
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-4">
        {/* ERP and Billing Software */}
        <div className="relative bg-white rounded-xl shadow-xl p-4 m-4 transform transition duration-500 hover:scale-105 hover:shadow-2xl flex flex-col items-center text-center border-2 border-transparent bg-clip-padding hover:border-blue-200">
          <div className="absolute rounded-xl bg-gradient-to-r from-blue-100 to-purple-100 opacity-0 hover:opacity-10 transition-opacity duration-300"></div>
          <div className="text-5xl mb-4 text-blue-600" aria-hidden="true">
            📊
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            ERP and Billing Software
          </h2>
          <p className="text-gray-600 mb-5 text-base leading-relaxed">
            Streamline your business operations with integrated ERP and billing
            solutions. Manage finances, inventory, and customer relationships.
          </p>

          <a href="/contact">
            <button className="bg-gradient-to-r from-teal-800 mb-4 px-6 to-blue-900 text-white text-md font-heading rounded-full px-6 py-3 mx-auto mt-6 block hover:from-teal-900 hover:to-blue-600 transition-all duration-300">
              Contact Now
            </button>
          </a>
        </div>

        {/* IoT Automation Solutions */}
        <div className="relative bg-white rounded-xl shadow-xl p-4 m-4 transform transition duration-500 hover:scale-105 hover:shadow-2xl flex flex-col items-center text-center border-2 border-transparent bg-clip-padding hover:border-blue-200">
          <div className="absolute  rounded-xl bg-gradient-to-r from-blue-100 to-purple-100 opacity-0 hover:opacity-10 transition-opacity duration-300"></div>
          <div className="text-5xl mb-4 text-blue-600" aria-hidden="true">
            🌐
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            IoT Automation Solutions
          </h2>
          <p className="text-gray-600 mb-5 text-base leading-relaxed">
            Transform your environment with IoT automation. Connect devices,
            optimize processes, and gain real-time insights for smarter
            decision-making.
          </p>

          <a href="/contact">
            <button className="bg-gradient-to-r from-teal-800 mb-4 px-6 to-blue-900 text-white text-md font-heading rounded-full px-6 py-3 mx-auto mt-6 block hover:from-teal-900 hover:to-blue-600 transition-all duration-300">
              Contact Now
            </button>
          </a>
        </div>

        {/* Digital Identity and Academic Tools */}
        <div className="relative bg-white rounded-xl shadow-xl p-4 m-4 transform transition duration-500 hover:scale-105 hover:shadow-2xl flex flex-col items-center text-center border-2 border-transparent bg-clip-padding hover:border-blue-200">
          <div className="absolute rounded-xl bg-gradient-to-r from-blue-100 to-purple-100 opacity-0 hover:opacity-10 transition-opacity duration-300"></div>
          <div className="text-5xl mb-4 text-blue-600" aria-hidden="true">
            🛡️
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Digital Identity and Academic Tools
          </h2>
          <p className="text-gray-600 mb-5 text-base leading-relaxed">
            Secure digital identities and empower learning with innovative
            academic tools. Ensure privacy and enhance educational experiences.
          </p>

          <a href="/contact">
            <button className="bg-gradient-to-r from-teal-800 mb-4 px-6 to-blue-900 text-white text-md font-heading rounded-full px-6 py-3 mx-auto mt-6 block hover:from-teal-900 hover:to-blue-600 transition-all duration-300">
              Contact Now
            </button>
          </a>
        </div>

        {/* Internship Opportunities */}
        <div className="relative bg-white rounded-xl shadow-xl p-4 m-4 transform transition duration-500 hover:scale-105 hover:shadow-2xl flex flex-col items-center text-center border-2 border-transparent bg-clip-padding hover:border-blue-200">
          <div className="absolute rounded-xl bg-gradient-to-r from-blue-100 to-purple-100 opacity-0 hover:opacity-10 transition-opacity duration-300"></div>
          <div className="text-5xl mb-4 text-blue-600" aria-hidden="true">
            🚀
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Internship Opportunities
          </h2>
          <p className="text-gray-600 mb-5 text-base leading-relaxed">
            Kickstart your career with hands-on internships. Gain practical
            experience, build skills, and connect with industry professionals.
          </p>

          <a href="/contact">
            <button className="bg-gradient-to-r from-teal-800 mb-4 px-6 to-blue-900 text-white text-md font-heading rounded-full px-6 py-3 mx-auto mt-6 block hover:from-teal-900 hover:to-blue-600 transition-all duration-300">
              Contact Now
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Solutions;
