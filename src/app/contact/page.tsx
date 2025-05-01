import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";


export default function Contact() {
  return (
    <section>
      <div className="flex flex-col min-h-screen">
        <Header />
        <div className="container mx-auto px-4">
          <div className="flex mb-4 items-center">
            <svg
              width="8"
              height="8"
              viewBox="0 0 9 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="4" cy="4" r="4" fill="#022C22"></circle>
            </svg>
            <span className="inline-block ml-2 text-sm font-medium text-teal-900">
              Contact
            </span>
          </div>
          <div className="border-t pt-16">
            <div className="max-w-lg mx-auto lg:max-w-none">
              <div className="flex flex-wrap -mx-4">
                <div className="w-full lg:w-1/2 px-4 mb-12 lg:mb-0">
                  <div className="max-w-lg py-7">
                    <h1 className="font-heading text-4xl sm:text-6xl tracking-sm mb-6">
                      Contact us
                    </h1>
                    <p className="text-lg text-gray-700 mb-16">
                      We are here to help you make a first move to greener
                      choice.
                    </p>
                    <form action="">
                      <label
                        className="block pl-4 mb-1 text-sm font-medium"
                        htmlFor=""
                      >
                        Full Name
                      </label>
                      <input
                        className="w-full px-4 py-3 mb-6 outline-none ring-offset-0 focus:ring-2 focus:ring-lime-500 shadow rounded-full"
                        type="text"
                      />
                      <label
                        className="block pl-4 mb-1 text-sm font-medium"
                        htmlFor=""
                      >
                        Email
                      </label>
                      <input
                        className="w-full px-4 py-3 mb-6 outline-none ring-offset-0 focus:ring-2 focus:ring-lime-500 shadow rounded-full"
                        type="text"
                      />
                      <label
                        className="block pl-4 mb-1 text-sm font-medium"
                        htmlFor=""
                      >
                        <span>Company</span>
                        <span className="text-gray-700">(optional)</span>
                      </label>
                      <input
                        className="w-full px-4 py-3 mb-6 outline-none ring-offset-0 focus:ring-2 focus:ring-lime-500 shadow rounded-full"
                        type="text"
                      />
                      <label
                        className="block pl-4 mb-1 text-sm font-medium"
                        htmlFor=""
                      >
                        Service
                      </label>
                      <div className="relative w-full mb-8 bg-white rounded-full">
                        <span className="absolute top-1/2 right-0 mr-4 transform -translate-y-1/2">
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M6.3999 8.2L9.9999 11.8L13.5999 8.2"
                              stroke="#646A69"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            ></path>
                          </svg>
                        </span>
                        <select
                          className="w-full px-4 py-3 text-gray-600 border rounded-full appearance-none cursor-pointer outline-none ring-offset-0 focus:ring-2 focus:ring-lime-500 bg-transparent relative"
                          name=""
                          id=""
                        >
                          <option value="1">Select service</option>
                          <option value="2">Sales</option>
                          <option value="3">Marketing</option>
                        </select>
                      </div>
                      <button className="flex w-full py-3 px-5 items-center justify-center font-medium text-white hover:text-teal-900 border border-teal-900 hover:border-lime-500 bg-teal-900 hover:bg-lime-500 rounded-full transition duration-200">
                        <span className="mr-2">Submit</span>
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
                          ></path>
                          <path
                            d="M10.5 4.75L15.75 10L10.5 15.25"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          ></path>
                        </svg>
                      </button>
                    </form>
                  </div>
                </div>
                <div className="w-full lg:w-1/2 px-4">
                  <div className="lg:max-w-md lg:ml-auto h-full">
                    <img
                      className="block w-full h-full"
                      src="quantam-assets/contact/photo-1.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="py-12 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-lg mx-auto md:max-w-none">
              <div className="flex flex-wrap -mx-4">
                <div className="w-full sm:w-1/2 md:w-1/3 px-4 mb-10 md:mb-0">
                  <div className="flex flex-col h-full">
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 8C0 3.58172 3.58172 0 8 0H40C44.4183 0 48 3.58172 48 8V40C48 44.4183 44.4183 48 40 48H8C3.58172 48 0 44.4183 0 40V8Z"
                        fill="#BEF264"
                      ></path>
                      <path
                        d="M11.5389 13.4152L24 23.6106L36.461 13.4152C36.3173 13.3623 36.162 13.3333 36 13.3333H12C11.8379 13.3333 11.6826 13.3623 11.5389 13.4152Z"
                        fill="#022C22"
                      ></path>
                      <path
                        d="M10.6666 16.147V33.3333C10.6666 34.0697 11.2636 34.6667 12 34.6667H36C36.7363 34.6667 37.3333 34.0697 37.3333 33.3333V16.147L24.8443 26.3653C24.3531 26.7671 23.6468 26.7671 23.1556 26.3653L10.6666 16.147Z"
                        fill="#022C22"
                      ></path>
                    </svg>
                    <span className="block mt-8 mb-1 text-2xl font-medium">
                      Email
                    </span>
                    <p className="text-gray-700 mb-auto">
                      We will reply within 2 working days
                    </p>
                    <p className="mt-8 text-lg font-medium">
                      hello@example.com
                    </p>
                  </div>
                </div>
                <div className="w-full sm:w-1/2 md:w-1/3 px-4 mb-10 md:mb-0">
                  <div className="flex flex-col h-full">
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 8C0 3.58172 3.58172 0 8 0H40C44.4183 0 48 3.58172 48 8V40C48 44.4183 44.4183 48 40 48H8C3.58172 48 0 44.4183 0 40V8Z"
                        fill="#BEF264"
                      ></path>
                      <path
                        d="M13.3333 12C12.597 12 12 12.597 12 13.3333C12 25.8518 22.1482 36 34.6667 36C35.403 36 36 35.403 36 34.6667V28.2667C36 27.6779 35.6138 27.1588 35.0498 26.9896L29.7165 25.3896C29.2466 25.2486 28.7374 25.377 28.3905 25.7239L26.8288 27.2856C24.2738 25.847 22.153 23.7262 20.7144 21.1712L22.2761 19.6095C22.623 19.2626 22.7514 18.7534 22.6104 18.2835L21.0104 12.9502C20.8412 12.3862 20.3221 12 19.7333 12H13.3333Z"
                        fill="#022C22"
                      ></path>
                    </svg>
                    <span className="block mt-8 mb-1 text-2xl font-medium">
                      Phone
                    </span>
                    <p className="text-gray-700">
                      We are available Monday-Friday
                    </p>
                    <p className="text-gray-700 mb-auto">
                      from 8 AM until 5 PM
                    </p>
                    <p className="mt-8 text-lg font-medium">(239) 555-0108</p>
                  </div>
                </div>
                <div className="w-full sm:w-1/2 md:w-1/3 px-4">
                  <div className="flex flex-col h-full">
                    <svg
                      width="48"
                      height="48"
                      viewBox="0 0 48 48"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 8C0 3.58172 3.58172 0 8 0H40C44.4183 0 48 3.58172 48 8V40C48 44.4183 44.4183 48 40 48H8C3.58172 48 0 44.4183 0 40V8Z"
                        fill="#BEF264"
                      ></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M24.7886 37.0751L24.7902 37.074L24.7926 37.0722L24.8 37.0667L24.8247 37.0483C24.8456 37.0328 24.875 37.0106 24.9126 36.9821C24.9876 36.9249 25.0948 36.8422 25.2297 36.7351C25.4994 36.5212 25.8803 36.2099 26.3353 35.8126C27.2435 35.0196 28.4568 33.876 29.6738 32.4735C32.0637 29.7193 34.6667 25.7403 34.6667 21.3333C34.6667 15.4423 29.8911 10.6667 24 10.6667C18.109 10.6667 13.3334 15.4423 13.3334 21.3333C13.3334 25.7403 15.9364 29.7193 18.3263 32.4735C19.5433 33.876 20.7566 35.0196 21.6648 35.8126C22.1198 36.2099 22.5007 36.5212 22.7704 36.7351C22.9053 36.8422 23.0125 36.9249 23.0875 36.9821C23.125 37.0106 23.1545 37.0328 23.1754 37.0483L23.2001 37.0667L23.2075 37.0722L23.2108 37.0746C23.6802 37.4189 24.3192 37.4194 24.7886 37.0751ZM23.9971 24.6667C25.8381 24.6667 27.3304 23.1743 27.3304 21.3333C27.3304 19.4924 25.8381 18 23.9971 18C22.1562 18 20.6638 19.4924 20.6638 21.3333C20.6638 23.1743 22.1562 24.6667 23.9971 24.6667Z"
                        fill="#022C22"
                      ></path>
                    </svg>
                    <span className="block mt-8 mb-1 text-2xl font-medium">
                      HQ Office
                    </span>
                    <p className="text-gray-700 mb-auto">
                      Visit us in our office
                    </p>
                    <p className="mt-8 text-lg font-medium">
                      3891 Ranchview Dr.{" "}
                    </p>
                    <p className="text-lg font-medium">
                      Richardson, California 62639
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </section>
  );
      };