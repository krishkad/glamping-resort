"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const experiences = [
  // From Activities Array
  {
    title: "Bonfire Nights",
    description:
      "Cozy evenings around the crackling fire with music, stories, and warm vibes",
    icon: "🔥",
    duration: "Night Activity",
    category: "Relaxation",
    price: "Free",
    color: "from-red-400 to-orange-500",
  },
  {
    title: "Lake Kayaking",
    description:
      "Paddle through the serene waters and explore peaceful lake corners",
    icon: "🚣‍♂️",
    duration: "1.5 hours",
    category: "Adventure",
    price: "$600",
    color: "from-blue-500 to-sky-500",
  },

  {
    title: "Stargazing",
    description: "Marvel at the brilliant night sky away from city lights",
    icon: "✨",
    duration: "2 hours",
    category: "Relaxation",
    price: "Free",
    color: "from-indigo-500 to-purple-600",
  },

  // Newly Added
  {
    title: "DJ Night",
    description:
      "High-energy music and dance vibes to make your night unforgettable",
    icon: "🎧",
    duration: "3 hours",
    category: "Entertainment",
    price: "$500",
    color: "from-pink-500 to-purple-500",
  },
  {
    title: "Outdoor Games",
    description:
      "Enjoy badminton, cricket, football, and fun team games at the campsite",
    icon: "🎯",
    duration: "Flexible",
    category: "Fun",
    price: "Free",
    color: "from-yellow-400 to-orange-500",
  },
  {
    title: "Photo Spots",
    description:
      "Capture stunning photos at our curated scenic viewpoints and creative setups",
    icon: "📸",
    duration: "Flexible",
    category: "Leisure",
    price: "Free",
    color: "from-rose-400 to-red-500",
  },
];

const categories = [
  "All",
  "Relaxation",
  "Adventure",
  "Entertainment",
  "Fun",
  "Leisure",
];

const Experiences = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredExperiences =
    activeCategory === "All"
      ? experiences
      : experiences.filter((exp) => exp.category === activeCategory);

  return (
    <section
      id="experiences"
      className="py-16 sm:py-20 px-4 sm:px-6 lg:px-12 bg-gradient-to-br from-skyblue/10 to-beige"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 animate-slide-up">
          <h2 className="text-4xl  lg:text-6xl font-playfair font-bold text-stone mb-4 sm:mb-6">
            Adventures That Awaken Your Soul
          </h2>
          <p className="text-lg sm:text-xl text-stone/80 max-w-3xl mx-auto font-poppins">
            Immerse yourself in curated experiences that connect you with
            nature, challenge your spirit, and create lasting memories.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 sm:px-6 py-2 sm:py-3 rounded-full font-semibold transition-all duration-300 text-sm sm:text-base ${
                activeCategory === category
                  ? "bg-moss hover:bg-moss/50 text-white shadow-lg scale-105"
                  : "bg-white text-stone hover:bg-moss/10 border border-moss/20"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredExperiences.map((experience, index) => (
            <Card
              key={index}
              className="group rounded-3xl border-0 shadow-xl hover:shadow-2xl transition-all duration-500 hover-lift bg-white overflow-hidden p-0"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-0">
                {/* Header with gradient */}
                <div
                  className={`p-6 sm:p-8 bg-gradient-to-r ${experience.color} text-white relative overflow-hidden`}
                >
                  <div className="absolute top-2 right-2 text-4xl sm:text-6xl opacity-20">
                    {experience.icon}
                  </div>
                  <div className="relative z-10">
                    <div className="text-3xl sm:text-5xl mb-3 sm:mb-4">
                      {experience.icon}
                    </div>
                    <div className="flex flex-col sm:flex-row justify-between items-start mb-2">
                      <h3 className="text-xl sm:text-2xl font-playfair font-bold mb-2 sm:mb-0">
                        {experience.title}
                      </h3>
                      <div className="text-right">
                        <div className="text-lg sm:text-xl font-bold">
                          {experience.price}
                        </div>
                        <div className="text-xs sm:text-sm opacity-90">
                          {experience.duration}
                        </div>
                      </div>
                    </div>
                    <span className="inline-block bg-white/20 backdrop-blur-sm px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">
                      {experience.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-4 sm:p-6">
                  <p className="text-stone/80 font-poppins leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                    {experience.description}
                  </p>
                  <Button className="w-full bg-moss hover:bg-moss/90 text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 text-sm sm:text-base py-2 sm:py-3">
                    Book Experience
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Nearby Attractions */}
        <div className="mt-16 sm:mt-20 bg-gradient-to-r from-stone-800 to-stone-800/90 rounded-3xl p-6 sm:p-8 text-white text-center">
          <h3 className="text-2xl sm:text-3xl font-playfair font-bold mb-3 sm:mb-4">
            Explore Beyond the Camp
          </h3>
          <p className="text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto font-poppins opacity-90">
            CampHaven is perfectly positioned near ancient temples, pristine
            lakes, and adventure sports centers.
          </p>
          <div className="grid sm:grid-cols-3 gap-4 sm:gap-8 text-center">
            {/* Tiger Point */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl font-bold text-coral mb-2">
                20 min
              </div>
              <div className="font-poppins text-sm sm:text-base">
                Tiger Point (Sunset View)
              </div>
            </div>

            {/* Lohagad Fort */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl font-bold text-coral mb-2">
                25 min
              </div>
              <div className="font-poppins text-sm sm:text-base">
                Lohagad Fort Trek
              </div>
            </div>

            {/* Bhushi Dam */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl font-bold text-coral mb-2">
                30 min
              </div>
              <div className="font-poppins text-sm sm:text-base">
                Bhushi Dam & Waterfalls
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiences;
