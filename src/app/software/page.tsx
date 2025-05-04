import React from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import {
  ArrowRight,
  Code,
  ShoppingCart,
  Users,
  FileText,
  Box,
  Briefcase,
  CreditCard,
  Database,
} from "lucide-react";

const services = [
  {
    title: "ERP Systems",
    description:
      "Streamline your business operations with our comprehensive Enterprise Resource Planning solutions.",
    icon: <Database className="h-10 w-10 text-teal-600" />,
    gradient: "from-teal-600 to-cyan-500",
  },
  {
    title: "CRM Systems",
    description:
      "Enhance customer relationships with our powerful Customer Relationship Management platforms.",
    icon: <Users className="h-10 w-10 text-teal-600" />,
    gradient: "from-teal-600 to-cyan-500",
  },
  {
    title: "Billing & Invoicing Systems",
    description:
      "Simplify your financial processes with our efficient billing and invoicing solutions.",
    icon: <FileText className="h-10 w-10 text-teal-600" />,
    gradient: "from-teal-600 to-cyan-500",
  },
  {
    title: "Inventory Management Systems",
    description:
      "Optimize your stock control with our advanced inventory management software.",
    icon: <Box className="h-10 w-10 text-teal-600" />,
    gradient: "from-teal-600 to-cyan-500",
  },
  {
    title: "HR & Payroll Systems",
    description:
      "Manage your workforce effectively with our integrated HR and payroll solutions.",
    icon: <Briefcase className="h-10 w-10 text-teal-600" />,
    gradient: "from-teal-600 to-cyan-500",
  },
  {
    title: "E-commerce Platforms",
    description:
      "Boost your online sales with our robust and scalable e-commerce solutions.",
    icon: <ShoppingCart className="h-10 w-10 text-teal-600" />,
    gradient: "from-teal-600 to-cyan-500",
  },
  {
    title: "POS Systems",
    description:
      "Enhance your retail operations with our user-friendly Point of Sale systems.",
    icon: <CreditCard className="h-10 w-10 text-teal-600" />,
    gradient: "from-teal-600 to-cyan-500",
  },
  {
    title: "Custom Business Applications",
    description:
      "Get tailor-made software solutions designed to meet your unique business needs.",
    icon: <Code className="h-10 w-10 text-teal-600" />,
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

export default function SoftwareDevelopmentServices() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-gray-50 to-gray-200">
      <Header />
      <div className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-700 mb-4 tracking-tight">
              Software Development Services
            </h1>
            <p className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto leading-relaxed">
              Empower your business with innovative, tailor-made software
              solutions designed to drive efficiency and growth.
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
