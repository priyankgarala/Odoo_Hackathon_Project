// src/components/Header.jsx
import React, { useState } from "react";
import { Shirt, Menu, X } from "lucide-react";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  /* -------------------------------------------------- */
  /* Helper component for nav links                     */
  /* -------------------------------------------------- */
  const NavLink = ({ href, children }) => (
    <a
      href={href}
      className="text-sm font-medium hover:text-primary transition-colors"
      onClick={() => setMobileOpen(false)} // close menu on click (mobile)
    >
      {children}
    </a>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 flex h-16 items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-2">
          <Shirt className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">SwapStyle</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center space-x-6">
          <NavLink href="/browse">Browse Items</NavLink>
          <NavLink href="/how-it-works">How It Works</NavLink>
          <NavLink href="/about">About</NavLink>
          <NavLink href="/contact">Contact</NavLink>
        </nav>

        {/* Desktop auth buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <a
            href="/login"
            className="px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            Login
          </a>
          <a
            href="/signup"
            className="px-4 py-2 rounded-md bg-primary text-white hover:bg-primary/90 transition"
          >
            Sign Up
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          onClick={() => setMobileOpen(true)}
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 bg-black/50 md:hidden">
          {/* Drawer panel */}
          <div className="absolute top-0 right-0 w-64 h-full bg-background shadow-lg p-6 flex flex-col">
            {/* Close button */}
            <button
              className="self-end mb-6 inline-flex items-center justify-center w-8 h-8 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition"
              onClick={() => setMobileOpen(false)}
            >
              <X className="h-5 w-5" />
            </button>

            <div className="flex flex-col space-y-4">
              <NavLink href="/browse">Browse Items</NavLink>
              <NavLink href="/how-it-works">How It Works</NavLink>
              <NavLink href="/about">About</NavLink>
              <NavLink href="/contact">Contact</NavLink>

              <div className="flex flex-col space-y-2 pt-6">
                <a
                  href="/login"
                  className="px-4 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition text-left"
                >
                  Login
                </a>
                <a
                  href="/signup"
                  className="px-4 py-2 rounded-md bg-primary text-white hover:bg-primary/90 transition text-left"
                >
                  Sign Up
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
