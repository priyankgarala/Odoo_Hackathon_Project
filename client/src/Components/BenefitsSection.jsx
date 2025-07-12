// src/components/BenefitsSection.jsx
import React from "react";
import {
  Recycle,
  DollarSign,
  Users,
  Leaf,
  ShoppingBag,
  Heart,
} from "lucide-react";

const benefits = [
  {
    icon: Recycle,
    title: "Sustainable Fashion",
    description:
      "Reduce textile waste by giving clothes a second life instead of throwing them away.",
  },
  {
    icon: DollarSign,
    title: "Save Money",
    description:
      "Get quality clothing at a fraction of retail price through our exchange system.",
  },
  {
    icon: Users,
    title: "Community Driven",
    description:
      "Connect with like-minded fashion enthusiasts in your local area.",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description:
      "Reduce your carbon footprint by participating in the circular economy.",
  },
  {
    icon: ShoppingBag,
    title: "Unique Finds",
    description:
      "Discover one-of-a-kind pieces you won't find in regular stores.",
  },
  {
    icon: Heart,
    title: "Feel Good",
    description:
      "Make a positive impact while refreshing your wardrobe guilt-free.",
  },
];

export default function BenefitsSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Why Choose SwapStyle?</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join the sustainable fashion revolution and enjoy these amazing benefits
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="rounded-lg shadow-md hover:shadow-lg transition-shadow bg-white p-8 text-center space-y-4"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 ">
                  <Icon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold">{benefit.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
