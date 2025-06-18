"use client";
import {
  MapPin,
  Instagram,
  MessageCircle,
  Mail,
  Phone,
  Award,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(true);
    setEmail("");
    setTimeout(() => setShowSuccess(false), 3000);
  };

  return (
    <footer className="bg-gradient-to-br from-stone-800 to-stone-800/90 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 text-6xl">🌲</div>
        <div className="absolute top-32 right-20 text-4xl">⭐</div>
        <div className="absolute bottom-20 left-1/4 text-5xl">🏕️</div>
        <div className="absolute bottom-10 right-10 text-3xl">🌙</div>
      </div>

      {/* Newsletter Section */}
      <div className="border-b border-white/20 relative z-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
              Join the CampHaven Adventure Club
            </h3>
            <p className="text-lg text-white/80 max-w-2xl mx-auto font-poppins">
              Get exclusive access to our Nature Escape Guide, ₹500 off your
              first booking, and insider tips from fellow adventurers
            </p>
          </div>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email for adventure updates"
              className="flex-1 px-6 py-4 rounded-2xl text-stone border-0 focus:outline-none focus:ring-2 focus:ring-coral placeholder:text-stone/60 font-poppins"
              required
            />
            <Button
              type="submit"
              className="bg-moss h-max hover:bg-moss/90 px-8 py-4 rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Get Guide + Voucher
            </Button>
          </form>
          {showSuccess && (
            <div className="text-center mt-4 bg-moss/20 border border-moss/40 rounded-2xl p-4 max-w-lg mx-auto">
              <p className="text-moss font-semibold">
                🎉 Welcome to the adventure club! Check your email for your
                guide.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 relative z-10">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <h4 className="text-3xl font-playfair font-bold mb-4">CampHaven</h4>
            <p className="text-white/80 mb-6 font-poppins leading-relaxed text-lg">
              Where adventure meets comfort, creating unforgettable experiences
              in nature&apos;s embrace. Escape ordinary, sleep under stars, wake up
              to wilderness.
            </p>
            <div className="flex items-center space-x-3 text-white/80 mb-4">
              <MapPin className="w-5 h-5 text-coral" />
              <span className="font-poppins">
                Sahyadri Mountains, Maharashtra, India
              </span>
            </div>

            {/* Certifications */}
            <div className="flex flex-wrap gap-3 mt-6">
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Award className="w-4 h-4 text-moss" />
                <span className="text-sm font-semibold">Eco-Certified</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2">
                <Award className="w-4 h-4 text-coral" />
                <span className="text-sm font-semibold">
                  Travel Awards 2024
                </span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h5 className="font-bold mb-6 text-xl font-playfair">
              Quick Links
            </h5>
            <ul className="space-y-3 text-white/80">
              <li>
                <a
                  href="#accommodations"
                  className="hover:text-coral transition-colors font-poppins hover:underline"
                >
                  Accommodations
                </a>
              </li>
              <li>
                <a
                  href="#experiences"
                  className="hover:text-coral transition-colors font-poppins hover:underline"
                >
                  Adventures
                </a>
              </li>
              <li>
                <a
                  href="#timeline"
                  className="hover:text-coral transition-colors font-poppins hover:underline"
                >
                  Your Day
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="hover:text-coral transition-colors font-poppins hover:underline"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="#packages"
                  className="hover:text-coral transition-colors font-poppins hover:underline"
                >
                  Packages
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div>
            <h5 className="font-bold mb-6 text-xl font-playfair">
              Get in Touch
            </h5>
            <div className="space-y-4 text-white/80">
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-moss" />
                <div>
                  <p className="font-semibold font-poppins">Phone</p>
                  <p className="font-poppins">+91 98765 43210</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-moss" />
                <div>
                  <p className="font-semibold font-poppins">Email</p>
                  <p className="font-poppins">hello@camphaven.com</p>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4 mt-6">
                <a
                  href="#"
                  className="bg-white/10 hover:bg-coral p-3 rounded-full transition-colors duration-300"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="bg-white/10 hover:bg-green-600 p-3 rounded-full transition-colors duration-300"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-16 pt-8 border-t border-white/20">
          <Button className="bg-moss h-max hover:bg-moss/90 text-white px-10 py-4 rounded-2xl text-lg mb-8 font-bold shadow-xl hover:shadow-2xl transition-all duration-300 animate-float">
            Plan My Adventure Now
          </Button>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm font-poppins">
              © 2025 CampHaven Glamping Resort. All rights
              reserved. | Crafted by Krrish
            </p>
            <div className="flex space-x-6 text-sm text-white/60">
              <a
                href="#"
                className="hover:text-coral transition-colors font-poppins"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="hover:text-coral transition-colors font-poppins"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="hover:text-coral transition-colors font-poppins"
              >
                Safety Guidelines
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
