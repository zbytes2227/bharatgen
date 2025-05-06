
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Image from "next/image";

export default function Community() {
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
                  Community
                </span>
              </div>
              <h1 className="font-heading text-4xl sm:text-6xl tracking-tight text-teal-900 mb-6">
                Join the Code Crafters Community
              </h1>
              <p className="text-lg text-gray-700 mb-8">
                Welcome to Code Crafters, a vibrant hub for students to collaborate, innovate, and explore the world of coding. Share ideas, build projects, and grow together!
              </p>
              <a
                href="https://fgpcodecrafters.site/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex py-3 px-6 items-center justify-center font-medium text-white hover:text-teal-900 border border-teal-900 hover:border-lime-500 bg-teal-900 hover:bg-lime-500 rounded-full shadow transition duration-200"
              >
                <span className="mr-2">Explore Now</span>
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
              </a>
            </div>
            <div className="w-full lg:w-1/3 relative h-80 lg:h-96">
              <Image
                className="rounded-2xl"
                src="/quantam-assets/headers/community.jpg"
                alt="Code Crafters Community"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>

          {/* Community Highlights */}
          <div className="border-t pt-16">
            <h2 className="text-3xl font-heading text-teal-900 mb-12 text-center">
              Why Join Our Community?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Card 1: Collaboration */}
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-200">
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
                    d="M24 16C27.3137 16 30 18.6863 30 22C30 25.3137 27.3137 28 24 28C20.6863 28 18 25.3137 18 22C18 18.6863 20.6863 16 24 16ZM24 20C22.8954 20 22 21.1046 22 22C22 22.8954 22.8954 24 24 24C25.1046 24 26 22.8954 26 22C26 21.1046 25.1046 20 24 20ZM36 16C39.3137 16 42 18.6863 42 22C42 25.3137 39.3137 28 36 28C32.6863 28 30 25.3137 30 22C30 18.6863 32.6863 16 36 16ZM36 20C34.8954 20 34 21.1046 34 22C34 22.8954 34.8954 24 36 24C37.1046 24 38 22.8954 38 22C38 21.1046 37.1046 20 36 20ZM12 16C15.3137 16 18 18.6863 18 22C18 25.3137 15.3137 28 12 28C8.68629 28 6 25.3137 6 22C6 18.6863 8.68629 16 12 16ZM12 20C10.8954 20 10 21.1046 10 22C10 22.8954 10.8954 24 12 24C13.1046 24 14 22.8954 14 22C14 21.1046 13.1046 20 12 20Z"
                    fill="#022C22"
                  />
                </svg>
                <h3 className="text-xl font-medium text-teal-900 mb-2">
                  Collaborate
                </h3>
                <p className="text-gray-700">
                  Work with passionate students to brainstorm ideas, tackle challenges, and build innovative projects.
                </p>
              </div>
              {/* Card 2: Learn */}
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-200">
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
                    d="M24 12C28.4183 12 32 15.5817 32 20C32 24.4183 28.4183 28 24 28C19.5817 28 16 24.4183 16 20C16 15.5817 19.5817 12 24 12ZM24 16C21.7909 16 20 17.7909 20 20C20 22.2091 21.7909 24 24 24C26.2091 24 28 22.2091 28 20C28 17.7909 26.2091 16 24 16ZM36 12C40.4183 12 44 15.5817 44 20C44 24.4183 40.4183 28 36 28C31.5817 28 28 24.4183 28 20C28 15.5817 31.5817 12 36 12ZM36 16C33.7909 16 32 17.7909 32 20C32 22.2091 33.7909 24 36 24C38.2091 24 40 22.2091 40 20C40 17.7909 38.2091 16 36 16Z"
                    fill="#022C22"
                  />
                </svg>
                <h3 className="text-xl font-medium text-teal-900 mb-2">Learn</h3>
                <p className="text-gray-700">
                  Dive into coding with hands-on projects, tutorials, and mentorship from experienced peers.
                </p>
              </div>
              {/* Card 3: Innovate */}
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-200">
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
                    d="M24 14C29.5228 14 34 18.4772 34 24C34 29.5228 29.5228 34 24 34C18.4772 34 14 29.5228 14 24C14 18.4772 18.4772 14 24 14ZM24 18C20.6863 18 18 20.6863 18 24C18 27.3137 20.6863 30 24 30C27.3137 30 30 27.3137 30 24C30 20.6863 27.3137 18 24 18Z"
                    fill="#022C22"
                  />
                </svg>
                <h3 className="text-xl font-medium text-teal-900 mb-2">
                  Innovate
                </h3>
                <p className="text-gray-700">
                  Create cutting-edge solutions and showcase your projects to a global community of coders.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <h2 className="text-3xl font-heading text-teal-900 mb-6">
              Ready to Code with Us?
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
              Become part of a dynamic community where creativity meets technology. Join Code Crafters today and start building the future!
            </p>
            <a
              href="https://fgpcodecrafters.site/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex py-3 px-6 items-center justify-center font-medium text-white hover:text-teal-900 border border-teal-900 hover:border-lime-500 bg-teal-900 hover:bg-lime-500 rounded-full shadow transition duration-200"
            >
              <span className="mr-2">Join the Community</span>
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
            </a>
          </div>
        </div>
        <Footer />
      </div>
    </section>
  );
}