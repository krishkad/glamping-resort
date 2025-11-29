"use client";

import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const phoneNumber = process.env.NEXT_PUBLIC_CALL_PHONE_NO;
const FloatingActions = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.pageYOffset > 300);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const handleCall = () => {
    window.open(`tel:+${phoneNumber}`, "_self");
  };

  const handleWhatsApp = () => {
    const message =
      "Hi! I'm interested in your luxury camper van rentals. Could you please help me with booking?";
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-5 inset-x-0 z-50 flex justify-center px-4">
      <div className="backdrop-blur-xl bg-white/80 border border-white/20 shadow-xl rounded-full px-4 py-2 flex items-center space-x-3">
        {/* Tagline */}
        <span className="text-xs font-medium text-gray-700 block">
          Call our friendly team
        </span>

        {/* WhatsApp */}
        <Button
          onClick={handleWhatsApp}
          className="h-10 px-4 rounded-full bg-green-500 hover:bg-green-600 text-white shadow-md text-sm font-medium flex items-center gap-1"
        >
          💬 <span className="hidden sm:inline">Chat</span>
        </Button>

        {/* Call */}
        <Button
          onClick={handleCall}
          className="h-10 px-4 rounded-full bg-blue-500 hover:bg-blue-600 text-white shadow-md text-sm font-medium flex items-center gap-1"
        >
          📞 <span className="hidden sm:inline">Call</span>
        </Button>
      </div>
    </div>
  );
};

export default FloatingActions;
