"use client";

import React, { useState, useEffect, useRef } from "react";

const Growth: React.FC = () => {
  const [financeGrowth, setFinanceGrowth] = useState<number>(0);
  const [customerCommunity, setCustomerCommunity] = useState<number>(0);
  const [projectsCompleted, setProjectsCompleted] = useState<number>(0);
  const [newTeammates, setNewTeammates] = useState<number>(0);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once visible
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the component is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return; // Only start counters when visible

    const duration = 2000; // 2 seconds
    const financeStep = 600 / (duration / 20); // Increment every 20ms
    const customerStep = 744 / (duration / 20);
    const projectsStep = 150 / (duration / 20);
    const teammateStep = 6 / (duration / 20);

    const financeTimer = setInterval(() => {
      setFinanceGrowth((prev) => (prev < 600 ? prev + financeStep : 600));
    }, 20);

    const customerTimer = setInterval(() => {
      setCustomerCommunity((prev) => (prev < 744 ? prev + customerStep : 744));
    }, 20);

    const projectsTimer = setInterval(() => {
      setProjectsCompleted((prev) => (prev < 150 ? prev + projectsStep : 150));
    }, 20);

    const teammateTimer = setInterval(() => {
      setNewTeammates((prev) => (prev < 6 ? prev + teammateStep : 6));
    }, 20);

    return () => {
      clearInterval(financeTimer);
      clearInterval(customerTimer);
      clearInterval(projectsTimer);
      clearInterval(teammateTimer);
    };
  }, [isVisible]);

  return (
    <div className="bg-white">
      <div
        ref={sectionRef}
        className="bg-gradient-to-br from-teal-700 to-teal-900 text-gray-800 p-10 rounded-3xl m-8 shadow-md"
      >
        <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl text-center text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-lime-300">
          Company Growth over Year
        </h2>
        <div className="flex justify-around items-center flex-wrap gap-6">
          {/* Finance Growth */}
          <div className="flex flex-col items-center rounded-2xl p-4 transform transition duration-300 hover:scale-105 hover:shadow-lg animate-fade-in-up delay-100">
            <div className="w-28 h-28 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center mb-3 shadow-md">
              <span className="text-5xl">📈</span>
            </div>
            <p className="text-3xl font-bold text-blue-600">
              {Math.round(financeGrowth)}%
            </p>
            <p className="text-sm font-medium text-white">finance growth</p>
          </div>

          {/* Customer Community */}
          <div className="flex flex-col items-center rounded-2xl p-4 transform transition duration-300 hover:scale-105 hover:shadow-lg animate-fade-in-up delay-200">
            <div className="w-28 h-28 bg-gradient-to-br from-green-400 to-green-600 rounded-full flex items-center justify-center mb-3 shadow-md">
              <span className="text-5xl">👥</span>
            </div>
            <p className="text-3xl font-bold text-green-600">
              {Math.round(customerCommunity)}
            </p>
            <p className="text-sm font-medium text-white">customer community</p>
          </div>

          {/* Projects Completed */}
          <div className="flex flex-col items-center rounded-2xl p-4 transform transition duration-300 hover:scale-105 hover:shadow-lg animate-fade-in-up delay-300">
            <div className="w-28 h-28 bg-gradient-to-br from-red-400 to-red-600 rounded-full flex items-center justify-center mb-3 shadow-md">
              <span className="text-5xl">💼</span>
            </div>
            <p className="text-3xl font-bold text-red-600">
              {Math.round(projectsCompleted)}
            </p>
            <p className="text-sm font-medium text-white">projects completed</p>
          </div>

          {/* New Teammates */}
          <div className="flex flex-col items-center rounded-2xl p-4 transform transition duration-300 hover:scale-105 hover:shadow-lg animate-fade-in-up delay-400">
            <div className="w-28 h-28 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mb-3 shadow-md">
              <span className="text-5xl">💪</span>
            </div>
            <p className="text-3xl font-bold text-yellow-600">
              {Math.round(newTeammates)}
            </p>
            <p className="text-sm font-medium text-white">new teammates</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Growth;
