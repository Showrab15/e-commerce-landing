import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const tabs = [
    { label: "OFFER ZONE", path: "/agent" },
    { label: "BEST SELLER", path: "/agent" },
    { label: "Mustard Oil", path: "/agent" },
    { label: "Ghee (ঘি)", path: "/agent" },
    { label: "Dates (খেজুর)", path: "/agent" },
    { label: "খেজুর গুড়", path: "/agent" },
    { label: "Honey", path: "/agent" },
    { label: "Masala", path: "/agent" },
    { label: "Nuts & Seeds", path: "/agent" },
    { label: "Home", path: "/" }, // Home goes to root
  ];

  // Track active tab based on route
  const [activeTab, setActiveTab] = useState("Home");

  useEffect(() => {
    const currentTab = tabs.find((tab) => tab.path === location.pathname);
    if (currentTab) {
      setActiveTab(currentTab.label);
    }
  }, [location.pathname]);

  const handleTabClick = (tab) => {
    setActiveTab(tab.label);
    navigate(tab.path);
  };

  const tabStyle = (tab) =>
    `px-6 py-2 font-medium cursor-pointer rounded transition-colors duration-200 ${
      activeTab === tab.label
        ? "text-white bg-black shadow-md" // Active style
        : "bg-transparent text-black hover:text-white hover:bg-black"
    }`;

  return (
    <div className="bg-[#f8f8f8] my-6">
      <div className="w-full max-w-[1322px] mx-auto">
        {/* Desktop (wrap into multiple lines) */}
        <div className="hidden md:flex flex-wrap items-center justify-center py-2">
          {tabs.map((tab, index) => (
            <div key={tab.label} className="flex items-center mb-2">
              <span
                onClick={() => handleTabClick(tab)}
                className={tabStyle(tab)}
              >
                {tab.label}
              </span>
              {index < tabs.length - 1 && (
                <div className="h-6 w-px bg-gray-300 opacity-50 mx-2" />
              )}
            </div>
          ))}
        </div>

        {/* Mobile (scrollable row) */}
        <div className="flex md:hidden items-center gap-3 overflow-x-auto no-scrollbar py-2 px-2">
          {tabs.map((tab) => (
            <span
              key={tab.label}
              onClick={() => handleTabClick(tab)}
              className={`flex-shrink-0 px-4 py-2 text-sm font-medium cursor-pointer rounded transition-colors duration-200 ${
                activeTab === tab.label
                  ? "text-white bg-black shadow-md"
                  : "bg-transparent text-black hover:text-white hover:bg-black"
              }`}
            >
              {tab.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
