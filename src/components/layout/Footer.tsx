"use client";

/**
 * Footer component that displays the footer section.
 *
 * @returns {React.ReactElement}
 */
export default function Footer(): React.ReactElement {
  return (
    <footer className="relative py-12 lg:py-24 bg-orange-50 overflow-hidden">
      <img
        className="absolute bottom-0 left-0"
        src="quantam-assets/footer/waves-lines-left-bottom.png"
        alt=""
      />
      <div className="container px-4 mx-auto relative">
        <div className="flex flex-wrap mb-16 -mx-4">
          <div className="w-full lg:w-2/12 xl:w-2/12 px-4 mb-16 lg:mb-0">
            <a className="inline-block mb-4" href="/ ">
              <img src="/images/logo.png" alt="Bharat Gen" className="h-18 " />
              <span className="text-center text-teal-900 text-sm font-medium">
                Saptrishi Mandal Shivgarh Soraon, Prayagraj, Prayagraj, Uttar
                Pradesh 212502, IN
              </span>
              <br></br>
            </a>
          </div>
          <div className="w-full md:w-7/12 lg:w-6/12 px-4 mb-16 lg:mb-0">
            <div className="flex flex-wrap -mx-4">
              <div className="w-1/2 xs:w-1/3 px-4 mb-8 xs:mb-0 animate-fade-in-up delay-100">
                <h3 className="mb-6 text-lg font-bold text-gray-800 relative">
                  Social
                  <span className="absolute bottom-0 left-0 w-12 h-1 bg-gradient-to-r from-lime-500 to-teal-500"></span>
                </h3>
                <ul>
                  <li className="mb-4">
                    <a
                      className="inline-block text-gray-600 font-medium relative group transition duration-300"
                      href="https://www.instagram.com/bharatgen/"
                    >
                      Instagram
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-lime-500 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      className="inline-block text-gray-600 font-medium relative group transition duration-300"
                      href="https://www.linkedin.com/company/bharatgen-technologie/"
                    >
                      Linked In
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-lime-500 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="inline-block text-gray-600 font-medium relative group transition duration-300"
                      href="https://linktr.ee/BharatGen"
                    >
                      Link Tree
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-lime-500 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-1/2 xs:w-1/3 px-4 mb-8 xs:mb-0 animate-fade-in-up delay-200">
                <h3 className="mb-6 text-lg font-bold text-gray-800 relative">
                  Resources
                  <span className="absolute bottom-0 left-0 w-12 h-1 bg-gradient-to-r from-lime-500 to-teal-500"></span>
                </h3>
                <ul>
                  <li className="mb-4">
                    <a
                      className="inline-block text-gray-600 font-medium relative group transition duration-300"
                      href="#"
                    >
                      Blog
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-lime-500 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      className="inline-block text-gray-600 font-medium relative group transition duration-300"
                      href="#"
                    >
                      Help Center
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-lime-500 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="inline-block text-gray-600 font-medium relative group transition duration-300"
                      href="#"
                    >
                      Support
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-lime-500 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full xs:w-1/3 px-4 animate-fade-in-up delay-300">
                <h3 className="mb-6 text-lg font-bold text-gray-800 relative">
                  Company
                  <span className="absolute bottom-0 left-0 w-12 h-1 bg-gradient-to-r from-lime-500 to-teal-500"></span>
                </h3>
                <ul>
                  <li className="mb-4">
                    <a
                      className="inline-block text-gray-600 font-medium relative group transition duration-300"
                      href="/about"
                    >
                      About
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-lime-500 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      className="inline-block text-gray-600 font-medium relative group transition duration-300"
                      href="/services"
                    >
                      Services
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-lime-500 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      className="inline-block text-gray-600 font-medium relative group transition duration-300"
                      href="/projects"
                    >
                      Projects
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-lime-500 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  </li>
                  <li>
                    <a
                      className="inline-block text-gray-600 font-medium relative group transition duration-300"
                      href="#"
                    >
                      Contact
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-lime-500 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-full md:w-5/12 lg:w-4/12 px-4">
            <div className="max-w-sm p-8 bg-teal-900 rounded-2xl mx-auto md:mr-0">
              <h5 className="text-xl font-medium text-white mb-4">
                Build Your Online Presence
              </h5>
              <p className="text-sm text-white opacity-80 leading-normal mb-10">
                Partner with us to design, build, and launch a stunning website
                that sets your brand apart. Get expert insights and support
                every step of the way.
              </p>
              <div className="flex flex-col">
                <input
                  className="h-12 w-full px-4 py-1 text-sm text-gray-800 bg-white border border-gray-300 placeholder-gray-700 outline-none ring-offset-0 focus:ring-2 focus:ring-lime-500 shadow rounded-full"
                  type="email"
                  placeholder="Your e-mail..."
                />
                <a
                  className="h-12 inline-flex mt-3 py-1 px-5 items-center justify-center font-medium text-teal-900 border border-lime-500 hover:border-white bg-lime-500 hover:bg-white rounded-full transition duration-200"
                  href="#"
                >
                  Get in touch
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap -mb-3"></div>
        <div className="flex px-4 justify-center">
          <a
            className="text-sm ml-2 text-gray-500 mb-3"
            href="https://linktr.ee/BharatGen"
          >
            Developed with ❤️ by BharatGen Technologies
          </a>
        </div>
      </div>
    </footer>
  );
}
