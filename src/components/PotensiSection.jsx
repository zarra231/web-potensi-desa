import { useState } from "react";
import { potensiData } from "../data/umkmData";
import PotensiCard from "./PotensiCard";
import CategoryFilter from "./CategoryFilter";

export default function PotensiSection({ onViewLocation }) {
  const [activeCategory, setActiveCategory] = useState("Semua");

  const filtered = activeCategory === "Semua"
    ? potensiData
    : potensiData.filter(u => u.category === activeCategory);

  return (
    <section id="potensi" style={{ padding: "72px 0", backgroundColor: "var(--warm-white)" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ marginBottom: 36, maxWidth: 580 }}>
          <div style={{
            fontSize: 12, fontWeight: 600, color: "var(--orange)",
            textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 10,
          }}>Direktori Potensi Desa</div>
          <h2 style={{ fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 700, color: "var(--charcoal)", marginBottom: 14, lineHeight: 1.25 }}>
            Potensi Desa Tegal Waru
          </h2>
          <p style={{ fontSize: 15, color: "var(--charcoal-soft)", lineHeight: 1.7 }}>
            Dari usaha mikro kecil hingga wisata alam dan warisan budaya — inilah kekayaan yang dimiliki Desa Tegal Waru yang patut dikenal dan didukung bersama.
          </p>
        </div>

        <CategoryFilter active={activeCategory} onChange={setActiveCategory} />

        {filtered.length > 0 ? (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 18 }} className="potensi-grid">
            {filtered.map(item => (
              <PotensiCard key={item.id} item={item} onViewLocation={onViewLocation} />
            ))}
          </div>
        ) : (
          <div style={{ textAlign: "center", padding: "48px 0", color: "var(--charcoal-soft)", fontSize: 15 }}>
            Tidak ada potensi dalam kategori ini.
          </div>
        )}
      </div>

      <style>{`
        .potensi-grid { grid-template-columns: repeat(4, 1fr) !important; }
        @media (max-width: 1024px) { .potensi-grid { grid-template-columns: repeat(3, 1fr) !important; } }
        @media (max-width: 768px)  { .potensi-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 480px)  { .potensi-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  );
}
