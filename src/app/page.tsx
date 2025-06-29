"use client";
import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Services from "@/components/Services";
import Teams from "@/components/Teams";
import Plansx from "@/components/planx";
import Reviews from "@/components/Reviews";
import Image from "next/image";
import Growth from "@/components/Growth";

interface Popup {
  onClose: () => void;
}

/**
 * Popup component for contact form.
 *
 * @param {Object} props - Component props.
 * @param {() => void} props.onClose - Function to close the popup.
 * @returns {React.ReactElement} The popup component.
 */

const Popup: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      name,
      phone,
      email: "",
      message: "",
      category: "from_popup",
    };

    try {
      const response = await fetch("/api/contactus", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        console.log("Form submitted successfully");
        onClose(); // Close popup after submission
      } else {
        console.error("Failed to submit form");
      }
    } catch (error) {
      console.error("Error submitting form", error);
    }
  };

  return (
    <div className="absolute inset-0 z-50 mt-[5vh] sm:mt-[10vh] md:mt-[15vh] lg:mt-[20vh] flex items-center justify-center bg-opacity-50 backdrop-blur-sm">
      <div className="w-full max-w-[90vw] sm:max-w-[500px] rounded-2xl border border-gray-200 bg-white p-4 shadow-sm drk:border-gray-700 sm:p-6 animate-pop-in">
        <div className="relative p-4 text-left">
          <button
            onClick={onClose}
            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 drk:text-gray-400 drk:hover:text-gray-200"
            aria-label="Close modal"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              viewBox="0 0 16 16"
              className="bi bi-x"
            >
              <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
            </svg>
          </button>
          <h3 className="mb-5 text-2xl font-semibold text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-yellow-900">
            Get In Touch
            <br></br>
          </h3>
          <Image
            alt="poster"
            src="/quantam-assets/headers/poster3.jpg"
            width={400}
            height={200}
            priority
            className="w-full h-auto rounded-xl mb-2"
          />
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-900 drk:text-white"
              >
                Your Name:
              </label>
              <input
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                type="text"
                placeholder="Your Full Name"
                id="name"
                required
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-md text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-blue-500 drk:border-gray-600 drk:bg-gray-700 drk:text-white drk:placeholder:text-gray-400 drk:focus:border-blue-500 drk:focus:ring-blue-500"
              />
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-900 drk:text-white"
              >
                Phone Number:
              </label>
              <input
                value={phone}
                onChange={(e) => {
                  setPhone(e.target.value);
                }}
                type="tel"
                placeholder="+91 91258870XXX"
                id="phone"
                inputMode="numeric"
                pattern="[0-9]*"
                required
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-md text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-blue-500 drk:border-gray-600 drk:bg-gray-700 drk:text-white drk:placeholder:text-gray-400 drk:focus:border-blue-500 drk:focus:ring-blue-500"
              />
            </div>
            <div>
              <button
                type="submit"
                className="flex mt-6 w-full items-center justify-center rounded-xl bg-gradient-to-r from-teal-800 to-blue-900 px-5 py-2.5 text-md font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 drk:hover:bg-blue-700 drk:focus:ring-blue-800"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="me-2 bi bi-award-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="m8 0 1.669.864 1.858.282.842 1.68 1.337 1.32L13.4 6l.306 1.854-1.337 1.32-.842 1.68-1.858.282L8 12l-1.669-.864-1.858-.282-.842-1.68-1.337-1.32L2.6 6l-.306-1.854 1.337-1.32.842-1.68L6.331.864z" />
                  <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1z" />
                </svg>
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

/**
 * Main page component that integrates all sections.
 *
 * @returns {React.ReactElement} The page component.
 */
export default function Page() {
  const [isPopupOpen, setIsPopupOpen] = useState(true);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      {isPopupOpen && <Popup onClose={() => setIsPopupOpen(false)} />}
      <main className="flex-grow">
        <div className="relative pt-8">
          <div className="flex justify-center items-center">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="12" height="12" rx="2" fill="#022C22" />
              <circle cx="6" cy="6" r="4" fill="#BEF264" />
            </svg>
            <span className="ml-2 text-sm font-medium text-teal-900">
              Powering Tomorrow
            </span>
          </div>
          <Image
            className="hidden md:block absolute z-10 top-0 left-0 mt-28 w-32 lg:w-64 xl:w-80 opacity-50"
            src="/quantam-assets/headers/header-3.png"
            alt="Technology innovation"
            width={256}
            height={256}
          />
          <Image
            className="hidden md:block absolute z-10 top-0 right-0 mt-20 w-32 lg:w-64 xl:w-80 opacity-70"
            src="/quantam-assets/headers/header-4.png"
            alt="Digital solutions"
            width={256}
            height={256}
          />

          <div className="container mx-auto px-4 relative">
            <div className="mx-auto mb-12 max-w-lg text-center xl:max-w-xl">
              <h1 className="font-heading mb-8 text-5xl font-semibold tracking-tight text-gray-900 xs:text-7xl xl:text-8xl">
                Empowering The New Generation of Bharat
              </h1>
              <p className="mb-10 text-lg text-gray-700">
                BharatGen is a technology startup focused on empowering the new
                generation of Bharat by providing modern, scalable, and useful
                digital solutions. We offer a range of services designed to
                support businesses, startups, and individuals in their digital
                journey.
              </p>
              <div className="flex flex-col justify-center sm:flex-row">
                <a
                  className="mb-3 inline-flex items-center justify-center rounded-full border border-teal-900 bg-gradient-to-r from-teal-700 to-teal-900 px-6 py-4 text-lg font-medium text-white transition duration-200 hover:border-gray-800 hover:bg-gradient-to-r hover:from-gray-800 hover:to-gray-900 sm:mb-12 sm:mr-4"
                  href="/services"
                >
                  See our Solutions
                </a>
                <a
                  className="mb-12 inline-flex items-center justify-center rounded-full border border-teal-900 px-6 py-4 text-lg font-medium text-black transition duration-200 hover:bg-teal-900 hover:text-white"
                  href="https://drive.google.com/file/d/1zoDYVZ0_Sla6TEzaoTJ4sB_iCmRcWzDY/view"
                  onClick={() => setIsPopupOpen(true)}
                >
                  Download Brochure
                </a>
              </div>
            </div>

            <div className="hidden md:flex relative -mx-4 items-end">
              <div className="w-1/3 px-4 lg:w-auto">
                <Image
                  className="rounded-2xl ml-8 h-32 lg:h-48"
                  src="/quantam-assets/headers/header-bottom-2.jpg"
                  alt="Team collaboration"
                  width={340}
                  height={300}
                />
              </div>
              <div className="w-2/3 ml-auto px-4 lg:w-auto">
                <Image
                  className="rounded-2xl mr-8 h-36 lg:h-64 ml-auto"
                  src="/quantam-assets/headers/header-bottom.jpg"
                  alt="Digital transformation"
                  width={280}
                  height={128}
                />
              </div>
              <div className="absolute bottom-0 left-0 w-full py-32 bg-gradient-to-t from-orange-50 to-transparent" />
            </div>
          </div>
        </div>
      </main>
      <Services />
      <Teams />
      <Plansx />
      <Growth />
      <Reviews />
      <Footer />
    </div>
  );
}
