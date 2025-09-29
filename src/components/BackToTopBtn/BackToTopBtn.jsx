import { useEffect, useState } from "react";
import { FaAngleUp } from "react-icons/fa";
import "./BackToTopBtn.css";
const BackToTopBtn = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {isVisible && (
        <button
          className="backToTopButton-animation bg-[#cc0000] text-white text-[25px]
       font-medium font-serif cursor-pointer 
      fixed right-[40px] bottom-[130px] md:bottom-[40px] md:right-[40px] flex
       gap-3 justify-center items-center  p-2 "
          onClick={scrollToTop}
        >
          <span className="font-semibold">
            {" "}
            <FaAngleUp />
          </span>
        </button>
      )}
    </div>
  );
};

export default BackToTopBtn;
