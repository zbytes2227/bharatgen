import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import {
  ArrowRight,
  Code,
  ShoppingCart,
  FileText,
  Box,
  Briefcase,
  Database,
  Globe,
  Smartphone,
  Brush,
  Cloud,
  Search,
  Lightbulb,
} from "lucide-react";

const services = [
  {
    title: "Landing Page Websites",
    description:
      "Create impactful landing pages to capture leads and drive conversions with stunning designs.",
    icon: <Globe className="h-10 w-10 text-teal-600" />,
    gradient: "from-teal-600 to-cyan-500",
  },
  {
    title: "Business Websites",
    description:
      "Develop professional websites to establish your brand and engage your audience effectively.",
    icon: <Briefcase className="h-10 w-10 text-teal-600" />,
    gradient: "from-teal-600 to-cyan-500",
  },
  {
    title: "Portfolio Websites",
    description:
      "Showcase your work with beautifully crafted portfolio websites tailored to your style.",
    icon: <FileText className="h-10 w-10 text-teal-600" />,
    gradient: "from-teal-600 to-cyan-500",
  },
  {
    title: "E-commerce Websites",
    description:
      "Build secure, scalable online stores to boost sales and enhance customer experiences.",
    icon: <ShoppingCart className="h-10 w-10 text-teal-600" />,
    gradient: "from-teal-600 to-cyan-500",
  },
  {
    title: "Web Portals",
    description:
      "Design robust web portals for seamless user interaction and data management.",
    icon: <Database className="h-10 w-10 text-teal-600" />,
    gradient: "from-teal-600 to-cyan-500",
  },
  {
    title: "Custom Web Applications",
    description:
      "Develop bespoke web applications to address your unique business challenges.",
    icon: <Code className="h-10 w-10 text-teal-600" />,
    gradient: "from-teal-600 to-cyan-500",
  },
  {
    title: "Mobile App Development (iOS & Android)",
    description:
      "Create high-performance mobile apps for iOS and Android to reach your audience on the go.",
    icon: <Smartphone className="h-10 w-10 text-teal-600" />,
    gradient: "from-teal-600 to-cyan-500",
  },
  {
    title: "Progressive Web Apps (PWAs)",
    description:
      "Deliver app-like experiences with fast, reliable, and engaging progressive web applications.",
    icon: <Globe className="h-10 w-10 text-teal-600" />,
    gradient: "from-teal-600 to-cyan-500",
  },
  {
    title: "UI/UX Design",
    description:
      "Craft intuitive and visually appealing user interfaces for exceptional user experiences.",
    icon: <Brush className="h-10 w-10 text-teal-600" />,
    gradient: "from-teal-600 to-cyan-500",
  },
  {
    title: "Website Maintenance & Support",
    description:
      "Ensure your website runs smoothly with ongoing maintenance and technical support.",
    icon: <Box className="h-10 w-10 text-teal-600" />,
    gradient: "from-teal-600 to-cyan-500",
  },
  {
    title: "API Integration & Development",
    description:
      "Seamlessly connect your systems with custom APIs for enhanced functionality.",
    icon: <Code className="h-10 w-10 text-teal-600" />,
    gradient: "from-teal-600 to-cyan-500",
  },
  {
    title: "Cloud Deployment & Hosting",
    description:
      "Deploy and host your applications on reliable, scalable cloud infrastructure.",
    icon: <Cloud className="h-10 w-10 text-teal-600" />,
    gradient: "from-teal-600 to-cyan-500",
  },
  {
    title: "SEO Optimization",
    description:
      "Boost your online visibility with tailored search engine optimization strategies.",
    icon: <Search className="h-10 w-10 text-teal-600" />,
    gradient: "from-teal-600 to-cyan-500",
  },
  {
    title: "Tech Consulting & Project Planning",
    description:
      "Leverage expert guidance to plan and execute your technology projects successfully.",
    icon: <Lightbulb className="h-10 w-10 text-teal-600" />,
    gradient: "from-teal-600 to-cyan-500",
  },
];

const ServiceCard: React.FC<{
  title: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
}> = ({ title, description, icon, gradient }) => {
  return (
    <div
      className={`relative bg-white rounded-2xl p-6 m-4 shadow-lg hover:-translate-y-3 hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center overflow-hidden group`}
    >
      <div
        className={`absolute bg-gradient-to-r ${gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
      />
      <div className="relative z-10 bg-teal-100 rounded-full p-4 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
      <a href="/contact"
        className={`mt-4 bg-gradient-to-r ${gradient} text-white px-4 py-2 rounded-full hover:scale-105 transition-transform duration-200 flex items-center gap-2`}
      >
        Contact Now <ArrowRight className="h-4 w-4" />
      </a>
    </div>
  );
};

export default function WebsiteAppDevelopmentServices() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-50 to-gray-200">
      <Header />
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-grey-700 mb-4 tracking-tight">
              Website & App Development Services
            </h1>
            <p className="text-lg md:text-xl text-grey-500 max-w-3xl mx-auto leading-relaxed">
              Elevate your digital presence with innovative, tailor-made website
              and app solutions designed to drive engagement and growth.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                gradient={service.gradient}
              />
            ))}
          </div>

          <div className="mt-16 text-center">
            <a href="/contact">
                <button className="bg-gradient-to-r from-teal-600 to-cyan-500 text-white rounded-full px-8 py-4 hover:scale-105 transition-transform duration-200 flex items-center mx-auto gap-2 shadow-lg">
                  Get a Free Consultation <ArrowRight className="h-5 w-5" />
                </button>
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
