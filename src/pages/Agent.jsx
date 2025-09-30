import { Outlet } from "react-router-dom";
import BackToTopBtn from "../components/BackToTopBtn/BackToTopBtn";
import RightBanner from "../components/Banner/RightBanner";
import Footer from "../components/Footer/Footer";
import AgentNavbar from "../components/MasterAgent/Navbar/AgentNavbar";
import Message from "../components/Message/Message";
import TopNav from "./../components/Navbar/TopNav";
const Agent = () => {
  return (
    <>
      <TopNav />
      <div className="bg-[#2b2922]">
        <AgentNavbar />
        <div className="grid lg:grid-cols-6 bor der-b-[1px] pb -10 h-full bo rder-dotted mt-4 lg:mx-12">
          {/* Left Banner (60% width) */}
          <div className="lg:col-span-4 w-full">
            <Outlet />
          </div>

          {/* Right Banner (40% width) */}
          <div className="lg:col-span-2 w-full ">
            <RightBanner />
          </div>
        </div>

        <Footer />
        <BackToTopBtn />

        <Message />
      </div>
    </>
  );
};

export default Agent;
