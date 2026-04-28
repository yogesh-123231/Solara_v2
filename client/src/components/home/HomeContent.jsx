import { useEffect, useRef } from "react";
import GenderSelection from "./GenderSelection";
import NewArrivals from "./NewArrivals";
import FeaturedProducts from "./FeaturedProducts";
import TrendingProducts from "./TrendingProducts";
import FeaturedIcon from "../FeaturedIcon";
import { useLocation } from "react-router-dom";

const HomeContent = () => {
  const trendingRef = useRef(null);
  const scrollToTop = () => {
    trendingRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  const location = useLocation();
  useEffect(() => {
    if (location.state?.scrollToTop) {
      scrollToTop();
    }
  }, [location.state]);

  return (
    <>
      <GenderSelection />
      <NewArrivals />
      <FeaturedProducts />
      <TrendingProducts />
      <FeaturedIcon />
    </>
  );
};

export default HomeContent;
