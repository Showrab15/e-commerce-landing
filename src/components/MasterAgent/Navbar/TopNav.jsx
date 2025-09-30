import { useState } from "react";

export default function TopNav() {
  const [activeTab, setActiveTab] = useState("ভেল্কি"); // Default active tab

  const tabs = ["ভেল্কি", "ভেল্কি কমিনিউটি", "ভেল্কি ফোরাম"];

  return (
    <div className="bg-pink-500 md:block hidden">
      <div className="flex items-center justify-between py-3 relative w-full max-w-[1322px] mx-auto">
        
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

        {/* Right Aligned Customer Service */}
        <nav className="hover:bg-gray-200 p-2 ml-auto cursor-pointer">
          <h6 className="text-[#cc0000] text-md font-medium">
             কাস্টমার সার্ভিস
          </h6>
        </nav>
      </div>
    </div>
  );
}
