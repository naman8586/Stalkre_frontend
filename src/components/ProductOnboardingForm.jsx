    import React from "react";
import { FaArrowRight, FaArrowLeft, FaTimes } from "react-icons/fa";

function ProductOnboardingForm() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-black via-[#12041d] to-[#1d0125] p-4">
      <div className="w-full max-w-5xl bg-white rounded-xl p-8 shadow-xl relative">
        {/* Close icon */}
        <button className="absolute top-4 right-4 text-red-500 hover:text-red-600 text-xl">
          <FaTimes />
        </button>

        {/* Heading */}
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Product Onboarding Form
        </h2>

        {/* Step Indicators */}
        <div className="flex items-center justify-center gap-6 mb-8 text-sm">
          <div className="flex flex-col items-center">
            <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center">
              1
            </div>
            <span className="mt-2 text-blue-600 font-medium">General Info</span>
          </div>
          <hr className="border-t w-8 border-gray-300" />
          <div className="flex flex-col items-center text-gray-400">
            <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center">
              2
            </div>
            <span className="mt-2">Authentic Details</span>
          </div>
          <hr className="border-t w-8 border-gray-300" />
          <div className="flex flex-col items-center text-gray-400">
            <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center">
              3
            </div>
            <span className="mt-2">Keywords & Hashtags</span>
          </div>
          <hr className="border-t w-8 border-gray-300" />
          <div className="flex flex-col items-center text-gray-400">
            <div className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center">
              4
            </div>
            <span className="mt-2">Trends</span>
          </div>
        </div>

        {/* Form Section */}
        <h3 className="text-lg font-semibold mb-4 text-gray-700">General Product Information</h3>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-gray-700">
          {/* Left Column */}
          <div>
            <label className="block mb-1 font-medium">Product Name</label>
            <input
              type="text"
              placeholder="nike airforce"
              className="w-full border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p className="text-xs mt-1 text-gray-500">
              The full name of the product as it appears on official branding
            </p>
          </div>

          <div>
            <label className="block mb-1 font-medium">Brand Name</label>
            <input
              type="text"
              placeholder="nike"
              className="w-full border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p className="text-xs mt-1 text-gray-500">
              The company or brand that manufactures the product
            </p>
          </div>

          <div>
            <label className="block mb-1 font-medium">Model Name/Number</label>
            <input
              type="text"
              placeholder="123456"
              className="w-full border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p className="text-xs mt-1 text-gray-500">
              The specific model identifier if applicable
            </p>
          </div>

          <div>
            <label className="block mb-1 font-medium">Category</label>
            <select className="w-full border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option>Shoes</option>
              <option>Clothing</option>
              <option>Electronics</option>
            </select>
            <p className="text-xs mt-1 text-gray-500">
              The product category for classification purposes
            </p>
          </div>

          <div>
            <label className="block mb-1 font-medium">Minimum Price ($)</label>
            <input
              type="number"
              placeholder="123456"
              className="w-full border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p className="text-xs mt-1 text-gray-500">
              The lowest retail price of the authentic product
            </p>
          </div>

          <div>
            <label className="block mb-1 font-medium">Maximum Price ($)</label>
            <input
              type="number"
              placeholder="123456"
              className="w-full border px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <p className="text-xs mt-1 text-gray-500">
              The highest retail price of the authentic product
            </p>
          </div>
        </form>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8">
          <button className="flex items-center px-4 py-2 border rounded-md hover:bg-gray-100 text-gray-700">
            <FaArrowLeft className="mr-2" />
            Previous
          </button>
          <button className="flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md">
            Next
            <FaArrowRight className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductOnboardingForm;
