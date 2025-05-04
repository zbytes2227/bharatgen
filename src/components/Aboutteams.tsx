"use client";
import React, { useState } from "react";
import { ArrowRight } from "lucide-react";

const Aboutteams: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const teamMembers = [
    {
      name: "Ujjwal Kushwaha",
      role: "Co-founder & Development Head",
      img: "quantam-assets/team/photo-1.jpeg",
    },
    {
      name: "Manash Mishra",
      role: "CEO & Founder",
      img: "quantam-assets/team/photo-2.jpeg",
    },
    {
      name: "Pankaj Kesharwani",
      role: "Co-founder & Management Head",
      img: "quantam-assets/team/photo-3.jpg",
    },
    {
      name: "Prince Yadav",
      role: "Software Engineer",
      img: "quantam-assets/team/photo.jpg",
    },
    {
      name: "Anuj Tiwari",
      role: "UI/UX Designer",
      img: "quantam-assets/team/photo.jpg",
    },
    {
      name: "Riddhi Jaiswal",
      role: "IoT Specialist",
      img: "quantam-assets/team/photo.jpg",
    },
    {
      name: "Amar Chaubey",
      role: "ERP Consultant",
      img: "quantam-assets/team/photo.jpg",
    },
    {
      name: "Subhash Sahu",
      role: "Billing Software Specialist",
      img: "quantam-assets/team/photo.jpg",
    },
  ];

  const handlePrevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? teamMembers.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setActiveSlide((prev) => (prev === teamMembers.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-8 lg:py-16 overflow-hidden bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center mb-8 md:mb-16 -mx-4">
          <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
            <div>
              <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl text-gray-900 mb-4">
                Meet Our Excellence Team
              </h2>
              <p className="text-gray-700 text-sm sm:text-base">
                Our dedicated team of industry-leading professionals brings deep
                expertise in development, design, and strategy to empower the
                new generation of Bharat.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-4">
            <div className="flex items-center justify-end space-x-2">
              <button
                className="inline-block text-gray-800 p-2 hover:text-teal-600 transition-colors"
                onClick={handlePrevSlide}
                aria-label="Previous slide"
              >
                <svg
                  width="32"
                  height="32"
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
                className="inline-block text-black p-2 hover:text-teal-600 transition-colors"
                onClick={handleNextSlide}
                aria-label="Next slide"
              >
                <svg
                  width="32"
                  height="32"
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
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${activeSlide * (100 / 1.5)}%)` }}
        >
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="relative flex-shrink-0 w-[70vw] sm:w-64 md:w-72 h-80 sm:h-96 mr-4 sm:mr-6 overflow-hidden"
            >
              <div className="absolute bottom-0 left-0 w-full p-2 sm:p-3">
                <div className="p-2 sm:p-3 bg-white rounded-xl shadow-md">
                  <span className="block font-medium text-gray-900 text-sm sm:text-base">
                    {member.name}
                  </span>
                  <span className="text-xs text-gray-700">{member.role}</span>
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
      <div className="mt-12 text-center">
        <a href="/contact">
          <button className="bg-gradient-to-r from-teal-600 to-cyan-500 text-white rounded-full px-6 py-3 sm:px-8 sm:py-4 hover:scale-105 transition-transform duration-200 flex items-center mx-auto gap-2 shadow-lg text-sm sm:text-base">
            Get a Free Consultation{" "}
            <ArrowRight className="h-4 w-4 sm:h-5 sm:w-5" />
          </button>
        </a>
      </div>
    </section>
  );
};

export default Aboutteams;
