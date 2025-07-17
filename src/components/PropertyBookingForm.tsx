import { useState } from "react";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarDays, Users } from "lucide-react";
import { Button } from "./ui/button";
import { Calendar } from "./ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";

interface PropertyBookingFormProps {
  property: {
    title: string;
    price: string;
  };
}

const PropertyBookingForm = ({ property }: PropertyBookingFormProps) => {
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [guests, setGuests] = useState(2);
  const [kids, setKids] = useState(0);
  //  const [selectedPackage, setSelectedPackage] = useState(packages[0]);
  // const [promoCode, setPromoCode] = useState("");

  const calculatedAmount =
    (parseInt(property.price) ? parseInt(property.price) : 6000) + 320;
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   phone: "",
  //   checkIn: "",
  //   checkOut: "",
  //   guests: "",
  //   requests: "",
  // });

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();

  //   if (
  //     !formData.name ||
  //     !formData.email ||
  //     !formData.checkIn ||
  //     !formData.checkOut
  //   ) {
  //     //   toast({
  //     //     title: "Please fill in all required fields",
  //     //     variant: "destructive"
  //     //   });
  //     return;
  //   }

  //   // Redirect to payment page with booking data and property info
  //   // router.push('/payment', {
  //   //   state: {
  //   //     bookingData: {
  //   //       ...formData,
  //   //       propertyTitle: property.title,
  //   //       price: property.price,
  //   //       property: property.title.toLowerCase().replace(/\s+/g, '-')
  //   //     }
  //   //   }
  //   // });
  // };

  // const handleInputChange = (field: string, value: string) => {
  //   setFormData((prev) => ({
  //     ...prev,
  //     [field]: value,
  //   }));
  // };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <Card className="rounded-3xl shadow-2xl border-0 bg-white">
          <CardHeader className="text-center pb-4">
            <CardTitle className="text-2xl font-playfair text-stone">
              Reserve Your Escape
            </CardTitle>
          </CardHeader>
          <CardContent className="w-full p-8">
            <div className="grid max-sm:grid-cols-1 grid-cols-2 gap-4 mb-6">
              {/* Name */}
              <div className="w-full">
                <label className="block text-sm font-semibold text-stone mb-2 font-poppins">
                  Name
                </label>
                <Input placeholder="Name" className="h-12" />
              </div>
              {/* E-Mail */}
              <div className="w-full">
                <label className="block text-sm font-semibold text-stone mb-2 font-poppins">
                  E-mail
                </label>
                <Input
                  placeholder="example@gmail.com"
                  type="email"
                  className="h-12"
                />
              </div>
              <div className="w-full">
                <label className="block text-sm font-semibold text-stone mb-2 font-poppins">
                  Phone No.
                </label>
                <Input type="tel" className="h-12" />
              </div>

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
                  <PopoverContent className="w-auto p-0 bg-white" align="start">
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
                  <PopoverContent className="w-auto p-0 bg-white" align="start">
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
                  onClick={() => setKids(Math.max(0, kids - 1))}
                  className="rounded-full w-12 h-12 border-2 hover:border-moss"
                >
                  -
                </Button>
                <div className="flex-1 text-center font-semibold bg-gray-50 py-3 rounded-2xl border-2">
                  <Users className="inline mr-2 h-4 w-4 text-moss" />
                  {kids} Kids
                </div>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setKids(kids + 1)}
                  className="rounded-full w-12 h-12 border-2 hover:border-moss"
                >
                  +
                </Button>
              </div>
            </div>

            {/* Promo Code */}
            {/* <div className="mb-6">
              <label className="block text-sm font-semibold text-stone mb-2 font-poppins">
                Promo Code
              </label>
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  placeholder="Enter code"
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-moss transition-colors"
                />
                <Button className="h-max bg-coral hover:bg-coral/90 text-white px-6 py-4 rounded-2xl">
                  Apply
                </Button>
              </div>
            </div> */}

            {/* Pricing Summary */}
            {/* <div className="bg-gradient-to-r from-skyblue/10 to-moss/10 rounded-2xl py-6 mb-6">
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
                <span className="text-2xl font-bold text-moss">
                  ₹{calculatedAmount}
                </span>
              </div>
              <div className="text-coral text-sm mt-2 font-poppins">
                You saved {selectedPackage.savings} with this package!
              </div>
            </div> */}

            {/* Book Button */}
            <Button className="w-full h-max bg-moss hover:bg-[var(--color-moss)]/90 text-white text-base md:text-lg py-4 rounded-2xl shadow-xl font-bold">
              Book Your Adventure - ₹{calculatedAmount}
            </Button>

            <p className="text-sm text-center text-stone/60 mt-4 font-poppins">
              Free cancellation up to 48 hours before check-in
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default PropertyBookingForm;
