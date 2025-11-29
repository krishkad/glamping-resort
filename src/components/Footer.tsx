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
import { useEffect, useState } from "react";

const CALL_PHONE_NO = `${process.env.NEXT_PUBLIC_CALL_PHONE_NO}`;
const EMAIL = process.env.NEXT_PUBLIC_EMAIL;

const Footer = () => {
  // const [email, setEmail] = useState("");
  // const [showSuccess, setShowSuccess] = useState(false);
  const [render, setRender] = useState(false);

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setShowSuccess(true);
  //   setEmail("");
  //   setTimeout(() => setShowSuccess(false), 3000);
  // };

  useEffect(() => {
    if (!render) setRender(true);
  }, [render]);

  if (!render) return;

  return (
    <footer className="bg-gradient-to-br from-stone-800 to-stone-800/90 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 text-6xl">🌲</div>
        <div className="absolute top-32 right-20 text-4xl">⭐</div>
        <div className="absolute bottom-20 left-1/4 text-5xl">🏕️</div>
        <div className="absolute bottom-10 right-10 text-3xl">🌙</div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16 relative z-10">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-2">
            {/* <h4 className="text-3xl font-playfair font-bold mb-4">Pawna Camps</h4> */}
            <div className="w-[160px] h-[80px] overflow-hidden">
              <img
                src="/images/pawna-logo.png"
                alt="pawna-logo"
                className="w-full h-full object-cover scale-[1.20] invert-100"
              />
            </div>
            <p className="text-white/80 mb-6 font-poppins leading-relaxed text-lg">
              Where adventure meets comfort, creating unforgettable experiences
              in nature&apos;s embrace. Escape ordinary, sleep under stars, wake
              up to wilderness.
            </p>
            <div className="flex items-center space-x-3 text-white/80 mb-4">
              <MapPin className="w-5 h-5 text-coral" />
              <span className="font-poppins">Example, Example, State</span>
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
                  <p className="font-poppins">{CALL_PHONE_NO} </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-moss" />
                <div>
                  <p className="font-semibold font-poppins">Email</p>
                  <p className="font-poppins">{EMAIL}</p>
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
              © 2025 Pawna Camps Glamping Resort. All rights reserved. | Crafted
              by Krrish
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
