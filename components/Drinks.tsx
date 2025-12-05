import React from "react";
import { Plus } from "lucide-react";

const drinks = [
  {
    name: "Boba Milk",
    type: "Classic",
    image:
      "https://www.anediblemosaic.com/wp-content/uploads//2022/03/boba-milk-tea-recipe-featured-image.jpg",
    fullBg: true,
  },
  {
    name: "Lemonade",
    type: "Sparkling",
    image:
      "https://images.squarespace-cdn.com/content/v1/5ed13dd3465af021e2c1342b/a5b1e544-ee89-4268-b9af-ab49e9cc7006/IMG_1986+%281%29.jpg",
    fullBg: false,
  },
  {
    name: "Fruit Tea",
    type: "Iced",
    image:
      "https://styleblueprint.com/wp-content/uploads/2021/05/SB-fruit-tea-recipes-peach-iStock-692814216.jpg",
    fullBg: true,
  },
  {
    name: "Slushy",
    type: "Berry",
    image:
      "https://www.oliviascuisine.com/wp-content/uploads/2017/06/triple-berry-slushies.jpg",
    fullBg: false,
  },
];

const Drinks: React.FC = () => {
  return (
    <section className="w-full max-w-5xl mx-auto px-6 pt-12 pb-32">
      <div className="flex flex-col items-center justify-center mb-16">
        <h2 className="font-serif text-5xl text-stone-900 tracking-tight font-medium text-center drop-shadow-sm">
          Drinks
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {drinks.map((drink, index) => (
          <div
            key={index}
            className={`flex flex-col group transition-all duration-300 hover:shadow-xl hover:shadow-amber-100/50 bg-[#FCD34D] h-[450px] rounded-[3rem] ${
              drink.fullBg ? "pt-6 pr-5 pb-6 pl-5" : "p-8"
            }`}
          >
            <div
              className={`${
                drink.fullBg ? "rounded-[1rem]" : "rounded-[2rem]"
              } bg-white h-full overflow-hidden flex flex-col shadow-sm`}
            >
              <div className="flex-1 overflow-hidden relative">
                <img
                  src={drink.image}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-100 mix-blend-normal opacity-90"
                  alt={drink.name}
                />
              </div>
              <div className="h-24 flex items-center justify-between px-8 bg-white relative z-10">
                <div className="flex flex-col">
                  <span className="font-serif text-2xl font-semibold text-stone-900 tracking-tight">
                    {drink.name}
                  </span>
                  <span className="text-stone-400 text-sm font-medium mt-0.5">
                    {drink.type}
                  </span>
                </div>
                <button className="bg-stone-100 p-3 rounded-full text-stone-900 hover:bg-stone-900 hover:text-white transition-colors duration-300">
                  <Plus className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Drinks;
