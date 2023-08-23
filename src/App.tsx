import { Routes, Route, useLocation } from "react-router-dom";
//importing react slick slider
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { animateScroll } from "react-scroll";

import NavBar from "./components/organs/NavBar"
import Home from "./components/pages/Home";
import Hakkimizda from "./components/pages/Hakkimizda";
import Hizmetlerveurunler from "./components/pages/Hizmetlerveurunler";
import Blog from "./components/pages/Blog";
import Iletisim from "./components/pages/Iletisim";
import Referanslar from "./components/pages/Referanslar";
import SSS from "./components/pages/SSS";
import Musteridestek from "./components/pages/Musteridestek";
import { useEffect } from "react";
import Footer from "./components/organs/Footer";

function App() {
  const directory = useLocation();
  useEffect(() => {
    animateScroll.scrollToTop({
      duration: 0,
    });
  }, [directory.pathname]);

  return (
    <div className="w-full bg-white text-gray-950 font-poppins">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/anasayfa" element={<Home />} />
        <Route path="/hakkimizda" element={<Hakkimizda />} />
        <Route path="/hizmetlerveurunler" element={<Hizmetlerveurunler />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/iletisim" element={<Iletisim />} />
        <Route path="/referanslar" element={<Referanslar />} />
        <Route path="/sss" element={<SSS />} />
        <Route path="/musteridestek" element={<Musteridestek />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App
