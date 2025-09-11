import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MessageCircle, Phone } from "lucide-react";

const faqs = [
  {
    question: "What's included in my glamping stay?",
    answer:
      "All stays include luxury tent accommodation, organic breakfast, welcome refreshments, access to all hiking trails, stargazing sessions, complimentary Wi-Fi, and basic outdoor gear. Additional experiences and meals can be added during booking.",
    category: "Stay Details",
  },
  {
    question: "Are pets welcome at CampHaven?",
    answer:
      "Yes! We welcome well-behaved pets in select pet-friendly accommodations with advance notice and a small additional fee of $500 per night. Please inform us during booking to ensure we assign you a suitable tent.",
    category: "Policies",
  },
  {
    question: "What should I pack for the weather?",
    answer:
      "Pack layers for varying temperatures - mornings and evenings can be cool (15-20°C) while days are warm (25-30°C). Bring comfortable hiking shoes, rain jacket during monsoon season, insect repellent, and sunscreen. We provide all bedding and towels.",
    category: "Preparation",
  },
  {
    question: "What are your check-in and check-out times?",
    answer:
      "Check-in is from 2:00 PM and check-out is by 11:00 AM. Early check-in or late check-out may be available upon request and subject to availability for an additional fee of $500.",
    category: "Stay Details",
  },
  {
    question: "What's your cancellation policy?",
    answer:
      "Free cancellation up to 48 hours before check-in for a full refund. Cancellations within 48 hours are subject to a 50% charge. No-shows will be charged the full amount. Weather-related cancellations receive full refunds.",
    category: "Policies",
  },
  {
    question: "Do you provide transportation?",
    answer:
      "We can arrange pickup from the nearest railway station (45 minutes away) for $800 per vehicle. Detailed driving directions, GPS coordinates, and public transport options are provided for self-drive guests.",
    category: "Travel",
  },
  {
    question: "Is CampHaven suitable for children?",
    answer:
      "Absolutely! CampHaven welcomes guests of all ages. Children under 5 stay free when sharing with parents. We have special safety guidelines, child-friendly activities, and can provide cribs and high chairs upon request.",
    category: "Family",
  },
  {
    question: "What dining options are available?",
    answer:
      "We serve organic, locally-sourced meals with advance booking. Our menu includes Indian, Continental, and fusion dishes. Vegetarian, vegan, and special dietary requirements can be accommodated with 24-hour prior notice.",
    category: "Dining",
  },
];

const FAQ = () => {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-12 bg-secondary">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12 sm:mb-16 animate-slide-up">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-stone mb-4 sm:mb-6">
            Everything You Need to Know
          </h2>
          <p className="text-lg sm:text-xl text-stone/80 font-poppins">
            We&apos;ve got answers to all your questions for a seamless glamping
            adventure
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4 sm:space-y-6">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-white rounded-2xl sm:rounded-3xl px-4 sm:px-8 py-2 border-0 shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <AccordionTrigger className="text-left font-bold text-stone hover:text-moss transition-colors font-playfair text-base sm:text-lg py-4 sm:py-6">
                <div className="flex flex-col sm:flex-row sm:items-start space-y-2 sm:space-y-0 sm:space-x-4">
                  <span className="bg-[#4caf50]/10 w-max text-moss px-2 sm:px-3 py-1 rounded-full text-xs font-poppins font-semibold">
                    {faq.category}
                  </span>
                  <span className="flex-1 text-left">{faq.question}</span>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-stone/80 pb-4 sm:pb-6 font-poppins leading-relaxed text-sm sm:text-base pl-0 sm:pl-16">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div id="contact" className="text-center pt-24">
          <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-xl">
            <h3 className="text-xl sm:text-2xl font-playfair font-bold text-stone mb-3 sm:mb-4">
              Still have questions? We&apos;re here to help!
            </h3>
            <p className="text-stone/80 mb-4 sm:mb-6 font-poppins text-sm sm:text-base">
              Our friendly team is available 24/7 to assist with your booking
              and travel planning
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <a
                href="https://wa.me/919876543210"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-green-600 text-white rounded-2xl hover:bg-green-700 transition-colors font-semibold shadow-lg hover:shadow-xl text-sm sm:text-base"
              >
                <MessageCircle className="mr-2 sm:mr-3 h-4 sm:h-5 w-4 sm:w-5" />
                WhatsApp Support
              </a>
              <a
                href="tel:+919876543210"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-moss text-white rounded-2xl hover:bg-moss/90 transition-colors font-semibold shadow-lg hover:shadow-xl text-sm sm:text-base"
              >
                <Phone className="mr-2 sm:mr-3 h-4 sm:h-5 w-4 sm:w-5" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
