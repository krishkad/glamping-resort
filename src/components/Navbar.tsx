"use client";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { href: "#accommodations", label: "Stays" },
    { href: "#experiences", label: "Adventures" },
    { href: "#timeline", label: "Your Day" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <>
      {/* Navigation */}

      <nav className="absolute top-0 left-0 right-0 z-20 px-4 sm:px-6 lg:px-12 py-4 sm:py-6">
        <div className="flex items-center justify-between">
          <div className="text-white font-playfair text-2xl sm:text-3xl font-bold">
            CampHaven
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8 text-white font-medium">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="hover:text-coral transition-colors text-sm lg:text-base"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white hover:bg-white/10"
                >
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-full h-full bg-white p-0 border-none"
              >
                <VisuallyHidden>
                  <SheetHeader>
                    <SheetTitle>test</SheetTitle>
                    <SheetDescription>test</SheetDescription>
                  </SheetHeader>
                </VisuallyHidden>
                {/* Custom Close Button */}
                <div className="absolute top-4 right-4 z-50">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsOpen(false)}
                    className="text-stone hover:bg-gray-100 rounded-full"
                  >
                    <X className="h-10 w-10 shrink-0" />
                  </Button>
                </div>

                {/* Mobile Menu Content */}
                <div className="flex flex-col h-full justify-center items-center space-y-8 px-8">
                  <div className="text-stone font-playfair text-3xl font-bold mb-8">
                    CampHaven
                  </div>

                  {navItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="text-2xl font-medium text-stone hover:text-coral transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </a>
                  ))}

                  <Button
                    className="bg-moss hover:bg-moss/90 text-white px-8 py-4 text-lg rounded-2xl font-semibold shadow-lg mt-8"
                    onClick={() => setIsOpen(false)}
                  >
                    Book Your Escape
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Desktop Book Button */}
          <Button className="hidden md:flex bg-moss hover:bg-moss/90 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-2xl font-semibold shadow-lg text-sm sm:text-base">
            Book Your Escape
          </Button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
