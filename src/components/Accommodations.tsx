import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star, Users } from "lucide-react";
import Link from "next/link";

const Accommodations = () => {

  const accommodations = [
    {
      id: 1,
      name: "Triangle Camp Retreat",
      image:
        "https://images.unsplash.com/photo-1718330009358-95be06f49aac?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "$80",
      capacity: "2-4 People",
      features: ["Riverside", "Yoga Deck", "Campfire"],
      rating: 4.7,
      reviews: 35,
      href: "/triangle-tent",
    },
   
    {
      id: 3,
      name: "Bamboo Cottage Oasis",
      image:
        "https://images.unsplash.com/photo-1703299943350-2a4987ef30a8?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "$90",
      capacity: "2-4 People",
      features: ["Eco-Friendly", "Plantation Tours", "Hill Views"],
      rating: 4.8,
      reviews: 45,
      href: "/bamboo-camp",
    },
    {
      id: 4,
      name: "Luxury Camp Paradise",
      image:
        "https://images.unsplash.com/photo-1630012074456-c616d05f2e35?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      price: "$150",
      capacity: "2-6 People",
      features: ["Luxury Glamping", "Gourmet Dining", "Mountain Views"],
      rating: 4.9,
      reviews: 50,
      href: "/luxury-camp",
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {accommodations.map((accommodation) => (
            <Card
              key={accommodation.id}
              className="group hover-lift bg-white border-beige/30 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl overflow-hidden p-0"
            >
              {/* Image */}
              <Link href={accommodation.href}>
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
              </Link>

              <CardContent className="p-0 px-6 pb-6 bg-white">
                {/* Title & Capacity */}
                <div className="mb-4">
                  <Link href={accommodation.href}>
                    <h3 className="text-xl font-playfair font-semibold text-stone mb-2">
                      {accommodation.name}
                    </h3>
                  </Link>
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
                <Link href={accommodation.href}>
                  <Button className="w-full bg-moss hover:bg-moss/90 text-white rounded-2xl font-semibold py-3">
                    View Details
                  </Button>
                </Link>
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
