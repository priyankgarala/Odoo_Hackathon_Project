// src/components/Footer.jsx
import React from "react";
import {
  Shirt,
  Facebook,
  Twitter,
  Instagram,
  Mail,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-16">
        <div className=" grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & description */}
          <div className="space-y-4">
            <a href="/" className="flex items-center space-x-2">
              <Shirt className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold">SwapStyle</span>
            </a>
            <p className="text-muted-foreground">
              The sustainable fashion platform where your unused clothes find new homes.
            </p>

            {/* Social Icons */}
            <div className="flex space-x-2">
              <button className="inline-flex items-center justify-center w-10 h-10 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition">
                <Facebook className="h-4 w-4" />
              </button>
              <button className="inline-flex items-center justify-center w-10 h-10 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition">
                <Twitter className="h-4 w-4" />
              </button>
              <button className="inline-flex items-center justify-center w-10 h-10 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition">
                <Instagram className="h-4 w-4" />
              </button>
              <button className="inline-flex items-center justify-center w-10 h-10 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition">
                <Mail className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Platform Links */}
          <div>
            <h3 className="font-semibold mb-4">Platform</h3>
            <div className="space-y-2">
              <a href="/browse" className="block text-sm text-muted-foreground hover:text-foreground">
                Browse Items
              </a>
              <a href="/list-item" className="block text-sm text-muted-foreground hover:text-foreground">
                List an Item
              </a>
              <a href="/how-it-works" className="block text-sm text-muted-foreground hover:text-foreground">
                How It Works
              </a>
              <a href="/categories" className="block text-sm text-muted-foreground hover:text-foreground">
                Categories
              </a>
            </div>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="font-semibold mb-4">Support</h3>
            <div className="space-y-2">
              <a href="/help" className="block text-sm text-muted-foreground hover:text-foreground">
                Help Center
              </a>
              <a href="/safety" className="block text-sm text-muted-foreground hover:text-foreground">
                Safety Guidelines
              </a>
              <a href="/contact" className="block text-sm text-muted-foreground hover:text-foreground">
                Contact Us
              </a>
              <a href="/faq" className="block text-sm text-muted-foreground hover:text-foreground">
                FAQ
              </a>
            </div>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <div className="space-y-2">
              <a href="/privacy" className="block text-sm text-muted-foreground hover:text-foreground">
                Privacy Policy
              </a>
              <a href="/terms" className="block text-sm text-muted-foreground hover:text-foreground">
                Terms of Service
              </a>
              <a href="/cookies" className="block text-sm text-muted-foreground hover:text-foreground">
                Cookie Policy
              </a>
              <a href="/community-guidelines" className="block text-sm text-muted-foreground hover:text-foreground">
                Community Guidelines
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
      </div>
        <div className="border-t p-8 text-center text-sm text-muted-foreground">
          <p>
            &copy; 2024 SwapStyle. All rights reserved. Made with ❤️ for sustainable fashion.
          </p>
        </div>
    </footer>
  );
}
