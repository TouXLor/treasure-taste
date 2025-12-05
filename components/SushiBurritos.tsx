import React from "react";
import { ArrowRight } from "lucide-react";

const sushiItems = [
  {
    name: "Spicy Tuna",
    price: "$14.50",
    image: "./img/shushiburrito1.jpg",
  },
  {
    name: "Salmon Run",
    price: "$15.00",
    image: "./img/suhi3.jpg",
  },
  {
    name: "Crunchy Crab",
    price: "$13.50",
    image: "./img/suhsi4.jpg",
  },
  {
    name: "Veggie Fresh",
    price: "$12.00",
    image: "./img/sushi2.jpg",
  },
];

const SushiBurritos: React.FC = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-12">
      <div className="flex flex-col items-center justify-center mb-16">
        <h2 className="font-serif text-5xl text-stone-900 tracking-tight font-medium text-center drop-shadow-sm">
          Sushi Burritos
        </h2>
      </div>

      <div className="bg-[#FCD34D] rounded-[3rem] p-8 md:p-12 shadow-xl shadow-amber-900/5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {sushiItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-[2rem] overflow-hidden flex flex-col h-[420px] group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
            >
              <div className="h-[75%] overflow-hidden relative">
                <img
                  src={item.image}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  alt={item.name}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="h-[25%] px-6 flex items-center justify-between bg-white relative z-10">
                <div className="flex flex-col">
                  <h3 className="font-serif text-xl font-semibold text-stone-900 tracking-tight">
                    {item.name}
                  </h3>
                  <p className="text-stone-500 text-sm mt-0.5">{item.price}</p>
                </div>
                <div className="h-10 w-10 rounded-full border border-stone-200 flex items-center justify-center group-hover:bg-stone-900 group-hover:border-stone-900 transition-colors">
                  <ArrowRight className="w-5 h-5 text-stone-900 group-hover:text-white transition-colors" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SushiBurritos;
