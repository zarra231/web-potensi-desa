import { MapPin } from "lucide-react";
import tentangTegalwaru from "../assets/images/tentang-tegalwaru.jpg";

export default function AboutSection() {
  return (
    <section className="about-section">
      <div className="about-container">

        <div className="about-image">
          <img
            src={tentangTegalwaru}
            alt="Desa Tegal Waru"
          />

          <div className="about-image-badge">
            <MapPin size={14} />
            Desa Tegal Waru
          </div>
        </div>

        <div className="about-content">

          <div className="section-label">
            TENTANG DESA
          </div>

          <h2>
            Mengenal Desa
            <br />
            Tegal Waru
          </h2>

          <p>
            Desa Tegal Waru merupakan salah satu desa
            yang berada di Kecamatan Ciampea, Kabupaten
            Bogor, Jawa Barat.
          </p>

          <p>
            Desa ini memiliki berbagai potensi lokal,
            mulai dari usaha masyarakat, pertanian,
            wisata, hingga seni dan budaya yang menjadi
            bagian dari kehidupan masyarakat.
          </p>
        </div>
      </div>

      <style>{`
        .about-section {
          padding: 80px 0;
          background: var(--warm-white);
        }

        .about-container {
          max-width: 1160px;
          margin: auto;
          padding: 0 24px;

          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 55px;
          align-items: center;
        }

        .about-image {
          position: relative;
          height: 360px;
          overflow: hidden;
          border-radius: 12px;
        }

        .about-image img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .about-image-badge {
          position: absolute;
          left: 16px;
          bottom: 16px;

          display: flex;
          align-items: center;
          gap: 6px;

          padding: 7px 12px;
          color: var(--green-forest);
          background: white;
          border-radius: 7px;

          font-size: 11px;
          font-weight: 600;
        }

        .section-label {
          margin-bottom: 10px;

          color: var(--orange);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.1em;
        }

        .about-content h2 {
          margin: 0 0 18px;

          color: var(--charcoal);
          font-size: 32px;
          line-height: 1.2;
        }

        .about-content p {
          max-width: 560px;
          margin-bottom: 12px;

          color: var(--charcoal-soft);
          font-size: 14px;
          line-height: 1.8;
        }

        .about-stats {
          display: flex;
          gap: 45px;

          margin-top: 28px;
          padding-top: 20px;

          border-top: 1px solid var(--border);
        }

        .about-stats div {
          display: flex;
          flex-direction: column;
        }

        .about-stats strong {
          color: var(--green-forest);
          font-size: 28px;
          line-height: 1;
        }

        .about-stats span {
          margin-top: 5px;
          color: var(--charcoal-soft);
          font-size: 9px;
          letter-spacing: 0.05em;
        }

        @media (max-width: 768px) {
          .about-container {
            grid-template-columns: 1fr;
            gap: 30px;
          }

          .about-image {
            height: 280px;
          }

          .about-stats {
            gap: 25px;
          }
        }
      `}</style>
    </section>
  );
}