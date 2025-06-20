import React from "react";
import { FaSearch, FaChevronRight } from "react-icons/fa";
import { HiOutlinePlus } from "react-icons/hi";
import nike from "../assets/nike.jpg";
import nikeairforce from "../assets/nikeairforce.jpg";
import { useNavigate } from 'react-router-dom';

const TriagingDashboard = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/StepOneForm'); // Navigate to MainStepForm
  };
  return (
    <div className="min-h-screen flex bg-gray-100 font-sans">
      
      {/* Main Content */}
      <div className="flex-1 p-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-800">Triaging</h2>
          <button className="cursor-pointer flex items-center bg-gradient-to-r from-pink-500 to-fuchsia-600 text-white px-4 py-2 rounded-md shadow-md" onClick={handleStart}>
            <HiOutlinePlus className="mr-2" />
            Start New Detection
          </button>
        </div>

        {/* Stats Boxes */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-lg p-4 border-l-4 border-green-500 shadow">
            <h3 className="text-green-600 font-bold">3 Products Triaged</h3>
            <p className="text-sm text-gray-500">These have actionable insights</p>
          </div>
          <div className="bg-white rounded-lg p-4 border-l-4 border-yellow-500 shadow">
            <h3 className="text-yellow-600 font-bold">4 Crawling In Progress</h3>
            <p className="text-sm text-gray-500">4 products data are under the process</p>
          </div>
          <div className="bg-white rounded-lg p-4 border-l-4 border-blue-500 shadow">
            <h3 className="text-blue-600 font-bold">2 Triaging In Progress</h3>
            <p className="text-sm text-gray-500">2 products are under the Triaging process</p>
          </div>
          <div className="bg-white rounded-lg p-4 border-l-4 border-red-500 shadow">
            <h3 className="text-red-600 font-bold">2 High Risk</h3>
            <p className="text-sm text-gray-500">2 Products are at High-risk</p>
          </div>
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

        {/* Listings */}
        <div className="space-y-4">
          {/* Product Card 1 */}
          <div className="bg-white p-4 rounded-md shadow flex flex-col md:flex-row md:items-start gap-4">
            <img src={nikeairforce} alt="Nike Airforce" className="w-20 h-20 object-cover rounded" />
            <div className="flex-1">
              <div className="flex justify-between items-center mb-1">
                <h3 className="text-md font-semibold text-gray-800">Nike Air Force 1</h3>
                <span className="text-xs text-red-600 bg-red-100 px-2 py-1 rounded-md font-medium">
                  Needs Review
                </span>
              </div>
              <p className="text-sm text-gray-500">Nike • Footwear • Last updated: 2 hours ago</p>
              <p className="text-sm text-red-500 mt-1">14 High-Risk Listings</p>
              <p className="text-sm text-gray-600">Seller reused 3 images from official site</p>
              <div className="mt-3 flex gap-3">
                <button className="cursor-pointer bg-blue-600 text-white px-3 py-1 rounded-md text-sm">View Product Insights</button>
                <button className="cursor-pointer border text-sm border-gray-300 px-3 py-1 rounded-md hover:bg-gray-100">
                  View Original Listing
                </button>
              </div>
            </div>
          </div>

          {/* Product Card 2 */}
          <div className="bg-white p-4 rounded-md shadow flex flex-col md:flex-row md:items-start gap-4">
            <img src={nike} alt="Nike Jordan" className="w-20 h-20 object-cover rounded" />
            <div className="flex-1">
              <div className="flex justify-between items-center mb-1">
                <h3 className="text-md font-semibold text-gray-800">Nike Jordan</h3>
                <span className="text-xs text-green-700 bg-green-100 px-2 py-1 rounded-md font-medium">
                  Completed
                </span>
              </div>
              <p className="text-sm text-gray-500">Fila • Footwear • Last updated: 2 hours ago</p>
              <p className="text-sm text-red-500 mt-1">12 High-Risk Listings</p>
              <p className="text-sm text-gray-600">Multiple sellers with suspicious pricing patterns</p>
              <div className="mt-3 flex gap-3">
                <button className="cursor-pointer bg-blue-600 text-white px-3 py-1 rounded-md text-sm">View Product Insights</button>
                <button className="cursor-pointer border text-sm border-gray-300 px-3 py-1 rounded-md hover:bg-gray-100">
                  View Original Listing
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TriagingDashboard;
