import { MapPin, ChevronRight } from "lucide-react";
import { categoryConfig } from "../data/umkmData";

export default function PotensiCard({ item, onViewLocation }) {
  // ============================================================
  // KONFIGURASI KATEGORI
  // ============================================================

  const cfg = categoryConfig[item.category] || {
    color: "#555",
    bgLight: "#eee",
    emoji: "📍",
  };

  // ============================================================
  // HANDLE GOOGLE MAPS
  // ============================================================

  const handleLocation = () => {
    // Jika parent menyediakan fungsi onViewLocation
    if (onViewLocation) {
      onViewLocation(item);
      return;
    }

    // Jika tidak ada fungsi dari parent,
    // langsung buka Google Maps
    if (item.gmaps) {
      window.open(
        item.gmaps,
        "_blank",
        "noopener,noreferrer"
      );
    }
  };

  return (
    <div
      style={{
        backgroundColor: "white",
        border: "1px solid var(--border)",
        borderRadius: 14,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        boxShadow: "0 1px 4px rgba(0,0,0,0.04)",
        transition: "transform 0.18s, box-shadow 0.18s",
        height: "100%",
      }}

      // ==========================================================
      // HOVER CARD
      // ==========================================================

      onMouseOver={(e) => {
        e.currentTarget.style.transform =
          "translateY(-3px)";

        e.currentTarget.style.boxShadow =
          "0 6px 20px rgba(0,0,0,0.09)";
      }}

      onMouseOut={(e) => {
        e.currentTarget.style.transform =
          "translateY(0)";

        e.currentTarget.style.boxShadow =
          "0 1px 4px rgba(0,0,0,0.04)";
      }}
    >

      {/* ========================================================
          IMAGE
      ======================================================== */}

      <div
        style={{
          height: 180,
          backgroundColor: cfg.bgLight,
          position: "relative",
          overflow: "hidden",
        }}
      >

        {item.image ? (
          <img
            src={item.image}
            alt={item.name}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />
        ) : (
          // ======================================================
          // FALLBACK JIKA FOTO TIDAK ADA
          // ======================================================

          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                fontSize: 44,
              }}
            >
              {cfg.emoji}
            </span>
          </div>
        )}

        {/* ======================================================
            OVERLAY FOTO
        ====================================================== */}

        {item.image && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0.08), rgba(0,0,0,0.15))",
              pointerEvents: "none",
            }}
          />
        )}

        {/* ======================================================
            CATEGORY BADGE
        ====================================================== */}

        <span
          style={{
            position: "absolute",
            top: 10,
            right: 10,

            backgroundColor: cfg.color,
            color: "white",

            fontSize: 10,
            fontWeight: 700,

            padding: "4px 10px",

            borderRadius: 10,

            zIndex: 2,

            boxShadow:
              "0 2px 6px rgba(0,0,0,0.15)",
          }}
        >
          {item.category}
        </span>
      </div>

      {/* ========================================================
          CARD CONTENT
      ======================================================== */}

      <div
        style={{
          padding: "14px 16px",
          flex: 1,

          display: "flex",
          flexDirection: "column",
        }}
      >

        {/* ======================================================
            SUBCATEGORY
        ====================================================== */}

        {item.subcategory && (
          <span
            style={{
              fontSize: 11,
              fontWeight: 600,

              color: cfg.color,

              marginBottom: 6,

              textTransform: "uppercase",

              letterSpacing: "0.04em",
            }}
          >
            {item.subcategory}
          </span>
        )}

        {/* ======================================================
            NAME
        ====================================================== */}

        <h3
          style={{
            fontSize: 14,
            fontWeight: 700,

            color: "var(--charcoal)",

            margin: "0 0 6px",

            lineHeight: 1.35,
          }}
        >
          {item.name}
        </h3>

        {/* ======================================================
            PRODUCT
        ====================================================== */}

        {item.product && (
          <p
            style={{
              fontSize: 12,

              color: "var(--charcoal-soft)",

              margin: "0 0 10px",

              lineHeight: 1.6,

              flex: 1,
            }}
          >
            {item.product}
          </p>
        )}

        {/* ======================================================
            ADDRESS
        ====================================================== */}

        <div
          style={{
            display: "flex",
            alignItems: "flex-start",

            gap: 5,

            fontSize: 11,

            color: "#8a9a80",

            marginBottom: 6,

            lineHeight: 1.4,
          }}
        >
          <MapPin
            size={12}
            color="#8a9a80"
            style={{
              flexShrink: 0,
              marginTop: 1,
            }}
          />

          <span>
            {item.address || "Tegalwaru"}
          </span>
        </div>

        {/* ======================================================
            RT / RW
        ====================================================== */}

        <div
          style={{
            fontSize: 11,

            color: "#8a9a80",

            marginBottom: 12,

            paddingLeft: 17,
          }}
        >
          RT {item.rt || "—"} · RW {item.rw || "—"}
        </div>

        {/* ======================================================
            BUTTON GOOGLE MAPS
        ====================================================== */}

        {item.gmaps && (
          <button
            type="button"
            onClick={handleLocation}
            style={{
              width: "100%",

              padding: "8px 14px",

              backgroundColor: cfg.bgLight,

              color: cfg.color,

              border: `1.5px solid ${cfg.bgLight}`,

              borderRadius: 8,

              fontSize: 12,

              fontWeight: 600,

              cursor: "pointer",

              fontFamily:
                "Poppins, sans-serif",

              display: "flex",

              alignItems: "center",

              justifyContent: "center",

              gap: 5,

              transition:
                "all 0.15s ease",
            }}

            onMouseOver={(e) => {
              e.currentTarget.style.backgroundColor =
                cfg.color;

              e.currentTarget.style.color =
                "white";
            }}

            onMouseOut={(e) => {
              e.currentTarget.style.backgroundColor =
                cfg.bgLight;

              e.currentTarget.style.color =
                cfg.color;
            }}
          >
            Lihat Maps

            <ChevronRight size={13} />
          </button>
        )}

      </div>
    </div>
  );
}