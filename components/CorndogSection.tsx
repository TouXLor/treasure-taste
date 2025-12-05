import React from 'react';
import { ArrowRight } from 'lucide-react';

const CorndogSection: React.FC = () => {
  return (
    <section id="menu" className="w-full max-w-7xl mx-auto px-6 py-24">
      <div className="flex flex-col items-center justify-center mb-20">
        <h2 className="font-serif text-5xl text-stone-900 tracking-tight font-medium text-center drop-shadow-sm">Corn Dogs</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 h-auto">
        {/* Item 1 */}
        <div className="group relative flex flex-col items-center justify-between p-8 rounded-[3rem] transition-all duration-500 hover:bg-[#EAE0C8] hover:shadow-xl hover:shadow-stone-200">
          <div className="relative w-full flex-1 flex items-center justify-center min-h-[260px]">
            <span className="font-serif text-8xl text-stone-200 font-medium leading-none select-none transition-all duration-500 ease-out group-hover:opacity-0 group-hover:scale-75 absolute transform">1</span>
            <div className="transition-all duration-500 ease-out opacity-0 scale-50 translate-y-12 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 absolute">
              <svg viewBox="0 0 100 200" className="h-56 w-auto drop-shadow-lg">
                <rect x="45" y="150" width="10" height="40" fill="#D4A373" rx="4"></rect>
                <rect x="25" y="30" width="50" height="130" fill="#FCD34D" rx="25" stroke="#F59E0B" strokeWidth="2"></rect>
                <path d="M35 45 Q 50 45, 65 45 M35 65 Q 50 65, 65 65 M35 85 Q 50 85, 65 85" stroke="#FFF7ED" strokeWidth="3" strokeLinecap="round" fill="none" className="opacity-80"></path>
                <path d="M38 40 C 38 40, 50 50, 62 40 C 62 40, 50 60, 38 60 C 38 60, 50 70, 62 60 C 62 60, 50 80, 38 80 C 38 80, 50 90, 62 80" stroke="#EAB308" strokeWidth="4" fill="none" strokeLinecap="round"></path>
              </svg>
            </div>
          </div>
          <div className="flex flex-col items-center z-10 w-full mt-4">
            <h3 className="font-serif text-xl text-stone-900 font-semibold tracking-tight mb-8 text-center group-hover:scale-105 transition-transform duration-300">Original</h3>
            <button className="flex items-center gap-2 px-8 py-2.5 rounded-full border border-stone-800 text-stone-800 bg-transparent font-serif font-medium text-sm hover:bg-stone-800 hover:text-orange-50 transition-all duration-300">
              View <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Item 2 */}
        <div className="group relative flex flex-col items-center justify-between p-8 rounded-[3rem] transition-all duration-500 hover:bg-[#FEF3C7] hover:shadow-xl hover:shadow-amber-100">
          <div className="relative w-full flex-1 flex items-center justify-center min-h-[260px]">
            <span className="font-serif text-8xl text-amber-300 font-medium leading-none select-none transition-all duration-500 ease-out group-hover:opacity-0 group-hover:scale-75 absolute transform">2</span>
            <div className="transition-all duration-500 ease-out opacity-0 scale-50 translate-y-12 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 absolute">
              <svg viewBox="0 0 100 200" className="h-56 w-auto drop-shadow-lg">
                <rect x="45" y="150" width="10" height="40" fill="#D4A373" rx="4"></rect>
                <rect x="25" y="30" width="50" height="130" fill="#FDE68A" rx="25" stroke="#D97706" strokeWidth="2"></rect>
                <path d="M30 40 Q35 35 40 40 T50 40 T60 40 T70 40" stroke="#D97706" strokeWidth="2" fill="none" opacity="0.5"></path>
                <path d="M28 60 Q33 55 38 60 T48 60 T58 60 T68 60" stroke="#D97706" strokeWidth="2" fill="none" opacity="0.5"></path>
              </svg>
            </div>
          </div>
          <div className="flex flex-col items-center z-10 w-full mt-4">
            <h3 className="font-serif text-xl text-stone-900 font-semibold tracking-tight mb-8 text-center group-hover:scale-105 transition-transform duration-300">Ramen</h3>
            <button className="flex items-center gap-2 px-8 py-2.5 rounded-full border border-stone-800 text-stone-800 bg-transparent font-serif font-medium text-sm hover:bg-stone-800 hover:text-orange-50 transition-all duration-300">
              View <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Item 3 */}
        <div className="group relative flex flex-col items-center justify-between p-8 rounded-[3rem] transition-all duration-500 hover:bg-[#FFE4E6] hover:shadow-xl hover:shadow-red-100">
          <div className="relative w-full flex-1 flex items-center justify-center min-h-[260px]">
            <span className="font-serif text-8xl text-red-400 font-medium leading-none select-none transition-all duration-500 ease-out group-hover:opacity-0 group-hover:scale-75 absolute transform">3</span>
            <div className="transition-all duration-500 ease-out opacity-0 scale-50 translate-y-12 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 absolute">
              <svg viewBox="0 0 100 200" className="h-56 w-auto drop-shadow-lg">
                <rect x="45" y="150" width="10" height="40" fill="#D4A373" rx="4"></rect>
                <rect x="25" y="30" width="50" height="130" fill="#FCA5A5" rx="25" stroke="#DC2626" strokeWidth="2"></rect>
                <circle cx="35" cy="40" r="2" fill="#DC2626" opacity="0.6"></circle>
                <circle cx="55" cy="50" r="3" fill="#DC2626" opacity="0.6"></circle>
                <circle cx="45" cy="70" r="2" fill="#DC2626" opacity="0.6"></circle>
              </svg>
            </div>
          </div>
          <div className="flex flex-col items-center z-10 w-full mt-4">
            <h3 className="font-serif text-xl text-stone-900 font-semibold tracking-tight mb-8 text-center group-hover:scale-105 transition-transform duration-300">Hot Cheeto</h3>
            <button className="flex items-center gap-2 px-8 py-2.5 rounded-full border border-stone-800 text-stone-800 bg-transparent font-serif font-medium text-sm hover:bg-stone-800 hover:text-orange-50 transition-all duration-300">
              View <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Item 4 */}
        <div className="group relative flex flex-col items-center justify-between p-8 rounded-[3rem] transition-all duration-500 hover:bg-[#FFEDD5] hover:shadow-xl hover:shadow-orange-100">
          <div className="relative w-full flex-1 flex items-center justify-center min-h-[260px]">
            <span className="font-serif text-8xl text-amber-500 font-medium leading-none select-none transition-all duration-500 ease-out group-hover:opacity-0 group-hover:scale-75 absolute transform">4</span>
            <div className="transition-all duration-500 ease-out opacity-0 scale-50 translate-y-12 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 absolute">
              <svg viewBox="0 0 100 200" className="h-56 w-auto drop-shadow-lg">
                <rect x="45" y="150" width="10" height="40" fill="#D4A373" rx="4"></rect>
                <rect x="25" y="30" width="50" height="130" fill="#FDBA74" rx="25" stroke="#EA580C" strokeWidth="2"></rect>
                <rect x="20" y="40" width="15" height="15" rx="3" fill="#FDBA74" stroke="#EA580C" strokeWidth="1.5"></rect>
              </svg>
            </div>
          </div>
          <div className="flex flex-col items-center z-10 w-full mt-4">
            <h3 className="font-serif text-xl text-stone-900 font-semibold tracking-tight mb-8 text-center group-hover:scale-105 transition-transform duration-300">Potato</h3>
            <button className="flex items-center gap-2 px-8 py-2.5 rounded-full border border-stone-800 text-stone-800 bg-transparent font-serif font-medium text-sm hover:bg-stone-800 hover:text-orange-50 transition-all duration-300">
              View <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CorndogSection;