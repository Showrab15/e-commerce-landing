import { Outlet } from "react-router-dom";
import BackToTopBtn from "../components/BackToTopBtn/BackToTopBtn";
import Footer from "../components/Footer/Footer";
import Message from "../components/Message/Message";
import Logo from "../components/Navbar/Logo";
const Agent = () => {
  return (
    <div className="bg-[#2b2922]">
      <Logo />
      <Outlet />

      <Footer />
      <BackToTopBtn />

      <Message />
    </div>
  );
};

export default Agent;
