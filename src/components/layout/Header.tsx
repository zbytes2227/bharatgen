"use client";

import { useState } from "react";


/**
 * Header component that displays the logo and navigation links.
 *
 * @returns {React.ReactElement} 
 */
export default function Header(): React.ReactElement {
  const [mobileNavOpen, setMobileNavOpen] = useState<boolean>(false);

  return (
    <div>
      <section className="bg-orange-30">
        <nav className="py-3">
          <div className="container mx-auto px-4">
            <div className="relative flex items-center justify-between">
              <a className="inline-block" href="/ ">
                <img src="/images/logo.png" alt="Bharat Gen" className="h-18" />
              </a>
              <ul className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden md:flex">
                <li className="mr-8">
                  <a
                    className="inline-block text-teal-900 hover:text-teal-700 font-medium"
                    href="/ "
                  >
                    Home
                  </a>
                </li>
                <li className="mr-8">
                  <a
                    className="inline-block text-teal-900 hover:text-teal-700 font-medium"
                    href="/about"
                  >
                    About
                  </a>
                </li>
                <li className="mr-8">
                  <a
                    className="inline-block text-teal-900 hover:text-teal-700 font-medium"
                    href="/services"
                  >
                    Services
                  </a>
                </li>
                <li className="mr-8">
                  <a
                    className="inline-block text-teal-900 hover:text-teal-700 font-medium"
                    href="/projects"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    className="inline-block text-teal-900 hover:text-teal-700 font-medium"
                    href="/contact"
                  >
                    Get Quotation
                  </a>
                </li>
              </ul>
              <div className="flex items-center justify-end">
                <div className="hidden md:block">
                  <a
                    className="inline-flex py-2.5 px-4 items-center justify-center text-sm font-medium text-teal-900 hover:text-white border border-teal-900 hover:bg-teal-900 rounded-full transition duration-200"
                    href="/register"
                  >
                    Get Started
                  </a>
                </div>
                <button
                  className="md:hidden navbar-burger text-teal-900 hover:text-teal-800"
                  onClick={() => setMobileNavOpen(!mobileNavOpen)}
                >
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.2 23.2H26.8"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5.2 16H26.8"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M5.2 8.8H26.8"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </nav>


        {/* Mobile Menu */}
        <div
          className={`fixed top-0 left-0 bottom-0 w-full xs:w-5/6 xs:max-w-md z-50 overflow-y-auto ${
            mobileNavOpen ? "block" : "hidden"
          }`}
        >
          <div
            className="fixed inset-0 bg-violet-900 opacity-20"
            onClick={() => setMobileNavOpen(false)}
          ></div>
          <nav className="relative flex flex-col py-7 px-10 w-full h-full bg-white overflow-y-auto">
            <div className="flex items-center justify-between">
              <a className="inline-block" href="/ ">
                <img
                  className="h-8"
                  src="/images/logo.png"
                  alt="Bharat Gen"
                />
              </a>
              <div className="flex items-center">
                <a
                  className="inline-flex py-2.5 px-4 mr-6 items-center justify-center text-sm font-medium text-teal-900 hover:text-white border border-teal-900 hover:bg-teal-900 rounded-full transition duration-200"
                  href="/login"
                >
                  Login
                </a>
                <button onClick={() => setMobileNavOpen(false)}>
                  <svg
                    width="32"
                    height="32"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M23.2 8.8L8.8 23.2M8.8 8.8L23.2 23.2"
                      stroke="#1D1F1E"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>

            {/* Mobile Nav Links */}
            <div className="pt-20 pb-12 mb-auto">
              <ul className="flex flex-col">
                <li className="mb-6">
                  <a
                    className="inline-block text-teal-900 hover:text-teal-700 font-medium"
                    href="/ "
                  >
                    Home
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    className="inline-block text-teal-900 hover:text-teal-700 font-medium"
                    href="/about"
                  >
                    About
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    className="inline-block text-teal-900 hover:text-teal-700 font-medium"
                    href="/services"
                  >
                    Services
                  </a>
                </li>
                <li className="mb-6">
                  <a
                    className="inline-block text-teal-900 hover:text-teal-700 font-medium"
                    href="/projects"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    className="inline-block text-teal-900 hover:text-teal-700 font-medium"
                    href="/contact"
                  >
                    Get Quotation
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </section>
    </div>
  );
}
