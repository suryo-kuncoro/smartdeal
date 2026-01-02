import React, { useState } from 'react';
import { ShoppingCart, MessageCircle, Search } from 'lucide-react';
import MegaMenu from './MegaMenu';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between py-4 md:py-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 p-2 rounded-xl">
              <ShoppingCart className="text-white" size={24} />
            </div>
            <h1 className="text-2xl md:text-3xl font-black tracking-tighter">
              SMART<span className="text-blue-600">DEAL</span>
            </h1>
          </div>

          {/* Desktop Search Bar */}
          <div className="hidden lg:flex flex-1 max-w-md mx-10">
            <div className="relative w-full">
              <input 
                type="text" 
                placeholder="Cari produk terlaris..." 
                className="w-full bg-slate-100 border-none rounded-full py-2.5 px-5 pl-12 focus:ring-2 focus:ring-blue-500 transition-all"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-slate-600"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Desktop Consultation Button */}
          <div className="hidden md:block">
            <a 
              href="https://wa.me/62812345678" 
              className="bg-slate-900 text-white px-6 py-2.5 rounded-full font-bold hover:bg-blue-600 transition shadow-lg flex items-center gap-2"
            >
              <MessageCircle size={18} /> Chat Kami
            </a>
          </div>
        </div>

        {/* Mega Menu */}
        <MegaMenu isMobileMenuOpen={isMobileMenuOpen} />
      </div>
    </header>
  );
};

export default Header;