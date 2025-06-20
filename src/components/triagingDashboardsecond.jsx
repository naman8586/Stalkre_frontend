import React from 'react';
import { FaChevronDown } from 'react-icons/fa';

const triagingDashboardsecond = () => {
  return (
    <div className="flex min-h-screen bg-gray-50 font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-sm border-r">
        <div className="p-6">
          <h1 className="text-pink-600 text-2xl font-bold">STALKRE</h1>
        </div>
        <nav className="px-6 py-4 space-y-2">
          <div className="text-sm font-semibold text-gray-500">Main</div>
          <button className="w-full flex items-center px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg">
            Triaging
          </button>
          <button className="w-full flex items-center px-4 py-2 hover:bg-gray-100 rounded-lg text-gray-700">
            Takedown
          </button>
          <button className="w-full flex items-center px-4 py-2 hover:bg-gray-100 rounded-lg text-gray-700">
            Database
          </button>
        </nav>
        <div className="mt-auto px-6 py-4 space-y-2">
          <button className="w-full flex items-center px-4 py-2 hover:bg-gray-100 rounded-lg text-gray-700">
            Settings
          </button>
          <button className="w-full flex items-center px-4 py-2 hover:bg-gray-100 rounded-lg text-gray-700">
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold">Triaging</h2>
          <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-lg text-sm font-medium shadow">
            + Start New Detection
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 mb-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="text-sm text-gray-500">TOTAL ENTRIES</p>
            <h3 className="text-3xl font-bold">2,132</h3>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="text-sm text-gray-500">PLATFORM</p>
            <div className="w-full h-2 bg-gray-200 rounded-full mt-2">
              <div className="h-2 bg-pink-500 rounded-l-full" style={{ width: '65%' }}></div>
            </div>
            <div className="text-xs mt-2 flex justify-between">
              <span className="text-pink-500">Social 65%</span>
              <span className="text-blue-500">E-commerce 35%</span>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <p className="text-sm text-gray-500">SELLER RISK SCORE</p>
            <div className="mt-2 text-2xl font-bold text-orange-500">78%</div>
            <div className="text-xs text-gray-500 mt-1">Level 4</div>
          </div>
        </div>

        {/* Key Insights */}
        <div className="bg-white p-6 rounded-lg shadow mb-6">
          <h4 className="text-lg font-semibold mb-4">Key Insights</h4>
          <div className="grid grid-cols-3 gap-4 text-sm text-gray-700">
            <div className="bg-gray-50 p-4 rounded border">Top Risk Signal Pattern</div>
            <div className="bg-gray-50 p-4 rounded border">Dominant Listing Behavior</div>
            <div className="bg-gray-50 p-4 rounded border">Emerging Fraudulent Trends</div>
            <div className="bg-gray-50 p-4 rounded border">AI Flagged Visual Redundancy</div>
            <div className="bg-gray-50 p-4 rounded border">Suspicious Seller Profile Patterns</div>
            <div className="bg-gray-50 p-4 rounded border">Unusual Pricing Behavior</div>
          </div>
        </div>

        {/* Sellers Report */}
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex justify-between items-center mb-4">
            <h4 className="text-lg font-semibold">Sellers Report</h4>
            <div className="flex gap-2">
              <button className="text-sm flex items-center gap-1 px-3 py-1 border rounded">
                All risk levels <FaChevronDown className="text-xs" />
              </button>
              <button className="text-sm flex items-center gap-1 px-3 py-1 border rounded">
                All Platforms <FaChevronDown className="text-xs" />
              </button>
            </div>
          </div>
          <table className="w-full text-sm">
            <thead className="text-left text-gray-500">
              <tr>
                <th>S.No</th>
                <th>Product</th>
                <th>Seller</th>
                <th>Platform</th>
                <th>Risk score</th>
                <th>View</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              <tr className="border-t">
                <td>1</td>
                <td className="text-pink-600">Nike Air Force 1</td>
                <td>TopTech Store</td>
                <td>Alibaba</td>
                <td className="text-green-500">+24</td>
                <td><button className="text-gray-400">👁</button></td>
              </tr>
              <tr className="border-t">
                <td>2</td>
                <td className="text-pink-600">Nike Jordan</td>
                <td>LuxuryBags4Less</td>
                <td>Amazon</td>
                <td className="text-red-500">-64</td>
                <td><button className="text-gray-400">👁</button></td>
              </tr>
              <tr className="border-t">
                <td>3</td>
                <td className="text-pink-600">Nike Air Force 2</td>
                <td>SportGearOutlet</td>
                <td>Instagram</td>
                <td className="text-yellow-500">-56</td>
                <td><button className="text-gray-400">👁</button></td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
};

export default triagingDashboardsecond;
