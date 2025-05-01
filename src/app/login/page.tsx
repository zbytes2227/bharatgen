"use client"
import React, { useState } from 'react';

const SignUpPage = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);

  return (
    <div className="antialiased bg-body text-body font-body">
      <div>
        <p className="mb-0 py-3 bg-lime-500 text-center">
          Want to learn how to build templates like this one? Visit{' '}
          <a href="https://www.pixelrocket.store">www.pixelrocket.store</a>
        </p>
      </div>

      <section className="overflow-hidden">
        <nav className="py-6 border-b">
          <div className="container mx-auto px-4">
            <div className="relative flex items-center justify-between">
              <a className="inline-block" href="index.html">
                <img className="h-8" src="images/logo-2.svg" alt="" />
              </a>
              <ul className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden md:flex">
                <li className="mr-8"><a className="inline-block text-teal-900 hover:text-teal-700 font-medium" href="about.html">About Us</a></li>
                <li className="mr-8"><a className="inline-block text-teal-900 hover:text-teal-700 font-medium" href="pricing.html">Pricing</a></li>
                <li className="mr-8"><a className="inline-block text-teal-900 hover:text-teal-700 font-medium" href="blog.html">Blog</a></li>
                <li><a className="inline-block text-teal-900 hover:text-teal-700 font-medium" href="contact.html">Contact Us</a></li>
              </ul>
              <div className="flex items-center justify-end">
                <div className="hidden md:block">
                  <a className="inline-flex py-2.5 px-4 items-center justify-center text-sm font-medium text-teal-900 hover:text-white border border-teal-900 hover:bg-teal-900 rounded-full transition duration-200" href="register.html">
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

        {/* Mobile Nav */}
        {mobileNavOpen && (
          <div className="fixed top-0 left-0 bottom-0 w-full xs:w-5/6 xs:max-w-md z-50">
            <div
              className="fixed inset-0 bg-violet-900 opacity-20"
              onClick={() => setMobileNavOpen(false)}
            />
            <nav className="relative flex flex-col py-7 px-10 w-full h-full bg-white overflow-y-auto">
              <div className="flex items-center justify-between">
                <a className="inline-block" href="#">
                  <img className="h-8" src="images/logo-2.svg" alt="" />
                </a>
                <div className="flex items-center">
                  <a className="inline-flex py-2.5 px-4 mr-6 items-center justify-center text-sm font-medium text-teal-900 hover:text-white border border-teal-900 hover:bg-teal-900 rounded-full transition duration-200" href="#">
                    Login
                  </a>
                  <button onClick={() => setMobileNavOpen(false)}>
                    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M23.2 8.8L8.8 23.2M8.8 8.8L23.2 23.2" stroke="#1D1F1E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="pt-20 pb-12 mb-auto">
                <ul className="flex-col">
                  <li className="mb-6"><a className="inline-block text-teal-900 hover:text-teal-700 font-medium" href="about.html">About Us</a></li>
                  <li className="mb-6"><a className="inline-block text-teal-900 hover:text-teal-700 font-medium" href="pricing.html">Pricing</a></li>
                  <li className="mb-6"><a className="inline-block text-teal-900 hover:text-teal-700 font-medium" href="blog.html">Blog</a></li>
                  <li><a className="inline-block text-teal-900 hover:text-teal-700 font-medium" href="contact.html">Contact Us</a></li>
                </ul>
              </div>
            </nav>
          </div>
        )}
      </section>

      <section className="relative pb-64 md:pb-16 pt-32 sm:pt-52 overflow-hidden">
        <img className="absolute bottom-0 left-0 w-48 lg:w-64 xl:w-auto" src="quantam-assets/sign-in/image-place1.png" alt="" />
        <img className="absolute top-0 left-0 ml-24 md:ml-64 w-40 sm:w-48 lg:w-64 xl:w-auto" src="quantam-assets/sign-in/image-place2.png" alt="" />
        <img className="hidden sm:block absolute top-0 right-0 mt-20 w-48 lg:w-64 xl:w-auto" src="quantam-assets/sign-in/image-place3.png" alt="" />
        <img className="hidden md:block absolute bottom-0 right-0 mr-12 xl:mr-20 w-44 lg:w-64 xl:w-auto" src="quantam-assets/sign-in/image-place4.png" alt="" />

        <div className="container mx-auto px-4 relative">
          <div className="max-w-sm mx-auto">
            <form>
              <h3 className="text-4xl text-center font-medium mb-10">Create your account</h3>

              <label className="block pl-4 mb-1 text-sm font-medium" htmlFor="fullname">Full name</label>
              <input id="fullname" className="w-full px-4 py-3 mb-6 outline-none ring-offset-0 focus:ring-2 focus:ring-lime-500 shadow rounded-full" type="text" />

              <label className="block pl-4 mb-1 text-sm font-medium" htmlFor="email">Email</label>
              <input id="email" className="w-full px-4 py-3 mb-6 outline-none ring-offset-0 focus:ring-2 focus:ring-lime-500 shadow rounded-full" type="email" />

              <label className="block pl-4 mb-1 text-sm font-medium" htmlFor="password">Password</label>
              <div className="relative mb-6">
                <input
                  id="password"
                  className="relative w-full px-4 py-3 outline-none ring-offset-0 focus:ring-2 focus:ring-lime-500 shadow rounded-full"
                  type={passwordVisible ? 'text' : 'password'}
                />
                <button
                  className="absolute top-1/2 right-0 transform -translate-y-1/2 mr-4"
                  onClick={(e) => {
                    e.preventDefault();
                    setPasswordVisible(!passwordVisible);
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.75 10C1.75 10 4.75 4 10 4C15.25 4 18.25 10 18.25 10C18.25 10 15.25 16 10 16C4.75 16 1.75 10 1.75 10Z" stroke="#646A69" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>

              <button type="submit" className="w-full py-3 px-4 bg-lime-500 hover:bg-lime-600 text-white font-medium rounded-full">
                Create Account
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SignUpPage;
