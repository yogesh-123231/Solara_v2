import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const ProfileLayout = () => {
  return (
    <>
      <Navbar />
      <section className="page">
        <Outlet />
      </section>
      <Footer />
    </>
  );
};
export default ProfileLayout;
