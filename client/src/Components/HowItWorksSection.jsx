// src/components/HowItWorksSection.jsx
import React from "react";
import {
  Upload,
  Search,
  RefreshCw,
  CheckCircle,
} from "lucide-react";

const steps = [
  {
    icon: Upload,
    title: "List Your Items",
    description:
      "Upload photos and details of clothing items you no longer wear.",
    step: "01",
  },
  {
    icon: Search,
    title: "Browse & Discover",
    description:
      "Explore thousands of unique pieces from other community members.",
    step: "02",
  },
  {
    icon: RefreshCw,
    title: "Make Exchanges",
    description:
      "Connect with other users and arrange fair exchanges for items you love.",
    step: "03",
  },
  {
    icon: CheckCircle,
    title: "Enjoy Your Finds",
    description:
      "Receive your new-to-you clothing and refresh your wardrobe sustainably.",
    step: "04",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">How It Works</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Getting started with clothing exchanges is simple and straightforward
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map(({ icon: Icon, title, description, step }, idx) => (
            <div
              key={idx}
              className="relative rounded-lg shadow-md hover:shadow-lg transition-shadow bg-white"
            >
              <div className="p-8 text-center space-y-4">
                {/* Number badge */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {step}
                  </span>
                </div>

                {/* Icon */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100  mt-4">
                  <Icon className="h-8 w-8 text-green-600" />
                </div>

                {/* Text */}
                <h3 className="text-xl font-semibold">{title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
