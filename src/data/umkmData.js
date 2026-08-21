// ============================================================
// DATA POTENSI DESA TEGAL WARU
// Data berdasarkan hasil pendataan lapangan
// ============================================================

import pandaiBesiImg from "../assets/images/pandai_besi.jpg";
import suteruFarmImg from "../assets/images/suteru_farm.jpeg";
import sentraUmkmImg from "../assets/images/sentra_umkm.jpeg";
import tasnimFishpondImg from "../assets/images/tasnim.jpeg";
import waruFarmLandImg from "../assets/images/waru_farm_land.jpeg";
import aufiCraftImg from "../assets/images/aufi.jpeg";
import rumahJogloImg from "../assets/images/rumah_joglo.jpeg";
import mtFarmImg from "../assets/images/mt_farm.jpeg";
import kantorDesaImg from "../assets/images/kantor_desa.jpeg";

// Jika foto 3 data baru sudah tersedia,
// aktifkan import berikut dan sesuaikan nama file:
//
// import herbalTegalWaruImg from "../assets/images/herbal_tegal_waru.jpeg";
// import kerupukTegalWaruImg from "../assets/images/kerupuk_tegal_waru.jpeg";
// import browniesTegalWaruImg from "../assets/images/brownies_tegal_waru.jpeg";


// ============================================================
// DATA POTENSI
// ============================================================

export const potensiData = [

  // ==========================================================
  // 1. UKM PANDAI BESI
  // ==========================================================

  {
    id: 1,
    name: "UKM Pandai Besi Tegalwaru",
    category: "Kerajinan",
    subcategory: "Pandai Besi",
    product: "Kerajinan dan produk pandai besi",
    address: "Tegalwaru",
    rt: "—",
    rw: "02",

    latitude: -6.565476,
    longitude: 106.700893,

    gmaps:
      "https://maps.app.goo.gl/BXCXBi2PsMRkfkjb7",

    image: pandaiBesiImg,

    description:
      "UKM lokal yang bergerak dalam pembuatan berbagai produk berbahan dasar besi.",
  },


  // ==========================================================
  // 2. UMKM KERAJINAN BESI BU EVI
  // ==========================================================

  {
    id: 2,
    name: "UMKM Kerajinan Besi Bu Evi",
    category: "Kerajinan",
    subcategory: "Kerajinan Besi",
    product: "Kerajinan berbahan besi",
    address: "Tegalwaru",
    rt: "—",
    rw: "02",

    latitude: -6.565740,
    longitude: 106.700746,

    gmaps:
      "https://maps.app.goo.gl/ZDYDDriyKcpGG1zU8",

    image: null,

    description:
      "UMKM yang menghasilkan berbagai produk kerajinan berbahan dasar besi.",
  },


  // ==========================================================
  // 3. AUFI CRAFT
  // ==========================================================

  {
    id: 3,
    name: "AUFI CRAFT",
    category: "Kerajinan",
    subcategory: "Craft",
    product: "Seserahan dan timangan bayi",
    address: "Tegalwaru",
    rt: "04",
    rw: "01",

    latitude: -6.568767,
    longitude: 106.703341,

    gmaps:
      "https://maps.app.goo.gl/XQmgo9KGPcgYPinJ6",

    image: aufiCraftImg,

    description:
      "Usaha kerajinan yang menyediakan produk seserahan dan timangan bayi.",
  },


  // ==========================================================
  // 4. WARU FARM LAND
  // ==========================================================

  {
    id: 4,
    name: "Agroeduwisata Waru Farm Land",
    category: "Wisata",
    subcategory: "Agro",
    product: "Agrowisata dan edukasi pertanian",
    address: "Tegalwaru",
    rt: "—",
    rw: "05",

    latitude: -6.570412,
    longitude: 106.695801,

    gmaps:
      "https://maps.app.goo.gl/hQBnw1nb5MfqmAQ9A",

    image: waruFarmLandImg,

    description:
      "Destinasi agroeduwisata yang menawarkan pengalaman wisata sekaligus edukasi pertanian.",
  },


  // ==========================================================
  // 5. TASNIM FISHPOND
  // ==========================================================

  {
    id: 5,
    name: "Tasnim Fishpond",
    category: "Pertanian",
    subcategory: "Perikanan",
    product: "Budidaya ikan",
    address: "Tegalwaru",
    rt: "—",
    rw: "05",

    latitude: -6.573777,
    longitude: 106.695456,

    gmaps:
      "https://maps.app.goo.gl/VuV92kKfc91J511M8",

    image: tasnimFishpondImg,

    description:
      "Tempat budidaya ikan yang bergerak di bidang perikanan dan akuakultur.",
  },


  // ==========================================================
  // 6. RUMAH JOGLO
  // ==========================================================

  {
    id: 6,
    name: "Kampoeng Wisata Rumah Joglo",
    category: "Wisata",
    subcategory: "Penginapan",
    product: "Wisata dan penginapan",
    address: "Tegalwaru",
    rt: "01",
    rw: "03",

    latitude: -6.564048,
    longitude: 106.702896,

    gmaps:
      "https://maps.app.goo.gl/TgxvTzCnR3oNJrca7",

    image: rumahJogloImg,

    description:
      "Kampoeng wisata dengan konsep rumah joglo yang dapat digunakan untuk kegiatan wisata dan penginapan.",
  },


  // ==========================================================
  // 7. SENTRA UMKM
  // ==========================================================

  {
    id: 7,
    name: "SENTRA UMKM TEGALWARU BOGOR",
    category: "UMKM",
    subcategory: "Sentra UMKM",
    product: "Berbagai produk UMKM",
    address: "Tegalwaru",
    rt: "—",
    rw: "05",

    latitude: -6.570411,
    longitude: 106.695318,

    gmaps:
      "https://maps.app.goo.gl/NrBvESyMnJGveTyi9",

    image: sentraUmkmImg,

    description:
      "Sentra UMKM yang menjadi tempat berkumpulnya berbagai usaha masyarakat Desa Tegalwaru.",
  },


  // ==========================================================
  // 8. MT FARM
  // ==========================================================

  {
    id: 8,
    name: "Mitra Tani Farm (MT Farm)",
    category: "Pertanian",
    subcategory: "Peternakan",
    product: "Peternakan",
    address: "Tegalwaru",
    rt: "04",
    rw: "05",

    latitude: -6.570652,
    longitude: 106.696069,

    gmaps:
      "https://maps.app.goo.gl/5UwYqCB4EiGB278b8",

    image: mtFarmImg,

    description:
      "Usaha peternakan yang bergerak dalam bidang budidaya dan pengelolaan ternak.",
  },


  // ==========================================================
  // 9. SUTERU FRESH MILK
  // ==========================================================

  {
    id: 9,
    name: "SUTERU Fresh Milk",
    category: "Pertanian",
    subcategory: "Peternakan",
    product: "Susu segar",
    address: "Tegalwaru",
    rt: "—",
    rw: "—",

    latitude: -6.562305,
    longitude: 106.7010340,

    gmaps:
      "https://maps.app.goo.gl/CAEfmobGyUuQ364L6",

    image: suteruFarmImg,

    description:
      "Usaha peternakan dan pertanian yang menghasilkan produk susu segar.",
  },


  // ==========================================================
  // 10. KANTOR DESA TEGAL WARU
  // ==========================================================

  {
    id: 10,
    name: "Kantor Desa Tegal Waru",
    category: "Pemerintahan",
    subcategory: "Kantor Desa",
    product: "Pelayanan pemerintahan desa",
    address: "Desa Tegal Waru",
    rt: "06",
    rw: "03",

    latitude: -6.56891688,
    longitude: 106.7005688,

    gmaps:
      "https://maps.app.goo.gl/CqyCTyki4AFr3ESY6",

    image: kantorDesaImg,

    description:
      "Kantor Pemerintahan Desa Tegal Waru sebagai pusat pelayanan administrasi dan pemerintahan desa.",
  },


  // ==========================================================
  // 11. UKM HERBAL TEGAL WARU
  // ==========================================================

  {
    id: 11,
    name: "UKM Herbal Tegal Waru",
    category: "UMKM",
    subcategory: "Herbal",
    product: "Produk herbal",
    address: "Tegalwaru",
    rt: "01",
    rw: "01",

    latitude: -6.5726096,
    longitude: 106.6969285,

    gmaps:
      "https://maps.app.goo.gl/nMaNMDPMreuop3Be6",

    description:
      "UKM masyarakat Desa Tegal Waru yang bergerak dalam bidang produk herbal.",
  },


  // ==========================================================
  // 12. UKM KERUPUK TEGAL WARU
  // ==========================================================

  {
    id: 12,
    name: "UKM Kerupuk Tegal Waru",
    category: "UMKM",
    subcategory: "Makanan",
    product: "Kerupuk",
    address: "Tegalwaru",
    rt: "01",
    rw: "01",

    // Dioffset ~50m ke timur agar tidak overlap dengan item 11
    latitude: -6.5726096,
    longitude: 106.6973806,

    gmaps:
      "https://maps.app.goo.gl/e9JhEXvc4gp9qWHL7",

    description:
      "UKM masyarakat Desa Tegal Waru yang bergerak dalam produksi makanan berupa kerupuk.",
  },


  // ==========================================================
  // 13. UKM BROWNIES TEGAL WARU
  // ==========================================================

  {
    id: 13,
    name: "UKM Brownies Tegal Waru",
    category: "UMKM",
    subcategory: "Makanan",
    product: "Brownies",
    address: "Tegalwaru",
    rt: "02",
    rw: "03",

    latitude: -6.568472,
    longitude: 106.696111,

    gmaps:
      "https://maps.app.goo.gl/ZFq1GKMAKkaV4btk7",

    description:
      "UKM masyarakat Desa Tegal Waru yang bergerak dalam produksi makanan berupa brownies.",
  },

];


// ============================================================
// KATEGORI
// ============================================================

export const categories = [
  "Semua",
  "UMKM",
  "Kerajinan",
  "Wisata",
  "Pertanian",
  "Pemerintahan",
];


// ============================================================
// KONFIGURASI KATEGORI
// ============================================================

export const categoryConfig = {

  UMKM: {
    color: "#2D5016",
    bgLight: "#e4f0d0",
    emoji: "🏪",
  },

  Kerajinan: {
    color: "#92400E",
    bgLight: "#fef3c7",
    emoji: "🔨",
  },

  Wisata: {
    color: "#0369A1",
    bgLight: "#dbeafe",
    emoji: "🌿",
  },

  Pertanian: {
    color: "#7A5C1E",
    bgLight: "#fef3c7",
    emoji: "🌾",
  },

  Pemerintahan: {
    color: "#3d403e",
    bgLight: "#e5eee8",
    emoji: "🏛️",
  },

};