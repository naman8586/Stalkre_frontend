import React from "react";
import {
  FaTachometerAlt,
  FaTools,
  FaDatabase,
  FaCogs,
  FaSignOutAlt,
  FaBullseye,
  FaChevronRight
} from "react-icons/fa";
import { HiOutlinePlus } from "react-icons/hi";
import nike from "../assets/nike.jpg";
import nikeairforce from "../assets/nikeairforce.jpg";
import { useNavigate } from "react-router-dom";

const SidebarItem = ({ icon, label, active }) => (
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

const TriagingDashboard = () => {
  const navigate = useNavigate();

  const handleStart = () => navigate("/StepOneForm");
  const handleGoBack = () => navigate("/Dashboard");

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

          {/* Navigation */}
          <nav className="space-y-2">
            <button onClick={() => navigate("/dashboard")}>
              <SidebarItem icon={<FaTachometerAlt />} label="Dashboard" />
            </button>
            <SidebarItem active icon={<FaBullseye />} label="Triaging" />
            <SidebarItem icon={<FaTools />} label="Takedown" />
            <SidebarItem icon={<FaDatabase />} label="Database" />
          </nav>
        </div>

        {/* Settings/Logout */}
        <div className="space-y-2">
          <SidebarItem icon={<FaCogs />} label="Settings" />
          <SidebarItem icon={<FaSignOutAlt />} label="Logout" />
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col w-full">
        {/* ❌ Topbar removed */}

        {/* Content */}
        <section className="flex-1 overflow-auto p-6 bg-gray-100">
          {/* Header Row */}
          <div className="flex justify-between items-center mb-6">
            <button
              className="flex items-center cursor-pointer px-4 py-2 rounded-md shadow-md"
              onClick={handleGoBack}
            >
              <h2 className="text-xl font-semibold">{'<'} Triaging</h2>
            </button>

            <button
              className="cursor-pointer flex items-center bg-gradient-to-r from-pink-500 to-fuchsia-600 text-white px-4 py-2 rounded-md shadow-md"
              onClick={handleStart}
            >
              <HiOutlinePlus className="mr-2" />
              Start New Detection
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
            <StatCard count="3" label="Products Triaged" color="green" info="These have actionable insights" />
            <StatCard count="4" label="Crawling In Progress" color="yellow" info="4 products data are under the process" />
            <StatCard count="2" label="Triaging In Progress" color="blue" info="2 products are under the Triaging process" />
            <StatCard count="2" label="High Risk" color="red" info="2 Products are at High-risk" />
          </div>

          {/* Alerts */}
          <div className="bg-red-50 text-red-700 border border-red-200 rounded-md p-4 mb-6">
            <h4 className="font-bold mb-2">⚠ Urgent Alerts</h4>
            <ul className="list-disc pl-6 text-sm">
              <li>Spike detected in counterfeit activity for Nike Air Force 1</li>
              <li>One seller shows all four major risk flags</li>
            </ul>
            <a href="#" className="text-red-600 font-medium mt-2 inline-block hover:underline">
              View Details <FaChevronRight className="inline ml-1" />
            </a>
          </div>

          {/* Product Cards */}
          <div className="space-y-4">
            <ProductCard
              img={nikeairforce}
              title="Nike Air Force 1"
              brand="Nike"
              status="Needs Review"
              statusColor="red"
              listings="14 High-Risk Listings"
              insights="Seller reused 3 images from official site"
              navigate={navigate}
            />
            <ProductCard
              img={nike}
              title="Nike Jordan"
              brand="Fila"
              status="Completed"
              statusColor="green"
              listings="12 High-Risk Listings"
              insights="Multiple sellers with suspicious pricing patterns"
              navigate={navigate}
            />
          </div>
        </section>
      </main>
    </div>
  );
};

// Reusable Components
const StatCard = ({ count, label, color, info }) => (
  <div className={`bg-white rounded-lg p-4 border-l-4 border-${color}-500 shadow`}>
    <h3 className={`text-${color}-600 font-bold`}>{count} {label}</h3>
    <p className="text-sm text-gray-500">{info}</p>
  </div>
);

const ProductCard = ({ img, title, brand, status, statusColor, listings, insights, navigate }) => (
  <div className="bg-white p-4 rounded-md shadow flex flex-col md:flex-row md:items-start gap-4">
    <img src={img} alt={title} className="w-20 h-20 object-cover rounded" />
    <div className="flex-1">
      <div className="flex justify-between items-center mb-1">
        <h3 className="text-md font-semibold text-gray-800">{title}</h3>
        <span className={`text-xs text-${statusColor}-600 bg-${statusColor}-100 px-2 py-1 rounded-md font-medium`}>
          {status}
        </span>
      </div>
      <p className="text-sm text-gray-500">{brand} • Footwear • Last updated: 2 hours ago</p>
      <p className="text-sm text-red-500 mt-1">{listings}</p>
      <p className="text-sm text-gray-600">{insights}</p>
      <div className="mt-3 flex gap-3">
        <button onClick={() => navigate('/productInsight')} className="cursor-pointer bg-blue-600 text-white px-3 py-1 rounded-md text-sm">
          View Product Insights
        </button>
        <button className="border text-sm border-gray-300 px-3 py-1 rounded-md hover:bg-gray-100">
          View Original Listing
        </button>
      </div>
    </div>
  </div>
);

export default TriagingDashboard;
