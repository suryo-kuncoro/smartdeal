import React from 'react';
import { Zap, CheckCircle, Star, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-white pt-16 pb-24 px-6 overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-50/50 -skew-x-12 translate-x-1/2"></div>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 text-center md:text-left z-10">
          <div className="inline-block bg-yellow-400 text-yellow-900 text-xs font-black px-4 py-1.5 rounded-full mb-6 tracking-widest uppercase">
            PROMO AKHIR TAHUN 2025
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-slate-900 leading-[1.1] mb-6">
            Belanja Cerdas <br /> 
            Hasil <span className="text-blue-600 underline decoration-blue-200 decoration-8 underline-offset-4">Puas</span>.
          </h2>
          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-xl leading-relaxed">
            Temukan rekomendasi produk terbaik dari berbagai marketplace terpercaya. 
            Kami memfilter kualitas agar Anda mendapatkan yang terbaik.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-blue-600 text-white px-10 py-4 rounded-2xl font-black text-lg hover:bg-blue-700 hover:scale-105 transition shadow-2xl shadow-blue-200">
              LIHAT KATALOG
            </button>
            <button className="bg-white text-slate-900 border-2 border-slate-200 px-10 py-4 rounded-2xl font-black text-lg hover:bg-slate-50 transition">
              CARA BELI
            </button>
          </div>
        </div>
        
        <div className="flex-1 relative">
          <div className="w-full aspect-square bg-gradient-to-br from-blue-600 to-indigo-700 rounded-[3rem] shadow-2xl flex items-center justify-center p-12 rotate-3 hover:rotate-0 transition-transform duration-500">
            <div className="text-white text-center">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 p-6 rounded-3xl backdrop-blur-sm">
                  <Zap size={40} className="mx-auto mb-2 text-yellow-300" />
                  <p className="font-bold">Cepat</p>
                </div>
                <div className="bg-white/10 p-6 rounded-3xl backdrop-blur-sm">
                  <CheckCircle size={40} className="mx-auto mb-2 text-green-300" />
                  <p className="font-bold">Aman</p>
                </div>
                <div className="bg-white/10 p-6 rounded-3xl backdrop-blur-sm">
                  <Star size={40} className="mx-auto mb-2 text-orange-300" />
                  <p className="font-bold">Terbaik</p>
                </div>
                <div className="bg-white/10 p-6 rounded-3xl backdrop-blur-sm">
                  <Users size={40} className="mx-auto mb-2 text-blue-200" />
                  <p className="font-bold">Populer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;