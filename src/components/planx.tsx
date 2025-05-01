import React from "react";

const Plansx: React.FC = () => {
  return (
    <section className="py-16 lg:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl text-gray-900 mb-6 bg-clip-text ">
            Our Offering Plans
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Discover plans crafted to accelerate your digital transformation
            with cutting-edge tools and solutions.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <div className="relative bg-white rounded-3xl shadow-lg p-8 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl border border-gray-100">
            <div className="absolute inset-0 bg-gradient-to-t from-indigo-50 to-transparent rounded-3xl opacity-50"></div>
            <h3 className="relative text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-4 z-10">
              Basic Plan
            </h3>
            <p className="relative text-gray-600 text-sm sm:text-base text-center mb-6 leading-relaxed z-10">
              Ideal for startups, this plan provides essential tools and IoT
              solutions to streamline operations and boost efficiency.
            </p>
            <button className="relative z-10 bg-gradient-to-r from-teal-600 to-teal-500 text-white text-md font-heading rounded-full px-6 py-3 mx-auto mt-6 block hover:from-teal-700 hover:to-teal-600 transition-all duration-300">
              Get Started
            </button>
          </div>
          <div className="relative bg-white rounded-3xl shadow-lg p-8 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl border border-gray-100">
            <div className="absolute inset-0 bg-gradient-to-t from-cyan-50 to-transparent rounded-3xl opacity-50"></div>
            <h3 className="relative text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-4 z-10">
              Advanced Plan
            </h3>
            <p className="relative text-gray-600 text-sm sm:text-base text-center mb-6 leading-relaxed z-10">
              Built for growing businesses, this plan offers advanced ERP
              systems and AI-powered tools for scalability and smarter
              decisions.
            </p>
            <button className="relative z-10 bg-gradient-to-r from-teal-600 to-teal-500 text-white text-md font-heading rounded-full px-6 py-3 mx-auto mt-6 block hover:from-teal-700 hover:to-teal-600 transition-all duration-300">
              Get Started
            </button>
          </div>
          <div className="relative bg-white rounded-3xl shadow-lg p-8 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl border border-gray-100">
            <div className="absolute inset-0 bg-gradient-to-t from-teal-50 to-transparent rounded-3xl opacity-50"></div>
            <h3 className="relative text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 text-center mb-4 z-10">
              Premium Plan
            </h3>
            <p className="relative text-gray-600 text-sm sm:text-base text-center mb-6 leading-relaxed z-10">
              Designed for enterprises, this all-inclusive plan delivers
              full-stack development, IoT, and scalable cloud solutions.
            </p>
            <button className="relative z-10 bg-gradient-to-r from-teal-600 to-teal-500 text-white text-md font-heading rounded-full px-6 py-3 mx-auto mt-6 block hover:from-teal-700 hover:to-teal-600 transition-all duration-300">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plansx;
