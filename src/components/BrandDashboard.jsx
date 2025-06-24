import React, { useState } from "react";
import {
  FaTachometerAlt, FaTools, FaDatabase, FaCogs,
  FaSignOutAlt, FaSearch, FaBullseye,
} from "react-icons/fa";
import { FiBell } from "react-icons/fi";
import { HiOutlinePlus } from "react-icons/hi";
import BrandForm from "./BrandForm"; // adjust path
import TriagingContainer from "./TriagingDashboard"; // adjust path

const BrandDashboard = () => {
  const [brands, setBrands] = useState([]);
  const [activeTab, setActiveTab] = useState("Overview");
  const [view, setView] = useState("dashboard"); // dashboard | triaging | addBrand

  const handleSidebarClick = (label) => {
    if (label === "Triaging") setView("triaging");
    else setView("dashboard");
  };

  const handleAddBrand = (newBrand) => {
    setBrands([...brands, newBrand]);
    setActiveTab(newBrand.name);
    setView("dashboard");
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r p-4 flex flex-col justify-between">
        <div>
          <div className="flex items-center mb-8">
            <svg height="32" width="32" viewBox="0 0 100 100">
              <path fill="#FF0080" d="M50 10 L90 50 L50 90 L10 50 Z" />
              <circle cx="50" cy="50" r="6" fill="white" />
            </svg>
            <h1 className="text-pink-600 font-bold text-lg ml-2">STALKRE</h1>
          </div>
          <nav className="space-y-2">
            <SidebarItem active={view === "dashboard"} icon={<FaTachometerAlt />} label="Dashboard" onClick={() => setView("dashboard")} />
            <SidebarItem active={view === "triaging"} icon={<FaBullseye />} label="Triaging" onClick={() => setView("triaging")} />
            <SidebarItem icon={<FaTools />} label="Takedown" />
            <SidebarItem icon={<FaDatabase />} label="Database" />
          </nav>
        </div>
        <div className="space-y-2">
          <SidebarItem icon={<FaCogs />} label="Settings" />
          <SidebarItem icon={<FaSignOutAlt />} label="Logout" />
        </div>
      </aside>

      {/* Main */}
      <main className="flex-1 flex flex-col">
        {view === "addBrand" ? (
          <BrandForm onAddBrand={handleAddBrand} />
        ) : view === "triaging" ? (
          <div className="p-6"><TriagingContainer /></div>
        ) : (
          <>
            <header className="flex justify-between items-center p-4 border-b bg-white shadow-sm">
              <h2 className="text-lg font-medium">Welcome!</h2>
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <input type="text" placeholder="Search..." className="pl-10 pr-4 py-2 border rounded-lg bg-gray-100 text-sm" />
                  <FaSearch className="absolute left-3 top-2.5 text-gray-400" />
                </div>
                <FiBell className="text-xl text-gray-500" />
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white">A</div>
                <span className="text-sm font-medium text-gray-700">Aditya</span>
              </div>
            </header>

            {/* Tabs */}
            <div className="border-b flex gap-4 px-6 pt-4">
              {["Overview", ...brands.map((b) => b.name), "+ Add Brand"].map((tab) => (
                <button
                  key={tab}
                  className={`pb-2 px-2 border-b-2 ${activeTab === tab ? "border-blue-600 text-blue-600 font-medium" : "border-transparent text-gray-600"}`}
                  onClick={() => {
                    if (tab === "+ Add Brand") setView("addBrand");
                    else setActiveTab(tab);
                  }}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Cards */}
            <section className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {brands.map((brand, idx) => (
                <div key={idx} className="bg-white rounded-lg shadow-sm border p-4 flex flex-col">
                  <img src={brand.logo} alt={brand.name} className="h-16 object-contain mb-3" />
                  <h3 className="text-lg font-semibold mb-2">{brand.name}</h3>
                  <p className="text-sm"><span className="font-medium">Platforms:</span> {brand.platforms}</p>
                  <p className="text-sm mb-4"><span className="font-medium">Regions:</span> {brand.regions}</p>
                  <button className="ml-auto mt-auto bg-blue-600 text-white px-4 py-1 text-sm rounded">Add Product</button>
                </div>
              ))}
            </section>
          </>
        )}
      </main>
    </div>
  );
};

// Sidebar Component
const SidebarItem = ({ icon, label, active, onClick }) => (
  <div
    onClick={onClick}
    className={`flex items-center gap-3 px-4 py-2 rounded-lg cursor-pointer text-sm ${
      active ? "bg-gradient-to-r from-pink-600 to-pink-400 text-white font-semibold" : "text-gray-600 hover:bg-gray-100"
    }`}
  >
    <div className="text-lg">{icon}</div>
    {label}
  </div>
);

export default BrandDashboard;
