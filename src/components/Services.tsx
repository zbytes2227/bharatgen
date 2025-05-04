import React from "react";

const Services: React.FC = () => {
  return (
    <section className="py-18 px-6 lg:py-32 bg-gradient-to-b from-teal-900 to-teal-700">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-300 to-lime-300">
            Our services
          </h2>
          <p className="text-lg sm:text-xl text-teal-100 opacity-90 max-w-2xl mx-auto leading-relaxed">
            We are committed to a productive future
          </p>
        </div>
        <div className="max-w-md mx-auto lg:max-w-none">
          <div className="flex flex-wrap -mx-4">
            <div className="w-full lg:w-1/3 px-4 mb-8 lg:mb-0 transform hover:scale-105 transition-all duration-500 hover:shadow-2xl">
              <div className="h-full py-12 px-6 xs:px-10 bg-white rounded-3xl shadow-lg relative overflow-hidden border border-teal-100/30">
                <div className="absolute inset-0 bg-gradient-to-t from-teal-50 to-transparent opacity-30 rounded-3xl"></div>
                <div className="relative z-10">
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="transform hover:scale-110 transition-transform duration-300"
                  >
                    <path
                      d="M0 8C0 3.58172 3.58172 0 8 0H40C44.4183 0 48 3.58172 48 8V40C48 44.4183 44.4183 48 40 48H8C3.58172 48 0 44.4183 0 40V8Z"
                      fill="#BEF264"
                    />
                    <rect
                      x="12"
                      y="12"
                      width="24"
                      height="24"
                      rx="2"
                      fill="#022C22"
                    />
                    <rect x="12" y="12" width="24" height="4" fill="#BEF264" />
                    <circle cx="15" cy="14" r="1" fill="#022C22" />
                    <circle cx="18" cy="14" r="1" fill="#022C22" />
                    <circle cx="21" cy="14" r="1" fill="#022C22" />
                    <path
                      d="M20 22L18 24L20 26"
                      stroke="#BEF264"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M28 22L30 24L28 26"
                      stroke="#BEF264"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  <h5 className="text-gray-900 text-2xl xs:text-3xl lg:text-4xl xl:text-5xl mt-6 mb-4 font-bold">
                    Web & App Development
                  </h5>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    We create attractive and fully functional websites tailored
                    to your business needs, Creating user-friendly mobile
                    applications for iOS and Android to help you engage with
                    your audience and Our websites are designed to be
                    user-professional with our ERP solutions.
                  </p>
                  <a href="/services">
                    <button className="bg-gradient-to-r from-teal-600 to-teal-500 text-white text-md font-heading rounded-full px-6 py-3 mx-auto mt-6 block hover:from-teal-700 hover:to-teal-600 transition-all duration-300">
                      Learn More
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/3 px-4 mb-8 lg:mb-0 transform hover:scale-105 transition-all duration-500 hover:shadow-2xl">
              <div className="h-full py-12 px-6 xs:px-10 bg-white rounded-3xl shadow-lg relative overflow-hidden border border-teal-100/30">
                <div className="absolute inset-0 bg-gradient-to-t from-lime-50 to-transparent opacity-30 rounded-3xl"></div>
                <div className="relative z-10">
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="transform hover:scale-110 transition-transform duration-300"
                  >
                    <path
                      d="M0 8C0 3.58172 3.58172 0 8 0H40C44.4183 0 48 3.58172 48 8V40C48 44.4183 44.4183 48 40 48H8C3.58172 48 0 44.4183 0 40V8Z"
                      fill="#BEF264"
                    />
                    <path
                      d="M16 12C16 10.8954 16.8954 10 18 10H30C31.1046 10 32 10.8954 32 12V36C32 37.1046 31.1046 38 30 38H18C16.8954 38 16 37.1046 16 36V12Z"
                      fill="#022C22"
                    />
                    <path d="M18 14H30V34H18V14Z" fill="#BEF264" />
                    <path
                      d="M21 20L19 22L21 24"
                      stroke="#022C22"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M27 20L29 22L27 24"
                      stroke="#022C22"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <circle cx="24" cy="36" r="1" fill="#022C22" />
                  </svg>
                  <h5 className="text-gray-900 text-2xl xs:text-3xl lg:text-4xl xl:text-5xl mt-6 mb-4 font-bold">
                    Software Development
                  </h5>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    We offer custom software development solutions to streamline
                    your business processes and improve efficiency. Our
                    software solutions are designed to meet your specific needs and
                    requirements.We are committed to ensure
                    high-quality software development.
                  </p>
                  <a href="/services">
                    <button className="bg-gradient-to-r from-teal-600 to-teal-500 mb-4 text-white text-md font-heading rounded-full px-6 py-3 mx-auto mt-6 block hover:from-teal-700 hover:to-teal-600 transition-all duration-300">
                      Learn More
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/3 px-4 transform hover:scale-105 transition-all duration-500 hover:shadow-2xl">
              <div className="h-full py-12 px-6 xs:px-10 bg-white rounded-3xl shadow-lg relative overflow-hidden border border-teal-100/30">
                <div className="absolute inset-0 bg-gradient-to-t from-teal-50 to-transparent opacity-30 rounded-3xl"></div>
                <div className="relative z-10">
                  <svg
                    width="48"
                    height="48"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="transform hover:scale-110 transition-transform duration-300"
                  >
                    <path
                      d="M0 8C0 3.58172 3.58172 0 8 0H40C44.4183 0 48 3.58172 48 8V40C48 44.4183 44.4183 48 40 48H8C3.58172 48 0 44.4183 0 40V8Z"
                      fill="#BEF264"
                    />
                    <rect
                      x="18"
                      y="18"
                      width="12"
                      height="12"
                      rx="2"
                      fill="#022C22"
                    />
                    <path
                      d="M24 18V14"
                      stroke="#022C22"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                    <path
                      d="M24 30V34"
                      stroke="#022C22"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                    <path
                      d="M18 24H14"
                      stroke="#022C22"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                    <path
                      d="M30 24H34"
                      stroke="#022C22"
                      stroke-width="2"
                      stroke-linecap="round"
                    />
                    <circle cx="24" cy="12" r="2" fill="#022C22" />
                    <circle cx="24" cy="36" r="2" fill="#022C22" />
                    <circle cx="12" cy="24" r="2" fill="#022C22" />
                    <circle cx="36" cy="24" r="2" fill="#022C22" />
                  </svg>
                  <h5 className="text-gray-900 text-2xl xs:text-3xl lg:text-4xl xl:text-5xl mt-6 mb-4 font-bold">
                    IOT <br></br>Solutions
                  </h5>
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    We offer advanced technology to enable communication and
                    automation between your devices, making your systems smarter
                    and more connected. We develop systems that automate regular
                    tasks, reduce manual effort, and improve productivity.
                  </p>
                  <a href="/contact">
                    <button className="bg-gradient-to-r from-teal-600 to-teal-500 px-8 text-white text-md font-heading rounded-full px-6 py-3 mx-auto mt-6 block hover:from-teal-700 hover:to-teal-600 transition-all duration-300">
                      Enquire
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
