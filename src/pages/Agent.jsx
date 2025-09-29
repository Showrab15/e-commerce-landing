import { Outlet } from "react-router-dom";
import BackToTopBtn from "../components/BackToTopBtn/BackToTopBtn";
import Footer from "../components/Footer/Footer";
import Message from "../components/Message/Message";
import Navbar from "../components/Navbar/Navbar";
const Agent = () => {
  return (
    <>
      <Navbar />

      <Outlet />

      <Footer />
      <BackToTopBtn />

      <Message />
    </>
  );
};

export default Agent;
