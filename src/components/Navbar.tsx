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
import { cn } from "@/lib/utils";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  // const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);
  const navItems = [
    { href: "/#accommodations", label: "Stays" },
    { href: "/#timeline", label: "Your Day" },
    { href: "/#experiences", label: "Adventures" },
    { href: "/#contact", label: "Contact" },
  ];
  return (
    <>
      {/* Navigation */}

      <nav
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-300 px-4",
          isScrolled
            ? "bg-white/95 shadow-md backdrop-blur-sm py-4"
            : "bg-transparent py-4"
        )}
      >
        <div className="flex items-center justify-between">
          <div
            className={cn(
              "font-playfair text-2xl sm:text-3xl font-bold",
              isScrolled ? "text-navy" : "text-white"
            )}
          >
            CampHaven
          </div>

          {/* Desktop Navigation */}
          <div
            className={cn(
              "hidden md:flex items-center space-x-6 lg:space-x-8 font-medium",
              isScrolled ? "text-gray-800" : "text-white"
            )}
          >
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={cn(
                  "hover:text-coral transition-colors text-sm lg:text-base",
                  isScrolled ? "text-gray-800" : "text-white"
                )}
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
                  className={cn(
                    " hover:bg-white/10",
                    isScrolled ? "text-navy" : "text-white"
                  )}
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
                    onClick={() => setIsOpen(false)}
                    className="w-10 h-10 text-stone aspect-square hover:bg-gray-100 rounded-full"
                  >
                    <X className="h-6 w-6 shrink-0" />
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
                    className="bg-moss h-max hover:bg-moss/90 text-white px-8 py-4 text-lg rounded-2xl font-semibold shadow-lg mt-8"
                    onClick={() => {
                      setIsOpen(false);
                      router.push("#bookings");
                    }}
                  >
                    Book Your Escape
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Desktop Book Button */}
          <Button
            className="hidden md:flex bg-moss hover:bg-moss/90 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-2xl font-semibold shadow-lg text-sm sm:text-base"
            onClick={() => {
              router.push("#bookings");
            }}
          >
            Book Your Escape
          </Button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
