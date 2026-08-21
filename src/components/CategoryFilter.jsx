import { categories, categoryConfig } from "../data/umkmData";

const icons = {
  Semua: "🗺",
  UMKM: "🏪",
  Wisata: "🌿",
  Pertanian: "🌾",
  Budaya: "🎭",
};

export default function CategoryFilter({ active, onChange }) {
  return (
    <div
      style={{
        overflowX: "auto",
        paddingBottom: 4,
        marginBottom: 28,
        WebkitOverflowScrolling: "touch",
        scrollbarWidth: "none",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: 8,
          width: "max-content",
        }}
      >
        {categories.map((cat) => {
          const isActive = cat === active;

          const color =
            cat === "Semua"
              ? "var(--green-forest)"
              : categoryConfig[cat]?.color ||
                "var(--green-forest)";

          return (
            <button
              key={cat}
              type="button"
              onClick={() => onChange(cat)}
              style={{
                padding: "8px 18px",
                borderRadius: 20,

                // SEMUA TETAP PUNYA BORDER
                border: `1.5px solid ${
                  isActive ? color : "var(--border)"
                }`,

                // SEMUA TETAP PUTIH
                backgroundColor: "white",

                // FONT AKTIF BERUBAH SESUAI WARNA
                color: isActive
                  ? color
                  : "var(--charcoal-soft)",

                fontSize: 13,

                // Aktif sedikit lebih tebal
                fontWeight: isActive ? 600 : 500,

                cursor: "pointer",

                fontFamily:
                  "Poppins, sans-serif",

                transition:
                  "all 0.15s ease",

                whiteSpace: "nowrap",

                display: "flex",
                alignItems: "center",
                gap: 6,

                // Border aktif dibuat lebih jelas
                boxShadow: isActive
                  ? `0 2px 6px ${color}25`
                  : "none",
              }}
              onMouseOver={(e) => {
                if (!isActive) {
                  e.currentTarget.style.borderColor =
                    color;

                  e.currentTarget.style.color =
                    color;
                }
              }}
              onMouseOut={(e) => {
                if (!isActive) {
                  e.currentTarget.style.borderColor =
                    "var(--border)";

                  e.currentTarget.style.color =
                    "var(--charcoal-soft)";
                }
              }}
            >
              <span
                style={{
                  fontSize: 14,
                  lineHeight: 1,
                }}
              >
                {icons[cat] || "📍"}
              </span>

              {cat}
            </button>
          );
        })}
      </div>
    </div>
  );
}