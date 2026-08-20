import { useState } from "react";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import Statistics from "./components/Statistics";
import PotensiSection from "./components/PotensiSection";
import MapSection from "./components/MapSection";
import Footer from "./components/Footer";

export default function App() {
  const [focusItem, setFocusItem] = useState(null);

  const scrollTo = (id) => {
    document
      .getElementById(id)
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  const handleViewLocation = (item) => {
    setFocusItem(item);
    scrollTo("peta");
  };

  return (
    <>
      <Navbar
        onScrollToMap={() => scrollTo("peta")}
      />

      <HeroSection
        onScrollToPotensi={() => scrollTo("potensi")}
        onScrollToMap={() => scrollTo("peta")}
      />

      <AboutSection />

      <PotensiSection
        onViewLocation={handleViewLocation}
      />

      <Statistics />

      <MapSection
        focusItem={focusItem}
        setFocusItem={setFocusItem}
      />

      <Footer />
    </>
  );
}