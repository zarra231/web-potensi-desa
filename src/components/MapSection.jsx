import { useEffect, useMemo, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
} from "react-leaflet";
import L from "leaflet";
import {
  Search,
  MapPin,
  X,
  ChevronRight,
} from "lucide-react";

import {
  potensiData,
  categoryConfig,
} from "../data/umkmData";

import "leaflet/dist/leaflet.css";

// ============================================================
// WARNA MARKER
// ============================================================

const markerColors = {
  UMKM: "#2D6A3F",
  Wisata: "#1976A3",
  Pertanian: "#B8860B",
  Budaya: "#7C3AED",
  Kerajinan: "#8B5A2B",
  Perikanan: "#1785A7",
  Peternakan: "#A66A21",
  Pemerintahan: "#285943",
  "Sentra UMKM": "#2D6A3F",
  default: "#607D68",
};

// ============================================================
// WARNA MARKER BERDASARKAN DATA
// ============================================================

function getMarkerColor(item) {
  const category =
    item.category?.toLowerCase() || "";

  const subcategory =
    item.subcategory?.toLowerCase() || "";

  // Pemerintahan
  if (
    category.includes("pemerintahan") ||
    category.includes("kantor")
  ) {
    return markerColors.Pemerintahan;
  }

  // Kerajinan
  if (
    category.includes("kerajinan") ||
    category.includes("pandai") ||
    category.includes("craft") ||
    category.includes("besi") ||
    subcategory.includes("kerajinan") ||
    subcategory.includes("pandai") ||
    subcategory.includes("craft") ||
    subcategory.includes("besi")
  ) {
    return markerColors.Kerajinan;
  }

  // Wisata
  if (
    category.includes("wisata") ||
    category.includes("agro") ||
    subcategory.includes("wisata")
  ) {
    return markerColors.Wisata;
  }

  // Perikanan
  if (
    category.includes("perikanan") ||
    category.includes("ikan") ||
    category.includes("akuakultur") ||
    subcategory.includes("perikanan") ||
    subcategory.includes("ikan") ||
    subcategory.includes("akuakultur")
  ) {
    return markerColors.Perikanan;
  }

  // Peternakan
  if (
    category.includes("peternakan") ||
    category.includes("ternak") ||
    subcategory.includes("peternakan") ||
    subcategory.includes("ternak")
  ) {
    return markerColors.Peternakan;
  }

  // Pertanian
  if (
    category.includes("pertanian") ||
    category.includes("tani") ||
    subcategory.includes("pertanian")
  ) {
    return markerColors.Pertanian;
  }

  // Budaya
  if (
    category.includes("budaya") ||
    category.includes("seni") ||
    subcategory.includes("budaya") ||
    subcategory.includes("seni")
  ) {
    return markerColors.Budaya;
  }

  // UMKM
  if (
    category.includes("umkm") ||
    category.includes("sentra") ||
    subcategory.includes("umkm")
  ) {
    return markerColors.UMKM;
  }

  return markerColors.default;
}

// ============================================================
// GROUP / KATEGORI UNTUK FILTER
// ============================================================

function getGroupCategory(item) {
  const category =
    item.category?.toLowerCase() || "";

  const subcategory =
    item.subcategory?.toLowerCase() || "";

  if (
    category.includes("pemerintahan") ||
    category.includes("kantor")
  ) {
    return "Pemerintahan";
  }

  if (
    category.includes("kerajinan") ||
    category.includes("pandai") ||
    category.includes("craft") ||
    category.includes("besi") ||
    subcategory.includes("kerajinan") ||
    subcategory.includes("pandai") ||
    subcategory.includes("craft") ||
    subcategory.includes("besi")
  ) {
    return "Kerajinan";
  }

  if (
    category.includes("wisata") ||
    category.includes("agro") ||
    subcategory.includes("wisata")
  ) {
    return "Wisata";
  }

  if (
    category.includes("perikanan") ||
    category.includes("ikan") ||
    category.includes("akuakultur") ||
    subcategory.includes("perikanan") ||
    subcategory.includes("ikan")
  ) {
    return "Perikanan";
  }

  if (
    category.includes("peternakan") ||
    category.includes("ternak") ||
    subcategory.includes("peternakan") ||
    subcategory.includes("ternak")
  ) {
    return "Peternakan";
  }

  if (
    category.includes("pertanian") ||
    category.includes("tani") ||
    subcategory.includes("pertanian")
  ) {
    return "Pertanian";
  }

  if (
    category.includes("budaya") ||
    category.includes("seni") ||
    subcategory.includes("budaya") ||
    subcategory.includes("seni")
  ) {
    return "Budaya";
  }

  if (
    category.includes("umkm") ||
    category.includes("sentra") ||
    subcategory.includes("umkm")
  ) {
    return "UMKM";
  }

  return item.category || "Lainnya";
}

// ============================================================
// CUSTOM MARKER
// ============================================================

function createCategoryIcon(color, isOffice = false) {
  if (isOffice) {
    return L.divIcon({
      className: "office-marker",

      html: `
        <div
          style="
            width: 40px;
            height: 40px;
            background: ${color};
            border: 3px solid white;
            border-radius: 50%;
            box-shadow: 0 3px 10px rgba(0,0,0,0.35);
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            font-size: 18px;
          "
        >
          🏛️
        </div>
      `,

      iconSize: [40, 40],
      iconAnchor: [20, 20],
      popupAnchor: [0, -22],
    });
  }

  return L.divIcon({
    className: "custom-category-marker",

    html: `
      <div
        style="
          width: 32px;
          height: 32px;
          background: ${color};
          border: 3px solid white;
          border-radius: 50% 50% 50% 0;
          transform: rotate(-45deg);
          box-shadow: 0 3px 8px rgba(0,0,0,0.30);
          display: flex;
          align-items: center;
          justify-content: center;
        "
      >
        <div
          style="
            width: 8px;
            height: 8px;
            background: white;
            border-radius: 50%;
          "
        ></div>
      </div>
    `,

    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });
}

// ============================================================
// MAP CONTROLLER
// ============================================================

function MapController({ selectedItem }) {
  const map = useMap();

  useEffect(() => {
    if (!selectedItem) return;

    const lat = Number(selectedItem.latitude);
    const lng = Number(selectedItem.longitude);

    if (
      !Number.isFinite(lat) ||
      !Number.isFinite(lng)
    ) {
      return;
    }

    map.flyTo(
      [lat, lng],
      17,
      {
        duration: 0.8,
      }
    );
  }, [selectedItem, map]);

  return null;
}

// ============================================================
// FIT MAP KE SEMUA DATA
// ============================================================

function MapBounds({ data }) {
  const map = useMap();

  useEffect(() => {
    if (!data || data.length === 0) return;

    const points = data
      .map((item) => [
        Number(item.latitude),
        Number(item.longitude),
      ])
      .filter(
        ([lat, lng]) =>
          Number.isFinite(lat) &&
          Number.isFinite(lng)
      );

    if (points.length === 0) return;

    const bounds = L.latLngBounds(points);

    map.fitBounds(bounds, {
      padding: [40, 40],
      maxZoom: 15,
    });
  }, [data, map]);

  return null;
}

// ============================================================
// MAP SECTION
// ============================================================

export default function MapSection() {
  const [search, setSearch] = useState("");

  const [activeCategory, setActiveCategory] =
    useState("Semua");

  const [selectedItem, setSelectedItem] =
    useState(null);

  // ==========================================================
  // SEMUA DATA
  //
  // SEMUA DATA MURNI DARI umkmData.js
  // TIDAK ADA DATA MANUAL DI SINI
  // ==========================================================

  const allData = useMemo(() => {
    return potensiData
      .filter((item) => {
        const lat = Number(item.latitude);
        const lng = Number(item.longitude);

        return (
          Number.isFinite(lat) &&
          Number.isFinite(lng)
        );
      })
      .map((item) => ({
        ...item,
        latitude: Number(item.latitude),
        longitude: Number(item.longitude),
      }));
  }, []);

  // ==========================================================
  // DATA UNTUK MAP
  // ==========================================================

  const mapData = useMemo(() => {
    return allData;
  }, [allData]);

  // ==========================================================
  // FILTER DATA
  // ==========================================================

  const filteredData = useMemo(() => {
    const keyword =
      search.trim().toLowerCase();

    return allData.filter((item) => {
      const groupCategory =
        getGroupCategory(item);

      const matchesCategory =
        activeCategory === "Semua" ||
        groupCategory === activeCategory;

      const searchableText = [
        item.name,
        item.category,
        item.subcategory,
        item.product,
        item.address,
        item.rt,
        item.rw,
        item.description,
      ]
        .filter(Boolean)
        .join(" ")
        .toLowerCase();

      const matchesSearch =
        keyword === "" ||
        searchableText.includes(keyword);

      return (
        matchesCategory &&
        matchesSearch
      );
    });
  }, [
    allData,
    search,
    activeCategory,
  ]);

  // ==========================================================
  // KATEGORI FILTER
  // ==========================================================

  const categories = [
    "Semua",
    "UMKM",
    "Kerajinan",
    "Wisata",
    "Pertanian",
    "Perikanan",
    "Peternakan",
    "Budaya",
    "Pemerintahan",
  ];

  // ==========================================================
  // WARNA FILTER
  // ==========================================================

  const getFilterColor = (category) => {
    switch (category) {
      case "Semua":
        return "#214D2A";

      case "UMKM":
        return "#2D6A3F";

      case "Kerajinan":
        return "#8B5A2B";

      case "Wisata":
        return "#1976A3";

      case "Pertanian":
        return "#B8860B";

      case "Perikanan":
        return "#1785A7";

      case "Peternakan":
        return "#A66A21";

      case "Budaya":
        return "#7C3AED";

      case "Pemerintahan":
        return "#285943";

      default:
        return "#607D68";
    }
  };

  // ==========================================================
  // SELECT ITEM
  // ==========================================================

  const handleSelectItem = (item) => {
    setSelectedItem(item);
  };

  // ==========================================================
  // CLEAR SEARCH
  // ==========================================================

  const clearSearch = () => {
    setSearch("");
  };

  // ==========================================================
  // DEFAULT CENTER
  //
  // Mengambil lokasi data pertama yang valid.
  // Jadi tidak ada koordinat kantor desa hardcode.
  // ==========================================================

  const defaultCenter =
    allData.length > 0
      ? [
          Number(allData[0].latitude),
          Number(allData[0].longitude),
        ]
      : [-6.570951, 106.702758];

  return (
    <section
      id="peta"
      style={{
        padding: "72px 0",
        backgroundColor: "#f8f7f2",
      }}
    >
      <div
        style={{
          maxWidth: 1160,
          margin: "0 auto",
          padding: "0 24px",
        }}
      >

        {/* ====================================================
            HEADER
        ==================================================== */}

        <div
          style={{
            marginBottom: 30,
            maxWidth: 650,
          }}
        >
          <div
            style={{
              fontSize: 12,
              fontWeight: 700,
              color: "var(--orange)",
              textTransform: "uppercase",
              letterSpacing: "0.08em",
              marginBottom: 10,
            }}
          >
            Peta Potensi Desa
          </div>

          <h2
            style={{
              margin: "0 0 12px",
              color: "var(--charcoal)",
              fontSize:
                "clamp(24px, 3vw, 34px)",
              lineHeight: 1.2,
              fontWeight: 700,
            }}
          >
            Temukan Potensi Desa Tegal Waru
          </h2>

          <p
            style={{
              margin: 0,
              color: "var(--charcoal-soft)",
              fontSize: 14,
              lineHeight: 1.7,
            }}
          >
            Cari UMKM, wisata, pertanian,
            kerajinan, perikanan, peternakan,
            budaya, dan berbagai potensi lainnya
            berdasarkan nama, kategori, atau lokasi.
          </p>
        </div>

        {/* ====================================================
            MAP + SIDEBAR
        ==================================================== */}

        <div
          className="map-layout"
          style={{
            display: "grid",
            gridTemplateColumns:
              "minmax(0, 1fr) 360px",
            height: 560,
            borderRadius: 16,
            overflow: "hidden",
            border:
              "1px solid var(--border)",
            backgroundColor: "white",
            boxShadow:
              "0 3px 15px rgba(0,0,0,0.06)",
          }}
        >

          {/* ==================================================
              MAP
          ================================================== */}

          <div
            style={{
              position: "relative",
              minWidth: 0,
            }}
          >
            <MapContainer
              center={defaultCenter}
              zoom={14}
              scrollWheelZoom={true}
              style={{
                width: "100%",
                height: "100%",
              }}
            >

              <TileLayer
                attribution="&copy; OpenStreetMap contributors"
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />

              {/* FIT SEMUA MARKER */}

              <MapBounds data={mapData} />

              {/* CONTROLLER MARKER */}

              <MapController
                selectedItem={selectedItem}
              />

              {/* =================================================
                  SEMUA MARKER
              ================================================= */}

              {allData.map((item) => {
                const lat =
                  Number(item.latitude);

                const lng =
                  Number(item.longitude);

                const markerColor =
                  getMarkerColor(item);

                const groupCategory =
                  getGroupCategory(item);

                const isOffice =
                  groupCategory ===
                  "Pemerintahan";

                return (
                  <Marker
                    key={item.id}
                    position={[
                      lat,
                      lng,
                    ]}
                    icon={createCategoryIcon(
                      markerColor,
                      isOffice
                    )}
                    eventHandlers={{
                      click: () => {
                        setSelectedItem(item);
                      },
                    }}
                  >

                    {/* =================================================
                        POPUP
                    ================================================= */}

                    <Popup>
                      <div
                        style={{
                          width: 230,
                          fontFamily:
                            "Poppins, sans-serif",
                        }}
                      >

                        {/* FOTO */}

                        {item.image && (
                          <img
                            src={item.image}
                            alt={item.name}
                            style={{
                              width: "100%",
                              height: 110,
                              objectFit: "cover",
                              borderRadius: 8,
                              marginBottom: 9,
                            }}
                          />
                        )}

                        {/* NAMA */}

                        <div
                          style={{
                            fontSize: 14,
                            fontWeight: 700,
                            color:
                              "var(--charcoal)",
                            marginBottom: 6,
                          }}
                        >
                          {item.name}
                        </div>

                        {/* CATEGORY */}

                        <div
                          style={{
                            display:
                              "inline-block",
                            padding:
                              "4px 9px",
                            borderRadius: 10,
                            backgroundColor:
                              markerColor,
                            color: "white",
                            fontSize: 9,
                            fontWeight: 600,
                            marginBottom: 8,
                          }}
                        >
                          {item.category}
                        </div>

                        {/* SUBCATEGORY */}

                        {item.subcategory && (
                          <div
                            style={{
                              fontSize: 10,
                              color: "#777",
                              marginBottom: 5,
                            }}
                          >
                            {item.subcategory}
                          </div>
                        )}

                        {/* PRODUCT */}

                        {item.product && (
                          <div
                            style={{
                              fontSize: 10,
                              color: "#777",
                              lineHeight: 1.5,
                              marginBottom: 7,
                            }}
                          >
                            {item.product}
                          </div>
                        )}

                        {/* ADDRESS */}

                        <div
                          style={{
                            fontSize: 10,
                            color: "#777",
                            lineHeight: 1.5,
                          }}
                        >
                          📍{" "}
                          {item.address ||
                            "Desa Tegal Waru"}
                        </div>

                        {/* RT RW */}

                        {(item.rt ||
                          item.rw) && (
                          <div
                            style={{
                              fontSize: 10,
                              color: "#777",
                              marginTop: 4,
                            }}
                          >
                            RT{" "}
                            {item.rt ||
                              "—"}{" "}
                            / RW{" "}
                            {item.rw ||
                              "—"}
                          </div>
                        )}

                        {/* =================================================
                            BUTTON GOOGLE MAPS
                        ================================================= */}

                        {item.gmaps && (
                          <button
                            type="button"
                            onClick={() => {
                              window.open(
                                item.gmaps,
                                "_blank",
                                "noopener,noreferrer"
                              );
                            }}
                            style={{
                              width: "100%",
                              marginTop: 10,
                              padding:
                                "7px 10px",
                              border: `1px solid ${markerColor}`,
                              borderRadius: 7,
                              backgroundColor:
                                markerColor,
                              color: "#ffffff",
                              fontFamily:
                                "Poppins, sans-serif",
                              fontSize: 10,
                              fontWeight: 600,
                              cursor:
                                "pointer",
                              display:
                                "flex",
                              alignItems:
                                "center",
                              justifyContent:
                                "center",
                              gap: 5,
                            }}
                          >
                            <MapPin size={12} />

                            Lihat di Google Maps

                            <ChevronRight
                              size={12}
                            />
                          </button>
                        )}

                      </div>
                    </Popup>
                  </Marker>
                );
              })}

            </MapContainer>

            {/* =================================================
                MAP LABEL
            ================================================= */}

            <div
              style={{
                position: "absolute",
                left: 16,
                bottom: 16,
                zIndex: 500,
                padding: "8px 12px",
                backgroundColor:
                  "rgba(255,255,255,0.96)",
                borderRadius: 8,
                boxShadow:
                  "0 2px 8px rgba(0,0,0,0.12)",
                fontSize: 11,
                color:
                  "var(--charcoal)",
              }}
            >
              <MapPin
                size={12}
                style={{
                  verticalAlign:
                    "middle",
                  marginRight: 5,
                  color:
                    "var(--green-forest)",
                }}
              />

              Peta Potensi Desa Tegal Waru
            </div>
          </div>

          {/* ==================================================
              SIDEBAR
          ================================================== */}

          <div
            className="map-sidebar"
            style={{
              backgroundColor: "white",
              borderLeft:
                "1px solid var(--border)",
              display: "flex",
              flexDirection:
                "column",
              minWidth: 0,
            }}
          >

            {/* =================================================
                SIDEBAR HEADER
            ================================================= */}

            <div
              style={{
                padding:
                  "18px 18px 14px",
                borderBottom:
                  "1px solid var(--border)",
              }}
            >

              <div
                style={{
                  display: "flex",
                  justifyContent:
                    "space-between",
                  alignItems:
                    "center",
                  marginBottom: 12,
                }}
              >

                <div>
                  <h3
                    style={{
                      margin: 0,
                      fontSize: 15,
                      fontWeight: 700,
                      color:
                        "var(--charcoal)",
                    }}
                  >
                    Daftar Potensi
                  </h3>

                  <span
                    style={{
                      display: "block",
                      marginTop: 3,
                      fontSize: 10,
                      color: "#8a8f88",
                    }}
                  >
                    {filteredData.length}{" "}
                    lokasi ditemukan
                  </span>
                </div>

              </div>

              {/* =================================================
                  SEARCH
              ================================================= */}

              <div
                style={{
                  position:
                    "relative",
                  marginBottom: 12,
                }}
              >

                <Search
                  size={15}
                  style={{
                    position:
                      "absolute",
                    left: 11,
                    top: "50%",
                    transform:
                      "translateY(-50%)",
                    color: "#8a918a",
                  }}
                />

                <input
                  type="text"
                  value={search}
                  onChange={(e) =>
                    setSearch(
                      e.target.value
                    )
                  }
                  placeholder="Cari potensi desa..."
                  style={{
                    width: "100%",
                    height: 38,
                    padding:
                      "0 34px 0 34px",
                    border:
                      "1px solid var(--border)",
                    borderRadius: 8,
                    outline: "none",
                    fontFamily:
                      "Poppins, sans-serif",
                    fontSize: 11,
                    color:
                      "var(--charcoal)",
                    backgroundColor:
                      "#fafafa",
                    boxSizing:
                      "border-box",
                  }}
                />

                {search && (
                  <button
                    type="button"
                    onClick={clearSearch}
                    style={{
                      position:
                        "absolute",
                      right: 8,
                      top: "50%",
                      transform:
                        "translateY(-50%)",
                      border: "none",
                      background:
                        "transparent",
                      cursor:
                        "pointer",
                      padding: 3,
                      color: "#888",
                    }}
                  >
                    <X size={14} />
                  </button>
                )}

              </div>

              {/* =================================================
                  FILTER KATEGORI
              ================================================= */}

              <div
                className="map-category-filter"
                style={{
                  display: "flex",
                  gap: 6,
                  overflowX: "auto",
                  paddingBottom: 2,
                }}
              >

                {categories.map(
                  (category) => {
                    const active =
                      activeCategory ===
                      category;

                    const color =
                      getFilterColor(
                        category
                      );

                    return (
                      <button
                        key={category}
                        type="button"
                        onClick={() =>
                          setActiveCategory(
                            category
                          )
                        }
                        style={{
                          flexShrink: 0,
                          border: `1px solid ${color}`,
                          backgroundColor:
                            active
                              ? color
                              : "#ffffff",
                          color: active
                            ? "#ffffff"
                            : color,
                          borderRadius: 20,
                          padding:
                            "5px 10px",
                          fontFamily:
                            "Poppins, sans-serif",
                          fontSize: 9,
                          fontWeight: 600,
                          cursor:
                            "pointer",
                          transition:
                            "all 0.15s ease",
                          boxShadow:
                            active
                              ? `0 2px 6px ${color}40`
                              : "none",
                        }}
                      >
                        {category}
                      </button>
                    );
                  }
                )}

              </div>

            </div>

            {/* =================================================
                LIST POTENSI
            ================================================= */}

            <div
              className="map-list"
              style={{
                flex: 1,
                overflowY: "auto",
                padding: 10,
              }}
            >

              {filteredData.length > 0 ? (

                filteredData.map(
                  (item) => {
                    const markerColor =
                      getMarkerColor(
                        item
                      );

                    const groupCategory =
                      getGroupCategory(
                        item
                      );

                    const isSelected =
                      selectedItem?.id ===
                      item.id;

                    const cfg =
                      categoryConfig[
                        item.category
                      ] || {
                        color:
                          markerColor,
                        bgLight:
                          `${markerColor}15`,
                        emoji:
                          groupCategory ===
                          "Pemerintahan"
                            ? "🏛️"
                            : groupCategory ===
                              "Kerajinan"
                            ? "🔨"
                            : groupCategory ===
                              "Wisata"
                            ? "🌿"
                            : groupCategory ===
                              "Pertanian"
                            ? "🌾"
                            : groupCategory ===
                              "Perikanan"
                            ? "🐟"
                            : groupCategory ===
                              "Peternakan"
                            ? "🐄"
                            : groupCategory ===
                              "Budaya"
                            ? "🎭"
                            : "🏪",
                      };

                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() =>
                          handleSelectItem(
                            item
                          )
                        }
                        style={{
                          width: "100%",
                          textAlign: "left",
                          border:
                            isSelected
                              ? `1px solid ${markerColor}`
                              : "1px solid transparent",
                          backgroundColor:
                            isSelected
                              ? `${markerColor}12`
                              : "#ffffff",
                          borderRadius: 10,
                          padding: 11,
                          marginBottom: 7,
                          cursor: "pointer",
                          fontFamily:
                            "Poppins, sans-serif",
                          transition:
                            "all 0.15s ease",
                          boxSizing:
                            "border-box",
                        }}
                      >

                        <div
                          style={{
                            display: "flex",
                            alignItems:
                              "flex-start",
                            gap: 9,
                          }}
                        >

                          {/* FOTO / ICON */}

                          <div
                            style={{
                              width: 44,
                              height: 44,
                              flexShrink: 0,
                              display: "flex",
                              alignItems:
                                "center",
                              justifyContent:
                                "center",
                              backgroundColor:
                                `${markerColor}18`,
                              borderRadius: 8,
                              overflow:
                                "hidden",
                              border:
                                `1px solid ${markerColor}25`,
                            }}
                          >

                            {item.image ? (
                              <img
                                src={
                                  item.image
                                }
                                alt={
                                  item.name
                                }
                                style={{
                                  width:
                                    "100%",
                                  height:
                                    "100%",
                                  objectFit:
                                    "cover",
                                }}
                              />
                            ) : (
                              <span
                                style={{
                                  fontSize: 20,
                                }}
                              >
                                {cfg.emoji}
                              </span>
                            )}

                          </div>

                          {/* CONTENT */}

                          <div
                            style={{
                              flex: 1,
                              minWidth: 0,
                            }}
                          >

                            <div
                              style={{
                                display:
                                  "flex",
                                justifyContent:
                                  "space-between",
                                alignItems:
                                  "flex-start",
                                gap: 5,
                              }}
                            >

                              <strong
                                style={{
                                  fontSize: 11,
                                  lineHeight:
                                    1.35,
                                  color:
                                    "var(--charcoal)",
                                }}
                              >
                                {item.name}
                              </strong>

                              <ChevronRight
                                size={13}
                                style={{
                                  flexShrink: 0,
                                  color:
                                    markerColor,
                                }}
                              />

                            </div>

                            {/* CATEGORY */}

                            <div
                              style={{
                                marginTop: 3,
                                fontSize: 9,
                                fontWeight: 600,
                                color:
                                  markerColor,
                              }}
                            >
                              {groupCategory}

                              {item.subcategory
                                ? ` · ${item.subcategory}`
                                : ""}
                            </div>

                            {/* ADDRESS */}

                            <div
                              style={{
                                display:
                                  "flex",
                                alignItems:
                                  "center",
                                gap: 4,
                                marginTop: 5,
                                fontSize: 9,
                                color:
                                  "#8a918a",
                                lineHeight:
                                  1.4,
                              }}
                            >

                              <MapPin
                                size={10}
                              />

                              <span
                                style={{
                                  overflow:
                                    "hidden",
                                  textOverflow:
                                    "ellipsis",
                                  whiteSpace:
                                    "nowrap",
                                }}
                              >
                                {item.address ||
                                  "Desa Tegal Waru"}
                              </span>

                            </div>

                          </div>

                        </div>

                      </button>
                    );
                  }
                )

              ) : (

                /* =================================================
                   EMPTY STATE
                ================================================= */

                <div
                  style={{
                    height: "100%",
                    minHeight: 250,
                    display: "flex",
                    flexDirection:
                      "column",
                    alignItems:
                      "center",
                    justifyContent:
                      "center",
                    textAlign: "center",
                    padding: 20,
                  }}
                >

                  <div
                    style={{
                      width: 45,
                      height: 45,
                      borderRadius:
                        "50%",
                      backgroundColor:
                        "#f0f2ed",
                      display: "flex",
                      alignItems:
                        "center",
                      justifyContent:
                        "center",
                      marginBottom: 12,
                    }}
                  >
                    <Search
                      size={20}
                      color="#8a918a"
                    />
                  </div>

                  <strong
                    style={{
                      fontSize: 12,
                      color:
                        "var(--charcoal)",
                      marginBottom: 5,
                    }}
                  >
                    Potensi tidak ditemukan
                  </strong>

                  <span
                    style={{
                      fontSize: 10,
                      color: "#8a918a",
                      lineHeight: 1.5,
                    }}
                  >
                    Coba gunakan kata kunci
                    lain atau ubah kategori.
                  </span>

                </div>
              )}

            </div>

          </div>
        </div>
      </div>

      {/* ======================================================
          CSS
      ====================================================== */}

      <style>{`

        .map-list::-webkit-scrollbar {
          width: 5px;
        }

        .map-list::-webkit-scrollbar-track {
          background: transparent;
        }

        .map-list::-webkit-scrollbar-thumb {
          background: #d5dbd3;
          border-radius: 10px;
        }

        .map-category-filter::-webkit-scrollbar {
          display: none;
        }

        .custom-category-marker {
          background: transparent !important;
          border: none !important;
        }

        .office-marker {
          background: transparent !important;
          border: none !important;
        }

        .map-category-filter button:hover {
          transform: translateY(-1px);
        }

        @media (max-width: 1000px) {

          .map-layout {
            grid-template-columns:
              minmax(0, 1fr) 320px !important;
          }

        }

        @media (max-width: 900px) {

          .map-layout {
            grid-template-columns:
              1fr !important;
            height: auto !important;
          }

          .map-layout > div:first-child {
            height: 430px !important;
          }

          .map-sidebar {
            height: 430px;
            border-left: none !important;
            border-top:
              1px solid var(--border);
          }

        }

        @media (max-width: 600px) {

          .map-layout > div:first-child {
            height: 350px !important;
          }

          .map-sidebar {
            height: 400px;
          }

        }

      `}</style>
    </section>
  );
}