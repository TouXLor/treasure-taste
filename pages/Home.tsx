import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroCornDog from "../components/HeroCornDog";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFFBF0]">
      <Navbar />
      <HeroCornDog />
      <Footer />
    </div>
  );
}
