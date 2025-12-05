"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Badge } from "./ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const accommodations = [
  {
    id: 1,
    name: "Regular Tent",
    category: "dome",
    images: [
      {
        url: "/images/accommodations/tent/camp-2.webp",
        imageClassName: "object-center",
      },
      {
        url: "/images/accommodations/tent/camp-3.webp",
        imageClassName: "object-center",
      },
      {
        url: "/images/accommodations/tent/tent-1.webp",
        imageClassName: "object-center",
      },
      {
        url: "/images/accommodations/tent/tent-2.webp",
        imageClassName: "object-center",
      },
      {
        url: "/images/accommodations/tent/tent-3.webp",
        imageClassName: "object-center",
      },
      {
        url: "/images/accommodations/tent/tent-4.webp",
        imageClassName: "object-center",
      },
    ],
    price: 999,
    beforePrice: 1200,
    guests: 1,
    newYear: 2499,

    amenitiesHtml: (
      <div className="mb-6 space-y-3">
        <div className="bg-emerald-50/60 p-3 rounded-xl">
          <h4 className="font-semibold text-forest-700 mb-1 text-sm">
            🏕 Stay Includes
          </h4>
          <p className="text-xs text-slate-600">
            Cozy Dome Tent • Foam Mattress • Blanket
          </p>
        </div>
        <div className="bg-amber-50/60 p-3 rounded-xl">
          <h4 className="font-semibold text-forest-700 mb-1 text-sm">
            🍽 Food Menu
          </h4>
          <p className="text-xs text-slate-600">
            Tea & Pakoda/Misal • BBQ (Paneer/Chicken) • Dinner (Veg/Non-Veg) •
            Breakfast • Mineral Water
          </p>
        </div>
        <div className="bg-blue-50/60 p-3 rounded-xl">
          <h4 className="font-semibold text-forest-700 mb-1 text-sm">
            🎉 Activities
          </h4>
          <p className="text-xs text-slate-600">
            DJ Music • Indoor & Outdoor Games • Bonfire • Boating/Kayaking
            (Extra) • Live Music (Sat) • Free Parking
          </p>
        </div>
        <div className="text-xs text-slate-700 space-y-1 pl-1">
          <p>✅ Tasty Homely Food</p>
          <p>✅ Peaceful Lakeside Vibes</p>
        </div>
      </div>
    ),

    description:
      "Cozy dome-style tents offering an immersive stay with panoramic lake and nature views. Perfect for couples and groups seeking a comfortable, relaxed, and scenic camping experience.",
  },

  {
    id: 2,
    name: "Triangle Tent",
    category: "cabin",
    images: [
      {
        url: "/images/accommodations/triangle/triangle-1.webp",
        imageClassName: "object-[68%_78%]",
      },
      {
        url: "/images/accommodations/triangle/triangle-2.webp",
        imageClassName: "object-[68%_78%]",
      },
      {
        url: "/images/accommodations/triangle/triangle-3.webp",
        imageClassName: "object-center",
      },
      {
        url: "/images/accommodations/triangle/triangle-4.webp",
        imageClassName: "object-center",
      },
      {
        url: "/images/new_images/image-37.webp",
        imageClassName: "object-cover object-[55%_65%]",
      },
      {
        url: "/images/new_images/image-40.webp",
        imageClassName: "object-cover object-center",
      },
    ],
    price: 1299,
    beforePrice: 1600,
    guests: 2,
    newYear: 2899,
    amenitiesHtml: (
      <div className="mb-6 space-y-3">
        <div className="bg-emerald-50/60 p-3 rounded-xl">
          <h4 className="font-semibold text-forest-700 mb-1 text-sm">
            🏕 Stay Includes
          </h4>
          <p className="text-xs text-slate-600">
            Triangle Cottage • Mattress • Blanket • Pillow • Fan • Light •
            Mobile Charging Point
          </p>
        </div>
        <div className="bg-amber-50/60 p-3 rounded-xl">
          <h4 className="font-semibold text-forest-700 mb-1 text-sm">
            🍽 Food Menu
          </h4>
          <p className="text-xs text-slate-600">
            Tea & Pakoda/Misal • BBQ (Paneer/Chicken) • Dinner (Veg/Non-Veg) •
            Breakfast • Mineral Water
          </p>
        </div>
        <div className="bg-blue-50/60 p-3 rounded-xl">
          <h4 className="font-semibold text-forest-700 mb-1 text-sm">
            🎉 Activities
          </h4>
          <p className="text-xs text-slate-600">
            DJ Music • Indoor & Outdoor Games • Bonfire • Boating/Kayaking
            (Extra) • Live Music (Sat) • Free Parking
          </p>
        </div>
        <div className="text-xs text-slate-700 space-y-1 pl-1">
          <p>✅ Tasty Homely Food</p>
          <p>✅ Peaceful Lakeside Vibes</p>
        </div>
      </div>
    ),

    description:
      "Stylish triangle tents with a serene lake view, designed for couples who want added comfort and a cozy, romantic escape.",
  },

  {
    id: 3,
    name: "Deluxe Cottages",
    category: "tent",
    images: [
      {
        url: "/images/accommodations/delux/delux-1.webp",
        imageClassName: "object-center",
      },
      {
        url: "/images/accommodations/delux/delux-bday.webp",
        imageClassName: "object-center",
      },
      {
        url: "/images/accommodations/delux/delux-bed.webp",
        imageClassName: "object-center",
      },
      {
        url: "/images/accommodations/delux/delux-2.webp",
        imageClassName: "object-center object-contain",
      },
      {
        url: "/images/accommodations/delux/delux-window.webp",
        imageClassName: "object-center object-cover",
      },
      {
        url: "/images/accommodations/delux/delux-3.webp",
        imageClassName: "object-center",
      },
      {
        url: "/images/accommodations/delux/delux-outside.webp",
        imageClassName: "object-[60%_70%]",
      },
      {
        url: "/images/accommodations/delux/delux-4.webp",
        imageClassName: "object-center object-contain",
      },
      {
        url: "/images/accommodations/delux/delux-washroom.webp",
        imageClassName: "object-center object-contain",
      },
    ],
    price: 2999,
    beforePrice: 3600,
    guests: 4,
    amenitiesHtml: (
      <div className="mb-6 space-y-3">
        <div className="bg-emerald-50/60 p-3 rounded-xl">
          <h4 className="font-semibold text-forest-700 mb-1 text-sm">
            🏕 Stay Includes
          </h4>
          <p className="text-xs text-slate-600">
            Deluxe Cottage Stay • Mattress • Blanket • Pillow • Fan • Light •
            Mobile Charging Point
          </p>
        </div>
        <div className="bg-amber-50/60 p-3 rounded-xl">
          <h4 className="font-semibold text-forest-700 mb-1 text-sm">
            🍽 Food Menu
          </h4>
          <p className="text-xs text-slate-600">
            Tea & Pakoda/Misal • BBQ (Paneer/Chicken) • Dinner (Veg/Non-Veg) •
            Breakfast • Mineral Water
          </p>
        </div>
        <div className="bg-blue-50/60 p-3 rounded-xl">
          <h4 className="font-semibold text-forest-700 mb-1 text-sm">
            🎉 Activities
          </h4>
          <p className="text-xs text-slate-600">
            DJ Music • Indoor & Outdoor Games • Bonfire • Boating/Kayaking
            (Extra) • Live Music (Sat) • Free Parking
          </p>
        </div>
        <div className="text-xs text-slate-700 space-y-1 pl-1">
          <p>✅ Tasty Homely Food</p>
          <p>✅ Peaceful Lakeside Vibes</p>
        </div>
      </div>
    ),

    description:
      "Luxurious lake-touch cottages designed for couples and families, offering a private getaway with elegant interiors and modern amenities.",
  },
];

const Accommodations = () => {
  // const accommodations = [
  //   {
  //     id: 1,
  //     name: "Regular Tent",
  //     category: "dome",
  //     images: [
  //       {
  //         url: "/images/accommodations/tent/tent-1.webp",
  //         imageClassName: "object-center",
  //       },
  //       {
  //         url: "/images/accommodations/tent/tent-2.webp",
  //         imageClassName: "object-center",
  //       },
  //       {
  //         url: "/images/accommodations/tent/tent-3.webp",
  //         imageClassName: "object-center",
  //       },
  //       {
  //         url: "/images/accommodations/tent/tent-4.webp",
  //         imageClassName: "object-center",
  //       },
  //     ],
  //     price: 999,
  //     beforePrice: 1200,
  //     guests: 1,
  //     amenities: [
  //       "Private Bathroom",
  //       "AC/Heating",
  //       "WiFi",
  //       "Fireplace",
  //       "Deck",
  //     ],
  //     description:
  //       "Cozy dome-style tents offering an immersive stay with panoramic lake and nature views. Perfect for couples and groups seeking a comfortable, relaxed, and scenic camping experience.",
  //   },

  //   {
  //     id: 2,
  //     name: "Triangle Tent",
  //     category: "cabin",
  //     images: [
  //       {
  //         url: "/images/accommodations/triangle/triangle-1.webp",
  //         imageClassName: "object-[68%_78%]",
  //       },
  //       {
  //         url: "/images/accommodations/triangle/triangle-2.webp",
  //         imageClassName: "object-[68%_78%]",
  //       },
  //       {
  //         url: "/images/accommodations/triangle/triangle-3.webp",
  //         imageClassName: "object-center",
  //       },
  //       {
  //         url: "/images/accommodations/triangle/triangle-4.webp",
  //         imageClassName: "object-center",
  //       },
  //       {
  //         url: "/images/new_images/image-37.webp",
  //         imageClassName: "object-cover object-[55%_65%]",
  //       },
  //       {
  //         url: "/images/new_images/image-40.webp",
  //         imageClassName: "object-cover object-center",
  //       },
  //     ],
  //     price: 1200,
  //     beforePrice: 1500,
  //     guests: 2,
  //     amenities: ["Full Kitchen", "Fireplace", "Hot Tub", "WiFi", "BBQ Grill"],
  //     description:
  //       "Stylish triangle tents with a serene lake view, designed for couples who want added comfort and a cozy, romantic escape.",
  //   },

  //   {
  //     id: 3,
  //     name: "Deluxe Cottages",
  //     category: "tent",
  //     images: [
  //       {
  //         url: "/images/accommodations/delux/delux-1.webp",
  //         imageClassName: "object-center",
  //       },
  //       {
  //         url: "/images/accommodations/delux/delux-bday.webp",
  //         imageClassName: "object-center",
  //       },
  //       {
  //         url: "/images/accommodations/delux/delux-bed.webp",
  //         imageClassName: "object-center",
  //       },
  //       {
  //         url: "/images/accommodations/delux/delux-2.webp",
  //         imageClassName: "object-center object-contain",
  //       },
  //       {
  //         url: "/images/accommodations/delux/delux-window.webp",
  //         imageClassName: "object-center object-cover",
  //       },
  //       {
  //         url: "/images/accommodations/delux/delux-3.webp",
  //         imageClassName: "object-center",
  //       },
  //       {
  //         url: "/images/accommodations/delux/delux-outside.webp",
  //         imageClassName: "object-[60%_70%]",
  //       },
  //       {
  //         url: "/images/accommodations/delux/delux-4.webp",
  //         imageClassName: "object-center object-contain",
  //       },
  //       {
  //         url: "/images/accommodations/delux/delux-washroom.webp",
  //         imageClassName: "object-center object-contain",
  //       },
  //     ],
  //     price: 2999,
  //     beforePrice: 3200,
  //     guests: 4,
  //     amenities: ["Private Bathroom", "River View", "Firepit", "WiFi"],
  //     description:
  //       "Luxurious lake-touch cottages designed for couples and families, offering a private getaway with elegant interiors and modern amenities.",
  //   },
  // ];

  // const accommodations = [
  //   {
  //     id: 1,
  //     name: "Regular Tent",
  //     category: "dome",
  //     images: [
  //       {
  //         url: "/images/accommodations/tent/tent-1.webp",
  //         imageClassName: "object-center",
  //       },
  //       {
  //         url: "/images/accommodations/tent/tent-2.webp",
  //         imageClassName: "object-center",
  //       },
  //       {
  //         url: "/images/accommodations/tent/tent-3.webp",
  //         imageClassName: "object-center",
  //       },
  //       {
  //         url: "/images/accommodations/tent/tent-4.webp",
  //         imageClassName: "object-center",
  //       },
  //     ],
  //     price: 999,
  //     beforePrice: 1200,
  //     guests: 1,

  //     // ✅ REPLACED from campTypes[0].amenities
  //     amenities: [
  //       { icon: Utensils, label: "Meals Included" },
  //       { icon: Flame, label: "Bonfire & Barbecue" },
  //       { icon: Music2, label: "DJ Music" },
  //       { icon: Gamepad2, label: "Outdoor & Indoor Games" },
  //       { icon: Car, label: "Free Parking" },
  //       { icon: ShowerHead, label: "Washrooms" },
  //       { icon: Droplets, label: "Drinking Water" },
  //     ],

  //     description:
  //       "Cozy dome-style tents offering an immersive stay with panoramic lake and nature views. Perfect for couples and groups seeking a comfortable, relaxed, and scenic camping experience.",
  //   },

  //   {
  //     id: 2,
  //     name: "Triangle Tent",
  //     category: "cabin",
  //     images: [
  //       {
  //         url: "/images/accommodations/triangle/triangle-1.webp",
  //         imageClassName: "object-[68%_78%]",
  //       },
  //       {
  //         url: "/images/accommodations/triangle/triangle-2.webp",
  //         imageClassName: "object-[68%_78%]",
  //       },
  //       {
  //         url: "/images/accommodations/triangle/triangle-3.webp",
  //         imageClassName: "object-center",
  //       },
  //       {
  //         url: "/images/accommodations/triangle/triangle-4.webp",
  //         imageClassName: "object-center",
  //       },
  //       {
  //         url: "/images/new_images/image-37.webp",
  //         imageClassName: "object-cover object-[55%_65%]",
  //       },
  //       {
  //         url: "/images/new_images/image-40.webp",
  //         imageClassName: "object-cover object-center",
  //       },
  //     ],
  //     price: 1200,
  //     beforePrice: 1500,
  //     guests: 2,

  //     // ✅ REPLACED from campTypes[1].amenities
  //     amenities: [
  //       { icon: Waves, label: "Lake View" },
  //       { icon: Utensils, label: "Meals Included" },
  //       { icon: Flame, label: "Bonfire & Barbecue" },
  //       { icon: Music2, label: "DJ Music" },
  //       { icon: Gamepad2, label: "Outdoor & Indoor Games" },
  //       { icon: Car, label: "Free Parking" },
  //       { icon: ShowerHead, label: "Washrooms" },
  //       { icon: Droplets, label: "Drinking Water" },
  //     ],

  //     description:
  //       "Stylish triangle tents with a serene lake view, designed for couples who want added comfort and a cozy, romantic escape.",
  //   },

  //   {
  //     id: 3,
  //     name: "Deluxe Cottages",
  //     category: "tent",
  //     images: [
  //       {
  //         url: "/images/accommodations/delux/delux-1.webp",
  //         imageClassName: "object-center",
  //       },
  //       {
  //         url: "/images/accommodations/delux/delux-bday.webp",
  //         imageClassName: "object-center",
  //       },
  //       {
  //         url: "/images/accommodations/delux/delux-bed.webp",
  //         imageClassName: "object-center",
  //       },
  //       {
  //         url: "/images/accommodations/delux/delux-2.webp",
  //         imageClassName: "object-center object-contain",
  //       },
  //       {
  //         url: "/images/accommodations/delux/delux-window.webp",
  //         imageClassName: "object-center object-cover",
  //       },
  //       {
  //         url: "/images/accommodations/delux/delux-3.webp",
  //         imageClassName: "object-center",
  //       },
  //       {
  //         url: "/images/accommodations/delux/delux-outside.webp",
  //         imageClassName: "object-[60%_70%]",
  //       },
  //       {
  //         url: "/images/accommodations/delux/delux-4.webp",
  //         imageClassName: "object-center object-contain",
  //       },
  //       {
  //         url: "/images/accommodations/delux/delux-washroom.webp",
  //         imageClassName: "object-center object-contain",
  //       },
  //     ],
  //     price: 2999,
  //     beforePrice: 3200,
  //     guests: 4,

  //     // ✅ REPLACED from campTypes[2].amenities
  //     amenities: [
  //       { icon: Mountain, label: "Tree View" },
  //       { icon: Zap, label: "Electricity" },
  //       { icon: Utensils, label: "Meals Included" },
  //       { icon: Flame, label: "Bonfire & Barbecue" },
  //       { icon: Music2, label: "DJ Music" },
  //       { icon: Gamepad2, label: "Outdoor & Indoor Games" },
  //       { icon: Car, label: "Free Parking" },
  //       { icon: ShowerHead, label: "Private Washroom" },
  //       { icon: Droplets, label: "Drinking Water" },
  //     ],

  //     description:
  //       "Luxurious lake-touch cottages designed for couples and families, offering a private getaway with elegant interiors and modern amenities.",
  //   },
  // ];
  const [timeLeft, setTimeLeft] = useState(0);
  const [regularTimeLeft, setRegularTimeLeft] = useState(0);
  useEffect(() => {
    // Create today's 5 PM timestamp
    const now = new Date();
    const end = new Date();
    const regularEnd = new Date();

    end.setHours(16, 59, 0, 0);
    regularEnd.setHours(21, 59, 0, 0);

    // If it's already past 5 PM, offer expired

    if (now > end) {
      setTimeLeft(0);
      return;
    }

    if (now > regularEnd) {
      setRegularTimeLeft(0);
      return;
    }

    const timer = setInterval(() => {
      const remaining = end.getTime() - Date.now();
      setTimeLeft(remaining > 0 ? remaining : 0);
    }, 1000);

    const regulartimer = setInterval(() => {
      const remaining = regularEnd.getTime() - Date.now();
      setRegularTimeLeft(remaining > 0 ? remaining : 0);
    }, 1000);

    return () => {
      clearInterval(timer);
      clearInterval(regulartimer);
    };
  }, []);

  const formatTime = (ms: number) => {
    const sec = Math.floor(ms / 1000);
    const h = Math.floor(sec / 3600);
    const m = Math.floor((sec % 3600) / 60);
    const s = sec % 60;

    return `${h}h ${m}m ${s}s`;
  };

  return (
    <section id="accommodations" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-[1444px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-4xl lg:text-6xl font-playfair font-bold text-stone mb-4 sm:mb-6">
            Find Your Escape In <br className="sm:hidden" />
            <span className="text-moss">Pawna</span>
          </h2>
          <p className="text-lg sm:text-xl text-stone/80 max-w-3xl mx-auto font-poppins">
            Choose from our handpicked collection of luxury accommodations, each
            designed to blend comfort with nature&apos;s beauty.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {accommodations.map((accommodation, index) => (
            <div
              key={accommodation.id}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image Carousel */}
              <div className="relative overflow-hidden h-64">
                <Carousel
                  className="w-full h-full"
                  opts={{ align: "start", loop: true }}
                >
                  <CarouselContent className="h-full">
                    {accommodation.images.map((image, imageIndex) => (
                      <CarouselItem key={imageIndex} className="h-full">
                        <div className="relative w-full h-full">
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <Image
                            src={image.url}
                            width={0}
                            height={0}
                            unoptimized
                            loading="lazy"
                            alt={`${accommodation.name} - Image ${
                              imageIndex + 1
                            }`}
                            className={cn(
                              "w-full h-64 object-cover object-center group-hover:scale-105 transition-transform duration-700",
                              image.imageClassName
                            )}
                          />

                          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>

                  {/* Carousel Navigation */}
                  <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30  transition-all duration-300 w-8 h-8" />
                  <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30  transition-all duration-300 w-8 h-8" />

                  {/* Dot Indicators */}
                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-1  transition-opacity duration-300">
                    {accommodation.images.map((_, dotIndex) => (
                      <div
                        key={dotIndex}
                        className="w-2 h-2 rounded-full bg-white/60 backdrop-blur-sm"
                      />
                    ))}
                  </div>
                </Carousel>

                {/* Price Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <Badge className="bg-moss text-white px-3 py-1 text-sm font-semibold backdrop-blur-sm">
                    ₹{accommodation.price}/person{" "}
                    <span className="text-xs text-gray-200 line-through">
                      ₹{accommodation.beforePrice}/per
                    </span>
                  </Badge>
                </div>

                {/* Guests Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <Badge
                    variant="outline"
                    className="bg-white/90 text-[var(--forest-600)] border-[var(--forest-300)] backdrop-blur-sm"
                  >
                    {accommodation.guests} guests
                  </Badge>
                </div>

                {accommodation.newYear && (
                  <Badge
                    variant="outline"
                    className={cn(
                      "absolute bottom-4 right-4 z-10 bg-green-50 text-green-700 border-green-300 backdrop-blur-sm px-3 py-1 text-xs font-medium rounded-lg"
                    )}
                  >
                    🎉 {accommodation.newYear}/per for 31 — book early for
                    discount
                  </Badge>
                )}
                {accommodation.newYear && (
                  <Badge
                    variant="outline"
                    className={cn(
                      "absolute bottom-12 right-4 z-10 bg-transparent text-white border-green-300 backdrop-blur-sm px-3 py-1 text-xs font-medium rounded-lg"
                    )}
                  >
                    Price Double ⬆️ for 31 - all-over pawna
                  </Badge>
                )}

                {(index === 1 || index === 0) && (
                  <div className="absolute top-4 right-4 z-10 flex flex-col items-end space-y-1">
                    <Badge className="bg-yellow-600 text-white px-3 py-1 text-sm font-semibold backdrop-blur-sm">
                      ₹{accommodation.price}/person{" "}
                      <span className="text-sm text-gray-200 line-through ml-1">
                        ₹{accommodation.beforePrice}/per
                      </span>
                    </Badge>

                    <div className="bg-red-600 text-white text-[11px] px-2 py-0.5 rounded-md font-semibold animate-pulse shadow">
                      ⏳ Limited Time Discount —{" "}
                      {index === 0
                        ? formatTime(regularTimeLeft)
                        : formatTime(timeLeft)}
                    </div>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-playfair text-2xl font-semibold text-[var(--forest-700)] mb-2">
                  {accommodation.name}
                </h3>
                <p className="text-[var(--forest-600)] mb-4 text-sm">
                  {accommodation.description}
                </p>

                {/* Amenities */}
                {/* <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {accommodation.amenities.slice(0, 3).map((amenity) => (
                      <Badge
                        key={amenity}
                        variant="secondary"
                        className="text-xs "
                      >
                        {amenity}
                      </Badge>
                    ))}
                    {accommodation.amenities.length > 3 && (
                      <Badge variant="secondary" className="text-xs ">
                        +{accommodation.amenities.length - 3} more
                      </Badge>
                    )}
                  </div>
                </div> */}
                {/* <div className="grid sm:grid-cols-2 gap-3 mb-6">
                  {accommodation.amenities.map((amenity, idx) => (
                    <div
                      key={idx}
                      className="flex items-center space-x-2 text-sm text-slate-600"
                    >
                      <amenity.icon className="w-4 h-4 text-emerald-600" />
                      <span>{amenity.label}</span>
                    </div>
                  ))}
                </div> */}

                {/* <div className="mb-6 space-y-3">
                  <div className="bg-emerald-50/60 p-3 rounded-xl">
                    <h4 className="font-semibold text-forest-700 mb-1 text-sm">
                      🏕 Stay Includes
                    </h4>
                    <p className="text-xs text-slate-600">
                      Cozy Dome Tent • Foam Mattress • Blanket
                    </p>
                  </div>

                  <div className="bg-amber-50/60 p-3 rounded-xl">
                    <h4 className="font-semibold text-forest-700 mb-1 text-sm">
                      🍽 Food Menu
                    </h4>
                    <p className="text-xs text-slate-600">
                      Tea & Pakoda/Misal • BBQ (Paneer/Chicken) • Dinner
                      (Veg/Non-Veg) • Breakfast • Mineral Water
                    </p>
                  </div>

                  <div className="bg-blue-50/60 p-3 rounded-xl">
                    <h4 className="font-semibold text-forest-700 mb-1 text-sm">
                      🎉 Activities
                    </h4>
                    <p className="text-xs text-slate-600">
                      DJ Music • Indoor & Outdoor Games • Bonfire •
                      Boating/Kayaking (Extra) • Live Music (Sat) • Free Parking
                    </p>
                  </div>

                  <div className="text-xs text-slate-700 space-y-1 pl-1">
                    <p>✅ Tasty Homely Food</p>
                    <p>✅ Peaceful Lakeside Vibes</p>
                  </div>
                </div> */}

                <>{accommodation.amenitiesHtml}</>

                {/* CTA Button */}
                <Button
                  className="w-full bg-moss hover:bg-moss/80 text-white py-3 rounded-xl transition-all duration-300 hover:shadow-lg cursor-pointer"
                  onClick={() =>
                    document
                      .getElementById("bookings")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Book This Experience
                  <svg
                    className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        {/* <div className="text-center mt-12 sm:mt-16">
          <Button
            size="lg"
            className="bg-coral hover:bg-coral/90 text-white px-8 py-4 text-lg rounded-2xl font-semibold shadow-lg hover-lift"
          >
            See All Accommodations
          </Button>
        </div> */}
      </div>
    </section>
  );
};

export default Accommodations;
