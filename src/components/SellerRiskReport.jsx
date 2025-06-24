import React from "react";
import { FaTachometerAlt, FaTools, FaDatabase, FaBullseye, FaCogs, FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import shoe from "../assets/nike.jpg"; // Replace with actual path to your image

const SidebarItem = ({ icon, label, active, onClick }) => (
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

const SellerRiskReport = () => {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
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
            <SidebarItem icon={<FaTachometerAlt />} label="Dashboard" onClick={() => navigate("/Dashboard")} />
            <SidebarItem icon={<FaBullseye />} label="Triaging" active onClick={() => navigate("/TriagingDashboard")} />
            <SidebarItem icon={<FaTools />} label="Takedown" />
            <SidebarItem icon={<FaDatabase />} label="Database" />
          </nav>
        </div>
        <div className="space-y-2">
          <SidebarItem icon={<FaCogs />} label="Settings" />
          <SidebarItem icon={<FaSignOutAlt />} label="Logout" />
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-auto">
        <div onClick={handleGoBack} className="cursor-pointer text-sm text-gray-500 mb-4">Seller risk report → <span className="text-black font-semibold">SuperSneakers on Amazon</span></div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Card - Listing Details */}
          <div className="bg-white rounded-xl border border-purple-200 p-4 shadow-md">
            <img src={shoe} alt="Product" className="w-full h-48 object-contain mb-4" />
            <div className="text-sm">
              <p><span className="font-semibold">Name:</span> <span className="text-blue-600">Nike Air Force 1</span></p>
              <p><span className="font-semibold">Platform:</span> <span className="text-pink-500">Alibaba</span></p>
              <p><span className="font-semibold">Price:</span> $59</p>
              <p><span className="font-semibold">Reviews:</span> 4328</p>
              <p><span className="font-semibold">Seller:</span> <span className="text-orange-500 underline">SuperSneakers on Amazon</span></p>
            </div>
          </div>

          {/* Middle Card - Risk Assessment */}
          <div className="bg-white rounded-xl p-6 shadow-md col-span-2">
            <h3 className="text-lg font-semibold mb-4">Risk Assessment</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex flex-col justify-center items-center border-r md:border-r-0 md:border-b border-gray-200 pr-4 md:pb-4">
                <div className="text-3xl font-bold text-pink-600">56%</div>
                <p className="text-sm text-red-600 mt-2">High risk of counterfeit product</p>
              </div>
              <div className="space-y-2">
                <div className="text-sm">Reasoning Factors</div>
                <div className="text-sm flex justify-between">
                  <span>Pricing behavior</span> <span className="text-red-600 font-semibold">Critical</span>
                </div>
                <div className="text-sm flex justify-between">
                  <span>Seller Account Age</span> <span className="text-red-600 font-semibold">Critical</span>
                </div>
              </div>
            </div>

            {/* Risk Indicators */}
            <div className="mt-6">
              <h4 className="font-semibold text-sm mb-2">Risk Indicators</h4>
              <div className="space-y-2 text-sm">
                <div className="bg-red-100 text-red-700 p-3 rounded-md">
                  <strong>🚨 Suspicious Pricing Behavior</strong><br />Major undercutting and erratic pricing across platforms signal high counterfeit risk.
                </div>
                <div className="bg-red-100 text-red-700 p-3 rounded-md">
                  <strong>🕵️ Untrustworthy Seller Profile</strong><br />New account with no history or feedback often indicates fake or unverified sellers.
                </div>
                <div className="bg-red-100 text-red-700 p-3 rounded-md">
                  <strong>🎯 Manipulative Marketing Tactics</strong><br />Overuse of promos, urgent messaging and risky hashtags suggest manipulation tactics.
                </div>
              </div>
            </div>

            {/* Footer Actions */}
            <div className="mt-6 flex justify-end gap-4">
              <button className="cursor-pointer border border-gray-300 px-4 py-2 rounded-md text-sm hover:bg-gray-100">Ignore</button>
              <button className="cursor-pointer bg-gradient-to-r from-blue-500 to-fuchsia-600 text-white px-4 py-2 rounded-md text-sm shadow">Takedown Action</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SellerRiskReport;
