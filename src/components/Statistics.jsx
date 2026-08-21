import { Store, Trees, Wheat, Music, Map, PawPrint } from "lucide-react";

const stats = [
  { icon: Store,  value: "4",  label: "UMKM Terdata",     color: "#2D5016", bg: "#e4f0d0" },
  { icon: Trees,  value: "2",  label: "Destinasi Wisata", color: "#0369A1", bg: "#dbeafe" },
  { icon: PawPrint,  value: "2",  label: "Sektor Peternakan", color: "#7A5C1E", bg: "#fef3c7" },
  { icon: Music,  value: "3",  label: "Kerajinan",   color: "#7C3AED", bg: "#ede9fe" },
  { icon: Map,    value: "1",  label: "Peta Digital",      color: "#2D5016", bg: "#e4f0d0" },
];

export default function Statistics() {
  return (
    <section style={{
      backgroundColor: "var(--cream)",
      borderTop: "1px solid var(--border)",
      borderBottom: "1px solid var(--border)",
      padding: "40px 0",
    }}>
      <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 14 }} className="stats-grid">
          {stats.map(({ icon: Icon, value, label, color, bg }) => (
            <div key={label} style={{
              backgroundColor: "white", border: "1px solid var(--border)",
              borderRadius: 12, padding: "18px 14px",
              display: "flex", alignItems: "center", gap: 12,
              boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
            }}>
              <div style={{
                width: 40, height: 40, borderRadius: 10, backgroundColor: bg,
                display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
              }}>
                <Icon size={18} color={color} />
              </div>
              <div>
                <div style={{ fontSize: "clamp(17px, 2vw, 22px)", fontWeight: 700, color: "var(--charcoal)", lineHeight: 1.1 }}>{value}</div>
                <div style={{ fontSize: 11, color: "var(--charcoal-soft)", marginTop: 2 }}>{label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .stats-grid { grid-template-columns: repeat(5, 1fr) !important; }
        @media (max-width: 900px) { .stats-grid { grid-template-columns: repeat(3, 1fr) !important; } }
        @media (max-width: 540px) { .stats-grid { grid-template-columns: repeat(2, 1fr) !important; } }
      `}</style>
    </section>
  );
}
