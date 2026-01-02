import React, { useState } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { products } from '../data/products';

const MegaMenu = ({ isMobileMenuOpen }) => {
  const [activeMenu, setActiveMenu] = useState(null);

  return (
    <nav className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:block border-t border-slate-100 py-2`}>
      <ul className="flex flex-col md:flex-row md:items-center md:justify-center gap-1">
        {products.map((product, index) => (
          <li 
            key={product.id}
            className="relative group"
            onMouseEnter={() => setActiveMenu(index)}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <button className="w-full md:w-auto flex items-center justify-between gap-2 px-4 py-3 text-sm font-bold text-slate-700 hover:bg-blue-50 hover:text-blue-600 rounded-xl transition-all">
              <product.icon className="w-4 h-4" />
              <span>{product.title}</span>
              <ChevronDown 
                className={`w-4 h-4 transition-transform duration-300 ${
                  activeMenu === index ? 'rotate-180' : ''
                }`} 
              />
            </button>

            {/* Mega Menu Dropdown */}
            {activeMenu === index && (
              <div className="md:absolute left-1/2 md:-translate-x-1/2 top-full w-full md:w-[900px] bg-white border border-slate-200 rounded-2xl shadow-2xl mt-1 p-8 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="flex items-center gap-4 mb-6 pb-6 border-b border-slate-100">
                  <div className="p-4 bg-blue-600 rounded-2xl shadow-lg shadow-blue-200 text-white">
                    <product.icon className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight">
                      {product.title}
                    </h3>
                    <p className="text-slate-500 font-medium">
                      Koleksi Produk Pilihan & Terlaris Minggu Ini
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[50vh] overflow-y-auto pr-2 custom-scrollbar">
                  {product.items.map((item, i) => (
                    
                      <a
                      href="#"
                      className="group/item p-4 bg-slate-50 border border-transparent rounded-2xl hover:bg-white hover:border-blue-500 hover:shadow-xl transition-all duration-300"
                    >
                      <div className="flex items-center gap-4">
                        <div className="flex-shrink-0 w-14 h-14 bg-white border border-slate-200 rounded-xl flex items-center justify-center text-blue-600 font-black text-xl shadow-sm group-hover/item:bg-blue-600 group-hover/item:text-white transition-colors">
                          {i + 1}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="text-base font-bold text-slate-900 group-hover/item:text-blue-600 mb-0.5 truncate">
                            {item.title}
                          </div>
                          <div className="text-xs font-mono text-blue-500 mb-1 opacity-70 truncate uppercase">
                            {item.link}
                          </div>
                          <div className="text-xs text-slate-500 leading-relaxed italic">
                            "{item.desc}"
                          </div>
                        </div>
                        <ArrowRight 
                          className="text-slate-300 group-hover/item:text-blue-500 group-hover/item:translate-x-1 transition-all" 
                          size={20} 
                        />
                      </div>
                    </a>
                  ))}
                </div>
                
                <div className="mt-6 pt-4 text-center">
                  <button className="text-sm font-bold text-blue-600 hover:underline">
                    Lihat Semua Kategori {product.title} →
                  </button>
                </div>
              </div>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default MegaMenu;