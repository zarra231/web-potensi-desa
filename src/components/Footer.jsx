import { ArrowUp } from "lucide-react";
import logoT from "../assets/images/logo_T.png";

export default function Footer() {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const navigation = [
    ["beranda", "Beranda"],
    ["potensi", "Potensi"],
    ["peta", "Peta"],
  ];

  return (
    <footer
      style={{
        backgroundColor: "rgb(76, 137, 55)",
        color: "white",
      }}
    >
      <div
        style={{
          maxWidth: 1160,
          margin: "0 auto",
          padding: "44px 24px 22px",
        }}
      >
        {/* Footer Main */}
        <div
          className="footer-main"
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: 50,
            paddingBottom: 32,
          }}
        >
          {/* Brand */}
          <div style={{ maxWidth: 420 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                marginBottom: 14,
              }}
            >
              {/* Logo */}
              <img
                src={logoT}
                alt="Logo Desa Tegal Waru"
                style={{
                  width: 40,
                  height: 40,
                  objectFit: "contain",
                  flexShrink: 0,
                }}
              />

              <div>
                <div
                  style={{
                    fontSize: 14,
                    fontWeight: 700,
                    color: "#ffffff",
                    lineHeight: 1.2,
                  }}
                >
                  POTENSI DESA
                </div>

                <div
                  style={{
                    fontSize: 10,
                    color: "#b7d1b9",
                    marginTop: 2,
                  }}
                >
                  Tegal Waru · Ciampea
                </div>
              </div>
            </div>

            <p
              style={{
                margin: 0,
                maxWidth: 360,
                fontSize: 12,
                lineHeight: 1.8,
                color: "#c4d6c5",
              }}
            >
              Media informasi digital untuk mengenal potensi UMKM, wisata,
              pertanian, dan budaya Desa Tegal Waru.
            </p>
          </div>

          {/* Navigation */}
          <div style={{ minWidth: 180 }}>
            <div
              style={{
                fontSize: 12,
                fontWeight: 700,
                color: "#ffffff",
                marginBottom: 14,
              }}
            >
              Navigasi
            </div>

            <div
              className="footer-navigation"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 22,
              }}
            >
              {navigation.map(([id, label]) => (
                <button
                  key={id}
                  onClick={() => scrollTo(id)}
                  style={{
                    padding: 0,
                    border: "none",
                    background: "none",
                    cursor: "pointer",
                    fontFamily: "Poppins, sans-serif",
                    fontSize: 12,
                    color: "#c4d6c5",
                    transition: "color 0.15s",
                  }}
                  onMouseOver={(e) => {
                    e.currentTarget.style.color = "#ffffff";
                  }}
                  onMouseOut={(e) => {
                    e.currentTarget.style.color = "#c4d6c5";
                  }}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div
          className="footer-bottom"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.12)",
            paddingTop: 20,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 20,
          }}
        >
          <div
            style={{
              fontSize: 11,
              color: "#a9c3ab",
              lineHeight: 1.6,
            }}
          >
            <span
              style={{
                color: "#ffffff",
                fontWeight: 600,
              }}
            >
              Kelompok 14 KKN Universitas Ibn Khaldun Bogor
            </span>{" "}
            · 2026
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 640px) {
          .footer-main {
            flex-direction: column !important;
            gap: 28px !important;
          }

          .footer-navigation {
            gap: 18px !important;
          }

          .footer-bottom {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 12px !important;
          }
        }
      `}</style>
    </footer>
  );
}