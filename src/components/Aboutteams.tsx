"use client";
import React from "react";
import { ArrowRight } from "lucide-react";

const Aboutteams: React.FC = () => {
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
      img: "quantam-assets/team/prince.jpg",
    },
    {
      name: "Anuj Tiwari",
      role: "UI/UX Designer",
      img: "quantam-assets/team/anuj.png",
    },
    {
      name: "Riddhi Jaiswal",
      role: "IoT Specialist",
      img: "quantam-assets/team/riddhi.jpg",
    },
    {
      name: "Amar Chaubey",
      role: "ERP Consultant",
      img: "quantam-assets/team/amar.jpg",
    },
    {
      name: "Subhash Sahu",
      role: "Billing Software Specialist",
      img: "quantam-assets/team/subhash.jpg",
    },
  ];

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
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="relative w-full h-48 sm:h-[55vh] overflow-hidden"
            >
              <div className="absolute bottom-0 left-0 w-full p-2">
                <div className="p-1.5 text-center bg-white rounded-xl shadow-md">
                  <span className="block font-medium text-gray-900 text-xs">
                    {member.name}
                  </span>
                  {/* <span className="text-xs text-gray-700">{member.role}</span> */}
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
