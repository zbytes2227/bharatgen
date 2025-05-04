"use client";

import React from "react";

const Solutions: React.FC = () => {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-gray-200 min-h-screen py-16">
      <h1 className="text-5xl font-heading text-center text-gray-900 mb-12 mt-4 tracking-tight">
        Explore Our Solutions
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-4">
        {/* Website Development */}
        <div className="relative bg-white rounded-xl shadow-xl p-4 m-4 transform transition duration-500 hover:scale-105 hover:shadow-2xl flex flex-col items-center text-center border-2 border-transparent bg-clip-padding hover:border-blue-200">
          <div className="absolute rounded-xl bg-gradient-to-r from-blue-100 to-purple-100 opacity-0 hover:opacity-10 transition-opacity duration-300"></div>
          <div className="text-5xl mb-4 text-blue-600" aria-hidden="true">
            🖥️
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Web Development
          </h2>
          <p className="text-gray-600 mb-5 text-base leading-relaxed">
            We create high-performance, 
            visually appealing and functional websites tailored to meet your
            business needs.
          </p>
          <a href="/contact">
            <button className="bg-gradient-to-r from-teal-800 mb-4 px-6 to-blue-900 text-white text-md font-heading rounded-full px-6 py-3 mx-auto mt-6 block hover:from-teal-900 hover:to-blue-600 transition-all duration-300">
              Contact Now
            </button>
          </a>
        </div>

        {/* App Development */}
        <div className="relative bg-white rounded-xl shadow-xl p-4 m-4 transform transition duration-500 hover:scale-105 hover:shadow-2xl flex flex-col items-center text-center border-2 border-transparent bg-clip-padding hover:border-blue-200">
          <div className="absolute rounded-xl bg-gradient-to-r from-blue-100 to-purple-100 opacity-0 hover:opacity-10 transition-opacity duration-300"></div>
          <div className="text-5xl mb-4 text-blue-600" aria-hidden="true">
            📱
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            App Development
          </h2>
          <p className="text-gray-600 mb-5 text-base leading-relaxed">
            We specialize in creating intuitive, high-performing, and engaging
            mobile applications to drive your business growth.
          </p>
          <a href="/contact">
            <button className="bg-gradient-to-r from-teal-800 mb-4 px-6 to-blue-900 text-white text-md font-heading rounded-full px-6 py-3 mx-auto mt-6 block hover:from-teal-900 hover:to-blue-600 transition-all duration-300">
              Contact Now
            </button>
          </a>
        </div>

        {/* ERP Software */}
        <div className="relative bg-white rounded-xl shadow-xl p-4 m-4 transform transition duration-500 hover:scale-105 hover:shadow-2xl flex flex-col items-center text-center border-2 border-transparent bg-clip-padding hover:border-blue-200">
          <div className="absolute rounded-xl bg-gradient-to-r from-blue-100 to-purple-100 opacity-0 hover:opacity-10 transition-opacity duration-300"></div>
          <div className="text-5xl mb-4 text-blue-600" aria-hidden="true">
            📊
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            ERP Software
          </h2>
          <p className="text-gray-600 mb-5 text-base leading-relaxed">
            Streamline your business processes with our ERP software solutions,
            for an efficient product-based shop.
          </p>
          <a href="/contact">
            <button className="bg-gradient-to-r from-teal-800 mb-4 px-6 to-blue-900 text-white text-md font-heading rounded-full px-6 py-3 mx-auto mt-6 block hover:from-teal-900 hover:to-blue-600 transition-all duration-300">
              Contact Now
            </button>
          </a>
        </div>

        {/* Billing Software */}
        <div className="relative bg-white rounded-xl shadow-xl p-4 m-4 transform transition duration-500 hover:scale-105 hover:shadow-2xl flex flex-col items-center text-center border-2 border-transparent bg-clip-padding hover:border-blue-200">
          <div className="absolute rounded-xl bg-gradient-to-r from-blue-100 to-purple-100 opacity-0 hover:opacity-10 transition-opacity duration-300"></div>
          <div className="text-5xl mb-4 text-blue-600" aria-hidden="true">
            💳
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Billing Software
          </h2>
          <p className="text-gray-600 mb-5 text-base leading-relaxed">
            Simplify your financial transactions with our advanced billing
            software. Manage all your inventory clearly.
          </p>
          <a href="/contact">
            <button className="bg-gradient-to-r from-teal-800 mb-4 px-6 to-blue-900 text-white text-md font-heading rounded-full px-6 py-3 mx-auto mt-6 block hover:from-teal-900 hover:to-blue-600 transition-all duration-300">
              Contact Now
            </button>
          </a>
        </div>

        {/* IoT Solutions */}
        <div className="relative bg-white rounded-xl shadow-xl p-4 m-4 transform transition duration-500 hover:scale-105 hover:shadow-2xl flex flex-col items-center text-center border-2 border-transparent bg-clip-padding hover:border-blue-200">
          <div className="absolute rounded-xl bg-gradient-to-r from-blue-100 to-purple-100 opacity-0 hover:opacity-10 transition-opacity duration-300"></div>
          <div className="text-5xl mb-4 text-blue-600" aria-hidden="true">
            🤖
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            IoT <br></br>Solutions
          </h2>
          <p className="text-gray-600 mb-5 text-base leading-relaxed">
            We provide cutting-edge technology to enable seamless communication
            and automation across your devices and systems.
            
          </p>
          <a href="/contact">
            <button className="bg-gradient-to-r from-teal-800 mb-4 px-6 to-blue-900 text-white text-md font-heading rounded-full px-6 py-3 mx-auto mt-6 block hover:from-teal-900 hover:to-blue-600 transition-all duration-300">
              Contact Now
            </button>
          </a>
        </div>

        {/* IoT Automations */}
        <div className="relative bg-white rounded-xl shadow-xl p-4 m-4 transform transition duration-500 hover:scale-105 hover:shadow-2xl flex flex-col items-center text-center border-2 border-transparent bg-clip-padding hover:border-blue-200">
          <div className="absolute rounded-xl bg-gradient-to-r from-blue-100 to-purple-100 opacity-0 hover:opacity-10 transition-opacity duration-300"></div>
          <div className="text-5xl mb-4 text-blue-600" aria-hidden="true">
            🌐
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            IoT <br></br>Automations
          </h2>
          <p className="text-gray-600 mb-5 text-base leading-relaxed">
            We help you automate manual tasks, reducing human intervention and
            increasing productivity and efficiency in your business.
          </p>
          <a href="/contact">
            <button className="bg-gradient-to-r from-teal-800 mb-4 px-6 to-blue-900 text-white text-md font-heading rounded-full px-6 py-3 mx-auto mt-6 block hover:from-teal-900 hover:to-blue-600 transition-all duration-300">
              Contact Now
            </button>
          </a>
        </div>

        {/* Management Applications */}
        <div className="relative bg-white rounded-xl shadow-xl p-4 m-4 transform transition duration-500 hover:scale-105 hover:shadow-2xl flex flex-col items-center text-center border-2 border-transparent bg-clip-padding hover:border-blue-200">
          <div className="absolute rounded-xl bg-gradient-to-r from-blue-100 to-purple-100 opacity-0 hover:opacity-10 transition-opacity duration-300"></div>
          <div className="text-5xl mb-4 text-blue-600" aria-hidden="true">
            📈
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-3">
            Management Applications
          </h2>
          <p className="text-gray-600 mb-5 text-base leading-relaxed">
            Our tools are designed to help you oversee various aspects of your
            business efficiently, from project management to employees tracking.
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
