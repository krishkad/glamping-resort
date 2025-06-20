"use client";
import {
  Sunrise,
  Coffee,
  TreePine,
  Utensils,
  Waves,
  Star,
  Moon,
} from "lucide-react";
import { useState } from "react";

const timelineEvents = [
  {
    time: "7:00 AM",
    title: "Sunrise tea on your deck with forest views",
    description:
      "Wake up naturally to golden sunlight filtering through trees. Enjoy fresh mountain tea on your private deck.",
    icon: Sunrise,
    image:
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    color: "bg-gradient-to-r from-orange-400 to-yellow-500",
  },
  {
    time: "9:00 AM",
    title: "Nature trail hike with local guide",
    description:
      "Discover hidden waterfalls and exotic wildlife on guided forest trails with our expert naturalists.",
    icon: TreePine,
    image:
      "https://images.unsplash.com/photo-1501854140801-50d01698950b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    color: "bg-gradient-to-r from-green-500 to-emerald-600",
  },
  {
    time: "11:00 AM",
    title: "Forest yoga & breathwork",
    description:
      "Connect with nature through mindful movement and breathing exercises in our forest yoga pavilion.",
    icon: Coffee,
    image:
      "https://images.unsplash.com/photo-1492648272180-61e45a8d98a7?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    color: "bg-gradient-to-r from-blue-400 to-cyan-500",
  },
  {
    time: "1:00 PM",
    title: "Organic lunch with local ingredients",
    description:
      "Feast on farm-to-table cuisine featuring organic vegetables and herbs grown in our garden.",
    icon: Utensils,
    image:
      "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    color: "bg-gradient-to-r from-[#ff6b6b] to-pink-500",
  },
  {
    time: "3:00 PM",
    title: "Kayaking in the nearby lake",
    description:
      "Paddle through crystal-clear waters surrounded by pristine mountains and spot local wildlife.",
    icon: Waves,
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    color: "bg-gradient-to-r from-[#8ecdf6] to-blue-600",
  },
  {
    time: "8:00 PM",
    title: "Stargazing by the campfire with hot cocoa",
    description:
      "Learn constellations while enjoying s'mores and warm cocoa around our central fire pit.",
    icon: Star,
    image:
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    color: "bg-gradient-to-r from-purple-500 to-indigo-600",
  },
  {
    time: "10:00 PM",
    title: "Sleep under a million stars in your luxury tent",
    description:
      "Drift off in premium comfort with the gentle sounds of nature as your lullaby.",
    icon: Moon,
    image:
      "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    color: "bg-gradient-to-r from-indigo-600 to-purple-800",
  },
];

const DayTimeline = () => {
  const [activeEvent, setActiveEvent] = useState(0);

  return (
    <section id="timeline" className="py-20 px-6 lg:px-12 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-6xl font-playfair font-bold text-stone mb-6">
            Your Adventure Timeline
          </h2>
          <p className="text-xl text-stone/80 max-w-3xl mx-auto font-poppins">
            Experience the perfect balance of adventure and relaxation. Every
            moment crafted for unforgettable memories.
          </p>
        </div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block relative mb-16">
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#4caf50] to-[#ff6b6b] rounded-full"></div>

          <div className="space-y-20">
            {timelineEvents.map((event, index) => (
              <div
                key={index}
                className={`flex items-center gap-12 animate-fade-in ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
                onMouseEnter={() => setActiveEvent(index)}
              >
                {/* Content */}
                <div className="lg:w-5/12">
                  <div
                    className={`p-8 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 hover-lift ${
                      activeEvent === index
                        ? "bg-white scale-105"
                        : "bg-white/90"
                    }`}
                  >
                    <div
                      className={`inline-flex items-center space-x-3 px-4 py-2 rounded-full text-white font-semibold mb-4 ${event.color}`}
                    >
                      <event.icon className="w-5 h-5" />
                      <span>{event.time}</span>
                    </div>
                    <h3 className="text-2xl font-playfair font-bold text-stone mb-4">
                      {event.title}
                    </h3>
                    <p className="text-stone/80 font-poppins leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>

                {/* Timeline Dot */}
                <div
                  className={`w-8 h-8 rounded-full border-4 border-white shadow-lg z-10 transition-all duration-300 ${
                    activeEvent === index
                      ? event.color.replace(
                          "bg-gradient-to-r",
                          "bg-gradient-to-br"
                        ) + " scale-125"
                      : "bg-moss"
                  }`}
                ></div>

                {/* Image */}
                <div className="lg:w-5/12">
                  <div className="relative overflow-hidden rounded-3xl shadow-xl">
                    <img
                      src={event.image}
                      alt={event.title}
                      className={`w-full h-80 object-cover transition-all duration-500 ${
                        activeEvent === index ? "scale-110" : "scale-100"
                      }`}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Timeline */}
        <div className="lg:hidden space-y-8">
          {timelineEvents.map((event, index) => (
            <div
              key={index}
              className="relative pl-16 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div
                className={`absolute left-0 top-0 w-12 h-12 rounded-full flex items-center justify-center text-white ${event.color}`}
              >
                <event.icon className="w-6 h-6" />
              </div>
              <div className="bg-white rounded-3xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-moss font-bold text-lg mb-2">
                  {event.time}
                </div>
                <h3 className="text-xl font-playfair font-bold text-stone mb-3">
                  {event.title}
                </h3>
                <p className="text-stone/80 font-poppins mb-4">
                  {event.description}
                </p>
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DayTimeline;
