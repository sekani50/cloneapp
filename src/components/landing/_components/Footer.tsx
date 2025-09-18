"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export function Footer() {
  const services = [
    { name: "Publishers", href: "#publishers" },
    { name: "Advertisers", href: "#advertisers" },
    { name: "Social Media", href: "#social-media" },
    { name: "Direct Mail", href: "#direct-mail" },
    { name: "Other Services", href: "#other-services" },
  ];

  return (
    <footer className="bg-[#000000] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="animate-fade-in-up">
            <h3 className="text-xl font-bold mb-6">Connect With Us</h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#ff001c]" />
                <span>561-432-0075</span>
              </div>

              {/* Address */}
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#ff001c]" />
                <div>
                  <div>1850 Forest Hill Blvd.</div>
                  <div>Lake Clarke Shores, FL 33406</div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#ff001c]" />
                <Link
                  href="mailto:info@jrwa.com"
                  className="hover:text-[#ff001c] transition-colors duration-200"
                >
                  Click here to email us
                </Link>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="animate-fade-in-up animate-delay-200">
            <h3 className="text-xl font-bold mb-6">Services</h3>
            <nav className="space-y-3">
              {services.map((service) => (
                <a
                  key={service.name}
                  href={service.href}
                  className="block text-gray-300 hover:text-[#ff001c] transition-colors duration-200"
                >
                  {service.name}
                </a>
              ))}
            </nav>
          </div>

          {/* About Us */}
          <div className="animate-fade-in-up animate-delay-400">
            <h3 className="text-xl font-bold mb-6">About Us</h3>
            <p className="text-gray-300 leading-relaxed">
              In 2004, James Whelan founded The JRWA from his office at home
              with a vision to build a media empire. In the years since, the
              company has continued to grow steadily in our sales, traffic,
              media and internal support departments. Our staff has well over a
              century of combined global marketing experience and we are always
              surrounding ourselves with those who can help our marketing IQ
              grow.{" "}
              <a
                href="#about"
                className="text-[#ff001c] hover:text-red-400 transition-colors duration-200"
              >
                LEARN MORE...
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-400 space-y-4">
            <p>
              Copyright © 2025 The James R. Whelan Agency. All Rights Reserved.
            </p>
            <div className="flex justify-center space-x-4 text-sm">
              <a
                href="#terms"
                className="hover:text-[#ff001c] transition-colors duration-200"
              >
                Terms & Conditions
              </a>
              <span>|</span>
              <a
                href="#privacy"
                className="hover:text-[#ff001c] transition-colors duration-200"
              >
                Privacy Policy
              </a>
            </div>
            <div className="text-xs leading-relaxed max-w-6xl mx-auto">
              <p>
                Earnings and income representations made by The James R Whelan
                Agency and its Agents and Associates, and their
                advertisers/sponsors (collectively, "The James R Whelan Agency")
                are aspirational statements only of your earnings potential. The
                success of all coaches, ads, testimonials, and other examples
                used are exceptional, non-typical results and are not intended
                to be and are not a guarantee that you or others will achieve
                the same results. Individual results will always vary and yours
                will depend entirely on your individual capacity, work ethic,
                business skills and experience, level of motivation, diligence
                in applying programs, the economy, the normal and unforeseen
                risks of doing business, and other factors The James R Whelan
                Agency and its owners individually, are not responsible for your
                actions. You are solely responsible for your own moves and
                decisions and the evaluation and use of our products and
                services should be based on your own due diligence. You agree
                that The James R Whelan Agency is not liable to you in any way
                for your results in using our products and services. See our
                Terms of Service for our full disclaimer of liability and other
                restrictions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
