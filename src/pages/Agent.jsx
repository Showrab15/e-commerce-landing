import { Outlet } from "react-router-dom";
import BackToTopBtn from "../components/BackToTopBtn/BackToTopBtn";
import Footer from "../components/Footer/Footer";
import Message from "../components/Message/Message";
const Agent = () => {
  return (
    <>
      <div className="bg-[#2b2922]">
        <div className="  lg:mx-12">
          <Outlet />
        </div>

        <Footer />
        <BackToTopBtn />

        <Message />
      </div>
    </>
  );
};

export default Agent;
