"use client";

import { useState } from "react";

export default function Header() {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  return (
    <div>
      <section className="bg-orange-50">
        <nav className="py-6 border-b">
          <div className="container mx-auto px-4">
            <div className="relative flex items-center justify-between">
              <a className="inline-block" href="index.html">
                <img className="h-8" src="images/logo-2.svg" alt="" />
              </a>
              <ul className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden md:flex">
                <li className="mr-8">
                  <a className="inline-block text-teal-900 hover:text-teal-700 font-medium" href="about.html">
                    About Us
                  </a>
                </li>
                <li className="mr-8">
                  <a className="inline-block text-teal-900 hover:text-teal-700 font-medium" href="pricing.html">
                    Pricing
                  </a>
                </li>
                <li className="mr-8">
                  <a className="inline-block text-teal-900 hover:text-teal-700 font-medium" href="blog.html">
                    Blog
                  </a>
                </li>
                <li>
                  <a className="inline-block text-teal-900 hover:text-teal-700 font-medium" href="contact.html">
                    Contact Us
                  </a>
                </li>
              </ul>
              <div className="flex items-center justify-end">
                <div className="hidden md:block">
                  <a
                    className="inline-flex py-2.5 px-4 items-center justify-center text-sm font-medium text-teal-900 hover:text-white border border-teal-900 hover:bg-teal-900 rounded-full transition duration-200"
                    href="register.html"
                  >
                    Get Started
                  </a>
                </div>
                <button
                  className="md:hidden navbar-burger text-teal-900 hover:text-teal-800"
                  onClick={() => setMobileNavOpen(!mobileNavOpen)}
                >
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.2 23.2H26.8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M5.2 16H26.8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M5.2 8.8H26.8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Header content */}
        <div className="relative pt-18">
          <img className="hidden md:block absolute top-0 left-0 mt-28 w-32 lg:w-64 xl:w-auto" src="quantam-assets/headers/header-4-left-top.png" alt="" />
          <img className="hidden md:block absolute top-0 right-0 mt-20 w-32 lg:w-64 xl:w-auto" src="quantam-assets/headers/header-4-right-top.png" alt="" />
          <div className="container mx-auto px-4 relative">
            <div className="max-w-lg xl:max-w-xl mx-auto mb-12 lg:mb-0 text-center">
              <div className="flex mb-6 items-center justify-center">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="12" height="12" rx="2" fill="#022C22" />
                  <circle cx="6" cy="6" r="4" fill="#BEF264" />
                </svg>
                <span className="ml-2 text-sm text-gray-500 font-medium">Powering Tomorrow</span>
              </div>
              <h1 className="font-heading text-gray-700 text-5xl xs:text-7xl xl:text-8xl tracking-tight mb-8 font-semibold">
                The Future of Your Business
              </h1>
              <p className="text-lg text-gray-700 mb-10">
                Our commitment to green energy is paving the way for a cleaner, healthier planet.
                Join us on a journey towards a future where clean, renewable energy sources
                transform the way we power our lives.
              </p>
              <div className="flex flex-col sm:flex-row justify-center">
                <a
                  className="inline-flex py-4 px-6 mb-3 sm:mb-0 sm:mr-4 items-center justify-center text-lg font-medium text-white hover:text-teal-900 border border-teal-900 hover:border-lime-500 bg-teal-900 hover:bg-lime-500 rounded-full transition duration-200"
                  href="#"
                >
                  See our solutions
                </a>
                <a
                  className="inline-flex py-4 px-6 items-center justify-center text-lg font-medium text-black hover:text-white border border-teal-900 hover:bg-teal-900 rounded-full transition duration-200"
                  href="#"
                >
                  Get in touch
                </a>
              </div>
            </div>

            {/* Bottom Images */}
            <div className="flex -mx-4 items-end relative">
              <div className="w-1/3 xs:w-1/2 lg:w-auto px-4">
                <img className="block h-32 lg:h-48" src="quantam-assets/headers/header-4-bottom-lleft.png" alt="" />
              </div>
              <div className="w-2/3 xs:w-1/2 lg:w-auto ml-auto px-4">
                <img className="block w-1/2 md:w-64 lg:w-auto ml-auto" src="quantam-assets/headers/header-4-bottom-right.png" alt="" />
              </div>
              <div className="absolute bottom-0 left-0 w-full py-32 bg-gradient-to-t from-orange-50 to-transparent"></div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 left-0 bottom-0 w-full xs:w-5/6 xs:max-w-md z-50 overflow-y-auto ${
            mobileNavOpen ? "block" : "hidden"
          }`}
        >
          <div className="fixed inset-0 bg-violet-900 opacity-20" onClick={() => setMobileNavOpen(false)}></div>
          <nav className="relative flex flex-col py-7 px-10 w-full h-full bg-white overflow-y-auto">
            <div className="flex items-center justify-between">
              <a className="inline-block" href="#">
                <img className="h-8" src="images/logo-2.svg" alt="" />
              </a>
              <div className="flex items-center">
                <a
                  className="inline-flex py-2.5 px-4 mr-6 items-center justify-center text-sm font-medium text-teal-900 hover:text-white border border-teal-900 hover:bg-teal-900 rounded-full transition duration-200"
                  href="#"
                >
                  Login
                </a>
                <button onClick={() => setMobileNavOpen(false)}>
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.2 8.8L8.8 23.2M8.8 8.8L23.2 23.2" stroke="#1D1F1E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Mobile Nav Links */}
            <div className="pt-20 pb-12 mb-auto">
              <ul className="flex flex-col">
                <li className="mb-6">
                  <a className="inline-block text-teal-900 hover:text-teal-700 font-medium" href="about.html">
                    About Us
                  </a>
                </li>
                <li className="mb-6">
                  <a className="inline-block text-teal-900 hover:text-teal-700 font-medium" href="pricing.html">
                    Pricing
                  </a>
                </li>
                <li className="mb-6">
                  <a className="inline-block text-teal-900 hover:text-teal-700 font-medium" href="blog.html">
                    Blog
                  </a>
                </li>
                <li>
                  <a className="inline-block text-teal-900 hover:text-teal-700 font-medium" href="contact.html">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between">
              <a className="inline-flex items-center text-lg font-medium text-teal-900" href="#">
                <span>
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.4 6.4H25.6C26.92 6.4 28 7.48 28 8.8V23.2C28 24.52 26.92 25.6 25.6 25.6H6.4C5.08 25.6 4 24.52 4 23.2V8.8C4 7.48 5.08 6.4 6.4 6.4Z" stroke="#646A69" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M28 8.8L16 17.2L4 8.8" stroke="#646A69" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span className="ml-2">Newsletter</span>
              </a>
              <div className="flex items-center">
                {/* Social icons */}
                {/* Facebook */}
                {/* Instagram */}
                {/* LinkedIn */}
              </div>
            </div>
          </nav>
        </div>
      </section>





      <section className="py-12 lg:py-24">
  <div className="container mx-auto px-4">
    <div className="max-w-lg mx-auto lg:max-w-none">
      <div className="flex flex-wrap -mx-4">
        <div className="w-full lg:w-1/2 px-4 mb-16 lg:mb-0">
          <div className="max-w-lg">
            <p className="text-2xl font-medium mb-20">
              Our commitment to green energy is paving the way for a cleaner, healthier planet.
            </p>
            <div>
              {["EV charging", "Solar Energy", "Wind Energy", "Hydropower"].map((item, idx) => (
                <div key={idx} className="cursor-pointer text-gray-500">
                  <div className="relative">
                    <div className="inline-block relative">
                      <h4 className="text-5xl">{item}</h4>
                      <div className="relative transition duration-250">
                        <div className="absolute bottom-0 left-0 -mb-6 transform translate-y-1/2 w-full border-b-2 border-gray-100"></div>
                      </div>
                    </div>
                  </div>
                  <div className="relative overflow-hidden pr-5 mt-12 duration-500">
                    <p className="text-lg text-gray-600 mb-12">
                      Solar panels convert sunlight into electricity. Photovoltaic (PV) cells on these panels
                      capture the energy from the sun and convert it into electrical power.
                    </p>
                    <a className="absolute bottom-0 left-0 inline-block text-lg font-medium text-black hover:text-lime-600" href="#">
                      Learn more
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 px-4">
          <img className="block w-full lg:max-w-md h-full lg:ml-auto" src="quantam-assets/features/image-right.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</section>

<section className="py-12 lg:py-24 bg-teal-900">
  <div className="container mx-auto px-4">
    <div className="text-center mb-20">
      <h2 className="font-heading text-6xl text-white mb-6">Our results</h2>
      <p className="text-lg text-white opacity-80">We are committed to a sustainable future</p>
    </div>
    <div className="max-w-md mx-auto lg:max-w-none">
      <div className="flex flex-wrap -mx-4">
        {[
          {
            icon: (
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 8C0 3.58172 3.58172 0 8 0H40C44.4183 0 48 3.58172 48 8V40C48 44.4183 44.4183 48 40 48H8C3.58172 48 0 44.4183 0 40V8Z" fill="#BEF264" />
                <rect x="23" y="8" width="2" height="12" rx="1" fill="#022C22" />
                <rect x="23" y="28" width="2" height="12" rx="1" fill="#022C22" />
                <rect x="34.6066" y="11.9792" width="2" height="12" rx="1" transform="rotate(45 34.6066 11.9792)" fill="#022C22" />
                <rect x="20.4645" y="26.1213" width="2" height="12" rx="1" transform="rotate(45 20.4645 26.1213)" fill="#022C22" />
                <rect x="28" y="25" width="2" height="12" rx="1" transform="rotate(-90 28 25)" fill="#022C22" />
                <rect x="8" y="25" width="2" height="12" rx="1" transform="rotate(-90 8 25)" fill="#022C22" />
                <rect x="26.1213" y="27.5356" width="2" height="12" rx="1" transform="rotate(-45 26.1213 27.5356)" fill="#022C22" />
                <rect x="11.9792" y="13.3936" width="2" height="12" rx="1" transform="rotate(-45 11.9792 13.3936)" fill="#022C22" />
              </svg>
            ),
            value: "5,000 Mwh",
            label: "Renewable Energy Generated",
            desc: "Our commitment to sustainability shines through as we proudly announce the generation of 5,000 megawatt-hours of renewable energy, contributing to a greener and more environmentally friendly future."
          },
          {
            icon: (
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 8C0 3.58172 3.58172 0 8 0H40C44.4183 0 48 3.58172 48 8V40C48 44.4183 44.4183 48 40 48H8C3.58172 48 0 44.4183 0 40V8Z" fill="#BEF264" />
                <path d="M24 10.6667C20.6863 10.6667 18 13.353 18 16.6667C18 19.9805 20.6863 22.6667 24 22.6667C27.3137 22.6667 30 19.9805 30 16.6667C30 13.353 27.3137 10.6667 24 10.6667Z" fill="#022C22" />
                <path d="M24 24.0001C17.6563 24.0001 13.2222 28.6949 12.6725 34.542C12.6374 34.9156 12.7613 35.2868 13.014 35.5644C13.2667 35.8419 13.6246 36.0001 14 36.0001H34C34.3753 36.0001 34.7332 35.8419 34.9859 35.5644C35.2386 35.2868 35.3626 34.9156 35.3274 34.542C34.7778 28.6949 30.3437 24.0001 24 24.0001Z" fill="#022C22" />
              </svg>
            ),
            value: "10,000+",
            label: "Customers Served",
            desc: "With gratitude, we celebrate the trust of over 10,000 satisfied customers. Your confidence fuels our dedication to providing exceptional service and forging lasting partnerships."
          },
          {
            icon: (
              <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M0 8C0 3.58172 3.58172 0 8 0H40C44.4183 0 48 3.58172 48 8V40C48 44.4183 44.4183 48 40 48H8C3.58172 48 0 44.4183 0 40V8Z" fill="#BEF264" />
                <path d="M13.3333 12C12.597 12 12 12.597 12 13.3333V14.6667C12 20.5577 16.7756 25.3333 22.6667 25.3333V34.6667C22.6667 35.403 23.2636 36 24 36C24.7364 36 25.3333 35.403 25.3333 34.6667V29.3333C31.2244 29.3333 36 24.5577 36 18.6667V17.3333C36 16.597 35.403 16 34.6667 16H33.3333C29.961 16 26.9541 17.565 24.9994 20.0084C23.8183 15.4035 19.6399 12 14.6667 12H13.3333Z" fill="#022C22" />
              </svg>
            ),
            value: "15%",
            label: "Avg. Energy Saved",
            desc: "Embracing efficiency, we are delighted to report an average energy savings of 15%. This milestone reflects our ongoing efforts to optimize resources and promote a more sustainable energy landscape."
          }
        ].map((stat, idx) => (
          <div key={idx} className="w-full lg:w-1/3 px-4 mb-8 lg:mb-0">
            <div className="h-full py-10 px-5 xs:px-10 bg-white rounded-2xl shadow-md text-center lg:text-left">
              {stat.icon}
              <h5 className="text-2xl xs:text-3xl lg:text-4xl xl:text-5xl mt-6 mb-4">{stat.value}</h5>
              <span className="block mb-6 text-base lg:text-xl font-medium">{stat.label}</span>
              <p className="text-gray-700">{stat.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

    </div>




  );
}
