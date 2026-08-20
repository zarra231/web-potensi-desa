import { MapPin, ChevronRight } from "lucide-react";
import { categoryConfig } from "../data/umkmData";

export default function PotensiCard({ item, onViewLocation }) {
  const cfg = categoryConfig[item.category] || {
    color: "#555",
    bgLight: "#eee",
    emoji: "📍"
  };

  const handleLocation = () => {
    // Jika parent menyediakan fungsi onViewLocation
    if (onViewLocation) {
      onViewLocation(item);
      return;
    }

    // Fallback langsung ke Google Maps
    if (item.gmaps) {
      window.open(item.gmaps, "_blank", "noopener,noreferrer");
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
        height: "100%"
      }}

      onMouseOver={(e) => {
        e.currentTarget.style.transform = "translateY(-3px)";
        e.currentTarget.style.boxShadow =
          "0 6px 20px rgba(0,0,0,0.09)";
      }}

      onMouseOut={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow =
          "0 1px 4px rgba(0,0,0,0.04)";
      }}
    >

      {/* =========================
          IMAGE / ICON AREA
      ========================== */}

      <div
        style={{
          height: 120,
          backgroundColor: cfg.bgLight,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden"
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
              position: "absolute",
              top: 0,
              left: 0
            }}
          />
        ) : (
          <span
            style={{
              fontSize: 44
            }}
          >
            {cfg.emoji}
          </span>
        )}

        {/* Category Badge */}

        <span
          style={{
            position: "absolute",
            top: 10,
            right: 10,
            backgroundColor: cfg.color,
            color: "white",
            fontSize: 10,
            fontWeight: 700,
            padding: "3px 9px",
            borderRadius: 10,
            zIndex: 1
          }}
        >
          {item.category}
        </span>
      </div>


      {/* =========================
          CARD CONTENT
      ========================== */}

      <div
        style={{
          padding: "14px 16px",
          flex: 1,
          display: "flex",
          flexDirection: "column"
        }}
      >

        {/* Subcategory */}

        <span
          style={{
            fontSize: 11,
            fontWeight: 600,
            color: cfg.color,
            marginBottom: 6,
            textTransform: "uppercase",
            letterSpacing: "0.04em"
          }}
        >
          {item.subcategory}
        </span>


        {/* Name */}

        <h3
          style={{
            fontSize: 14,
            fontWeight: 700,
            color: "var(--charcoal)",
            marginBottom: 6,
            lineHeight: 1.35
          }}
        >
          {item.name}
        </h3>


        {/* Product */}

        <p
          style={{
            fontSize: 12,
            color: "var(--charcoal-soft)",
            marginBottom: 10,
            lineHeight: 1.6,
            flex: 1
          }}
        >
          {item.product}
        </p>


        {/* Address */}

        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            gap: 5,
            fontSize: 11,
            color: "#8a9a80",
            marginBottom: 6
          }}
        >
          <MapPin
            size={12}
            color="#8a9a80"
            style={{
              flexShrink: 0,
              marginTop: 1
            }}
          />

          <span>
            {item.address}
          </span>
        </div>


        {/* RT / RW */}

        <div
          style={{
            fontSize: 11,
            color: "#8a9a80",
            marginBottom: 12,
            paddingLeft: 17
          }}
        >
          RT {item.rt} · RW {item.rw}
        </div>


        {/* Button */}

        <button
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
            fontFamily: "Poppins, sans-serif",

            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 5,

            transition: "all 0.15s"
          }}

          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = cfg.color;
            e.currentTarget.style.color = "white";
          }}

          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = cfg.bgLight;
            e.currentTarget.style.color = cfg.color;
          }}
        >
          Lihat Lokasi

          <ChevronRight size={13} />
        </button>

      </div>
    </div>
  );
}