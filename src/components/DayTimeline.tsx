"use client";
import {
  Coffee,
  Drum,
  Flame,
  Sun,
  Sunrise,
  UtensilsCrossed,
} from "lucide-react";
import { useState } from "react";

const timelineEvents = [
  {
    time: "4:00 PM",
    title: "Check-in",
    description:
      "Arrive at the campsite and begin your getaway with a smooth and effortless check-in. Settle into your accommodation and soak in the natural surroundings.",
    icon: Sun,
    image:
      "/images/new_images/image-5.jpeg",
    color: "bg-gradient-to-r from-green-400 to-green-600",
  },
  {
    time: "5:00 PM",
    title: "Tea & Pakora",
    description:
      "Enjoy freshly prepared tea and crispy pakoras as you unwind into the evening. A perfect warm-up for a relaxing lakeside experience.",
    icon: Coffee,
    image:
      "https://images.unsplash.com/photo-1604945516204-526aa4fd6425?q=80&w=1738&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    color: "bg-gradient-to-r from-yellow-400 to-amber-500",
  },
  {
    time: "5:30 PM",
    title: "Outdoor Games & Activities",
    description:
      "Have fun with a variety of engaging activities like badminton, cricket, carrom, and more—perfect for families, friends, and adventure lovers.",
    icon: Drum,
    image: "/images/new_images/image-18.jpeg",
    color: "bg-gradient-to-r from-orange-400 to-orange-600",
  },
  {
    time: "7:30 PM",
    title: "Barbeque & DJ Music",
    description:
      "Relish freshly grilled barbecue snacks while enjoying lively DJ music. The perfect mix of great food and great vibes until 9:30 PM.",
    icon: Flame,
    image:
     "/images/new_images/image-16.jpeg",
    color: "bg-gradient-to-r from-red-500 to-red-700",
  },
  {
    time: "9:30 PM",
    title: "Dinner",
    description:
      "Savor a wholesome dinner featuring local dishes prepared with authentic flavors. A comforting meal to end your adventure-filled evening.",
    icon: UtensilsCrossed,
    image:
      "https://images.unsplash.com/photo-1742281257707-0c7f7e5ca9c6?q=80",
    color: "bg-gradient-to-r from-blue-400 to-blue-600",
  },
  {
    time: "10:00 PM",
    title: "Campfire",
    description:
      "Relax around the warm campfire, listen to nature’s sounds, and enjoy meaningful conversations under the night sky.",
    icon: Flame,
    image:
      "https://images.unsplash.com/photo-1533243367503-0b7337004671?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    color: "bg-gradient-to-r from-orange-300 to-orange-600",
  },
  {
    time: "8:30 AM",
    title: "Breakfast",
    description:
      "Start your morning with a hearty breakfast featuring fresh and local flavors—fueling you for the day’s adventures.",
    icon: Sunrise,
    image:
      "https://images.unsplash.com/photo-1673530598977-ee0eda88f0a2?q=80",
    color: "bg-gradient-to-r from-yellow-300 to-amber-500",
  },
  {
    time: "11:00 AM",
    title: "Check-out",
    description:
      "Wrap up your stay with an easy check-out process and leave with unforgettable lakeside memories.",
    icon: Sun,
    image:
      "https://images.unsplash.com/photo-1473625247510-8ceb1760943f?q=80",
    color: "bg-gradient-to-r from-green-400 to-green-700",
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
