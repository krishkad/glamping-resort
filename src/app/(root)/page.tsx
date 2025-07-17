import Hero from "@/components/Hero";
import Accommodations from "@/components/Accommodations";
import DayTimeline from "@/components/DayTimeline";
import Experiences from "@/components/Experiences";
import BookingWidget from "@/components/BookingWidget";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const Home = () => {
  return (
    <div className="relative min-h-screen bg-background">
      {/* <Navbar /> */}
      <Hero />
      <Accommodations />
      <DayTimeline />
      <Experiences />
      <BookingWidget />
      <Testimonials />
      <FAQ />
      {/* <Footer /> */}
    </div>
  );
};

export default Home;
