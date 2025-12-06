import React, { useState } from "react";
import { UtensilsCrossed, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "../img/treasureLogo.png";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full py-8 px-6 md:px-12 flex items-center justify-between max-w-7xl mx-auto relative z-50">
      <div className="flex items-center gap-3">
        {/* <div className="h-12 w-12 rounded-full border border-amber-300 flex items-center justify-center bg-white/50 backdrop-blur-sm shadow-sm"> */}
        {/* <UtensilsCrossed className="text-amber-400 h-6 w-6" /> */}
        <img src={Logo} alt="menu icon" className="h-12 w-12 object-contain" />
        {/* </div> */}
        <div className="flex flex-col">
          <span className="text-amber-400 font-semibold text-lg tracking-tight leading-none">
            Treasure Taste
          </span>
          <span className="text-stone-500 text-xs font-medium tracking-wide">
            Food Truck
          </span>
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-10">
        <Link
          to="/"
          className="text-amber-400/80 hover:text-amber-500 font-medium text-lg transition-colors"
        >
          Home
        </Link>
        <Link
          to="/menu"
          className="text-amber-400/80 hover:text-amber-500 font-medium text-lg transition-colors"
        >
          Menu
        </Link>
        <Link
          to="/contact"
          className="text-amber-400/80 hover:text-amber-500 font-medium text-lg transition-colors"
        >
          Contact
        </Link>
        <Link
          to="/about"
          className="text-amber-400/80 hover:text-amber-500 font-medium text-lg transition-colors"
        >
          About
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-amber-400"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="h-8 w-8" /> : <Menu className="h-8 w-8" />}
      </button>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-24 left-0 right-0 bg-[#FFFBF0] border-t border-amber-100 shadow-xl p-6 md:hidden flex flex-col gap-4 items-center animate-float-up">
          <a
            href="#"
            className="text-stone-800 font-medium text-lg"
            onClick={() => setIsOpen(false)}
          >
            Home
          </a>
          <a
            href="#menu"
            className="text-stone-800 font-medium text-lg"
            onClick={() => setIsOpen(false)}
          >
            Menu
          </a>
          <a
            href="#"
            className="text-stone-800 font-medium text-lg"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
          <a
            href="#"
            className="text-stone-800 font-medium text-lg"
            onClick={() => setIsOpen(false)}
          >
            About
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
