import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CorndogSection from "../components/CorndogSection";
import SushiBurritos from "../components/SushiBurritos";
import Drinks from "../components/Drinks";
import Footer from "../components/Footer";

export default function Menu() {
  return (
    <div className="min-h-screen bg-[#FFFBF0]">
      <Navbar />
      <Hero />
      <CorndogSection />
      <SushiBurritos />
      <Drinks />
      <Footer />
    </div>
  );
}
