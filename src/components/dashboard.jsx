import React from "react";
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
import { useNavigate } from "react-router-dom"; // ✅ Import navigate

const dashboard = () => {
  const navigate = useNavigate(); // ✅ Initialize navigate

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
            <SidebarItem active icon={<FaTachometerAlt />} label="Dashboard" />
            <button onClick={() => navigate("/TriagingDashboard")}> <SidebarItem icon={<FaBullseye />} label="Triaging" /></button>
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
        {/* Topbar */}
        <header className="flex justify-between items-center p-4 border-b bg-white shadow-sm">
          <h2 className="text-lg font-medium">Welcome!</h2>

          <div className="flex items-center space-x-4">
            {/* Search Bar */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search products, listings..."
                className="pl-10 pr-4 py-2 border rounded-lg bg-gray-100 text-sm focus:outline-none"
              />
              <FaSearch className="absolute left-3 top-2.5 text-gray-400" />
            </div>

            {/* Notifications */}
            <FiBell className="text-xl text-gray-500" />

            {/* User Avatar */}
            <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center text-sm font-semibold text-white">
              A
            </div>
            <span className="text-sm font-medium text-gray-700">Aditya</span>
          </div>
        </header>

        {/* Content Area */}
        <section className="flex flex-col items-center justify-center flex-1 text-center px-4">
          <h1 className="text-2xl font-semibold mb-2">Welcome to Stalkre!</h1>
          <h2 className="text-sm text-gray-700 font-medium mb-2">
            Protect Your Brand From Counterfeits
          </h2>
          <p className="text-sm text-gray-500 max-w-xl mb-6">
            Our advanced authentication technology helps brands safeguard their
            products and maintain consumer trust in an era of sophisticated
            counterfeiting.
          </p>

          {/* ✅ Navigate to BrandForm */}
          <button
            onClick={() => navigate('/BrandForm ')}
            className="cursor-pointer flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-blue-500 to-pink-500 text-white font-semibold rounded-lg"
          >
            <HiOutlinePlus className="text-lg" />
            Add Your Brand
          </button>
        </section>
      </main>
    </div>
  );
};

const SidebarItem = ({ icon, label, active }) => {
  return (
    <div
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

export default dashboard;
