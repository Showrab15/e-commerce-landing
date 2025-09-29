import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import TopNav from "../components/Navbar/TopNav";
const MainLayout = () => {
  return (
    <>
      <TopNav />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
