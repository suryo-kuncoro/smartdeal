import React from 'react';
import { ExternalLink, Star, Smartphone, Shirt, Home, Zap, ArrowRight, CheckCircle2 } from 'lucide-react';
import './index.css';

// ==========================================
// 1. TEMPAT UPDATE LINK PRODUK (EDIT DI SINI)
// ==========================================

const dataRumahTangga = [
  { id: 1, productName: "Pel Lantai Viral Otomatis", affiliateLink: "https://shope.ee/link1", desc: "Diskon 50% • Terjual 10rb+", price: "Rp 45.000" },
  { id: 2, productName: "Sapu Magnetik Aesthetic", affiliateLink: "https://shope.ee/link2", desc: "Viral di TikTok", price: "Rp 32.000" },
  // Tambahkan sampai 10 produk...
  { id: 10, productName: "Rak Piring Minimalis", affiliateLink: "https://shope.ee/link10", desc: "Bahan Stainless", price: "Rp 150.000" },
];

const dataSekolah = [
  { id: 1, productName: "Tas Laptop Waterproof", affiliateLink: "#", desc: "Muat 15 inch", price: "Rp 120.000" },
  // Tambahkan produk lainnya...
];

const dataFashion = [
  { id: 1, productName: "Kemeja Oversize Linen", affiliateLink: "#", desc: "Bahan Adem", price: "Rp 85.000" },
];

const dataGadget = [
  { id: 1, productName: "TWS Bluetooth Bass", affiliateLink: "#", desc: "Delay Rendah", price: "Rp 199.000" },
];

const dataSkincare = [
  { id: 1, productName: "Sunscreen Mist SPF 50", affiliateLink: "#", desc: "No Whitecast", price: "Rp 65.000" },
];

// ==========================================
// 2. KONFIGURASI KATEGORI
// ==========================================

const topCategories = [
  { title: "Rumah Tangga", icon: <Home size={22} />, items: dataRumahTangga, theme: "blue" },
  { title: "Sekolah & Kantor", icon: <Star size={22} />, items: dataSekolah, theme: "amber" },
  { title: "Fashion Wanita", icon: <Shirt size={22} />, items: dataFashion, theme: "rose" },
];

const bottomCategories = [
  { title: "Gadget Viral", icon: <Smartphone size={22} />, items: dataGadget, theme: "indigo" },
  { title: "Skincare & Beauty", icon: <Zap size={22} />, items: dataSkincare, theme: "emerald" },
];

// --- HELPER UNTUK TEMA ---
const getThemeClasses = (theme) => {
  const themes = {
    blue: { header: "bg-blue-600 text-white", iconBg: "bg-blue-500", hover: "hover:bg-blue-50", button: "text-blue-600 bg-blue-50 hover:bg-blue-100", num: "text-blue-500 bg-blue-100" },
    amber: { header: "bg-amber-500 text-white", iconBg: "bg-amber-400", hover: "hover:bg-amber-50", button: "text-amber-600 bg-amber-50 hover:bg-amber-100", num: "text-amber-500 bg-amber-100" },
    rose: { header: "bg-rose-500 text-white", iconBg: "bg-rose-400", hover: "hover:bg-rose-50", button: "text-rose-600 bg-rose-50 hover:bg-rose-100", num: "text-rose-500 bg-rose-100" },
    indigo: { header: "bg-indigo-600 text-white", iconBg: "bg-indigo-500", hover: "hover:bg-indigo-50", button: "text-indigo-600 bg-indigo-50 hover:bg-indigo-100", num: "text-indigo-500 bg-indigo-100" },
    emerald: { header: "bg-emerald-600 text-white", iconBg: "bg-emerald-500", hover: "hover:bg-emerald-50", button: "text-emerald-600 bg-emerald-50 hover:bg-emerald-100", num: "text-emerald-500 bg-emerald-100" }
  };
  return themes[theme] || themes.blue;
};

// --- COMPONENTS ---
const CategoryColumn = ({ title, items, icon, theme }) => {
  const styles = getThemeClasses(theme);
  return (
    <div className="flex flex-col w-full bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-100 hover:shadow-xl transition-shadow duration-300">
      <div className={`${styles.header} p-4 flex items-center justify-between`}>
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-lg ${styles.iconBg} bg-opacity-30 backdrop-blur-sm`}>{icon}</div>
          <h2 className="font-bold uppercase tracking-wide text-base md:text-lg">{title}</h2>
        </div>
      </div>
      <div className="flex flex-col h-full divide-y divide-slate-100">
        {items.map((item) => (
          <a key={item.id} href={item.affiliateLink} target="_blank" rel="noopener noreferrer" className={`group relative p-4 transition-colors duration-200 ${styles.hover} flex items-start gap-4`}>
            <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm mt-1 ${styles.num}`}>{item.id}</div>
            <div className="flex-grow">
              <div className="flex justify-between items-start">
                <h3 className="font-semibold text-slate-800 group-hover:text-black leading-tight mb-1">{item.productName}</h3>
                <ExternalLink size={16} className="text-slate-300 group-hover:text-slate-500" />
              </div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-xs font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full">{item.price}</span>
              </div>
              <p className="text-xs text-slate-500 line-clamp-1 flex items-center gap-1">
                <CheckCircle2 size={10} className="text-green-500" /> {item.desc}
              </p>
            </div>
          </a>
        ))}
      </div>
      <div className="p-4 bg-white border-t border-slate-100">
        <button className={`w-full py-2.5 rounded-xl text-sm font-bold flex items-center justify-center gap-2 transition-all ${styles.button}`}>
          Lihat Semua Produk <ArrowRight size={16}/>
        </button>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 pb-20">
      <header className="bg-gradient-to-r from-slate-900 to-slate-800 text-white pt-16 pb-24 px-4 text-center rounded-b-[3rem] shadow-xl mb-[-4rem]">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-700/50 border border-slate-600 text-slate-300 text-xs font-semibold uppercase tracking-wider mb-2">
            <Star size={12} className="text-yellow-400" fill="currentColor"/> Rekomendasi Minggu Ini
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-4">RACUN SHOPEE & TIKTOK</h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
            Kumpulan link produk termurah dan viral. Klik link untuk menuju toko.
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 md:px-6 relative z-10 space-y-12">
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {topCategories.map((cat, idx) => (
              <CategoryColumn key={idx} {...cat} />
            ))}
          </div>
        </section>

        <div className="relative py-4 flex items-center justify-center">
            <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-200"></div></div>
            <span className="relative bg-slate-50 px-4 text-sm font-semibold text-slate-400 uppercase tracking-widest">Kategori Lainnya</span>
        </div>

        <section className="max-w-5xl mx-auto w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {bottomCategories.map((cat, idx) => (
              <CategoryColumn key={idx} {...cat} />
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default App;