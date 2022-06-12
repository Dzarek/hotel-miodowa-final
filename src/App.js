import "./App.css";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { ScrollToTop } from "react-router-scroll-to-top";
import { useState, useEffect } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { MdDoubleArrow } from "react-icons/md";

import Navbar from "./components/Navbar";
import Submenu from "./Submenu";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import GalleryPage from "./pages/GalleryPage";

import AboutUs from "./pages/AboutUs";
import AboutCracow from "./pages/AboutCracow";
import AboutHotel from "./pages/AboutHotel";

import ServicesPage from "./pages/ServicesPage";
import AirportTransfer from "./pages/AirportTransfer";
import RestaurantPage from "./pages/RestaurantPage";
import ParkingPage from "./pages/ParkingPage";

import ContactPage from "./pages/ContactPage";
import FaqPage from "./pages/FaqPage";
import RegulationsPage from "./pages/RegulationsPage";
import RodoPage from "./pages/RodoPage";

import SingleRoomPage from "./pages/SingleRoomPage";
import AllRoomsPage from "./pages/AllRoomsPage";

import ErrorPage from "./pages/ErrorPage";
import Thanks from "./pages/Thanks";

import { useGlobalContext } from "./context";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
.app {
  --primaryColor: #eee;
  --secondaryColor2: rgb(185, 130, 93);
  --secondaryColor: rgb(133, 88, 55);
  --bookBtnColor: rgb(95, 72, 56);
  --bookBtnColor2: #eee;
  --favoriteRoomColor: rgb(44, 26, 18);
  --footerBgColor: rgba(95, 72, 56, 0.2);
  --appBgColor: rgb(10, 10, 10);
  --languageBg: rgba(0, 0, 0, 0.95);
  --navbarBg: rgba(0, 0, 0, 0.85);
  --navbarBg2: rgba(0, 0, 0, 0.98);
  --navbarColor: rgb(133, 88, 55);
  --servicesHomeBg: rgb(15, 15, 15);
  --servicesHomeColor: #bbb;
  --roomDetailBg: #111;
  --equipmentsBg: #eee;
  --bookingBg: transparent;
  --logoBg: #ddd;
  --menu2Color: rgb(185, 130, 93);
  --buttonFont: "Signika Negative", sans-serif;
  --textFont: "Comfortaa", sans-serif;
  --titleFont: "Merriweather", sans-serif;
}
.app2 {
  --primaryColor: #111;
  --secondaryColor2: rgb(139, 97, 70);
  --secondaryColor: rgb(133, 88, 55);
  --bookBtnColor: rgb(95, 72, 56);
  --bookBtnColor2: rgb(95, 72, 56);
  --favoriteRoomColor: rgb(44, 26, 18);
  --footerBgColor: rgba(95, 72, 56, 0.2);
  --appBgColor: #eee;
  --languageBg: rgba(255, 255, 255, 0.95);
  --navbarBg: rgba(255, 255, 255, 0.95);
  --navbarBg2: #ccc;
  --navbarColor: rgb(189, 128, 82);
  --servicesHomeBg: #ddd;
  --servicesHomeColor: #333;
  --roomDetailBg: #fff;
  --equipmentsBg: #333;
  --bookingBg: #fff;
  --logoBg: #fff;
  --menu2Color: rgb(133, 88, 55);
  --buttonFont: "Signika Negative", sans-serif;
  --textFont: "Comfortaa", sans-serif;
  --titleFont: "Merriweather", sans-serif;
}

`;

function App() {
  const { closeSubmenu } = useGlobalContext();

  const getStorageTheme = () => {
    const saved = localStorage.getItem("lightMode");
    const initialValue = JSON.parse(saved);
    return initialValue;
  };
  const [lightMode, setLightMode] = useState(getStorageTheme());
  const [showMenu, setShowMenu] = useState(false);
  const [showBooking, setShowBooking] = useState(false);

  const [width, setWidth] = useState(window.innerWidth);
  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  }, []);
  const isMobile = width <= 800;

  useEffect(() => {
    localStorage.setItem("lightMode", JSON.stringify(lightMode));
  }, [lightMode]);

  return (
    <div className={!lightMode ? "app" : "app2"}>
      <GlobalStyle />
      <Router>
        {(showMenu && !showBooking) || !isMobile ? (
          <>
            {!lightMode ? (
              <button
                onClick={() => setLightMode(true)}
                className="modeLightDark darkMode"
              >
                <MdDoubleArrow className="modeLightIcon" />
                <MdLightMode />
              </button>
            ) : (
              <button
                onClick={() => setLightMode(false)}
                className="modeLightDark lightMode"
              >
                <MdDarkMode />
                <MdDoubleArrow className="modeDarkIcon" />
              </button>
            )}
          </>
        ) : null}
        <Navbar
          showMenu={showMenu}
          setShowMenu={setShowMenu}
          showBooking={showBooking}
          setShowBooking={setShowBooking}
        />
        <Submenu />
        <ScrollToTop />
        <div onMouseOver={closeSubmenu}>
          <Routes>
            <Route path="*" element={<ErrorPage />}></Route>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/pokoje" element={<AllRoomsPage />}></Route>
            <Route path="/pokoje/:slug" element={<SingleRoomPage />}></Route>
            <Route path="/galeria" element={<GalleryPage />}></Route>
            <Route path="/oNas" element={<AboutUs />}></Route>
            <Route path="/oNas/oKrakowie" element={<AboutCracow />}></Route>
            <Route path="/oNas/oHotelu" element={<AboutHotel />}></Route>
            <Route path="/uslugi" element={<ServicesPage />}></Route>
            <Route
              path="/uslugi/transport&wycieczki"
              element={<AirportTransfer />}
            ></Route>
            <Route
              path="/uslugi/restauracja"
              element={<RestaurantPage />}
            ></Route>
            <Route path="/uslugi/parking" element={<ParkingPage />}></Route>
            <Route
              path="/kontakt/formularzKontaktowy"
              element={<ContactPage />}
            ></Route>
            <Route path="/kontakt/faq" element={<FaqPage />}></Route>
            <Route
              path="/kontakt/regulamin"
              element={<RegulationsPage />}
            ></Route>
            <Route path="/kontakt/rodo&cookies" element={<RodoPage />}></Route>
            <Route path="/potwierdzenie" element={<Thanks />}></Route>
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
