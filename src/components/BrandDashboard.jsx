import React, { useState } from "react";
import {
  FaTachometerAlt,
  FaTools,
  FaDatabase,
  FaCogs,
  FaSignOutAlt,
  FaSearch,
  FaBullseye,
} from "react-icons/fa";
import { FiBell } from "react-icons/fi";
import { HiOutlinePlus } from "react-icons/hi";

// Mock Brand Data
const mockBrands = [
  {
    name: "Nike",
    logo: "https://1000logos.net/wp-content/uploads/2017/03/Nike-Logo.png",
    platforms: "Ecommerce",
    regions: "China, India, United States",
  },
  {
    name: "Dior",
    logo: "https://1000logos.net/wp-content/uploads/2017/06/Dior-logo.png",
    platforms: "Social Media, Ecommerce",
    regions: "Europe, United States, Asia",
  },
];

// Triaging Dashboard Component
import TriagingContainer from "./TriagingDashboard"; // Adjust path as needed

const TriagingDashboard = () => (
  <div className="p-6">
    <TriagingContainer />
  </div>
);


// Main Dashboard Component
const BrandDashboard = () => {
  const [activeTab, setActiveTab] = useState("Overview");
  const [view, setView] = useState("dashboard"); // dashboard | triaging

  const handleSidebarClick = (label) => {
    if (label === "Triaging") {
      setView("triaging");
    } else {
      setView("dashboard");
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r border-gray-200 flex flex-col justify-between p-4">
        <div>
          {/* Logo */}
          <div className="flex items-center mb-8">
            <svg height="32" width="32" viewBox="0 0 100 100">
              <path fill="#FF0080" d="M50 10 L90 50 L50 90 L10 50 Z" />
              <circle cx="50" cy="50" r="6" fill="white" />
            </svg>
            <h1 className="text-pink-600 font-bold text-lg ml-2">STALKRE</h1>
          </div>

          {/* Nav Links */}
          <nav className="space-y-2">
            <SidebarItem
              active={view === "dashboard"}
              icon={<FaTachometerAlt />}
              label="Dashboard"
              onClick={() => handleSidebarClick("Dashboard")}
            />
            <SidebarItem
              active={view === "triaging"}
              icon={<FaBullseye />}
              label="Triaging"
              onClick={() => handleSidebarClick("Triaging")}
            />
            <SidebarItem icon={<FaTools />} label="Takedown" />
            <SidebarItem icon={<FaDatabase />} label="Database" />
          </nav>
        </div>

        {/* Bottom Settings/Logout */}
        <div className="space-y-2">
          <SidebarItem icon={<FaCogs />} label="Settings" />
          <SidebarItem icon={<FaSignOutAlt />} label="Logout" />
        </div>
      </aside>

      {/* Main Section */}
      <main className="flex-1 flex flex-col">
        {view === "dashboard" ? (
          <>
            {/* Topbar */}
            <header className="flex justify-between items-center p-4 border-b bg-white shadow-sm">
              <h2 className="text-lg font-medium">Welcome!</h2>

              <div className="flex items-center space-x-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search products, listings..."
                    className="pl-10 pr-4 py-2 border rounded-lg bg-gray-100 text-sm focus:outline-none"
                  />
                  <FaSearch className="absolute left-3 top-2.5 text-gray-400" />
                </div>
                <FiBell className="text-xl text-gray-500" />
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-sm font-semibold text-white">
                  A
                </div>
                <span className="text-sm font-medium text-gray-700">
                  Aditya
                </span>
              </div>
            </header>

            {/* Tabs */}
            <div className="border-b flex gap-4 px-6 pt-4">
              {["Overview", ...mockBrands.map((b) => b.name), "+ Add Brand"].map(
                (tab) => (
                  <button
                    key={tab}
                    className={`pb-2 px-2 border-b-2 ${
                      activeTab === tab
                        ? "border-blue-600 text-blue-600 font-medium"
                        : "border-transparent text-gray-600"
                    }`}
                    onClick={() => setActiveTab(tab)}
                  >
                    {tab}
                  </button>
                )
              )}
            </div>

            {/* Cards */}
            <section className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mockBrands.map((brand, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-lg shadow-sm border p-4 flex flex-col"
                >
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    className="h-16 object-contain mb-3"
                  />
                  <h3 className="text-lg font-semibold mb-2">{brand.name}</h3>
                  <p className="text-sm">
                    <span className="font-medium">Platforms:</span>{" "}
                    {brand.platforms}
                  </p>
                  <p className="text-sm mb-4">
                    <span className="font-medium">Regions:</span>{" "}
                    {brand.regions}
                  </p>
                  <button className="ml-auto mt-auto bg-blue-600 text-white px-4 py-1 text-sm rounded hover:bg-blue-700">
                    Add Product
                  </button>
                </div>
              ))}

              {/* Add Brand Card */}
              <div className="border-2 border-dashed rounded-lg flex flex-col justify-center items-center p-6 text-center">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-pink-100 mb-3">
                  <HiOutlinePlus className="text-pink-600 text-xl" />
                </div>
                <h4 className="font-medium text-gray-700 mb-1">Add New Brand</h4>
                <p className="text-sm text-gray-500 mb-3">
                  Register a brand to start monitoring
                </p>
                <button className="bg-gradient-to-r from-blue-500 to-pink-500 text-white px-4 py-1 text-sm rounded">
                  Add Brand
                </button>
              </div>
            </section>
          </>
        ) : (
          <TriagingDashboard />
        )}
      </main>
    </div>
  );
};

// Sidebar Item Component
const SidebarItem = ({ icon, label, active, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer text-sm ${
        active
          ? "bg-gradient-to-r from-pink-600 to-pink-400 text-white font-semibold"
          : "text-gray-600 hover:bg-gray-100"
      }`}
    >
      <div className="text-lg">{icon}</div>
      {label}
    </div>
  );
};

export default BrandDashboard;
