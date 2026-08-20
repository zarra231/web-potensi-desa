import { categories, categoryConfig } from "../data/umkmData";

const icons = { Semua: "🗺", UMKM: "🏪", Wisata: "🌿", Pertanian: "🌾", Budaya: "🎭" };

export default function CategoryFilter({ active, onChange }) {
  return (
    <div style={{ overflowX: "auto", paddingBottom: 4, marginBottom: 28, WebkitOverflowScrolling: "touch", scrollbarWidth: "none" }}>
      <div style={{ display: "flex", gap: 8, width: "max-content" }}>
        {categories.map((cat) => {
          const isActive = cat === active;
          const cfg = categoryConfig[cat];
          return (
            <button key={cat} onClick={() => onChange(cat)}
              style={{
                padding: "8px 18px", borderRadius: 20,
                border: isActive ? `2px solid ${cfg?.color || "var(--green-forest)"}` : "1.5px solid var(--border)",
                backgroundColor: isActive ? (cfg?.color || "var(--green-forest)") : "white",
                color: isActive ? "white" : "var(--charcoal-soft)",
                fontSize: 13, fontWeight: isActive ? 600 : 500,
                cursor: "pointer", fontFamily: "Poppins, sans-serif",
                transition: "all 0.15s", whiteSpace: "nowrap",
                display: "flex", alignItems: "center", gap: 6,
              }}
              onMouseOver={e => {
                if (!isActive) {
                  e.currentTarget.style.borderColor = cfg?.color || "var(--green-forest)";
                  e.currentTarget.style.color = cfg?.color || "var(--green-forest)";
                }
              }}
              onMouseOut={e => {
                if (!isActive) {
                  e.currentTarget.style.borderColor = "var(--border)";
                  e.currentTarget.style.color = "var(--charcoal-soft)";
                }
              }}
            >
              <span style={{ fontSize: 14 }}>{icons[cat]}</span>
              {cat}
            </button>
          );
        })}
      </div>
    </div>
  );
}
