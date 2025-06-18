"use client";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarDays, Gift, Users } from "lucide-react";
import { useState } from "react";

const packages = [
  {
    name: "Weekend Escape Plan",
    price: "₹6,500",
    originalPrice: "₹8,000",
    savings: "₹1,500",
    includes: ["2 nights stay", "All meals", "Guided trek", "Campfire dinner"],
  },
  {
    name: "Nature Lovers Package",
    price: "₹9,200",
    originalPrice: "₹12,000",
    savings: "₹2,800",
    includes: [
      "3 nights stay",
      "All experiences",
      "Photography guide",
      "Sunrise yoga",
    ],
  },
  {
    name: "Midweek Chill Deal",
    price: "₹4,800",
    originalPrice: "₹6,200",
    savings: "₹1,400",
    includes: [
      "2 nights stay",
      "Spa session",
      "Organic meals",
      "Late checkout",
    ],
  },
];

const BookingWidget = () => {
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [guests, setGuests] = useState(2);
  const [selectedPackage, setSelectedPackage] = useState(packages[0]);
  const [promoCode, setPromoCode] = useState("");

  return (
    <section className="py-20 px-6 lg:px-12 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-4xl md:text-6xl font-playfair font-bold text-stone mb-6">
            Your Adventure Awaits
          </h2>
          <p className="text-xl text-stone/80 font-poppins">
            Book your perfect escape with our flexible packages and real-time
            availability
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Packages */}
          <div className="space-y-6">
            <h3 className="text-2xl font-playfair font-bold text-stone mb-6">
              Choose Your Package
            </h3>
            {packages.map((pkg, index) => (
              <Card
                key={index}
                className={`w-full cursor-pointer transition-all duration-300 rounded-3xl border-2 hover:shadow-xl ${
                  selectedPackage.name === pkg.name
                    ? "border-moss bg-[#4caf50]/5 shadow-lg scale-105"
                    : "border-gray-200 hover:border-moss/50"
                }`}
                onClick={() => setSelectedPackage(pkg)}
              >
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-xl font-playfair font-bold text-stone">
                        {pkg.name}
                      </h4>
                      <div className="flex items-center space-x-2 mt-2">
                        <Gift className="w-4 h-4 text-coral" />
                        <span className="text-coral font-semibold">
                          Save {pkg.savings}
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-moss">
                        {pkg.price}
                      </div>
                      <div className="text-sm text-stone/60 line-through">
                        {pkg.originalPrice}
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {pkg.includes.map((item, idx) => (
                      <div
                        key={idx}
                        className="text-sm text-stone/80 font-poppins"
                      >
                        ✓ {item}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Booking Form */}
          <Card className="rounded-3xl shadow-2xl border-0 bg-white">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-2xl font-playfair text-stone">
                Reserve Your Escape
              </CardTitle>
            </CardHeader>
            <CardContent className="w-full p-8">
              <div className="grid max-sm:grid-cols-1 grid-cols-2 gap-4 mb-6">
                {/* Check-in Date */}
                <div className="w-full">
                  <label className="block text-sm font-semibold text-stone mb-2 font-poppins">
                    Check-in
                  </label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-start text-left font-normal rounded-2xl h-12 border-2 hover:border-moss"
                      >
                        <CalendarDays className="mr-2 h-4 w-4 text-moss" />
                        {checkIn ? format(checkIn, "MMM dd") : "Select date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent
                      className="w-auto p-0 bg-white"
                      align="start"
                    >
                      <Calendar
                        mode="single"
                        selected={checkIn}
                        onSelect={setCheckIn}
                         // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        disabled={(date: any) => date < new Date()}
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                {/* Check-out Date */}
                <div className="w-full">
                  <label className="block text-sm font-semibold text-stone mb-2 font-poppins">
                    Check-out
                  </label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-start text-left font-normal rounded-2xl h-12 border-2 hover:border-moss"
                      >
                        <CalendarDays className="mr-2 h-4 w-4 text-moss" />
                        {checkOut ? format(checkOut, "MMM dd") : "Select date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent
                      className="w-auto p-0 bg-white"
                      align="start"
                    >
                      <Calendar
                        mode="single"
                        selected={checkOut}
                        onSelect={setCheckOut}
                         // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        disabled={(date: any) => date < new Date()}
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>

              {/* Guests */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-stone mb-2 font-poppins">
                  Guests
                </label>
                <div className="flex items-center space-x-3">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setGuests(Math.max(1, guests - 1))}
                    className="rounded-full w-12 h-12 border-2 hover:border-moss"
                  >
                    -
                  </Button>
                  <div className="flex-1 text-center font-semibold bg-gray-50 py-3 rounded-2xl border-2">
                    <Users className="inline mr-2 h-4 w-4 text-moss" />
                    {guests} Guests
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setGuests(guests + 1)}
                    className="rounded-full w-12 h-12 border-2 hover:border-moss"
                  >
                    +
                  </Button>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-stone mb-2 font-poppins">
                  Kids
                </label>
                <div className="flex items-center space-x-3">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setGuests(Math.max(1, guests - 1))}
                    className="rounded-full w-12 h-12 border-2 hover:border-moss"
                  >
                    -
                  </Button>
                  <div className="flex-1 text-center font-semibold bg-gray-50 py-3 rounded-2xl border-2">
                    <Users className="inline mr-2 h-4 w-4 text-moss" />
                    {guests} Kids
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setGuests(guests + 1)}
                    className="rounded-full w-12 h-12 border-2 hover:border-moss"
                  >
                    +
                  </Button>
                </div>
              </div>

              {/* Promo Code */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-stone mb-2 font-poppins">
                  Promo Code
                </label>
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    placeholder="Enter code"
                    className="flex-1 px-4 py-3 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-moss transition-colors"
                  />
                  <Button className="bg-coral hover:bg-coral/90 text-white px-6 rounded-2xl">
                    Apply
                  </Button>
                </div>
              </div>

              {/* Pricing Summary */}
              <div className="bg-gradient-to-r from-skyblue/10 to-moss/10 rounded-2xl p-6 mb-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="font-poppins">{selectedPackage.name}</span>
                  <span className="font-bold">{selectedPackage.price}</span>
                </div>
                <div className="flex justify-between items-center mb-3">
                  <span className="font-poppins">Service fee</span>
                  <span>₹350</span>
                </div>
                <div className="border-t border-gray-300 pt-3 flex justify-between items-center">
                  <span className="font-bold text-lg font-poppins">Total</span>
                  <span className="text-2xl font-bold text-moss">₹7,850</span>
                </div>
                <div className="text-coral text-sm mt-2 font-poppins">
                  You saved {selectedPackage.savings} with this package!
                </div>
              </div>

              {/* Book Button */}
              <Button className="w-full h-max bg-moss hover:bg-moss/90 text-white text-lg py-4 rounded-2xl shadow-xl font-bold">
                Book Your Adventure - ₹7,850
              </Button>

              <p className="text-sm text-center text-stone/60 mt-4 font-poppins">
                Free cancellation up to 48 hours before check-in
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BookingWidget;
