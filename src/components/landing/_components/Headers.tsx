"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#" },
    { name: "Publishers", href: "#publishers" },
    { name: "Advertisers", href: "#advertisers" },
    { name: "Social Media", href: "#social-media" },
    { name: "Direct Mail", href: "#direct-mail" },
    { name: "Other Services", href: "#other-services" },
    { name: "About Us", href: "#about" },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Image
            src="https://thejrwa.com/wp-content/uploads/2022/10/logo-768x295.png"
            width={150}
            height={70}
            alt="logo"
          />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-black hover:text-[#ff001c] transition-colors  duration-200 font-semibold"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-6">
            <Button className="bg-[#ff001c] h-12 hover:bg-red-600 text-white px-6 py-2 rounded-none transition-colors duration-200">
              Connect With Us
            </Button>
            <Phone className="w-5 h-5 text-gray-600" />
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-[#ff001c] transition-colors duration-200 font-medium px-2 py-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <Button className="bg-[#ff001c] hover:bg-red-600 rounded-none h-12 text-white mt-4 w-full">
                Connect With Us
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
