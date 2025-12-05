import React from 'react';
import { MapPin, Instagram, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full py-12 border-t border-amber-200/50 mt-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2 opacity-70">
          <MapPin className="h-5 w-5 text-amber-600" />
          <span className="text-lg text-stone-600">Milwaukee, Wisconsin</span>
        </div>
        
        <div className="text-stone-400 text-sm">
          © 2024 Treasure Taste. All rights reserved.
        </div>
        <div className="flex gap-4">
          <a href="#" className="text-amber-500 hover:text-amber-700 transition-colors">
            <Instagram className="h-6 w-6" />
          </a>
          <a href="#" className="text-amber-500 hover:text-amber-700 transition-colors">
            <Facebook className="h-6 w-6" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;