import React from 'react';
import { ArrowRight } from 'lucide-react';
import { products } from '../data/products';

const FeaturedProducts = () => {
  return (
    <section className="py-24 px-6 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
          <div>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-4">
              Produk Unggulan
            </h2>
            <p className="text-slate-500 font-medium">
              Hand-picked by our experts for your needs.
            </p>
          </div>
          <button className="text-blue-600 font-bold flex items-center gap-2 hover:underline">
            Semua Kategori <ArrowRight size={20} />
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.slice(0, 3).map((product) => (
            <div 
              key={product.id} 
              className="group bg-white rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden border border-slate-100 flex flex-col"
            >
              <div className="h-64 bg-slate-100 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 group-hover:scale-110 transition-transform duration-700"></div>
                <product.icon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 text-blue-600/20 group-hover:text-blue-600/40 transition-colors" />
                <div className="absolute top-6 left-6 bg-white/90 backdrop-blur px-4 py-1.5 rounded-full text-xs font-black shadow-sm uppercase tracking-widest text-blue-600">
                  Kategori {product.title}
                </div>
              </div>
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-black mb-3 group-hover:text-blue-600 transition-colors uppercase">
                  {product.title}
                </h3>
                <p className="text-slate-500 mb-6 leading-relaxed">
                  Dapatkan penawaran terbaik untuk koleksi {product.title.toLowerCase()} yang telah teruji kualitasnya.
                </p>
                <button className="mt-auto w-full bg-slate-900 text-white py-4 rounded-2xl font-black hover:bg-blue-600 transition-all active:scale-95 shadow-lg shadow-slate-200 flex items-center justify-center gap-2">
                  Eksplor Sekarang <ArrowRight size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;