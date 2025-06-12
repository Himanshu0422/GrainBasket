"use client";

import { Sun, CheckCircle, MapPin, Users } from "lucide-react";

const features = [
  {
    icon: <Sun className="h-8 w-8 text-gray-400 mb-4" />,
    title: "Freshly Milled Daily",
    description:
      "Ground fresh every day to ensure maximum nutrition and flavor",
  },
  {
    icon: <CheckCircle className="h-8 w-8 text-gray-400 mb-4" />,
    title: "No Preservatives",
    description: "100% natural flour with no artificial additives or chemicals",
  },
  {
    icon: <MapPin className="h-8 w-8 text-gray-400 mb-4" />,
    title: "Locally Sourced Grains",
    description: "Premium quality grains sourced from trusted local farmers",
  },
  {
    icon: <Users className="h-8 w-8 text-gray-400 mb-4" />,
    title: "Trusted by Community",
    description:
      "Serving local households and small businesses with reliability",
  },
];

const WhyChooseUsSection = () => {
  return (
    <section className="py-24 px-6 bg-white" id="why-choose-us">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-5xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
        <p className="text-gray-600 text-lg mb-16">
          Experience the difference with our commitment to quality and freshness
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mt-24">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="justify-center flex">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
