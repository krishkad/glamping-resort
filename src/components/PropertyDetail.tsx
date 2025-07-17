"use client";

import { useEffect, useState } from "react";
// import Navigation from "../components/Navigation";
import { usePathname } from "next/navigation";
import PropertyAmenities from "../components/PropertiesAmenities";
import PropertyBookingForm from "../components/PropertyBookingForm";
import PropertyContact from "../components/PropertyContact";
import PropertyGallery from "../components/PropertyGallery";
import PropertyImageCarousel from "../components/PropertyImageCarousel";
import PropertyInfo from "../components/PropertyInfo";
import PropertyLocation from "../components/PropertyLocation";
import PropertyReviews from "../components/PropertyReviews";

type Amenity = {
  icon: string;
  title: string;
  description: string;
};

type Coordinates = {
  lat: number;
  lng: number;
};

type DetailedDescription = {
  intro: string;
  architecture: string;
  experience: string;
  ideal: string;
};

type Property = {
  id: number;
  title: string;
  location: string;
  description: string;
  price: string;
  rating: number;
  beds: number;
  guests: number;
  tags: string[];
  coordinates: Coordinates;
  images: string[];
  amenities: Amenity[];
  detailedDescription: DetailedDescription;
  badge: string;
  featuredIn: string[];
};

// Property data (in a real app, this would come from an API)
// const properties: Property[] = [
//   {
//     id: 1,
//     title: "The Royal Palm Villa",
//     location: "Santorini, Greece",
//     description:
//       "Stunning cliffside villa with panoramic Aegean Sea views and infinity pool. This architectural masterpiece combines traditional Cycladic design with modern luxury amenities. Wake up to breathtaking sunrises over the azure waters while enjoying the privacy and exclusivity of your own Mediterranean paradise.",
//     price: "₹1,800",
//     rating: 4.9,
//     beds: 4,
//     guests: 8,
//     tags: ["Private Pool", "Lakefront Luxury", "Butler Service", "5-Star"],
//     coordinates: { lat: 36.3932, lng: 25.4615 },
//     images: [
//       "https://images.unsplash.com/photo-1613490493576-7fde63acd811?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
//       "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
//       "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
//       "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
//       "https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
//     ],
//     amenities: [
//       {
//         icon: "🏊‍♂️",
//         title: "Infinity Pool",
//         description: "Private infinity pool overlooking the Aegean Sea",
//       },
//       {
//         icon: "🍽️",
//         title: "Private Chef",
//         description: "Personal chef service available upon request",
//       },
//       {
//         icon: "🌅",
//         title: "Sunset Views",
//         description: "Unobstructed views of Santorini's famous sunsets",
//       },
//       {
//         icon: "🚁",
//         title: "Helicopter Pad",
//         description: "Private helipad for convenient arrivals",
//       },
//       {
//         icon: "🍷",
//         title: "Wine Cellar",
//         description: "Curated selection of local and international wines",
//       },
//       {
//         icon: "🧘‍♀️",
//         title: "Spa Services",
//         description: "In-villa spa treatments and wellness services",
//       },
//       {
//         icon: "🛏️",
//         title: "Master Suite",
//         description: "King-sized bed with panoramic sea views",
//       },
//       {
//         icon: "🚗",
//         title: "Luxury Transport",
//         description: "Complimentary luxury car service",
//       },
//       {
//         icon: "🏖️",
//         title: "Private Beach",
//         description: "Exclusive access to secluded beach area",
//       },
//     ],
//     detailedDescription: {
//       intro:
//         "Experience unparalleled luxury in this stunning oceanfront villa perched on the dramatic cliffs of Santorini. This exclusive property represents the pinnacle of Mediterranean elegance, where traditional Cycladic architecture meets contemporary sophistication.",
//       architecture:
//         "The villa's contemporary design seamlessly blends with traditional Cycladic architecture, featuring locally sourced materials, handcrafted furnishings, and panoramic floor-to-ceiling windows that frame the endless Aegean horizon. Every detail has been meticulously curated to create an atmosphere of refined luxury.",
//       experience:
//         "Wake each morning to the gentle sound of waves and the sight of the sun painting the sky in brilliant hues. Spend your days lounging by the infinity pool, exploring nearby wineries, or simply savoring the tranquility of your private paradise. As evening approaches, witness Santorini's world-famous sunsets from your exclusive terrace.",
//       ideal:
//         "Perfect for discerning travelers seeking privacy, luxury, and authentic Greek island charm. Whether you're celebrating a special occasion, planning a romantic getaway, or gathering with loved ones, The Royal Palm Villa offers an unforgettable experience that will linger in your memories long after you've returned home.",
//     },
//     badge: "Top Choice for Honeymoons 2025",
//     featuredIn: [
//       "Conde Nast",
//       "Airbnb Luxe",
//       "Travel + Leisure",
//       "Vogue Travel",
//     ],
//   },
//   {
//     id: 2,
//     title: "Alpine Luxury Lodge",
//     location: "Aspen, Colorado",
//     description:
//       "Luxury ski lodge with private hot tub and mountain views. Nestled in the heart of the Rocky Mountains, this exquisite lodge offers world-class skiing, cozy fireplaces, and unmatched mountain hospitality in an intimate alpine setting.",
//     price: "₹1,200",
//     rating: 4.8,
//     beds: 6,
//     guests: 12,
//     tags: ["Ski-in/Ski-out", "Mountain Views", "Hot Tub", "Fireplace"],
//     coordinates: { lat: 39.1911, lng: -106.8175 },
//     images: [
//       "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
//       "https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
//       "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
//     ],
//     amenities: [
//       {
//         icon: "⛷️",
//         title: "Ski-in/Ski-out",
//         description: "Direct access to Aspen's world-class slopes",
//       },
//       {
//         icon: "🔥",
//         title: "Stone Fireplace",
//         description: "Grand stone fireplace in the main living area",
//       },
//       {
//         icon: "🛁",
//         title: "Private Hot Tub",
//         description: "Outdoor hot tub with mountain views",
//       },
//       {
//         icon: "🍷",
//         title: "Wine Room",
//         description: "Temperature-controlled wine storage",
//       },
//       {
//         icon: "🎿",
//         title: "Ski Storage",
//         description: "Heated ski storage and equipment area",
//       },
//       {
//         icon: "🍽️",
//         title: "Gourmet Kitchen",
//         description: "Professional-grade kitchen with mountain views",
//       },
//     ],
//     detailedDescription: {
//       intro:
//         "Escape to this magnificent mountain lodge offering the ultimate alpine luxury experience. With six spacious bedrooms and direct ski access, this property is perfect for groups seeking adventure and relaxation.",
//       architecture:
//         "Traditional alpine architecture meets modern luxury in this stunning lodge, featuring exposed wooden beams, natural stone elements, and expansive windows that showcase the breathtaking mountain vistas.",
//       experience:
//         "Spend your days carving fresh powder on world-renowned slopes, then return to the warmth of your private lodge for fireside gatherings and starlit soaks in the outdoor hot tub.",
//       ideal:
//         "Ideal for families, groups of friends, or corporate retreats looking for an exclusive mountain escape with unparalleled access to Aspen's legendary skiing and year-round outdoor activities.",
//     },
//     badge: "Rated 5-Star in 2025",
//     featuredIn: [
//       "Ski Magazine",
//       "Mountain Living",
//       "Luxury Travel",
//       "Forbes Travel",
//     ],
//   },
// ];

const properties: Property[] = [
  {
    id: 1,
    title: "Triangle Camp Retreat",
    location: "Rishikesh, India",
    description:
      "Experience serene camping in geometric triangle tents nestled along the Ganges River. These eco-friendly camps offer a blend of adventure and tranquility, surrounded by lush forests and Himalayan foothills, perfect for yoga enthusiasts and nature lovers.",
    price: "₹800",
    rating: 4.7,
    beds: 0,
    guests: 4,
    tags: ["Riverside", "Eco-Friendly", "Yoga Retreat", "Adventure"],
    coordinates: { lat: 30.0869, lng: 78.2676 },
    images: [
      "https://images.unsplash.com/photo-1614159038996-f35d39c21290?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Tent near river
      "https://images.unsplash.com/photo-1718330008715-25c9c046426d?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Aerial forest river
      "https://images.unsplash.com/photo-1718330009677-49d0896ada3b?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Yoga outdoor
      "https://images.unsplash.com/photo-1479244209311-71e35c910f59?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Bonfire
    ],
    amenities: [
      {
        icon: "🏕️",
        title: "Triangle Tents",
        description: "Unique geometric tents with comfortable bedding",
      },
      {
        icon: "🧘‍♀️",
        title: "Yoga Deck",
        description: "Open-air yoga platform with river views",
      },
      {
        icon: "🔥",
        title: "Campfire",
        description: "Evening bonfires for warmth and storytelling",
      },
      {
        icon: "🚶‍♂️",
        title: "Nature Trails",
        description: "Guided treks through nearby forests",
      },
      {
        icon: "🍽️",
        title: "Organic Meals",
        description: "Locally sourced vegetarian meals",
      },
      {
        icon: "🛶",
        title: "River Rafting",
        description: "Access to thrilling Ganges rafting adventures",
      },
    ],
    detailedDescription: {
      intro:
        "Immerse yourself in the serene beauty of Rishikesh at this unique triangle camp retreat. Perfectly situated along the Ganges, these eco-conscious camps offer a peaceful escape with a touch of adventure.",
      architecture:
        "The triangle tents are crafted with sustainable materials, blending modern design with environmental mindfulness. Each tent is designed for comfort, with cozy interiors and stunning river views.",
      experience:
        "Start your day with sunrise yoga on the deck, followed by guided treks or rafting on the Ganges. Evenings are spent around the campfire, sharing stories under the starry Himalayan sky.",
      ideal:
        "Ideal for solo travelers, couples, or small groups seeking a blend of relaxation, adventure, and spiritual rejuvenation in the heart of nature.",
    },
    badge: "Top Eco-Retreat 2025",
    featuredIn: [
      "Yoga Journal",
      "Travel + Leisure India",
      "National Geographic Traveler",
    ],
  },
  {
    id: 2,
    title: "Tent Camp Haven",
    location: "Jaisalmer, India",
    description:
      "Traditional tent camps in the heart of the Thar Desert, offering an authentic Rajasthani experience. Enjoy starlit nights, camel safaris, and cultural performances in a setting that captures the essence of desert life.",
    price: "₹600",
    rating: 4.6,
    beds: 3,
    guests: 6,
    tags: [
      "Desert Camping",
      "Cultural Experience",
      "Star Gazing",
      "Camel Safari",
    ],
    coordinates: { lat: 26.9157, lng: 70.9083 },
    images: [
      "https://images.unsplash.com/photo-1607672390383-aa666b4761ea?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1746824104470-3a57228b1780?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1672313461750-aa0b71468090?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1492648272180-61e45a8d98a7?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    amenities: [
      {
        icon: "🏜️",
        title: "Desert Tents",
        description: "Spacious tents with traditional Rajasthani decor",
      },
      {
        icon: "🐪",
        title: "Camel Safari",
        description: "Guided camel rides through the Thar Desert",
      },
      {
        icon: "🌠",
        title: "Stargazing",
        description: "Clear desert skies perfect for stargazing",
      },
      {
        icon: "🎶",
        title: "Cultural Shows",
        description: "Live Rajasthani folk music and dance",
      },
      {
        icon: "🍲",
        title: "Local Cuisine",
        description: "Authentic Rajasthani meals cooked on-site",
      },
    ],
    detailedDescription: {
      intro:
        "Step into the timeless beauty of the Thar Desert with these traditional tent camps. Located in Jaisalmer, this haven offers an authentic Rajasthani experience filled with culture and adventure.",
      architecture:
        "The tents are adorned with vibrant Rajasthani fabrics and handcrafted furnishings, providing a cozy yet authentic desert camping experience.",
      experience:
        "Ride camels across golden dunes, enjoy folk performances under the stars, and savor traditional Rajasthani cuisine prepared fresh at the camp.",
      ideal:
        "Perfect for families, couples, or groups seeking an immersive cultural experience and a unique desert adventure.",
    },
    badge: "Best Desert Camp 2025",
    featuredIn: [
      "Lonely Planet",
      "Conde Nast Traveller India",
      "Outlook Traveller",
    ],
  },
  {
    id: 3,
    title: "Bamboo Cottage Oasis",
    location: "Wayanad, India",
    description:
      "Charming bamboo cottages nestled in the lush greenery of Wayanad. These eco-friendly retreats offer a rustic yet comfortable stay, surrounded by coffee plantations and misty hills, ideal for nature enthusiasts.",
    price: "₹900",
    rating: 4.8,
    beds: 2,
    guests: 4,
    tags: ["Eco-Friendly", "Hill Retreat", "Nature Views", "Plantation Stay"],
    coordinates: { lat: 11.6854, lng: 76.132 },
    images: [
      "https://images.unsplash.com/photo-1618033824982-210197228404?q=80&w=844&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1560265902-0e00c463bede?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1710417870257-68638ca0d4cd?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    amenities: [
      {
        icon: "🏡",
        title: "Bamboo Cottages",
        description: "Sustainable cottages made from local bamboo",
      },
      {
        icon: "🌿",
        title: "Plantation Tours",
        description: "Guided tours of nearby coffee and spice plantations",
      },
      {
        icon: "🌄",
        title: "Hill Views",
        description: "Panoramic views of Wayanad’s misty hills",
      },
      {
        icon: "🔥",
        title: "Bonfire",
        description: "Evening bonfires with cozy seating",
      },
      {
        icon: "🥗",
        title: "Farm-to-Table",
        description: "Fresh meals from local organic produce",
      },
    ],
    detailedDescription: {
      intro:
        "Escape to the tranquil Bamboo Cottage Oasis in Wayanad, where sustainable living meets natural beauty. Surrounded by coffee plantations and misty hills, this retreat is a haven for peace seekers.",
      architecture:
        "The cottages are built entirely from locally sourced bamboo, offering a rustic yet comfortable stay with eco-conscious design and modern amenities.",
      experience:
        "Explore nearby plantations, hike through lush forests, or simply relax with a cup of local coffee while soaking in the serene hill views.",
      ideal:
        "Ideal for couples, families, or solo travelers looking for an eco-friendly retreat surrounded by nature’s beauty.",
    },
    badge: "Eco-Luxe Stay 2025",
    featuredIn: [
      "National Geographic Traveller",
      "Vogue India",
      "Wayanad Tourism",
    ],
  },
  {
    id: 4,
    title: "Luxury Camp Paradise",
    location: "Coorg, India",
    description:
      "Indulge in opulent camping in the heart of Coorg’s coffee estates. These luxury camps combine glamour with nature, offering plush accommodations, gourmet dining, and stunning views of the Western Ghats.",
    price: "₹1,500",
    rating: 4.9,
    beds: 3,
    guests: 6,
    tags: [
      "Luxury Glamping",
      "Coffee Estate",
      "Gourmet Dining",
      "Mountain Views",
    ],
    coordinates: { lat: 12.3375, lng: 75.8069 },
    images: [
      "https://images.unsplash.com/photo-1688362379260-7ab7a4cdb6c6?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1750286708955-9c3bdd523734?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1701454407032-afca92d0a30e?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1632397276624-2d61a01dda47?q=80&w=751&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    amenities: [
      {
        icon: "⛺",
        title: "Luxury Tents",
        description: "Spacious tents with plush interiors and private decks",
      },
      {
        icon: "🍽️",
        title: "Gourmet Dining",
        description: "Multi-course meals by a private chef",
      },
      {
        icon: "🌄",
        title: "Mountain Views",
        description: "Stunning vistas of the Western Ghats",
      },
      {
        icon: "🧘‍♀️",
        title: "Spa Services",
        description: "In-tent spa treatments for ultimate relaxation",
      },
      {
        icon: "🚶‍♂️",
        title: "Guided Treks",
        description: "Explore Coorg’s scenic trails with a guide",
      },
      {
        icon: "☕",
        title: "Coffee Tasting",
        description: "Private coffee tasting sessions from local estates",
      },
    ],
    detailedDescription: {
      intro:
        "Discover the ultimate glamping experience at Luxury Camp Paradise in Coorg. Nestled among coffee estates, these luxurious camps offer a perfect blend of opulence and nature.",
      architecture:
        "The luxury tents feature elegant interiors with plush furnishings, private decks, and modern amenities, all designed to complement the natural surroundings.",
      experience:
        "Savor gourmet meals, indulge in spa treatments, or explore Coorg’s scenic trails and coffee estates. Evenings are spent enjoying the serene mountain views from your private deck.",
      ideal:
        "Perfect for couples, families, or groups seeking a luxurious escape in the lap of nature with a touch of sophistication.",
    },
    badge: "Top Glamping Destination 2025",
    featuredIn: ["Luxury Travel", "Conde Nast Traveller", "India Today Travel"],
  },
];

const PropertyDetail = ({ id }: { id: string }) => {
  // const { id } = useParams();
  const pathname = usePathname();

  if (!id) {
    return null;
  }
  const [property, setProperty] = useState<Property | null>(null);

  useEffect(() => {
    const foundProperty = properties.find((p) => p.id === parseInt(id));
    if (foundProperty) {
      setProperty(foundProperty);
    } else {
      setProperty(null);
    }
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl  text-luxury-navy mb-4">
            Property Not Found
          </h1>
          <p className="text-gray-600">
            The property you&apos;re looking for doesn&apos;t exist.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* <Navigation /> */}

      <main className="p-0">
        {/* Image Carousel */}
        <PropertyImageCarousel
          images={property.images}
          title={property.title}
        />

        {/* Property Credentials */}
        {/* <PropertyCredentials
          featuredIn={property.featuredIn}
          badge={property.badge}
        /> */}

        {/* Property Information */}
        <PropertyInfo property={property} />

        {/* Amenities Grid */}
        <PropertyAmenities amenities={property.amenities} />

        {/* Booking Form Section */}
        <PropertyBookingForm property={property} />

        {/* Additional Gallery */}
        <PropertyGallery property={property} />

        {/* Guest Reviews */}
        <PropertyReviews propertyId={property.id} />

        {/* Location Map */}
        <PropertyLocation property={property} />

        {/* Contact Section */}
        <PropertyContact />
      </main>
    </div>
  );
};

export default PropertyDetail;
