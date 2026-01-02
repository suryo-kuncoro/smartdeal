import { Home, School, Zap, Shirt, Dumbbell } from 'lucide-react';

export const products = [
  {
    id: 1,
    title: "RUMAH TANGGA",
    icon: Home,
    items: Array(10).fill(null).map((_, i) => ({
      title: `Peralatan Dapur ${i + 1}`,
      link: "shopee.co.id/produk-affiliate",
      desc: "Kualitas premium untuk dapur minimalis Anda."
    }))
  },
  {
    id: 2,
    title: "SEKOLAH",
    icon: School,
    items: Array(10).fill(null).map((_, i) => ({
      title: `Perlengkapan Sekolah ${i + 1}`,
      link: "tokopedia.com/produk-sekolah",
      desc: "Peralatan belajar lengkap untuk prestasi maksimal."
    }))
  },
  {
    id: 3,
    title: "ELEKTRONIK",
    icon: Zap,
    items: Array(10).fill(null).map((_, i) => ({
      title: `Gadget & Elektronik ${i + 1}`,
      link: "lazada.co.id/elektronik-pilihan",
      desc: "Teknologi terbaru dengan garansi resmi."
    }))
  },
  {
    id: 4,
    title: "FASHION",
    icon: Shirt,
    items: Array(10).fill(null).map((_, i) => ({
      title: `Pakaian & Aksesoris ${i + 1}`,
      link: "shopee.co.id/fashion-trendy",
      desc: "Tampil percaya diri dengan gaya terkini."
    }))
  },
  {
    id: 5,
    title: "OLAHRAGA",
    icon: Dumbbell,
    items: Array(10).fill(null).map((_, i) => ({
      title: `Peralatan Olahraga ${i + 1}`,
      link: "tokopedia.com/sport-gear",
      desc: "Alat olahraga profesional untuk performa terbaik."
    }))
  }
];