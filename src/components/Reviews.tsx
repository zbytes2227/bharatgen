"use client";

import { useState } from "react";

interface Review {
  name: string;
  rating: number;
  text: string;
}

const reviews: Review[] = [
  {
    name: "Principal, FGP Raebareli",
    rating: 5,
    text: "We've been using their services for over two years, and the experience has been excellent. Reliable and consistently high-quality support!",
  },
  {
    name: "Aim Academy, Raebareli",
    rating: 5,
    text: "The Attedx machine has been a game-changer. It seamlessly transitioned our attendance system to digital and improved accuracy.",
  },
  {
    name: "Agni Accessories",
    rating: 4,
    text: "Their ERP system has streamlined our operations and improved inventory management significantly. Thank you for the support!",
  },
];

const Reviews: React.FC = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const handlePrevSlide = () => {
    setActiveSlide((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const handleNextSlide = () => {
    setActiveSlide((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-16 lg:py-32 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="w-full md:w-full px-4 mb-4">
          <div className="text-center md:text-center">
            <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-semibold text-gray-900 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-lime-300 to-teal-600">
              What Our Customers Say
            </h2>
            <p className="text-sm sm:text-lg text-gray-600 max-w-xl w-full md:w-full mx-auto leading-relaxed mb-2 md:mb-6">
              Hear from our satisfied clients about how our solutions have
              empowered their businesses.
            </p>
          </div>
        </div>
        <br></br>
        <div className="flex flex-wrap items-center mb-6 md:mb-20 -mx-4">
          <div className="w-full md:w-1/2 px-4">
            <div className="flex items-left justify-left md:justify-left">
              <button
                className="inline-block text-gray-800 mr-4 hover:text-lime-500 transition-colors duration-200"
                onClick={handlePrevSlide}
                aria-label="Previous review"
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
                className="inline-block text-gray-800 hover:text-lime-500 transition-colors duration-200"
                onClick={handleNextSlide}
                aria-label="Next review"
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
          style={{ transform: `translateX(-${activeSlide * 100}%)` }}
        >
          {reviews.map((review, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 px-2"
              style={{ width: "100%" }}
            >
              <div className="relative bg-white rounded-2xl shadow-lg p-12 transform hover:scale-105 transition-all duration-300 hover:shadow-xl border border-gray-100 mx-auto max-w-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-50 to-transparent rounded-3xl opacity-50"></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${
                          i < review.rating
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-600 text-sm sm:text-base mb-6 leading-relaxed">
                    {review.text}
                  </p>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {review.name}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
