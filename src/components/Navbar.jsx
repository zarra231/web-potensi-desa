import { useEffect, useState } from "react";
import { Menu, X, Leaf } from "lucide-react";
import logoDesa from "../assets/images/logo.png";

export default function Navbar({ onScrollToMap }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNav = (id) => {
    setOpen(false);

    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`navbar ${
        scrolled ? "navbar-scrolled" : ""
      }`}
    >
      <div className="navbar-inner">

        <div className="navbar-brand" onClick={() => handleNav("beranda")}>
          <img
            src={logoDesa}
            alt="Logo Desa Tegal Waru"
            className="navbar-logo"
          />

          <div>
            <strong>POTENSI DESA</strong>
            <span>Tegal Waru · Ciampea</span>
          </div>
        </div>

        <div className="navbar-links">
          <button onClick={() => handleNav("beranda")}>
            Beranda
          </button>

          <button onClick={() => handleNav("potensi")}>
            Potensi
          </button>

          <button onClick={() => handleNav("peta")}>
            Peta
          </button>
        </div>

        <button
          className="navbar-mobile-btn"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>

      {open && (
        <div className="mobile-menu">
          <button onClick={() => handleNav("beranda")}>
            Beranda
          </button>

          <button onClick={() => handleNav("potensi")}>
            Potensi
          </button>

          <button onClick={() => handleNav("peta")}>
            Peta
          </button>

          <button onClick={onScrollToMap}>
            Lihat Peta
          </button>
        </div>
      )}

      <style>{`
      .navbar {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 1000;

        color: white;
        background: transparent;
        transition: background 0.25s ease, color 0.25s ease, border 0.25s ease;
      }

      .navbar-scrolled {
        background: rgba(253, 251, 247, 0.97);
        color: var(--charcoal);
        border-bottom: 1px solid var(--border);
        backdrop-filter: blur(10px);
      }

      .navbar-inner {
        max-width: 1160px;
        height: 64px;
        margin: auto;
        padding: 0 24px;

        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      /* =========================
        BRAND
      ========================= */

      .navbar-brand {
        display: flex;
        align-items: center;
        gap: 10px;
        cursor: pointer;
        text-decoration: none;
      }

      .navbar-logo {
        width: 80px;
        height: 90px;
        object-fit: contain;
        flex-shrink: 0;
      }

      .navbar-brand strong {
        display: block;
        margin: 0;

        font-size: 13px;
        font-weight: 700;
        line-height: 1.1;
        letter-spacing: 0.02em;
      }

      .navbar-brand span {
        display: block;
        margin-top: 3px;

        font-size: 9px;
        font-weight: 400;
        line-height: 1.2;
        opacity: 0.7;
      }

      /* =========================
        DESKTOP NAVIGATION
      ========================= */

      .navbar-links {
        display: flex;
        align-items: center;
        gap: 3px;
      }

      .navbar-links button {
        padding: 8px 13px;

        color: inherit;
        background: transparent;
        border: none;

        font-family: Poppins, sans-serif;
        font-size: 12px;
        font-weight: 500;

        cursor: pointer;
        transition: color 0.2s ease;
      }

      .navbar-links button:hover {
        color: var(--green-forest);
      }

      /* =========================
        MOBILE BUTTON
      ========================= */

      .navbar-mobile-btn {
        display: none;

        padding: 6px;

        color: inherit;
        background: transparent;
        border: none;

        cursor: pointer;
      }

      /* =========================
        MOBILE MENU
      ========================= */

      .mobile-menu {
        padding: 10px 24px 18px;

        background: var(--warm-white);
        border-top: 1px solid var(--border);
      }

      .mobile-menu button {
        display: block;
        width: 100%;
        padding: 11px 0;

        text-align: left;
        color: var(--charcoal);
        background: transparent;
        border: none;
        border-bottom: 1px solid var(--border);

        font-family: Poppins, sans-serif;
        font-size: 14px;
        font-weight: 500;

        cursor: pointer;
        transition: color 0.2s ease;
      }

      .mobile-menu button:last-child {
        border-bottom: none;
      }

      .mobile-menu button:hover {
        color: var(--green-forest);
      }

      /* =========================
        MOBILE
      ========================= */

      @media (max-width: 640px) {
        .navbar-inner {
          height: 60px;
          padding: 0 18px;
        }

        .navbar-links {
          display: none;
        }

        .navbar-mobile-btn {
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .navbar-logo {
          width: 36px;
          height: 36px;
        }

        .navbar-brand {
          gap: 9px;
        }

        .navbar-brand strong {
          font-size: 12px;
        }

        .navbar-brand span {
          font-size: 8px;
        }

        .mobile-menu {
          padding: 8px 18px 16px;
        }
      }
    `}</style>
    </nav>
  );
}