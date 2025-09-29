import { useState } from "react";

export default function Navbar() {
  const [activeTab, setActiveTab] = useState("OFFER ZONE"); // Default active tab

  const tabs = [
    "OFFER ZONE",
    "BEST SELLER",
    "Mustard Oil",
    "Ghee (ঘি)",
    "Dates (খেজুর)",
    "খেজুর গুড়",
    "Honey",
    "Masala",
    "Nuts & Seeds",
    "Tea/Coffee",
    "Honeycomb",
    "Organic Zone",
  ];

  return (
    <div className="bg-[#f8f8f8] my-6">
      <div className="w-full max-w-[1322px] mx-auto">
        {/* Desktop (wrap into multiple lines) */}
        <div className="hidden md:flex flex-wrap items-center justify-center py-2">
          {tabs.map((tab, index) => (
            <div key={tab} className="flex items-center mb-2">
              <span
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 font-medium cursor-pointer rounded transition-colors duration-200 ${
                  activeTab === tab
                    ? "text-black bg-white shadow"
                    : "bg-transparent text-black hover:text-white hover:bg-black"
                }`}
              >
                {tab}
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
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-shrink-0 px-4 py-2 text-sm font-medium cursor-pointer rounded transition-colors duration-200 ${
                activeTab === tab
                  ? "text-black bg-white shadow"
                  : "bg-transparent text-black hover:text-white hover:bg-black"
              }`}
            >
              {tab}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
