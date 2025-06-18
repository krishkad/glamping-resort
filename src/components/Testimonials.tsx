import { Card, CardContent } from "@/components/ui/card";
import { Star, Heart, Camera } from "lucide-react";

const testimonials = [
  {
    name: "Arjun & Priya",
    location: "Mumbai",
    text: "CampHaven exceeded every expectation! The sunrise yoga, luxury tent comfort, and stargazing experience created the most romantic weekend of our lives. Can't wait to return!",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    category: "Couple",
  },
  {
    name: "The Sharma Family",
    location: "Pune",
    text: "Our kids are still talking about the night forest walk and campfire stories. The perfect blend of adventure and comfort for families. Every detail was thoughtfully planned!",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    category: "Family",
  },
  {
    name: "Maya, Solo Traveler",
    location: "Bangalore",
    text: "As a solo female traveler, I felt completely safe and welcomed. The guided waterfall trek was incredible, and I made lifelong friends around the campfire!",
    rating: 5,
    image:
      "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    category: "Solo",
  },
];

const instagramPosts = [
  {
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    likes: "234",
    caption: "Morning magic at CampHaven ✨",
  },
  {
    image:
      "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    likes: "189",
    caption: "Treehouse dreams come true 🌳",
  },
  {
    image:
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    likes: "312",
    caption: "Stargazing nights under infinite skies 🌟",
  },
  {
    image:
      "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
    likes: "267",
    caption: "Cozy nights in luxury tents 🏕️",
  },
];

const Testimonials = () => {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Testimonials */}
        <div className="text-center mb-12 sm:mb-16 animate-slide-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-stone mb-4 sm:mb-6">
            Stories from Fellow Adventurers
          </h2>
          <p className="text-lg sm:text-xl text-stone/80 max-w-3xl mx-auto font-poppins">
            Real experiences from couples, families, and solo travelers who
            found their perfect escape at CampHaven.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="rounded-3xl border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover-lift overflow-hidden p-0"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              {/* Category Badge */}
              <div
                className={`px-4 sm:px-6 py-3 sm:py-4 text-center font-bold text-white ${
                  testimonial.category === "Couple"
                    ? "bg-gradient-to-r from-[#ff6b6b] to-pink-500"
                    : testimonial.category === "Family"
                    ? "bg-gradient-to-r from-[#4caf50] to-green-600"
                    : "bg-gradient-to-r from-[#8ecdf6] to-blue-500"
                }`}
              >
                {testimonial.category === "Couple" && (
                  <Heart className="w-4 sm:w-5 h-4 sm:h-5 inline mr-2" />
                )}
                {testimonial.category === "Family" && (
                  <Star className="w-4 sm:w-5 h-4 sm:h-5 inline mr-2" />
                )}
                {testimonial.category === "Solo" && (
                  <Camera className="w-4 sm:w-5 h-4 sm:h-5 inline mr-2" />
                )}
                <span className="text-sm sm:text-base">
                  {testimonial.category} Adventure
                </span>
              </div>

              <CardContent className="p-4 sm:p-6">
                <div className="flex items-center mb-3 sm:mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 sm:w-5 h-4 sm:h-5 fill-white text-white"
                    />
                  ))}
                </div>
                <p className="text-stone/80 mb-4 sm:mb-6 italic font-poppins leading-relaxed text-sm sm:text-base">
                  &quot;{testimonial.text}&quot;
                </p>
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 sm:w-14 h-12 sm:h-14 rounded-full object-cover shadow-lg"
                  />
                  <div>
                    <div className="font-bold text-stone font-playfair text-base sm:text-lg">
                      {testimonial.name}
                    </div>
                    <div className="text-xs sm:text-sm text-stone/60 font-poppins">
                      {testimonial.location}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Instagram Feed */}
        <div className="text-center mb-8 sm:mb-12">
          <h3 className="text-2xl sm:text-3xl md:text-4xl font-playfair font-bold text-stone mb-4 sm:mb-6">
            #CampHavenMoments
          </h3>
          <p className="text-base sm:text-lg text-stone/80 mb-6 sm:mb-8 font-poppins">
            Follow our journey and share your own magical moments with fellow
            nature lovers
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {instagramPosts.map((post, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-2xl sm:rounded-3xl aspect-square group cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              <img
                src={post.image}
                alt={`Instagram post ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 text-white">
                  <div className="flex items-center space-x-2 mb-1 sm:mb-2">
                    <Heart className="w-3 sm:w-4 h-3 sm:h-4 fill-red-500 text-red-500" />
                    <span className="text-xs sm:text-sm font-semibold">
                      {post.likes}
                    </span>
                  </div>
                  <p className="text-xs">{post.caption}</p>
                </div>
              </div>
              <div className="absolute top-3 sm:top-4 right-3 sm:right-4 bg-white/90 backdrop-blur-sm rounded-full p-1.5 sm:p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Camera className="w-3 sm:w-4 h-3 sm:h-4 text-stone" />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-12">
          <p className="text-stone/60 font-poppins mb-3 sm:mb-4 text-sm sm:text-base">
            Share your adventure moments and get featured!
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-4">
            <span className="w-max bg-gradient-to-r from-[#4caf50] to-green-600 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold">
              #CampHavenMoments
            </span>
            <span className="w-max bg-gradient-to-r from-[#ff6b6b] to-pink-500 text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-semibold">
              @camphaven_official
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
