"use client";
import React, { useState } from "react";

const Teams: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(1);

  const handlePrevSlide = () => {
    setActiveSlide(1);
  };

  const handleNextSlide = () => {
    setActiveSlide(2);
  };

  return (
    <section className="py-12 lg:py-24 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center mb-12 md:mb-20 -mx-4">
          <div className="w-full md:w-1/2 px-4 mb-12 md:mb-0">
            <div>
              <h1 className="font-heading text-gray-900 text-4xl md:text-5xl sm:text-6xl mb-4">
                Meet our experts
              </h1>
              <p className="text-gray-700">
                Our dedicated team of industry-leading professionals brings deep
                expertise in development, design, and strategy.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-4">
            <div className="flex items-center justify-end">
              <button
                className="inline-block text-gray-800 mr-1"
                onClick={handlePrevSlide}
              >
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.4">
                    <path
                      d="M17.5 29.1667L8.33333 20.0001L17.5 10.8334"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M8.33329 20L31.6666 20"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </g>
                </svg>
              </button>
              <button
                className="inline-block text-black hover:text-lime-500"
                onClick={handleNextSlide}
              >
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 40 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M22.5 10.8333L31.6667 19.9999L22.5 29.1666"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M31.6666 20H8.33331"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div
          className="flex transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateX(-${(activeSlide - 1) * 100.5}%)` }}
        >
          {[
            {
              name: "Ujjwal Kushwaha",
              role: "Co-founder & Devlopment Head",
              img: "quantam-assets/team/photo-1.jpeg",
            },
            {
              name: "Manash Mishra",
              role: "Ceo & Founder",
              img: "quantam-assets/team/photo-2.jpeg",
            },
            {
              name: "Pankaj Kesharwani",
              role: "Co-founder & Management Head",
              img: "quantam-assets/team/photo-3.jpg",
            },
          ].map((member, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 w-full sm:w-87 h-full sm:h-112 mr-8 overflow-hidden"
            >
              <div className="absolute bottom-0 left-0 w-full p-4">
                <div className="p-4 bg-white rounded-xl">
                  <span className="block font-medium text-gray-900">{member.name}</span>
                  <span className="text-sm text-gray-700">{member.role}</span>
                </div>
              </div>
              <img
                className="block w-full h-full object-cover rounded-2xl"
                src={member.img}
                alt={member.name}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teams;
