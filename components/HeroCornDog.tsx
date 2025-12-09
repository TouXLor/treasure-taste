import React from "react";
import { Instagram, Facebook, ChevronRight } from "lucide-react";
import Threecorndogs from "../img/threecorndogs.png";
import { useNavigate } from "react-router-dom";

const HeroCornDog: React.FC = () => {
  const navigate = useNavigate();
  return (
    <section className="relative flex-1 flex items-center justify-center">
      {/* Background */}
      <div className="absolute inset-0 " />

      {/* Content */}
      <div className="relative max-w-6xl mx-auto w-full px-6 py-16 flex flex-col md:flex-row items-center justify-between gap-10">
        {/* Left text */}
        <div className="text-white md:text-left text-center space-y-4">
          <h2 className="text-[#F59E0B] text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight drop-shadow">
            Corn dogs
            <br /> make
          </h2>
        </div>

        {/* Image */}
        <div className="relative flex-shrink-0">
          <div className="w-64 h-[420px] md:w-72 md:h-[460px] lg:w-80 lg:h-[600px] flex items-center justify-center">
            <img
              src={Threecorndogs}
              alt="Gourmet corndog"
              className="h-full object-contain drop-shadow-2xl"
            />
          </div>
        </div>

        {/* Right text */}
        <div className="text-white md:text-left text-center space-y-4">
          <h2 className="text-[#F59E0B] text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight drop-shadow">
            Everything
            <br /> better.
          </h2>
        </div>
      </div>
      {/* ➜ RIGHT-SIDE ARROW BUTTON */}
      <button
        className="
          absolute 
          right-6 
          top-1/2 
          -translate-y-1/2 
          h-14 w-14 
          rounded-full 
          border border-amber-300/40 
          flex items-center justify-center 
          bg-white/10 
          backdrop-blur-sm 
          hover:bg-white/20 
          hover:border-amber-400 
          transition-all duration-300 
          group
        "
        onClick={() => navigate("/menu")}
      >
        <ChevronRight
          className="
            w-8 h-8 text-amber-500 
            group-hover:translate-x-1 
            transition-all duration-300
          "
        />
      </button>
      {/* Social icons */}
      <div className="absolute left-6 bottom-6 flex items-center gap-4 text-white/80">
        <Instagram className="w-5 h-5 hover:text-white transition-colors cursor-pointer" />
        <Facebook className="w-5 h-5 hover:text-white transition-colors cursor-pointer" />
      </div>
    </section>
  );
};

export default HeroCornDog;
