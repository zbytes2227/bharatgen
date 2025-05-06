"use client";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Careers() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    "/quantam-assets/headers/p-1.jpeg",
    "/quantam-assets/headers/p-2.jpeg",
    "/quantam-assets/headers/p-3.jpeg",
    "/quantam-assets/headers/p-4.jpeg",
  ];

  const openModal = (image: string) => setSelectedImage(image);
  const closeModal = () => setSelectedImage(null);
  const nextImage = () => {
    if (selectedImage) {
      const currentIndex = galleryImages.indexOf(selectedImage);
      const nextIndex = (currentIndex + 1) % galleryImages.length;
      setSelectedImage(galleryImages[nextIndex]);
    }
  };
  const prevImage = () => {
    if (selectedImage) {
      const currentIndex = galleryImages.indexOf(selectedImage);
      const prevIndex =
        (currentIndex - 1 + galleryImages.length) % galleryImages.length;
      setSelectedImage(galleryImages[prevIndex]);
    }
  };

  return (
    <section className="bg-gray-100">
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="container mx-auto px-4 py-16">
          {/* Hero Section */}
          <div className="flex flex-col lg:flex-row items-center justify-between mb-16">
            <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
              <div className="flex items-center mb-4">
                <svg
                  width="8"
                  height="8"
                  viewBox="0 0 9 9"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="4" cy="4" r="4" fill="#022C22" />
                </svg>
                <span className="inline-block ml-2 text-sm font-medium text-teal-900">
                  Careers
                </span>
              </div>
              <h1 className="font-heading text-4xl sm:text-6xl tracking-tight text-teal-900 mb-6">
                Build the Future with BharatGen Technologies
              </h1>
              <p className="text-lg text-gray-700 mb-8">
                Join our innovative team to create cutting-edge solutions in AI,
                web development, and technology. Explore internships, jobs, and
                B2B collaborations that drive impact.
              </p>
              <Link
                href="/services"
                className="inline-flex py-3 px-6 items-center justify-center font-medium text-white border border-teal-900 hover:border-lime-500 bg-gradient-to-r from-teal-900 to-blue-900 hover:from-teal-800 hover:to-blue-600 rounded-full shadow transition duration-200"
              >
                <span className="mr-2">Discover Opportunities</span>
                <svg
                  width="21"
                  height="20"
                  viewBox="0 0 21 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.25 10H15.75"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M10.5 4.75L15.75 10L10.5 15.25"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Link>
            </div>
            <div className="w-full lg:w-1/3 relative h-80 lg:h-96">
              <Image
                className="rounded-2xl"
                src="/quantam-assets/headers/career.jpg"
                alt="BharatGen Careers"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>

          {/* Opportunities Section */}
          <div id="opportunities" className="border-t pt-16">
            <h2 className="text-5xl font-heading text-teal-900 mb-12 text-center">
              Explore Our Opportunities
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Internship Card */}
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition duration-200">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mb-4"
                >
                  <path
                    d="M0 8C0 3.58172 3.58172 0 8 0H40C44.4183 0 48 3.58172 48 8V40C48 44.4183 44.4183 48 40 48H8C3.58172 48 0 44.4183 0 40V8Z"
                    fill="#BEF264"
                  />
                  <path
                    d="M24 16C28.4183 16 32 19.5817 32 24C32 28.4183 28.4183 32 24 32C19.5817 32 16 28.4183 16 24C16 19.5817 19.5817 16 24 16ZM24 20C21.7909 20 20 21.7909 20 24C20 26.2091 21.7909 28 24 28C26.2091 28 28 26.2091 28 24C28 21.7909 26.2091 20 24 20Z"
                    fill="#022C22"
                  />
                </svg>
                <h3 className="text-xl font-medium text-te margem-bottom-2">
                  Internship Programs
                </h3>
                <p className="text-gray-700 mb-4">
                  Kickstart your career with hands-on experience in web
                  development, AI, and more. Our 1-3 month programs offer
                  mentorship and real-world projects.
                </p>
                <Link
                  href="/contact?type=internship"
                  className="inline-flex py-2 px-4 font-medium text-teal-900 hover:text-white border border-teal-900 hover:bg-teal-900 rounded-full transition duration-200"
                >
                  Apply Now
                </Link>
              </div>
              {/* Job Card */}
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition duration-200">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mb-4"
                >
                  <path
                    d="M0 8C0 3.58172 3.58172 0 8 0H40C44.4183 0 48 3.58172 48 8V40C48 44.4183 44.4183 48 40 48H8C3.58172 48 0 44.4183 0 40V8Z"
                    fill="#BEF264"
                  />
                  <path
                    d="M20 16H28C30.2091 16 32 17.7909 32 20V28C32 30.2091 30.2091 32 28 32H20C17.7909 32 16 30.2091 16 28V20C16 17.7909 17.7909 16 20 16ZM20 20V24H24V28H28V20H20Z"
                    fill="#022C22"
                  />
                </svg>
                <h3 className="text-xl font-medium text-teal-900 mb-2">
                  Job Opportunities
                </h3>
                <p className="text-gray-700 mb-4">
                  Join our full-time team as a developer, designer, or AI
                  specialist. Work on innovative projects with a collaborative,
                  growth-driven culture.
                </p>
                <a
                  href="/contact"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex py-2 px-4 font-medium text-teal-900 hover:text-white border border-teal-900 hover:bg-teal-900 rounded-full transition duration-200"
                >
                  Enquire Openings
                </a>
              </div>
              {/* Collaboration (B2B) Card */}
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl hover:scale-105 transition duration-200">
                <svg
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="mb-4"
                >
                  <path
                    d="M0 8C0 3.58172 3.58172 0 8 0H40C44.4183 0 48 3.58172 48 8V40C48 44.4183 44.4183 48 40 48H8C3.58172 48 0 44.4183 0 40V8Z"
                    fill="#BEF264"
                  />
                  <path
                    d="M16 24C16 20.6863 18.6863 18 22 18C25.3137 18 28 20.6863 28 24C28 27.3137 25.3137 30 22 30C18.6863 30 16 27.3137 16 24ZM20 24C20 25.1046 20.8954 26 22 26C23.1046 26 24 25.1046 24 24C24 22.8954 23.1046 22 22 22C20.8954 22 20 22.8954 20 24ZM30 24C30 20.6863 32.6863 18 36 18C39.3137 18 42 20.6863 42 24C42 27.3137 39.3137 30 36 30C32.6863 30 30 27.3137 30 24ZM34 24C34 25.1046 34.8954 26 36 26C37.1046 26 38 25.1046 38 24C38 22.8954 37.1046 22 36 22C34.8954 22 34 22.8954 34 24Z"
                    fill="#022C22"
                  />
                </svg>
                <h3 className="text-xl font-medium text-teal-900 mb-2">
                  B2B Collaboration
                </h3>
                <p className="text-gray-700 mb-4">
                  Partner with us to co-develop solutions, integrate
                  technologies, or outsource projects. Let’s innovate to build
                  the future together.
                </p>
                <Link
                  href="/contact?type=collaboration"
                  className="inline-flex py-2 px-4 font-medium text-teal-900 hover:text-white border border-teal-900 hover:bg-teal-900 rounded-full transition duration-200"
                >
                  Get in Touch
                </Link>
              </div>
            </div>
          </div>

          {/* Gallery Section */}
          <div className="mt-16">
            <h2 className="text-5xl font-heading text-teal-900 mb-12 text-center">
              Our Memories
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 border border-gray-400 rounded-2xl p-6">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className="relative h-64 rounded-2xl overflow-hidden cursor-pointer hover:scale-105 transition duration-200"
                  onClick={() => openModal(image)}
                >
                  <Image
                    src={image}
                    alt={`BharatGen Memory ${index + 1}`}
                    fill
                    style={{ objectFit: "cover" }}
                    className="rounded-2xl"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mb-16 text-center">
          <a href="/contact">
            <button className="bg-gradient-to-r from-teal-600 to-blue-500 text-white rounded-full px-8 py-4 hover:scale-105 transition-transform duration-200 flex items-center mx-auto gap-2 shadow-lg">
              Get in Touch <ArrowRight className="h-5 w-5" />
            </button>
          </a>
        </div>
        <Footer />
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative max-w-4xl w-full">
            <Image
              src={selectedImage}
              alt="Gallery Image"
              width={1200}
              height={800}
              className="rounded-lg"
              style={{ objectFit: "contain" }}
            />
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white bg-teal-900 rounded-full p-2 hover:bg-lime-500 transition duration-200"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 18L18 6M6 6L18 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-teal-900 rounded-full p-2 hover:bg-lime-500 transition duration-200"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 18L9 12L15 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-teal-900 rounded-full p-2 hover:bg-lime-500 transition duration-200"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 18L15 12L9 6"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
