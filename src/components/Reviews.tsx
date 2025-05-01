import React from "react";

const Reviews: React.FC = () => {
  const reviews = [
    {
      name: "Sarah Johnson",
      rating: 5,
      text: "This platform has transformed our business operations! The tools are intuitive, and the support team is exceptional.",
    },
    {
      name: "Michael Chen",
      rating: 4,
      text: "A fantastic solution for scaling our startup. The advanced features helped us stay competitive in a tough market.",
    },
    {
      name: "Emily Davis",
      rating: 5,
      text: "The premium plan is worth every penny. Seamless integration and powerful analytics have boosted our efficiency.",
    },
  ];

  return (
    <section className="py-16 lg:py-32 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-semibold h-full text-gray-900 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-lime-300 to-teal-600">
            What Our Customers Say
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Hear from our satisfied clients about how our solutions have
            empowered their businesses.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="relative bg-white rounded-3xl shadow-lg p-8 transform hover:scale-105 transition-all duration-300 hover:shadow-2xl border border-gray-100"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-50 to-transparent rounded-3xl opacity-50"></div>
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-5 h-5 ${
                        i < review.rating ? "text-yellow-400" : "text-gray-300"
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
