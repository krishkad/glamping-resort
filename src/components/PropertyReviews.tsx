import { Card, CardContent } from "./ui/card";
import { Star, Quote, Shield } from "lucide-react";

interface PropertyReviewsProps {
  propertyId: number;
}

type Review = {
  id: number;
  name: string;
  title: string;
  rating: number;
  review: string;
  avatar: string;
  verified: boolean;
};

// Sample reviews for different properties
const propertyReviews: { [key: number]: Review[] } = {
  1: [
    {
      id: 1,
      name: "Alexandra Mitchell",
      title: "Luxury Travel Enthusiast",
      rating: 5,
      review:
        "This Santorini villa exceeded every expectation. The infinity pool, sunset views, and impeccable service created memories that will last a lifetime. Pure perfection.",
      avatar:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      verified: true,
    },
    {
      id: 2,
      name: "James Robertson",
      title: "Travel Blogger",
      rating: 5,
      review:
        "Absolutely breathtaking property with world-class amenities. The private chef service and helicopter transfer made this the ultimate luxury experience.",
      avatar:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      verified: true,
    },
    {
      id: 3,
      name: "Sofia Andersen",
      title: "Honeymoon Guest",
      rating: 5,
      review:
        "Perfect for our honeymoon! The villa's privacy, stunning architecture, and romantic ambiance created the perfect setting for our special celebration.",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      verified: true,
    },
    {
      id: 4,
      name: "David Chen",
      title: "Corporate Executive",
      rating: 5,
      review:
        "An oasis of tranquility and luxury. Every detail was meticulously planned, from the welcome champagne to the sunset dinner arrangements.",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      verified: true,
    },
    {
      id: 5,
      name: "Isabella Rodriguez",
      title: "Architecture Enthusiast",
      rating: 5,
      review:
        "The seamless blend of traditional Cycladic design with modern luxury is simply stunning. A masterpiece of hospitality and design.",
      avatar:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      verified: true,
    },
    {
      id: 6,
      name: "Thomas Williams",
      title: "Wine Connoisseur",
      rating: 5,
      review:
        "The wine cellar and sommelier service were exceptional. Combined with the breathtaking views, this is luxury travel at its finest.",
      avatar:
        "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      verified: true,
    },
  ],
  2: [
    {
      id: 4,
      name: "Michael Chen",
      title: "Ski Enthusiast",
      rating: 5,
      review:
        "The ski-in/ski-out access is incredible, and the lodge's cozy atmosphere after a day on the slopes is exactly what we hoped for.",
      avatar:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      verified: true,
    },
    {
      id: 5,
      name: "Emma Thompson",
      title: "Family Vacationer",
      rating: 5,
      review:
        "Perfect for our family ski trip. The spacious rooms, hot tub, and mountain views made this an unforgettable winter getaway.",
      avatar:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      verified: true,
    },
    {
      id: 6,
      name: "Oliver Jackson",
      title: "Adventure Seeker",
      rating: 5,
      review:
        "The combination of luxury and adventure is perfect. After epic days on the mountain, returning to this lodge feels like coming home.",
      avatar:
        "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80",
      verified: true,
    },
  ],
};

const PropertyReviews = ({ propertyId }: PropertyReviewsProps) => {
  const reviews = propertyReviews[propertyId] || [];

  if (reviews.length === 0) {
    return null;
  }

  return (
    <section className="py-16 bg-[#faf9f7]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl  font-bold text-[#1a365d] mb-4">
            Guest Experiences
          </h2>
          <p className="text-xl text-gray-600">
            Hear from our distinguished guests about their luxury experiences
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            reviews.map((review: any, index: any) => (
              <Card
                key={review.id}
                className="border-0 shadow-lg hover-lift h-full glass-effect bg-white/80 backdrop-blur-sm animate-fade-in p-0"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-8">
                  <div className="mb-6">
                    <Quote className="w-8 h-8 text-[#d69e2e] mb-4" />
                    <div className="flex items-center gap-1 mb-4">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-[#d69e2e] text-[#d69e2e]"
                        />
                      ))}
                    </div>
                    <p className="text-gray-700 text-lg leading-relaxed italic mb-4">
                      &quot;{review.review}&quot;
                    </p>
                  </div>

                  <div className="flex items-center gap-4">
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-semibold text-[#1a365d]">
                          {review.name}
                        </h4>
                        {review.verified && (
                          <Shield className="w-4 h-4 text-green-600" />
                        )}
                      </div>
                      <p className="text-sm text-gray-600">{review.title}</p>
                      {review.verified && (
                        <p className="text-xs text-green-600 font-medium mt-1">
                          Verified Stay
                        </p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))
          }
        </div>
      </div>
    </section>
  );
};

export default PropertyReviews;
