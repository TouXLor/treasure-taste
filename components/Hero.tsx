import React from "react";
import Threecorndogs from "../img/threecorndogs.png";
import Sushiburrito from "../img/sushiburrito.png";

const Hero: React.FC = () => {
  return (
    <main className="w-full px-4 pb-12">
      <div className="max-w-7xl mx-auto bg-[#FCEDA5] rounded-[3rem] md:rounded-[4rem] shadow-xl shadow-amber-900/5 overflow-hidden relative min-h-[85vh] flex flex-col items-center justify-center py-20 px-6">
        <div className="z-10 flex flex-col items-center text-center w-full max-w-6xl mx-auto">
          <h1 className="font-serif text-5xl md:text-7xl text-stone-900 font-semibold tracking-tight mb-8 drop-shadow-sm">
            Our Menu
          </h1>

          <p className="text-lg md:text-xl text-stone-800/90 leading-relaxed font-normal max-w-lg mx-auto mb-20 md:mb-24">
            Fresh, fusion flavors that bring together the best of Korean street
            food and Japanese cuisine.
          </p>

          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 items-end justify-items-center">
            {/* Korean Corndog */}
            <div className="flex flex-col items-center group animate-float-up delay-100">
              <div className="relative w-56 h-56 md:w-64 md:h-64 flex items-center justify-center transition-transform duration-500 hover:scale-105 hover:-rotate-2">
                <img
                  src={Threecorndogs}
                  alt="Korean Corndog"
                  className="w-full h-full object-contain drop-shadow-2xl -rotate-12"
                />
              </div>
              <h3 className="font-serif text-2xl text-stone-900 font-semibold tracking-tight mt-8">
                Corn Dogs
              </h3>
            </div>

            {/* Sushi Burrito */}
            <div className="flex flex-col items-center group animate-float-up delay-300">
              <div className="relative w-56 h-56 md:w-72 md:h-72 flex items-center justify-center transition-transform duration-500 hover:scale-105 hover:rotate-2">
                <img
                  src={Sushiburrito}
                  alt="Sushi Burrito"
                  className="w-full h-full object-contain drop-shadow-2xl rotate-6 scale-110"
                />
              </div>
              <h3 className="font-serif text-2xl text-stone-900 font-semibold tracking-tight mt-8">
                Sushi Burrito
              </h3>
            </div>

            {/* Drink - Custom CSS Shape */}
            <div className="flex flex-col items-center group animate-float-up delay-500">
              <div className="relative w-40 h-56 md:w-48 md:h-64 flex items-end justify-center transition-transform duration-500 hover:scale-105 hover:-translate-y-2">
                <div className="relative bg-white/90 border-2 border-stone-900 rounded-2xl h-48 md:h-56 w-32 md:w-40 overflow-hidden shadow-xl flex flex-col items-center justify-end p-2">
                  <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-3 h-28 bg-white border-2 border-stone-900 flex flex-col items-center overflow-hidden">
                    <div className="w-full h-2 bg-rose-500 mt-2 -rotate-45 scale-150"></div>
                    <div className="w-full h-2 bg-rose-500 mt-2 -rotate-45 scale-150"></div>
                    <div className="w-full h-2 bg-rose-500 mt-2 -rotate-45 scale-150"></div>
                    <div className="w-full h-2 bg-rose-500 mt-2 -rotate-45 scale-150"></div>
                    <div className="w-full h-2 bg-rose-500 mt-2 -rotate-45 scale-150"></div>
                  </div>
                  <div className="absolute top-0 left-0 w-full h-12 border-b-2 border-stone-900 bg-white/50 z-10 rounded-t-xl"></div>
                  <div className="w-full h-[85%] bg-rose-400/90 rounded-xl border border-stone-900 relative overflow-hidden">
                    <div className="absolute top-2 left-2 w-1 h-full bg-white/30 rounded-full"></div>
                    <div className="absolute bottom-3 left-3 w-3 h-3 bg-stone-900 rounded-full opacity-80"></div>
                    <div className="absolute bottom-3 right-5 w-3 h-3 bg-stone-900 rounded-full opacity-80"></div>
                    <div className="absolute bottom-8 left-8 w-3 h-3 bg-stone-900 rounded-full opacity-80"></div>
                  </div>
                </div>
              </div>
              <h3 className="font-serif text-2xl text-stone-900 font-semibold tracking-tight mt-8">
                Drinks
              </h3>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
