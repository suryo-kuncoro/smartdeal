import React from 'react';
import { ExternalLink, Star, Smartphone, Home, Zap, ArrowRight, CheckCircle2, Utensils } from 'lucide-react';
import './index.css';

// ==========================================
// 1. TEMPAT UPDATE LINK PRODUK (EDIT DI SINI)
// ==========================================

const dataRumahTangga = [
  { id: 1, productName: "Minyak Goreng Sawit Premium - Jernih, Berkualitas & Hemat (Pilihan Terbaik Masakan Sehat Keluarga)", affiliateLink: "https://s.shopee.co.id/1gC4WuDMpt", desc: "Terjual 10rb+", price: "Rp 24.500 - Rp52.500" },
  { id: 2, productName: "Mama Lemon Sabun Cuci Piring Jeruk Nipis Pouch 680 ml/690 gr", affiliateLink: "https://s.shopee.co.id/9AI5SmiBZ6", desc: "Murah Meriah", price: "Rp 17.900" },
  { id: 3, productName: "STOK SETAHUN! Tisu Wajah Kiloan 1000g - Facial Tissue Super Lembut & Hemat", affiliateLink: "https://s.shopee.co.id/2B8Lhw7rs6", desc: "Solusi hemat belanja bulanan! Tisu Facial Kiloan 1000s dengan tekstur serat yang halus dan tidak mudah hancur", price: "Rp 28.815" },
  { id: 4, productName: "[SNI] Speeds Playmat Bayi Jumbo 180x200cm - Karpet Lipat Empuk & Anti Slip", affiliateLink: "https://s.shopee.co.id/4AtQKmXdSg", desc: "Berikan area bermain yang aman dan nyaman untuk si kecil!", price: "Rp 123.000" },
  { id: 5, productName: "TISSUE KILOAN/ TISUE WAJAH / TISSU FACIAL - 1000S", affiliateLink: "https://s.shopee.co.id/2B8Lhw7rs6", desc: "Jauh lebih Hemat", price: "Rp 28.815" },
];

const dataSekolah = [
  { id: 1, productName: "Speaker Murotal Al-Quran Rhimoa V600 Mini", affiliateLink: "https://s.shopee.co.id/50SX5Q8yw4", desc: "Nikmati lantunan Al-Quran kualitas jernih dalam desain ringkas yang elegan; Rhimoa V600 Mini adalah sahabat setia untuk hafalan dan ibadah harian keluarga Anda", price: "Rp 105.550" },
  { id: 2, productName: "Lagi Viral! Pin Charm Sandal Baim Huruf & Angka - Bikin Sandalmu Tampil Beda!", affiliateLink: "https://s.shopee.co.id/qcyMS8ky4", desc: "Hias sandal kesayanganmu dengan Pin Charm Huruf & Angka! Kamu bisa bebas susun nama, inisial, atau angka kesukaanmu", price: "Rp 2.980" },
  { id: 3, productName: "Undangan Nikah Murah Mewah! Seri Glossy BW A - Tampilan Mengkilap, Cetak Cepat & Berkualitas", affiliateLink: "https://s.shopee.co.id/6KxuvuixyF", desc: "Momen sekali seumur hidup, undangan harus tetap istimewa! Dapatkan Undangan Simple Rich yang mewah tapi tetap hemat budget", price: "Rp 775" },
  { id: 4, productName: "Kotak Makan Stainless Steel Food Grade - Wadah Kedap Udara Anti Karat untuk Stok Kulkas & Bekal", affiliateLink: "https://s.shopee.co.id/1BFon8YuO5", desc: "Beralih ke yang lebih sehat! Wadah stainless anti pecah dan anti bau, rahasia kulkas rapi dan bahan masakan tetap segar", price: "Rp 201.388" },
];

const dataSnack = [
  { id: 1, productName: "Remukan Singkong 'Kriuk Parah' - RASA ORIGINAL GURIH ASIN, Isi Super Mantap 1kg!", affiliateLink: "https://s.shopee.co.id/4VWGhOZQyD", desc: "Penyelamat Nasi Hangat! Remukan Singkong Asin Gurih 1kg - Teman Makan Paling Pas.", price: "Rp 21.500" },
  { id: 2, productName: "Remukan Singkong 'Kriuk Parah' - RASA BALADO, Isi Super Mantap 1kg!", affiliateLink: "https://s.shopee.co.id/qcyL43tm9", desc: "Penyelamat Nasi Hangat! Remukan Singkong Asin Gurih 1kg - Teman Makan Paling Pas.", price: "Rp 23.500" },
  { id: 3, productName: "Bawang Goreng Brebes Asli - Super Kriuk & Wangi (Kemasan Toples Ekonomis)", affiliateLink: "https://s.shopee.co.id/6KxuuGloEE", desc: "Praktis: Kemasan toples rapat, tinggal buka dan tabur!", price: "Rp 8.800" },
];

const dataGadget = [
  { id: 1, productName: "Apple iPhone 17 Pro Max - Performa Masa Depan dengan Kamera Pro Tercanggih & Chipset Terkuat", affiliateLink: "https://s.shopee.co.id/50SY5QuT3a", desc: "Rasakan revolusi teknologi dalam genggaman dengan iPhone 17 Pro Max yang menghadirkan inovasi layar tercanggih, daya tahan baterai luar biasa, dan kualitas kamera sinematik terbaik untuk setiap momen spesial Anda", price: "Rp 25.749.000" },
  { id: 2, productName: "HUAWEI WATCH FIT 4 Series - Smartwatch Stylish dengan GPS, Baterai 10 Hari & Fitur Kesehatan Lengkap", affiliateLink: "https://s.shopee.co.id/5fiEsxfVku", desc: "Tampil lebih sporty dan elegan dengan smartwatch layar lebar yang dibekali GPS akurat, pelacakan kesehatan canggih, serta daya tahan baterai hingga 10 hari untuk mendukung gaya hidup aktif Anda", price: "Rp 1.748.000" },
  { id: 3, productName: "HUAWEI Band 10 Smartband - Desain Slim Aluminum Alloy dengan Analisis Tidur Pro & Asisten Kesehatan Mental", affiliateLink: "https://s.shopee.co.id/4fphhGAkNf", desc: "Lebih dari sekadar penghitung langkah! Miliki asisten kesehatan pribadi yang mengerti tingkat stres dan emosimu. Desain aluminumnya bikin penampilan makin berkelas!", price: "Rp 469.000" },
  { id: 4, productName: "HUAWEI Pura 80 Ultra - Smartphone Fotografi Level Pro dengan 10x Optical Zoom, Sensor 1 Inci & Kunlun Glass", affiliateLink: "https://s.shopee.co.id/2g4dJiSKQu", desc: "Definisi kamera profesional dalam saku! Dengan sensor 1 inci dan AI pintar, foto malam atau jarak jauh tetap jernih maksimal. Pilihan tepat untuk kamu yang mengejar kualitas visual tanpa batas", price: "Rp 20.999.000" },
  { id: 5, productName: "Vivo X300 5G - RAM Hingga 16GB/512GB Garansi Resmi Vivo Indonesia (Smartphone Flagship Performa Kilat)", affiliateLink: "https://s.shopee.co.id/7KqSsmpAkD", desc: "Penyimpanan lega, performa tanpa lag! Pilihan tepat buat kamu yang butuh HP kencang untuk multitasking dan konten kreator. Dijamin aman dengan Garansi Resmi Vivo Indonesia!", price: "Rp 14.999.000" },
  // { id: 6, productName: "Apple iPhone 17 Pro Max - Performa Masa Depan dengan Kamera Pro Tercanggih & Chipset Terkuat", affiliateLink: "https://s.shopee.co.id/50SY5QuT3a", desc: "Rasakan revolusi teknologi dalam genggaman dengan iPhone 17 Pro Max yang menghadirkan inovasi layar tercanggih, daya tahan baterai luar biasa, dan kualitas kamera sinematik terbaik untuk setiap momen spesial Anda", price: "Rp 25.749.000" },
 // { id: 7, productName: "Apple iPhone 17 Pro Max - Performa Masa Depan dengan Kamera Pro Tercanggih & Chipset Terkuat", affiliateLink: "https://s.shopee.co.id/50SY5QuT3a", desc: "Rasakan revolusi teknologi dalam genggaman dengan iPhone 17 Pro Max yang menghadirkan inovasi layar tercanggih, daya tahan baterai luar biasa, dan kualitas kamera sinematik terbaik untuk setiap momen spesial Anda", price: "Rp 25.749.000" },
// { id: 8, productName: "Apple iPhone 17 Pro Max - Performa Masa Depan dengan Kamera Pro Tercanggih & Chipset Terkuat", affiliateLink: "https://s.shopee.co.id/50SY5QuT3a", desc: "Rasakan revolusi teknologi dalam genggaman dengan iPhone 17 Pro Max yang menghadirkan inovasi layar tercanggih, daya tahan baterai luar biasa, dan kualitas kamera sinematik terbaik untuk setiap momen spesial Anda", price: "Rp 25.749.000" },
 // { id: 9, productName: "Apple iPhone 17 Pro Max - Performa Masa Depan dengan Kamera Pro Tercanggih & Chipset Terkuat", affiliateLink: "https://s.shopee.co.id/50SY5QuT3a", desc: "Rasakan revolusi teknologi dalam genggaman dengan iPhone 17 Pro Max yang menghadirkan inovasi layar tercanggih, daya tahan baterai luar biasa, dan kualitas kamera sinematik terbaik untuk setiap momen spesial Anda", price: "Rp 25.749.000" },
 // { id: 10, productName: "Apple iPhone 17 Pro Max - Performa Masa Depan dengan Kamera Pro Tercanggih & Chipset Terkuat", affiliateLink: "https://s.shopee.co.id/50SY5QuT3a", desc: "Rasakan revolusi teknologi dalam genggaman dengan iPhone 17 Pro Max yang menghadirkan inovasi layar tercanggih, daya tahan baterai luar biasa, dan kualitas kamera sinematik terbaik untuk setiap momen spesial Anda", price: "Rp 25.749.000" },
];

const dataSkincare = [
  { id: 1, productName: "DAZZLE ME Setting Spray: Makeup Anti Badai & Awet 24 Jam!", affiliateLink: "https://s.shopee.co.id/50SXJVPqMC", desc: "Dapatkan hasil akhir glowing dan lembap alami! Setting spray ini bukan cuma bikin makeup awet, tapi juga menghidrasi kulit agar tidak pecah (crack) sepanjang hari", price: "Rp 42.900" },
  { id: 2, productName: "Parfum Scarlett Whitening 30ml - Wangi Tahan Lama, Elegan & Mudah Dibawa Kemana Saja", affiliateLink: "https://s.shopee.co.id/13rNzy41R", desc: "Ukuran travel friendly yang pas banget di tas. Cocok buat kamu yang aktif dan ingin selalu wangi fresh kapan saja. Sekali semprot, wanginya nempel seharian!", price: "Rp 9.500" },
  { id: 3, productName: "Celak Ameerah Kajal - Eyeliner & Alis Praktis untuk Mata Cantik Tajam Seketika!", affiliateLink: "https://s.shopee.co.id/5L5NkbMNiH", desc: "Percantik mata dan alismu dalam sekejap dengan Ameerah Kajal, celak praktis multifungsi yang memberikan warna hitam pekat yang tajam sekaligus menutrisi area mata", price: "Rp 15.400" },
  { id: 4, productName: "Daster Rayon Jumbo Febriana - Baju Tidur Kekinian Grade A Busui Friendly & Super Adem", affiliateLink: "https://s.shopee.co.id/5fiE9h4WdV", desc: "Definisi cantik nggak harus ribet! Daster rayon super adem, ukuran lega, pas banget buat harian atau baju tidur", price: "Rp 54.000" },
  { id: 5, productName: "Daster Rayon Premium Dianputri - Baju Tidur Busui Friendly Adem & Modis untuk Aktivitas di Rumah", affiliateLink: "https://s.shopee.co.id/6Kxux1wLFL", desc: "Bahan rayon Grade A yang dinginnya juara! Daster Dianputri bikin kamu tetap rapi dan nyaman meski lagi sibuk di rumah", price: "Rp 53.500" },
  { id: 6, productName: "Ciput Anti Budeg Kaos Rayon Premium - Inner Hijab Anti Selip, Lembut & Nyaman Tanpa Tekanan", affiliateLink: "https://s.shopee.co.id/1VsfCGu340", desc: "Solusi hijab rapi tanpa bikin telinga sakit! Ciput anti budeg ini super lembut dan nggak bikin pusing meskipun dipakai seharian", price: "Rp 4.999" },
  { id: 7, productName: "Celana Hommy Kulot Part 3 - Piyama Cotton Premium Motif Terbaru, Adem & Stylish untuk Santai", affiliateLink: "https://s.shopee.co.id/3LKK5CC9TN", desc: "Motif terbaru sudah rilis! Kulot katun yang dinginnya nggak ada lawan, bikin tampilan tetap kece meski cuma di rumah", price: "Rp 32.900" },
  { id: 8, productName: "Everyday Stripe Pants Bangkok - Celana Baggy Kulot Pinstripe Elegan untuk Kantor & Kuliah", affiliateLink: "https://s.shopee.co.id/AKU4QGlCZZ", desc: "Auto kelihatan tinggi dan slim! Celana Bangkok pinstripe yang lagi viral, bahan premium nggak perlu ribet setrika", price: "Rp 59.999" },
  { id: 9, productName: "Kuku Palsu Handmade Premium - Kuku Hias Cantik untuk Pesta & Lamaran (Free Lem & Alat Lepas)", affiliateLink: "https://s.shopee.co.id/4LCrHQ4YvG", desc: "Cantik instan tanpa harus ke salon! Kuku hias mewah untuk lamaran atau pesta, sudah lengkap tinggal pasang. Hemat waktu, hasil tetap memukau!", price: "Rp 29.900" },
  { id: 10, productName: "Rok Plisket Premium Grade A - Rok Mayung Flowy Fit to XXL Bahan Tebal, Elegan & Anti Terawang", affiliateLink: "https://s.shopee.co.id/50SY4s8C2t", desc: "Tampil anggun dengan rok plisket premium yang memiliki lipatan tegas dan awet, berbahan jatuh yang elastis hingga ukuran XXL sehingga nyaman digunakan untuk acara formal maupun santai", price: "Rp 35.999" },
  { id: 11, productName: "Marina Compact Powder UV Brighten Up - Bedak Padat Halus dengan Perlindungan UV A/B & Vitamin E", affiliateLink: "https://s.shopee.co.id/W08ijWCMl", desc: "Wajah cerah bebas kilap seharian! Bedak padat andalan yang ringan di wajah, plus perlindungan matahari biar kulit nggak gampang kusam", price: "11.200" },
];
// ==========================================
// 2. KONFIGURASI KATEGORI
// ==========================================
const topCategories = [
  { title: "Rumah Tangga", icon: <Home size={22} />, items: dataRumahTangga, theme: "blue" },
  { title: "Sekolah & Kantor", icon: <Star size={22} />, items: dataSekolah, theme: "amber" },
  { title: "Snack Hits & Jajanan Viral", icon: <Utensils size={22} />, items: dataSnack, theme: "red" },
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
    red: { header: "bg-red-500 text-white", iconBg: "bg-red-400", hover: "hover:bg-red-50", button: "text-red-600 bg-red-50 hover:bg-red-100", num: "text-red-500 bg-red-100" },
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
      <header className="bg-gradient-to-r from-orange-500 to-orange-600 text-white pt-16 pb-24 px-4 text-center rounded-b-[3rem] shadow-xl mb-[-4rem]">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-700/50 border border-slate-600 text-slate-300 text-xs font-semibold uppercase tracking-wider mb-2">
            <Star size={12} className="text-yellow-400" fill="currentColor"/> Rekomendasi Minggu Ini
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight mb-4">SMARTDEAL SHOPEE</h1>
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