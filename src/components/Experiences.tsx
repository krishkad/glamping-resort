"use client";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const experiences = [
  {
    title: "Sunrise Yoga",
    description:
      "Start your day with mindful meditation and yoga as the sun rises over the mountains",
    icon: "🧘‍♀️",
    duration: "1 hour",
    category: "Wellness",
    price: "Free",
    color: "from-orange-400 to-[#ff6b6b]",
  },
  {
    title: "Waterfall Trekking",
    description:
      "Discover hidden waterfalls and natural pools on guided hiking trails",
    icon: "🥾",
    duration: "3 hours",
    category: "Adventure",
    price: "$800",
    color: "from-green-500 to-emerald-600",
  },
  {
    title: "Kayaking Adventure",
    description:
      "Paddle through pristine waters and explore hidden coves with professional guides",
    icon: "🛶",
    duration: "2.5 hours",
    category: "Adventure",
    price: "$1200",
    color: "from-blue-400 to-cyan-500",
  },
  {
    title: "Star Gazing",
    description:
      "Learn constellations and enjoy telescope viewing in our dark sky location",
    icon: "🌟",
    duration: "2 hours",
    category: "Family-Friendly",
    price: "$500",
    color: "from-purple-500 to-indigo-600",
  },
  {
    title: "Fire Cooking Class",
    description:
      "Learn traditional outdoor cooking techniques using organic ingredients",
    icon: "🔥",
    duration: "2.5 hours",
    category: "Family-Friendly",
    price: "$1000",
    color: "from-[#ff6b6b] to-pink-500",
  },
  {
    title: "Pottery Workshop",
    description:
      "Create beautiful ceramic pieces inspired by nature with local artisans",
    icon: "🏺",
    duration: "2 hours",
    category: "Wellness",
    price: "$700",
    color: "from-amber-500 to-orange-600",
  },
];

const categories = ["All", "Adventure", "Wellness", "Family-Friendly"];

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
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-stone mb-4 sm:mb-6">
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
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl font-bold text-coral mb-2">
                15 min
              </div>
              <div className="font-poppins text-sm sm:text-base">
                Ancient Temple Complex
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl font-bold text-coral mb-2">
                25 min
              </div>
              <div className="font-poppins text-sm sm:text-base">
                Adventure Sports Center
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 sm:p-6">
              <div className="text-2xl sm:text-3xl font-bold text-coral mb-2">
                30 min
              </div>
              <div className="font-poppins text-sm sm:text-base">
                Sacred Lake & Boating
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experiences;
