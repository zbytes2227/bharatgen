"use client";
import React from "react";
import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react";
import Aboutteams from "@/components/Aboutteams";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

const AboutPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-r from-teal-600 to-cyan-500 py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-white mb-4">
              About BharatGEN Technologies
            </h1>
            <p className="text-lg sm:text-xl text-white/90 max-w-3xl mx-auto">
              Empowering the new generation of Bharat with modern, scalable, and
              innovative digital solutions.
            </p>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <h2 className="text-2xl sm:text-3xl font-heading font-semibold text-gray-900 mb-4">
                  Our Mission
                </h2>
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                  BharatGEN Technologies is a dynamic startup founded in 2023,
                  headquartered in Prayagraj, Uttar Pradesh. We are dedicated to
                  transforming the digital landscape of Bharat by providing
                  cutting-edge technology solutions that empower businesses,
                  startups, and individuals. Our mission is to build a smarter,
                  more connected future through innovative and meaningful
                  technology that drives growth and efficiency.
                </p>
              </div>
              <div className="md:w-1/2 flex justify-center h-auto">
                <Image
                  src="/quantam-assets/headers/image.png"
                  alt="Technology Innovation"
                  width={400}
                  height={240}
                  className="rounded-xl shadow-lg w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-12 md:py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl font-heading font-semibold text-gray-900 text-center mb-12">
              What We Offer
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Website Development",
                  description:
                    "We create attractive, user-friendly, and fully functional websites tailored to your business needs, designed to enhance your online presence.",
                },
                {
                  title: "App Development",
                  description:
                    "Our high-performing mobile and web applications are built to drive business growth with seamless user experiences.",
                },
                {
                  title: "ERP Softwares",
                  description:
                    "Streamline your operations with our ERP solutions, ideal for product-based shops seeking efficient process management.",
                },
                {
                  title: "Billing Softwares",
                  description:
                    "Simplify financial transactions and manage inventory with our advanced, user-friendly billing software.",
                },
                {
                  title: "IoT Solutions",
                  description:
                    "Enable smarter, connected systems with our advanced IoT technologies for seamless device communication.",
                },
                {
                  title: "IoT Automations",
                  description:
                    "Automate routine tasks to reduce manual effort and boost productivity with our innovative IoT automation systems.",
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="p-6 bg-gray-50 rounded-xl shadow-md hover:shadow-lg transition-shadow"
                >
                  <h3 className="text-lg sm:text-xl font-medium text-gray-900 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Details Section */}
        <section className="py-12 md:py-20 bg-gray-100">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl sm:text-3xl font-heading font-semibold text-gray-900 text-center mb-12">
              Who We Are
            </h2>
            <div className="flex flex-col md:flex-row gap-8 max-w-4xl mx-auto">
              <div className="flex-1 bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-lg sm:text-xl font-medium text-gray-900 mb-4">
                  Our Story
                </h3>
                <p className="text-gray-700 text-sm sm:text-base">
                  Founded in 2023, BharatGEN Technologies is a small but
                  passionate team of 2-10 professionals based in Prayagraj,
                  Uttar Pradesh. We specialize in software development, offering
                  a range of services from website and app development to ERP,
                  billing software, and IoT solutions. Our goal is to support
                  the digital journey of businesses and individuals across
                  Bharat.
                </p>
              </div>
              <div className="flex-1 bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-lg sm:text-xl font-medium text-gray-900 mb-4">
                  Contact Us
                </h3>
                <ul className="space-y-4 text-gray-700 text-sm sm:text-base">
                  <li className="flex items-center gap-2">
                    <Phone className="h-5 w-5 text-teal-600" />
                    <a href="tel:+917007939359">+91 7007939359</a>
                  </li>
                  <li className="flex items-center gap-2">
                    <Mail className="h-5 w-5 text-teal-600" />
                    <a href="mailto:info@bharatgen.com">info@bharatgen.com</a>
                  </li>
                  <li className="flex items-center gap-2">
                    <MapPin className="h-5 w-5 text-teal-600" />
                    Prayagraj, Uttar Pradesh, India
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-12 md:py-20 bg-gradient-to-r from-teal-600 to-cyan-500">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl sm:text-3xl font-heading font-semibold text-white mb-4">
              Let’s Build a Smarter Future Together
            </h2>
            <p className="text-white/90 text-sm sm:text-base max-w-2xl mx-auto mb-8">
              Join us in empowering the new generation of Bharat with innovative
              technology solutions. Contact us today to start your digital
              journey.
            </p>
            <a
              href="https://linktr.ee/BharatGen"
              className="inline-flex items-center justify-center rounded-full bg-white text-teal-600 px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base font-medium hover:bg-gray-100 transition-transform hover:scale-105"
            >
              Get in Touch
            </a>
          </div>
        </section>
        <Aboutteams />
        <Footer />
      </div>
    </div>
  );
};

export default AboutPage;
