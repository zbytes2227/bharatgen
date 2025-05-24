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
            </a>
            {/* Google Map Embed */}
            <div className="mt-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d76104.9194249187!2d81.78734558139907!3d25.58645985236922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1746536675769!5m2!1sen!2sus"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="BharatGen Location"
              ></iframe>
            </div>
          </div>
          <div className="w-full md:w-7/12 lg:w-6/12 px-4 mb-16 lg:mb-0">
            <div className="flex flex-wrap -mx-4">
              <div className="w-1/2 xs:w-1/3 px-4 mb-8 xs:mb-0 animate-fade-in-up delay-100">
                <h3 className="mb-6 text-lg font-bold text-gray-800 relative">
                  Social
                  <span className="absolute bottom-0 left-0 w-12 h-1 bg-gradient-to-r from-lime-500 to-teal-500"></span>
                </h3>
                <ul>
                  <li className="mb-2">
                    <a
                      className="inline-block text-gray-600 font-medium relative group transition duration-300"
                      href="https://www.instagram.com/bharatgen/"
                    >
                      Instagram
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-lime-500 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  </li>
                  <li className="mb-2">
                    <a
                      className="inline-block text-gray-600 font-medium relative group transition duration-300"
                      href="https://www.linkedin.com/company/bharatgen-technologie/"
                    >
                      Linked In
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-lime-500 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  </li>
                         <li className="mb-2">
                    <a
                      className="inline-block text-gray-600 font-medium relative group transition duration-300"
                      href="https://pin.it/5Kw2NHNKJ"
                    >
                      Pinterest
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-lime-500 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  </li>
                             <li className="mb-2">
                    <a
                      className="inline-block text-gray-600 font-medium relative group transition duration-300"
                      href="https://x.com/BharatGenTech"
                    >
                      Twitter
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-lime-500 transition-all duration-300 group-hover:w-full"></span>
                    </a>
                  </li>
                    <li className="mb-2">
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
        <div className="flex px-4 justify-center">
          <a
            className="text-sm ml-2 text-gray-500 mb-3"
            href="https://linktr.ee/BharatGen"
          >
            Developed with ❤️ by BharatGen Technologies
          </a>
        </div>
        <div className="flex flex-wrap justify-center -mb-3">
          <div className="flex items-center mb-3">
            <a
              className="inline-block mr-4 text-black hover:text-lime-500"
              href="https://www.facebook.com/profile.php?id=61574816939230"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_230_4832)">
                  <path
                    d="M11.5481 19.9999V10.8776H14.6088L15.068 7.32147H11.5481V5.05138C11.5481 4.02211 11.8327 3.32067 13.3104 3.32067L15.1919 3.3199V0.139138C14.8665 0.0968538 13.7496 -9.15527e-05 12.4496 -9.15527e-05C9.735 -9.15527e-05 7.87654 1.65687 7.87654 4.69918V7.32147H4.80652V10.8776H7.87654V19.9999H11.5481Z"
                    fill="currentColor"
                  />
                </g>
              </svg>
            </a>
            <a
              className="inline-block mr-4 text-black hover:text-lime-500"
              href="https://www.instagram.com/bharatgen"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.8 2H16.2C19.4 2 22 4.6 22 7.8V16.2C22 17.7383 21.3889 19.2135 20.3012 20.3012C19.2135 21.3889 17.7383 22 16.2 22H7.8C4.6 22 2 19.4 2 16.2V7.8C2 6.26174 2.61107 4.78649 3.69878 3.69878C4.78649 2.61107 6.26174 2 7.8 2ZM7.6 4C6.64522 4 5.72955 4.37928 5.05442 5.05442C4.37928 5.72955 4 6.64522 4 7.6V16.4C4 18.39 5.61 20 7.6 20H16.4C17.3548 20 18.2705 19.6207 18.9456 18.9456C19.6207 18.2705 20 17.3548 20 16.4V7.6C20 5.61 18.39 4 16.4 4H7.6ZM17.25 5.5C17.5815 5.5 17.8995 5.6317 18.1339 5.86612C18.3683 6.10054 18.5 6.41848 18.5 6.75C18.5 7.08152 18.3683 7.39946 18.1339 7.63388C17.8995 7.8683 17.5815 8 17.25 8C16.9185 8 16.6005 7.8683 16.3661 7.63388C16.1317 7.39946 16 7.08152 16 6.75C16 6.41848 16.1317 6.10054 16.3661 5.86612C16.6005 5.6317 16.9185 5.5 17.25 5.5ZM12 7C13.3261 7 14.5979 7.52678 15.5355 8.46447C16.4732 9.40215 17 10.6739 17 12C17 13.3261 16.4732 14.5979 15.5355 15.5355C14.5979 16.4732 13.3261 17 12 17C10.6739 17 9.40215 16.4732 8.46447 15.5355C7.52678 14.5979 7 13.3261 7 12C7 10.6739 7.52678 9.40215 8.46447 8.46447C9.40215 7.52678 10.6739 7 12 7ZM12 9C11.2044 9 10.4413 9.31607 9.87868 9.87868C9.31607 10.4413 9 11.2044 9 12C9 12.7956 9.31607 13.5587 9.87868 14.1213C10.4413 14.6839 11.2044 15 12 15C12.7956 15 13.5587 14.6839 14.1213 14.1213C14.6839 13.5587 15 12.7956 15 12C15 11.2044 14.6839 10.4413 14.1213 9.87868C13.5587 9.31607 12.7956 9 12 9Z"
                  fill="currentColor"
                />
              </svg>
            </a>
            <a
              className="inline-block text-black hover:text-lime-500"
              href="https://www.linkedin.com/company/bharatgen-technologie"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19 3C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 4.46957 3.21071 3.96086 3.58579 3.58579C3.96086 3.21071 4.46957 3 5 3H19ZM18.5 18.5V13.2C18.5 12.3354 18.1565 11.5062 17.5452 10.8948C16.9338 10.2835 16.1046 9.94 15.24 9.94C14.39 9.94 13.4 10.46 12.92 11.24V10.13H10.13V18.5H12.92V13.57C12.92 12.8 13.54 12.17 14.31 12.17C14.6813 12.17 15.0374 12.3175 15.2999 12.5801C15.5625 12.8426 15.71 13.1987 15.71 13.57V18.5H18.5ZM6.88 8.56C7.32556 8.56 7.75288 8.383 8.06794 8.06794C8.383 7.75288 8.56 7.32556 8.56 6.88C8.56 5.95 7.81 5.19 6.88 5.19C6.43178 5.19 6.00193 5.36805 5.68499 5.68499C5.36805 6.00193 5.19 6.43178 5.19 6.88C5.19 7.81 5.95 8.56 6.88 8.56ZM8.27 18.5V10.13H5.5V18.5H8.27Z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

