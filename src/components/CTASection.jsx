import { ArrowRight, Heart } from "lucide-react";

export default function CTASection() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section style={{ padding: "72px 0", backgroundColor: "var(--green-dark)" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 48px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 48, flexWrap: "wrap", justifyContent: "center" }} className="cta-flex">
          <div style={{ flex: 1, minWidth: 260 }}>
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 6,
              padding: "5px 12px", backgroundColor: "rgba(255,255,255,0.1)",
              borderRadius: 20, fontSize: 12, fontWeight: 600,
              color: "#a8d880", marginBottom: 18,
            }}>
              <Heart size={11} /> Dukung Potensi Lokal
            </div>
            <h2 style={{
              fontSize: "clamp(22px, 3vw, 32px)", fontWeight: 700,
              color: "white", marginBottom: 16, lineHeight: 1.25,
            }}>
              Yuk, Kenali dan Dukung<br />Potensi Desa Tegal Waru!
            </h2>
            <p style={{
              fontSize: 15, color: "#a8c890", lineHeight: 1.8,
              marginBottom: 28, maxWidth: 480,
            }}>
              Dengan mengenal usaha lokal, mengunjungi wisata desa, dan menghargai warisan budaya, kita ikut membantu tumbuh-kembang potensi ekonomi dan sosial Desa Tegal Waru.
            </p>
            <button onClick={() => scrollTo("potensi")}
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "12px 24px", backgroundColor: "var(--orange)",
                color: "white", border: "none", borderRadius: 9,
                fontSize: 14, fontWeight: 600, cursor: "pointer",
                fontFamily: "Poppins, sans-serif", transition: "all 0.15s",
              }}
              onMouseOver={e => { e.currentTarget.style.backgroundColor = "var(--orange-light)"; e.currentTarget.style.transform = "translateY(-1px)"; }}
              onMouseOut={e => { e.currentTarget.style.backgroundColor = "var(--orange)"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              Jelajahi Potensi Desa <ArrowRight size={15} />
            </button>
          </div>

          {/* Illustration */}
          <div style={{ flexShrink: 0 }}>
            <svg viewBox="0 0 220 180" fill="none" xmlns="http://www.w3.org/2000/svg"
              style={{ width: 200, opacity: 0.9 }}>
              {/* Ground */}
              <ellipse cx="110" cy="165" rx="88" ry="10" fill="#1A3A0A" opacity="0.5"/>
              {/* Shop */}
              <rect x="60" y="90" width="80" height="60" rx="4" fill="#4A7C23"/>
              <rect x="60" y="76" width="80" height="18" rx="4" fill="#2D5016"/>
              <rect x="88" y="115" width="24" height="35" rx="2" fill="#1A3A0A"/>
              <rect x="68" y="98" width="18" height="12" rx="2" fill="#93C5FD" opacity="0.8"/>
              <rect x="114" y="98" width="18" height="12" rx="2" fill="#93C5FD" opacity="0.8"/>
              <path d="M54 76 L146 76 L141 88 L59 88 Z" fill="#C4622A"/>
              {/* Tree left */}
              <circle cx="32" cy="100" r="20" fill="#4A7C23"/>
              <rect x="29" y="118" width="6" height="22" rx="2" fill="#2D5016"/>
              {/* Tree right */}
              <circle cx="186" cy="105" r="15" fill="#4A7C23"/>
              <rect x="183" y="118" width="6" height="18" rx="2" fill="#2D5016"/>
              {/* Rice field */}
              <rect x="28" y="140" width="50" height="20" rx="3" fill="#3a6a18" opacity="0.7"/>
              {[33,40,47,54,61,68].map(x => <line key={x} x1={x} y1="140" x2={x} y2="160" stroke="#5a9a28" strokeWidth="1.5" opacity="0.7"/>)}
              {/* Sun */}
              <circle cx="185" cy="35" r="16" fill="#F59E0B" opacity="0.7"/>
              {[0,45,90,135,180,225,270,315].map(a => {
                const r = a * Math.PI / 180;
                return <line key={a} x1={185+22*Math.cos(r)} y1={35+22*Math.sin(r)} x2={185+28*Math.cos(r)} y2={35+28*Math.sin(r)} stroke="#F59E0B" strokeWidth="2" opacity="0.5"/>;
              })}
              {/* Clouds */}
              <ellipse cx="60" cy="28" rx="22" ry="10" fill="white" opacity="0.2"/>
              <ellipse cx="80" cy="24" rx="16" ry="8" fill="white" opacity="0.2"/>
              <ellipse cx="44" cy="24" rx="14" ry="7" fill="white" opacity="0.2"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
