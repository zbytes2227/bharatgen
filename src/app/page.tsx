import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Services from "@/components/Services";
import Teams from "@/components/Teams";
import Plansx from "@/components/planx";
import Reviews from "@/components/Reviews";
import Image from "next/image";
import Growth from "@/components/Growth";


/**
 * Main page component that integrates Header and Footer components.
 *
 * @returns {React.ReactElement} The page component.
 */
export default function Page() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Header content */}
        <div className="relative pt-8">
          <div className="flex justify-center">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="12" height="12" rx="2" fill="#022C22"></rect>
              <circle cx="6" cy="6" r="4" fill="#BEF264"></circle>
            </svg>
            <span className="ml-2 text-teal-900 text-sm font-medium">
              Powering Tomorrow
            </span>
          </div>
          <Image
            className="hidden md:block absolute rounded-2xl m-4 mr-8 z-10 top-0 left-0 mt-28 w-32 lg:w-64 xl:w-auto"
            src="/quantam-assets/headers/header-photos-center-4.jpg"
            alt=""
            width={256}
            height={256}
          />
          <Image
            className="hidden md:block absolute rounded-2xl m-4 z-10 top-0 right-0 mt-20 w-32 lg:w-64 xl:w-auto"
            src="/quantam-assets/headers/header-photos-center-3.jpg"
            alt=""
            width={256}
            height={256}
          />

          <div className="container mx-auto px-4 relative">
            <div className="max-w-lg xl:max-w-xl mx-auto mb-12 lg:mb-0 text-center">
              <h1 className="font-heading text-gray-900 text-5xl xs:text-7xl xl:text-8xl tracking-tight mb-8 font-semibold">
                Empowering The New Generation of Bharat
              </h1>
              <p className="text-lg text-gray-700 mb-10">
                BharatGEN is a technology startup focused on empowering the new
                generation of Bharat by providing modern, scalable, and useful
                digital solutions. We offer a range of services designed to
                support businesses, startups, and individuals in their digital
                journey.
              </p>
              <div className="flex flex-col sm:flex-row justify-center">
                <a
                  className="inline-flex py-4 px-6 mb-3 sm:mb-12 sm:mr-4 items-center justify-center text-lg font-medium text-white hover:text-white border border-teal-900 hover:border-gray-800 bg-teal-900 hover:bg-teal-700 rounded-full transition duration-200"
                  href="/services"
                >
                  See our solutions
                </a>
                <a
                  className="inline-flex py-4 px-6 mb-8 sm:mb-12 items-center justify-center text-lg font-medium text-black hover:text-white border border-teal-900 hover:bg-teal-900 rounded-full transition duration-200"
                  href="/contact"
                >
                  Get in touch
                </a>
              </div>
            </div>

            {/* Bottom Images 
            <div className="flex -mx-4 items-end relative">
              <div className="w-1/3 xs:w-1/2 lg:w-auto px-4">
                <Image
                  className="block h-32 lg:h-48"
                  src="/quantam-assets/headers/header-4-bottom-lleft.png"
                  alt=""
                  width={128}
                  height={128}
                />
              </div>
              <div className="w-2/3 xs:w-1/2 lg:w-auto ml-auto px-4">
                <Image
                  className="block w-1/2 md:w-64 lg:w-auto ml-auto"
                  src="/quantam-assets/headers/header-bottom.jpg"
                  alt=""
                  width={256}
                  height={128}
                />
              </div>

              <div className="absolute bottom-0 left-0 w-full py-32 bg-gradient-to-t from-orange-50 to-transparent"></div>
            </div>*/}
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
