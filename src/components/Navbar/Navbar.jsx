import { useState } from "react";

export default function Navbar() {
  const [activeTab, setActiveTab] = useState("ভেল্কি"); // Default active tab

  const tabs = ["OFFER ZONE", "BEST SELLER", "Mustard Oil"];

  return (
    <div className="bg-[#f8f8f8] md:block hidden my-10">
      <div className="flex items-center justify-between py-1 relative w-full max-w-[1322px] mx-auto">
        {/* Tabs with Dividers */}
        <div className="flex items-center">
          {tabs.map((tab, index) => (
            <div key={tab} className="flex items-center">
              <span
                onClick={() => setActiveTab(tab)}
                className={`px-8 py-2 font-medium cursor-pointer rounded- transition-colors duration-200 ${
                  activeTab === tab
                    ? " text-black bg-white" // Active tab styles
                    : "bg-transparent text-black hover:text-white hover:bg-black" // Inactive tab styles
                }`}
              >
                {tab}
              </span>
              {index < tabs.length - 1 && (
                <div className="h-6 w-px bg-gray-300 opacity-50 mx-2" /> // Vertical Divider
              )}
            </div>
          ))}
          {/* Additional Divider after the last tab */}
          <div className="h-6 w-px bg-gray-300 opacity-50 mx-2" />
        </div>
      </div>
    </div>
  );
}
