import { Badge } from "./ui/badge";
import { Card, CardContent } from "./ui/card";
import { MapPin, Users, Bed, Star } from "lucide-react";

interface PropertyInfoProps {
  property: {
    title: string;
    location: string;
    description: string;
    detailedDescription: {
      intro: string;
      architecture: string;
      experience: string;
      ideal: string;
    };
    price: string;
    rating: number;
    beds: number;
    guests: number;
    tags: string[];
  };
}

const PropertyInfo = ({ property }: PropertyInfoProps) => {
  return (
    <section className="py-16 bg-[#faf9f7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Property Information */}
          <div className="lg:col-span-2 space-y-8">
            {/* Header */}
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl  font-bold text-[#1a365d] animate-fade-in">
                {property.title}
              </h1>

              <div className="flex items-center gap-4 text-lg">
                <div className="flex items-center gap-2 text-[#d69e2e]">
                  <MapPin className="w-5 h-5" />
                  <span>{property.location}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-5 h-5 fill-[#d69e2e] text-[#d69e2e]" />
                  <span className="font-medium">{property.rating}</span>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {property.tags.map((tag, index) => (
                  <Badge
                    key={index}
                    className="bg-[#d69e2e]/10 text-[#d69e2e] hover:bg-[#d69e2e]/20 border-[#d69e2e]/30"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Quick Info */}
              <div className="flex items-center gap-6 text-gray-600">
                {property.beds > 0 && (
                  <div className="flex items-center gap-2">
                    <Bed className="w-5 h-5" />
                    <span>{property.beds} Bedrooms</span>
                  </div>
                )}
                <div className="flex items-center gap-2">
                  <Users className="w-5 h-5" />
                  <span>Up to {property.guests} Guests</span>
                </div>
              </div>
            </div>

            {/* Detailed Description */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl  font-semibold text-[#1a365d] mb-6">
                  About This Camp
                </h2>
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p className="text-lg font-medium text-[#1a365d]">
                    {property.detailedDescription.intro}
                  </p>

                  <div className="space-y-4">
                    <h3 className="text-xl  font-semibold text-[#1a365d]">
                      Architecture & Design
                    </h3>
                    <p>{property.detailedDescription.architecture}</p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl  font-semibold text-[#1a365d]">
                      Your Experience
                    </h3>
                    <p>{property.detailedDescription.experience}</p>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xl  font-semibold text-[#1a365d]">
                      Perfect For
                    </h3>
                    <p>{property.detailedDescription.ideal}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Pricing Card */}
          <div className="lg:col-span-1">
            <Card className="sticky top-8 border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="text-3xl font-bold text-[#1a365d] mb-1">
                    Starting at {property.price}
                  </div>
                  <div className="text-lg text-gray-600 mb-2">per night</div>
                  <div className="text-sm text-gray-500 italic">
                    Inclusive of luxury amenities & taxes
                  </div>
                </div>
                <div className="text-center text-sm text-gray-500 border-t pt-4">
                  Rates vary by season • Premium experiences included
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PropertyInfo;
