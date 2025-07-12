// src/components/HeroSection.jsx
import React from "react";
import { Recycle, ArrowRight, Heart } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-50 to-emerald-50" />

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-green-100 px-4 py-2 rounded-full text-sm font-medium text-green-700 ">
            <Recycle className="h-4 w-4" />
            <span>Sustainable Fashion Exchange</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold tracking-tight">
            Give Your Clothes a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">
              Second Life
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground font-regular max-w-3xl mx-auto leading-relaxed text-gray-500">
            Join thousands of fashion lovers exchanging unused clothing items. Refresh your wardrobe sustainably while
            helping others discover amazing pieces.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <a
              href="/start-swapping"
              className="inline-flex items-center justify-center text-lg px-10 py-6 h-auto rounded-md bg-black hover:bg-gray-900 text-white transition"
            >
              Start Swapping
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>

            <a
              href="/browse"
              className="inline-flex items-center justify-center text-lg px-8 py-6 h-auto rounded-md border border-green-600 text-green-600 hover:bg-green-50 dark:hover:bg-green-900/20 transition"
            >
              Browse Items
            </a>

            <a
              href="/list-item"
              className="inline-flex items-center justify-center text-lg px-8 py-6 h-auto rounded-md bg-emerald-600 hover:bg-emerald-700 text-white transition"
            >
              List an Item
              <Heart className="ml-2 h-5 w-5" />
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-16 text-center">
            <div>
              <div className="text-3xl font-bold text-green-600">50K+</div>
              <div className="text-muted-foreground">Items Exchanged</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600">25K+</div>
              <div className="text-muted-foreground">Happy Members</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600">100%</div>
              <div className="text-muted-foreground">Sustainable</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
