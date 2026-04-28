import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { createContext, useEffect, useState } from "react";
import Axios from "../Axios";

export const LoadingContext = createContext();
const HOME_CACHE_KEY = "homePageData";

const MainLayout = () => {
  const cachedData = JSON.parse(localStorage.getItem(HOME_CACHE_KEY) || "null");
  const [loading, setLoading] = useState(!cachedData);
  const [slowServer, setSlowServer] = useState(false);
  const [data, setData] = useState(cachedData || {});

  useEffect(() => {
    const fetchData = async () => {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => {
        setSlowServer(true);
        controller.abort();
      }, 7000);

      try {
        const response = await Axios.get("/api/v1/product/featured", {
          signal: controller.signal,
        });
        setData(response.data);
        localStorage.setItem(HOME_CACHE_KEY, JSON.stringify(response.data));
      } catch (error) {
        if (error?.name !== "CanceledError") {
          console.log(error);
        }
      } finally {
        clearTimeout(timeoutId);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <section className="page">
        <LoadingContext.Provider value={{ data, setData, loading, slowServer }}>
          <Outlet />
        </LoadingContext.Provider>
      </section>
      <Footer />
    </>
  );
};
export default MainLayout;
