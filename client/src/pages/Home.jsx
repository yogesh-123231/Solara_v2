import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../components/home/Hero";
import GenderSelection from "../components/home/GenderSelection";
import NewArrivals from "../components/home/NewArrivals";
import FeaturedProducts from "../components/home/FeaturedProducts";
import TrendingProducts from "../components/home/TrendingProducts";
import FeaturedIcon from "../components/FeaturedIcon";
import BannerGrid from "../components/home/BannerGrid";
import "../styles/landingpage.css";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        const timer = setTimeout(() => {
          window.scrollTo({
            top: el.offsetTop - 80,
            behavior: "smooth",
          });
        }, 150);
        return () => clearTimeout(timer);
      }
    } else {
      // when clicking Home -> always go to top
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [location]);

  return (
    <>
      <Hero />
      <div style={{ marginBottom: "2rem" }}>
        <GenderSelection />
      </div>
      <div style={{ marginBottom: "2rem" }}>
        <NewArrivals />
      </div>
      <div style={{ marginBottom: "2rem" }}>
        <FeaturedProducts />
      </div>
      <div style={{ marginBottom: "2rem" }}>
        <TrendingProducts />
      </div>
      <div style={{ marginBottom: "2rem" }}>
        <FeaturedIcon />
      </div>
      <BannerGrid />
    </>
  );
};

export default Home;
