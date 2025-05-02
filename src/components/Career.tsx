import React from "react";

interface TopicCardProps {
  title: string;
  description: string;
  icon: string;
}

const TopicCard: React.FC<TopicCardProps> = ({ title, description, icon }) => {
  return (
    <div className="relative bg-white rounded-xl shadow-xl p-4 m-4 transform transition duration-500 hover:scale-105 hover:shadow-2xl flex flex-col items-center text-center border-2 border-transparent bg-clip-padding hover:border-blue-200">
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-100 to-purple-100 opacity-0 hover:opacity-10 transition-opacity duration-300"></div>
      <div className="text-5xl mb-4 text-blue-600">{icon}</div>
      <h2 className="text-2xl font-bold text-gray-900 mb-3">{title}</h2>
      <p className="text-gray-600 mb-5 text-base leading-relaxed">
        {description}
      </p>
      <a
        href="/contact"
        className="bg-gradient-to-r from-teal-800 to-blue-900 text-white font-heading py-2 px-6 rounded-full hover:bg-blue-700 hover:shadow-lg transition duration-300 transform hover:-translate-y-1"
      >
        Contact Now
      </a>
    </div>
  );
};

const Career: React.FC = () => {
  const topics = [
    {
      title: "ERP and Billing Software",
      description:
        "Streamline your business operations with integrated ERP and billing solutions. Manage finances, inventory, and customer relationships.",
      icon: "📊",
    },
    {
      title: "IoT Automation Solutions",
      description:
        "Transform your environment with IoT automation. Connect devices, optimize processes, and gain real-time insights for smarter decision-making.",
      icon: "🌐",
    },
    {
      title: "Digital Identity and Academic Tools",
      description:
        "Secure digital identities and empower learning with innovative academic tools. Ensure privacy and enhance educational experiences.",
      icon: "🛡️",
    },
    {
      title: "Internship Opportunities",
      description:
        "Kickstart your career with hands-on internships. Gain practical experience, build skills, and connect with industry professionals.",
      icon: "🚀",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-50 to-gray-200 min-h-screen py-16">
      <h1 className="text-5xl font-heading text-center text-gray-900 mb-12 mt-4 tracking-tight">
        Explore Our Solutions
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto px-4">
        {topics.map((topic, index) => (
          <TopicCard
            key={index}
            title={topic.title}
            description={topic.description}
            icon={topic.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default Career;
