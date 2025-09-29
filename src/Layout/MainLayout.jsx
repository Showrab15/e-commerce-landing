import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import TopNav from "../components/Navbar/TopNav";
const MainLayout = () => {
  return (
    <>
      <TopNav />
      <Navbar />
      <Outlet />
    </>
  );
};

export default MainLayout;
