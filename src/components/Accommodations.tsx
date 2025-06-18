import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Users } from "lucide-react";

const Accommodations = () => {
  const accommodations = [
    {
      id: 1,
      name: "Forest Dome",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "₹4,500",
      capacity: "2 Adults",
      features: ["Private Deck", "AC", "Mountain Views"],
      rating: 4.9,
      reviews: 42,
    },
    {
      id: 2,
      name: "Riverside Tent",
      image:
        "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "₹3,800",
      capacity: "2-4 People",
      features: ["River Access", "Fire Pit", "Outdoor Bath"],
      rating: 4.8,
      reviews: 38,
    },
    {
      id: 3,
      name: "Treetop Cabin",
      image:
        "https://images.unsplash.com/photo-1486022566142-4d5c7c8b8c0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "₹5,200",
      capacity: "2 Adults",
      features: ["Elevated Views", "Luxury Bath", "Balcony"],
      rating: 4.9,
      reviews: 55,
    },
    {
      id: 4,
      name: "Family Safari Lodge",
      image:
        "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      price: "₹6,800",
      capacity: "4-6 People",
      features: ["2 Bedrooms", "Living Area", "Kids Zone"],
      rating: 4.7,
      reviews: 29,
    },
  ];

  return (
    <section id="accommodations" className="py-16 sm:py-20 lg:py-24 bg-white">
      <div className="max-w-[1444px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-stone mb-4 sm:mb-6">
            Your Home in the <span className="text-moss">Wild</span>
          </h2>
          <p className="text-lg sm:text-xl text-stone/80 max-w-3xl mx-auto font-poppins">
            Choose from our handpicked collection of luxury accommodations, each
            designed to blend comfort with nature&apos;s beauty.
          </p>
        </div>

        {/* Accommodations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
          {accommodations.map((accommodation) => (
            <Card
              key={accommodation.id}
              className="group hover-lift bg-white border-beige/30 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden p-0"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={accommodation.image}
                  alt={accommodation.name}
                  className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-moss text-moss" />
                    <span className="text-sm font-semibold text-stone">
                      {accommodation.rating}
                    </span>
                  </div>
                </div>
                <div className="absolute bottom-4 left-4 bg-coral text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {accommodation.price}/night
                </div>
              </div>

              <CardContent className="p-0 px-6 pb-6 bg-white">
                {/* Title & Capacity */}
                <div className="mb-4">
                  <h3 className="text-xl font-playfair font-semibold text-stone mb-2">
                    {accommodation.name}
                  </h3>
                  <div className="flex items-center text-stone/70 text-sm">
                    <Users className="w-4 h-4 mr-2" />
                    {accommodation.capacity}
                  </div>
                </div>

                {/* Features */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {accommodation.features.map((feature, index) => (
                      <span
                        key={index}
                        className="bg-beige text-stone text-xs px-3 py-1 rounded-full font-medium"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Reviews */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-stone/60 text-sm">
                    {accommodation.reviews} reviews
                  </span>
                </div>

                {/* CTA Button */}
                <Button className="w-full bg-moss hover:bg-moss/90 text-white rounded-2xl font-semibold py-3">
                  View Details
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12 sm:mt-16">
          <Button
            size="lg"
            className="bg-coral hover:bg-coral/90 text-white px-8 py-4 text-lg rounded-2xl font-semibold shadow-lg hover-lift"
          >
            See All Accommodations
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Accommodations;
