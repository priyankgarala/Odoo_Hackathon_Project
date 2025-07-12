// src/components/FeaturedCarousel.jsx
import React, { useState, useEffect } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Star,
  MapPin,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Static demo data – replace with real API data if you have one     */
/* ------------------------------------------------------------------ */
const featuredItems = [
  {
    id: 1,
    title: "Vintage Denim Jacket",
    description: "Classic 90s style denim jacket in excellent condition",
    image: "/placeholder.svg?height=400&width=300",
    size: "M",
    brand: "Levi's",
    condition: "Like New",
    location: "New York, NY",
    rating: 4.8,
    category: "Outerwear",
  },
  {
    id: 2,
    title: "Floral Summer Dress",
    description: "Beautiful floral print dress perfect for summer occasions",
    image: "/placeholder.svg?height=400&width=300",
    size: "S",
    brand: "Zara",
    condition: "Excellent",
    location: "Los Angeles, CA",
    rating: 4.9,
    category: "Dresses",
  },
  {
    id: 3,
    title: "Designer Leather Boots",
    description: "Genuine leather ankle boots with minimal wear",
    image: "/placeholder.svg?height=400&width=300",
    size: "8",
    brand: "Dr. Martens",
    condition: "Very Good",
    location: "Chicago, IL",
    rating: 4.7,
    category: "Shoes",
  },
  {
    id: 4,
    title: "Cashmere Sweater",
    description: "Luxurious cashmere sweater in neutral beige",
    image: "/placeholder.svg?height=400&width=300",
    size: "L",
    brand: "Uniqlo",
    condition: "Like New",
    location: "Seattle, WA",
    rating: 4.9,
    category: "Knitwear",
  },
  {
    id: 5,
    title: "Silk Blouse",
    description: "Elegant silk blouse perfect for professional settings",
    image: "/placeholder.svg?height=400&width=300",
    size: "M",
    brand: "Banana Republic",
    condition: "Excellent",
    location: "Miami, FL",
    rating: 4.6,
    category: "Tops",
  },
];

/* ------------------------------------------------------------------ */
/*  Component                                                         */
/* ------------------------------------------------------------------ */
export default function FeaturedCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  /* ----- 1️⃣  Adjust items per view on resize --------------------- */
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) setItemsPerView(1);
      else if (window.innerWidth < 1024) setItemsPerView(2);
      else setItemsPerView(3);
    };
    handleResize();                       // initial call
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* ----- 2️⃣  Carousel controls ----------------------------------- */
  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev + itemsPerView >= featuredItems.length ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? Math.max(0, featuredItems.length - itemsPerView) : prev - 1
    );
  };

  /* ----- 3️⃣  Slice + wrap visible items -------------------------- */
  const visibleItems = featuredItems.slice(
    currentIndex,
    currentIndex + itemsPerView
  );
  if (visibleItems.length < itemsPerView) {
    visibleItems.push(
      ...featuredItems.slice(0, itemsPerView - visibleItems.length)
    );
  }

  /* ----- 4️⃣  Render --------------------------------------------- */
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">Featured Items</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover amazing clothing pieces from our community members
          </p>
        </div>

        {/* Controls */}
        <div className="relative">
          <div className="flex items-center justify-between mb-8">
            <div className="flex space-x-2">
              <button
                onClick={prevSlide}
                className="inline-flex items-center justify-center h-10 w-10 rounded-md border border-gray-300 bg-transparent hover:bg-gray-100  transition"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <button
                onClick={nextSlide}
                className="inline-flex items-center justify-center h-10 w-10 rounded-md border border-gray-300 bg-transparent hover:bg-gray-100 transition"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>

            <a
              href="/browse"
              className="inline-flex items-center px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-100  transition"
            >
              View All Items
            </a>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {visibleItems.map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className="overflow-hidden rounded-lg border bg-white hover:shadow-lg transition-shadow"
              >
                {/* Image + category badge */}
                <div className="relative">
                  <img
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    width={300}
                    height={400}
                    className="w-full h-64 object-cover"
                  />
                  <span className="absolute top-3 left-3 bg-green-600 text-white text-xs px-2 py-1 rounded">
                    {item.category}
                  </span>
                </div>

                {/* Card body */}
                <div className="p-6 space-y-3">
                  {/* Title / description */}
                  <div>
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>

                  {/* Brand & size */}
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-medium">{item.brand}</span>
                    <span className="px-2 py-0.5 bg-gray-200  rounded text-xs">
                      Size {item.size}
                    </span>
                  </div>

                  {/* Condition & rating */}
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">
                      {item.condition}
                    </span>
                    <span className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span>{item.rating}</span>
                    </span>
                  </div>

                  {/* Location */}
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 mr-1" />
                    {item.location}
                  </div>

                  <button className="w-full mt-4 inline-flex items-center justify-center rounded-md bg-green-600 hover:bg-green-700 text-white px-4 py-2 transition">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
