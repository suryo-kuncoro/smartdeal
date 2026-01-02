import React from 'react';
import { ShoppingCart, Star } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-blue-600 p-2 rounded-xl">
                <ShoppingCart className="text-white" size={24} />
              </div>
              <h1 className="text-2xl font-black tracking-tighter">
                SMART<span className="text-blue-600">DEAL</span>
              </h1>
            </div>
            <p className="text-slate-400 text-lg max-w-sm mb-8 leading-relaxed">
              Kami adalah platform kurasi produk terbaik dari berbagai marketplace. 
              Membantu Anda belanja hemat dan berkualitas.
            </p>
            <div className="flex gap-4">
              {[1, 2, 3, 4].map(i => (
                <div 
                  key={i} 
                  className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center hover:bg-blue-600 cursor-pointer transition"
                >
                  <Star size={20} fill="currentColor" />
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-black text-xl mb-6 uppercase tracking-wider">Navigasi</h4>
            <ul className="space-y-4 text-slate-400 font-medium">
              <li><a href="#" className="hover:text-blue-500 transition">Tentang Kami</a></li>
              <li><a href="#" className="hover:text-blue-500 transition">Katalog Produk</a></li>
              <li><a href="#" className="hover:text-blue-500 transition">Kontak Kerjasama</a></li>
              <li><a href="#" className="hover:text-blue-500 transition">Syarat & Ketentuan</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-black text-xl mb-6 uppercase tracking-wider">Bantuan</h4>
            <ul className="space-y-4 text-slate-400 font-medium">
              <li><a href="#" className="hover:text-blue-500 transition">Cara Belanja</a></li>
              <li><a href="#" className="hover:text-blue-500 transition">Pengiriman</a></li>
              <li><a href="#" className="hover:text-blue-500 transition">Kebijakan Privasi</a></li>
              <li><a href="#" className="hover:text-blue-500 transition">FAQ</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-slate-500 text-sm font-medium uppercase tracking-widest">
          <p>&copy; 2025 SmartDeal Indonesia. All rights reserved.</p>
          <p>Made with ❤️ for smart shoppers</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;