import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { MapPin, Users, Bed, Star } from "lucide-react";
import { Link } from "react-router-dom";

const properties = [
  {
    id: 1,
    title: "Oceanfront Villa Santorini",
    location: "Santorini, Greece",
    description:
      "Stunning cliffside villa with panoramic Aegean Sea views and infinity pool",
    price: "$1,200",
    rating: 4.9,
    beds: 4,
    guests: 8,
    images: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    id: 2,
    title: "Mountain Lodge Aspen",
    location: "Aspen, Colorado",
    description: "Luxury ski lodge with private hot tub and mountain views",
    price: "$900",
    rating: 4.8,
    beds: 6,
    guests: 12,
    images: [
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    id: 3,
    title: "Beachfront Resort Maldives",
    location: "Maldives",
    description:
      "Overwater bungalow with direct lagoon access and private deck",
    price: "$2,500",
    rating: 5.0,
    beds: 2,
    guests: 4,
    images: [
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    id: 4,
    title: "Tuscan Countryside Villa",
    location: "Tuscany, Italy",
    description: "Historic villa surrounded by vineyards and olive groves",
    price: "$800",
    rating: 4.7,
    beds: 5,
    guests: 10,
    images: [
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    id: 5,
    title: "Luxury Safari Lodge",
    location: "Serengeti, Tanzania",
    description:
      "Exclusive tented camp with wildlife viewing and luxury amenities",
    price: "$1,800",
    rating: 4.9,
    beds: 3,
    guests: 6,
    images: [
      "https://images.unsplash.com/photo-1523805009345-7448845a9e53?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
  },
  {
    id: 6,
    title: "Mediterranean Paradise",
    location: "Mykonos, Greece",
    description: "Stunning whitewashed villa with private beach access",
    price: "$1,500",
    rating: 4.8,
    beds: 4,
    guests: 8,
    images: [
      "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    ],
  },
];

const PropertyShowcase = () => {
  return (
    <section id="properties" className="py-20 bg-[#faf9f7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1a365d] mb-6">
            Exceptional Properties
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Each property in our collection is carefully selected for its unique
            character, unparalleled service, and breathtaking locations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-slide-up">
          {properties.map((property) => (
            <Card
              key={property.id}
              className="group hover-lift border-0 shadow-lg overflow-hidden p-0"
            >
              <div className="relative overflow-hidden">
                <Link to={`/property/${property.id}`}>
                  <Carousel className="w-full">
                    <CarouselContent>
                      {property.images.map((image, index) => (
                        <CarouselItem key={index}>
                          <img
                            src={image}
                            alt={`${property.title} - Image ${index + 1}`}
                            className="w-full h-64 object-cover"
                          />
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2" />
                    <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2" />
                  </Carousel>
                </Link>
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-1">
                  <Star className="w-4 h-4 fill-[#d69e2e] text-[#d69e2e]" />
                  <span className="text-sm font-medium">{property.rating}</span>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="flex items-center gap-1 text-[#d69e2e] mb-2">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{property.location}</span>
                </div>
                <Link to={`/property/${property.id}`}>
                  <h3 className="text-xl font-serif font-semibold text-[#1a365d] mb-3">
                    {property.title}
                  </h3>
                </Link>

                <p className="text-gray-600 mb-4 line-clamp-2">
                  {property.description}
                </p>

                <div className="flex items-center gap-4 mb-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <Bed className="w-4 h-4" />
                    <span>{property.beds} beds</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>{property.guests} guests</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-2xl font-bold text-[#1a365d]">
                      {property.price}
                    </span>
                    <span className="text-gray-500 ml-1">/ night</span>
                  </div>
                  <Button
                    asChild
                    className="bg-[#d69e2e] hover:bg-yellow-600 text-white"
                  >
                    <Link to={`/property/${property.id}`}>View More</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyShowcase;
