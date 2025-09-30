import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../../assets/velki-logo.jpg";
import Breaking from "./Breaking";
import Logo from "./Logo";
import NavOption from "./NavOption";

const AgentNavbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <Breaking />

      <Logo />
      <NavOption />

      <div className="bg-[#f8f8f8] md:hidden  ">
        <div className="flex items-center flex-row  justify-between   py-5 relative w-full max-w-[1322px] mx-auto">
          <div className="md:hidden border-r-2 border-r-red-700 pr-4">
            {/* Mobile Menu Toggle Button */}
            <button id="menuButton" onClick={handleMenuToggle}>
              {menuOpen ? (
                <svg
                  className="w-8 text-red-500 font-bold ml-8 my-auto "
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                  />
                </svg>
              ) : (
                <svg
                  className="w-8 ml-6 my-auto text-gray-700"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                  />
                  <path
                    fill="currentColor"
                    d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                  />
                  <path
                    fill="currentColor"
                    d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                  />
                </svg>
              )}
            </button>
            <div
              id="menuList"
              style={{
                left: menuOpen ? "0px" : "-270px",
                top: menuOpen ? "80px" : "80px",
                transitionDuration: "1000ms",
              }}
              className={` absolute  h-[750px] sm:h-[600px] w-full   z-50 p-8 ${
                menuOpen ? "bg-gray-700 mb-20 menuOpen" : ""
              }`}
            >
              <ul className="mb-4 flex flex-col gap-4 text-left font-medium  leading-6 text-[16px] text-white">
                <li>
                  <NavLink
                    rel="canonical"
                    to="/"
                    aria-label="velki"
                    title="velki"
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? " font-semibold" : " "
                    }
                    onClick={closeMenu} // Close menu when clicked
                  >
                    ভেল্কি
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    rel="canonical"
                    to="/"
                    aria-label="velki-community"
                    title="velki-community"
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? " font-semibold" : " "
                    }
                    onClick={closeMenu} // Close menu when clicked
                  >
                    ভেল্কি কমিনিউটি
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    rel="canonical"
                    to="/"
                    aria-label="velki-forum"
                    title="velki-forum"
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? " font-semibold" : " "
                    }
                    onClick={closeMenu} // Close menu when clicked
                  >
                    ভেল্কি ফোরাম
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    rel="canonical"
                    to="/"
                    aria-label="velki-customer-service"
                    title="velki-customer-service"
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? " font-semibold" : " "
                    }
                    onClick={closeMenu} // Close menu when clicked
                  >
                    ভেল্কি কাস্টমার সার্ভিস
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    rel="canonical"
                    to="/"
                    aria-label="velki-auto-deposit-agent"
                    title="velki-auto-deposit-agent"
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? " font-semibold" : " "
                    }
                    onClick={closeMenu} // Close menu when clicked
                  >
                    ভেল্কি অটো ডিপোজিট এজেন্ট
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    rel="canonical"
                    to="/"
                    aria-label="home"
                    title="home"
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? " font-semibold" : " "
                    }
                    onClick={closeMenu} // Close menu when clicked
                  >
                    হোম
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    rel="canonical"
                    to="/"
                    aria-label="general questions"
                    title="general questions"
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? " font-semibold" : " "
                    }
                    onClick={closeMenu} // Close menu when clicked
                  >
                    সাধারণ প্রশ্ন উত্তর
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    rel="canonical"
                    to="/"
                    aria-label="verify"
                    title="verify"
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? " font-semibold" : " "
                    }
                    onClick={closeMenu} // Close menu when clicked
                  >
                    এজেন্টকে ভেরিফাই করুন
                  </NavLink>
                </li>

                <li>
                  <NavLink
                    rel="canonical"
                    to="/master-agent"
                    aria-label="Master Agent"
                    title="Master Agent"
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? " font-semibold" : " "
                    }
                    onClick={closeMenu} // Close menu when clicked
                  >
                    মাস্টার এজেন্ট
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    rel="canonical"
                    to="/super-agent"
                    aria-label="Super Agent"
                    title="Super Agent"
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? " font-semibold" : " "
                    }
                    onClick={closeMenu} // Close menu when clicked
                  >
                    সুপার এজেন্ট লিস্ট
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    rel="canonical"
                    to="/sub-admin"
                    aria-label="Sub Admin"
                    title="Sub Admin"
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? " font-semibold" : " "
                    }
                    onClick={closeMenu} // Close menu when clicked
                  >
                    সাব এডমিন লিস্ট
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    rel="canonical"
                    to="/site-admin"
                    aria-label=""
                    title=""
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? " font-semibold" : " "
                    }
                    onClick={closeMenu} // Close menu when clicked
                  >
                    সাইট এডমিন লিস্ট
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    rel="canonical"
                    to="/velki-agent-list"
                    aria-label=""
                    title=""
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? " font-semibold" : " "
                    }
                    onClick={closeMenu} // Close menu when clicked
                  >
                    ভেল্কি এজেন্ট লিস্ট
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    rel="canonical"
                    to="/"
                    aria-label=""
                    title=""
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? " font-semibold" : " "
                    }
                    onClick={closeMenu} // Close menu when clicked
                  >
                    ভেল্কী প্রক্সী লিংক
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    rel="canonical"
                    to="/"
                    aria-label=""
                    title=""
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? " font-semibold" : " "
                    }
                    onClick={closeMenu} // Close menu when clicked
                  >
                    ভেল্কীতে একাউন্ট খুলবেন?
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    rel="canonical"
                    to="/"
                    aria-label=""
                    title=""
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? " font-semibold" : " "
                    }
                    onClick={closeMenu} // Close menu when clicked
                  >
                    এজেন্ট এর নতুন নাম্বার
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    rel="canonical"
                    to="/"
                    aria-label=""
                    title=""
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? " font-semibold" : " "
                    }
                    onClick={closeMenu} // Close menu when clicked
                  >
                    ফোন নাম্বার সার্চ করুন
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <Link rel="canonical" to="/">
            <img
              src={logo}
              className="-ml-4 w-[80px] h-[26px] lg:w-80 lg:h-20"
              alt="velki logo"
            />
          </Link>

          <h6 className="text-[#cc0000] ml-12  text-md font-medium">
            কাস্টমার সার্ভিস
          </h6>

          {/* //pc menu */}
          <nav>
            <ul className=" mr-20  hidden  items-center justify-center space-x-9 text-lg text-[#f4e5c2] font-medium relative ">
              <li>
                <NavLink
                  rel="canonical"
                  to="/"
                  aria-label="velki"
                  title="Velki"
                  className="hover:text-white"
                >
                  ভেল্কি
                </NavLink>
              </li>
              <li>
                <NavLink
                  rel="canonical"
                  to="/"
                  aria-label="velki"
                  title="Velki"
                  className="hover:text-white"
                >
                  ভেল্কি কমিনিউটি
                </NavLink>
              </li>
              <li>
                <NavLink
                  rel="canonical"
                  to="/"
                  aria-label="velki"
                  title="Velki"
                  className="hover:text-white"
                >
                  ভেল্কি ফোরাম
                </NavLink>
              </li>
              <li>
                <NavLink
                  rel="canonical"
                  to="/"
                  aria-label="velki"
                  title="Velki"
                  className="hover:text-white"
                >
                  ভেল্কি কাস্টমার সার্ভিস
                </NavLink>
              </li>
              <li>
                <NavLink
                  rel="canonical"
                  to="/master-agent"
                  aria-label="Master Agent"
                  title="Master Agent"
                  className="hover:text-white"
                >
                  মাস্টার এজেন্ট
                </NavLink>
              </li>
              <li>
                <NavLink
                  rel="canonical"
                  to="/super-agent"
                  aria-label="Super Agent"
                  title="Super Agent"
                  className="hover:text-white"
                >
                  সুপার এজেন্ট
                </NavLink>
              </li>
              <li>
                <NavLink
                  rel="canonical"
                  to="/sub-admin "
                  aria-label="Sub Admin"
                  title="Sub Admin"
                  className="hover:text-white"
                >
                  সাব এডমিন
                </NavLink>
              </li>
              <li>
                <NavLink
                  rel="canonical"
                  to="/site-admin"
                  aria-label="site admin"
                  title="site Admin"
                  className="hover:text-white"
                >
                  সাইট এডমিন
                </NavLink>
              </li>
            </ul>
          </nav>

          {/*----------------------- Mobile Menu -------------------------*/}
        </div>
      </div>
    </>
  );
};

export default AgentNavbar;
