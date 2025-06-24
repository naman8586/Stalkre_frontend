import React from "react";
import {
  FaSignOutAlt,
  FaTachometerAlt,
  FaTools,
  FaDatabase,
  FaBullseye,
  FaCogs,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const SidebarItem = ({ icon, label, active, onClick }) => (
  <div
    onClick={onClick}
    className={`flex items-center gap-2 px-4 py-2 rounded cursor-pointer hover:text-pink-600 text-sm font-medium ${active ? 'bg-gradient-to-r from-pink-600 to-pink-400 text-white' : 'text-gray-700 hover:bg-gray-100'}`}
  >
    {icon}
    <span>{label}</span>
  </div>
);

const ProductInsight = () => {
  const navigate = useNavigate();
  const handleStart = () => {
    navigate('/SellerRiskReport');
  };

  return (
    <div className="flex h-screen font-sans bg-[#f7f9fc] text-gray-800">
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
            <SidebarItem icon={<FaTachometerAlt />} label="Dashboard" onClick={() => navigate("/Dashboard")} />
            <SidebarItem icon={<FaBullseye />} label="Triaging" active onClick={() => navigate("/TriagingDashboard")} />
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

      {/* Main content */}
      <main className="flex-1 p-8 overflow-auto">
        <div className="mb-4">
           <button
              className="flex items-center cursor-pointer px-4 py-2 rounded-md shadow-md"
              onClick={() => navigate("/TriagingDashboard")}
            >
              <h2 className="text-xl font-semibold">{'<'} Triaging</h2>
            </button>
        </div>

        <h2 className="text-xl font-semibold mb-6">Triaging</h2>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow p-6">
            <p className="text-sm text-gray-500">TOTAL ENTRIES</p>
            <h3 className="text-3xl font-bold">2,132</h3>
          </div>
          <div className="bg-white rounded-xl shadow p-6">
            <p className="text-sm text-gray-500">PLATFORM</p>
            <div className="w-32 h-32 mx-auto">
              <div className="rounded-full bg-pink-100 w-32 h-32 flex items-center justify-center text-center">
                <p className="text-pink-600 font-bold">Social<br />65%<br />E-commerce<br />35%</p>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow p-6">
            <p className="text-sm text-gray-500 mb-2">SELLER RISK SCORE</p>
            <h3 className="text-2xl font-bold text-orange-600">78%</h3>
            <div className="w-full h-3 bg-red-100 rounded-full mt-2">
              <div className="h-3 bg-red-500 rounded-full" style={{ width: '78%' }}></div>
            </div>
          </div>
        </div>

        {/* Key Insights */}
        <section className="mb-10">
          <h3 className="text-lg font-semibold mb-4">Key insights</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {["Top Risk Signal Pattern", "Dominant Listing Behavior", "Emerging Fraudulent Trends", "AI flagged Visual Redundancy", "Suspicious Seller Profile Patterns", "Unusual Pricing Behavior"].map((title, idx) => (
              <div key={idx} className="bg-white p-4 rounded-lg shadow border border-gray-200">
                <h4 className="font-semibold text-sm mb-1">{title}</h4>
                <p className="text-xs text-gray-600">Description text placeholder for: {title}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Sellers Report */}
        <section>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
            <h3 className="text-lg font-semibold">Sellers Report</h3>
            <div className="flex gap-4">
              <select className="border rounded px-3 py-1 text-sm">
                <option>All Risk levels</option>
              </select>
              <select className="border rounded px-3 py-1 text-sm">
                <option>All Platforms</option>
              </select>
            </div>
          </div>
          <div className="bg-white rounded-xl shadow overflow-auto">
            <table className="w-full text-sm text-left">
              <thead className="bg-gray-100 text-gray-600">
                <tr>
                  <th className="px-4 py-2">No</th>
                  <th className="px-4 py-2">Product</th>
                  <th className="px-4 py-2">Seller</th>
                  <th className="px-4 py-2">Platform</th>
                  <th className="px-4 py-2">Risk score</th>
                  <th     onClick={handleStart} className="px-4 py-2">View</th>
                </tr>
              </thead>
              <tbody>
                {[{
                  id: 1,
                  product: "Nike Air Force 1",
                  seller: "TopTech Store",
                  platform: "Alibaba",
                  risk: "42.3",
                  color: "text-green-600"
                }, {
                  id: 2,
                  product: "Nike Jordan",
                  seller: "LuxuryBags4Less",
                  platform: "Amazon",
                  risk: "56.4",
                  color: "text-red-600"
                }, {
                  id: 3,
                  product: "Nike Air Force 2",
                  seller: "SportsGearOutlet",
                  platform: "Instagram",
                  risk: "67.5",
                  color: "text-orange-600"
                }].map((item, idx) => (
                  <tr key={item.id} className="border-t">
                    <td className="px-4 py-2">{idx + 1}</td>
                    <td className="px-4 py-2 text-blue-600 font-medium">{item.product}</td>
                    <td className="px-4 py-2">{item.seller}</td>
                    <td className="px-4 py-2">{item.platform}</td>
                    <td className={`px-4 py-2 ${item.color}`}>{item.risk}</td>
                    <td className="px-4 py-2">
                      <button onClick={handleStart}className=" cursor-pointer text-blue-500 underline text-sm">View</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProductInsight;
