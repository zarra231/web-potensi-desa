import { ArrowRight, MapPin } from "lucide-react";
import heroTegalwaru from "../assets/images/hero-tegalwaru.jpg";

export default function HeroSection({
  onScrollToPotensi,
  onScrollToMap,
}) {
  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="beranda"
      className="hero-section"
    >
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <div className="hero-badge">
          <MapPin size={13} />
          Desa Tegal Waru · Ciampea · Bogor
        </div>

        <h1>
          Kenali Potensi
          <br />
          Desa Tegal Waru
        </h1>

        <p>
          Temukan UMKM, wisata, hasil pertanian, dan
          kekayaan budaya Desa Tegal Waru dalam satu
          tempat.
        </p>

        <div className="hero-buttons">
          <button
            className="hero-primary-btn"
            onClick={onScrollToPotensi}
          >
            Jelajahi Potensi
            <ArrowRight size={16} />
          </button>

          <button
            className="hero-secondary-btn"
            onClick={onScrollToMap}
          >
            Lihat Peta
          </button>
        </div>

        <div className="hero-info">
          <span>UMKM Lokal</span>
          <span>Wisata Desa</span>
          <span>Pertanian</span>
          <span>Budaya Lokal</span>
        </div>
      </div>

      <div className="hero-location">
        <span>●</span>
        Desa Tegal Waru, Kecamatan Ciampea
      </div>

      <style>{`
        .hero-section {
          position: relative;
          min-height: 680px;
          margin-top: 0;
          display: flex;
          align-items: center;
          overflow: hidden;

          background-image: url(${heroTegalwaru});
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background:
            linear-gradient(
              90deg,
              rgba(10, 28, 16, 0.72) 0%,
              rgba(10, 28, 16, 0.48) 42%,
              rgba(10, 28, 16, 0.15) 75%,
              rgba(10, 28, 16, 0.05) 100%
            );
        }

        .hero-content {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 1160px;
          margin: 0 auto;
          padding: 100px 24px 80px;
        }

        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 7px 13px;
          margin-bottom: 22px;

          color: white;
          background: rgba(255,255,255,0.15);
          border: 1px solid rgba(255,255,255,0.25);
          border-radius: 20px;

          font-size: 12px;
          font-weight: 500;
          backdrop-filter: blur(5px);
        }

        .hero-content h1 {
          max-width: 650px;
          margin: 0 0 20px;

          color: white;
          font-size: clamp(38px, 6vw, 68px);
          line-height: 1.08;
          font-weight: 700;
          letter-spacing: -1.5px;
        }

        .hero-content p {
          max-width: 520px;
          margin: 0 0 30px;

          color: rgba(255,255,255,0.9);
          font-size: 16px;
          line-height: 1.75;
        }

        .hero-buttons {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
        }

        .hero-primary-btn,
        .hero-secondary-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;

          padding: 12px 20px;
          border-radius: 8px;

          font-family: Poppins, sans-serif;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
        }

        .hero-primary-btn {
          color: white;
          background: var(--green-forest);
          border: 1px solid var(--green-forest);
        }

        .hero-primary-btn:hover {
          background: var(--green-soft);
          transform: translateY(-2px);
        }

        .hero-secondary-btn {
          color: white;
          background: rgba(255,255,255,0.12);
          border: 1px solid rgba(255,255,255,0.6);
          backdrop-filter: blur(4px);
        }

        .hero-secondary-btn:hover {
          background: white;
          color: var(--green-forest);
        }

        .hero-info {
          display: flex;
          gap: 18px;
          flex-wrap: wrap;
          margin-top: 34px;

          color: rgba(255,255,255,0.8);
          font-size: 12px;
        }

        .hero-info span {
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .hero-info span:not(:last-child)::after {
          content: "•";
          margin-left: 8px;
          color: rgba(255,255,255,0.45);
        }

        .hero-location {
          position: absolute;
          z-index: 2;
          bottom: 22px;
          left: 50%;
          transform: translateX(-50%);

          color: rgba(255,255,255,0.85);
          font-size: 11px;
          white-space: nowrap;
        }

        .hero-location span {
          color: #9aca65;
          margin-right: 6px;
        }

        @media (max-width: 768px) {
          .hero-section {
            min-height: 600px;
            background-position: 60% center;
          }

          .hero-overlay {
            background:
              linear-gradient(
                180deg,
                rgba(10,28,16,0.25),
                rgba(10,28,16,0.75)
              );
          }

          .hero-content {
            padding: 100px 22px 80px;
          }

          .hero-content h1 {
            font-size: 42px;
          }

          .hero-content p {
            font-size: 14px;
          }

          .hero-info {
            gap: 10px;
          }

          .hero-location {
            bottom: 15px;
          }
        }
      `}</style>
    </section>
  );
}