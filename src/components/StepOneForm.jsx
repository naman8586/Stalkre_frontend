import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IoArrowBackSharp, IoArrowForwardSharp } from 'react-icons/io5';

const StepOneForm = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/SteptwoForm');
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  const steps = ['General Info', 'Authentic Details', 'Keywords & Hashtags', 'Trends'];

  return (
    <div className="min-h-screen flex items-center justify-center bg-[length:140%_140%] bg-center px-4 py-10"  style={{ backgroundImage: `url('/assets/bg.png')` }}>
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-2xl px-10 py-12">
        {/* Title */}
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Product Onboarding Form
        </h2>

        {/* Stepper */}
        <div className="flex justify-between items-center mb-12">
          {steps.map((step, i) => (
            <div className="flex-1 flex flex-col items-center relative" key={i}>
              {/* Line connector */}
              {i < steps.length - 1 && (
                <div className="absolute top-4 left-1/2 w-full h-0.5 bg-gray-300 z-0" />
              )}
              {/* Step Circle */}
              <div
                className={`z-10 w-9 h-9 flex items-center justify-center rounded-full border-2 ${
                  i === 0
                    ? 'border-blue-600 text-blue-600 font-semibold'
                    : 'border-gray-300 text-gray-400'
                } bg-white`}
              >
                {i + 1}
              </div>
              <span
                className={`text-xs mt-2 ${
                  i === 0 ? 'text-blue-600 font-semibold' : 'text-gray-400'
                }`}
              >
                {step}
              </span>
            </div>
          ))}
        </div>

        {/* Form Section */}
        <h3 className="text-xl font-semibold mb-8 text-gray-800">
          General Product Information
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Product Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Product Name
            </label>
            <input
              type="text"
              placeholder="nike airforce"
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
            />
            <p className="text-xs text-gray-500 mt-1">
              The full name of the product as it appears on official branding
            </p>
          </div>

          {/* Brand Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Brand Name
            </label>
            <input
              type="text"
              placeholder="nike"
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
            />
            <p className="text-xs text-gray-500 mt-1">
              The company or brand that manufactures the product
            </p>
          </div>

          {/* Model Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Model Name/Number
            </label>
            <input
              type="text"
              placeholder="123456"
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
            />
            <p className="text-xs text-gray-500 mt-1">
              The specific model identifier if applicable
            </p>
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Category
            </label>
            <select className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500">
              <option>Shoes</option>
              <option>Clothing</option>
              <option>Accessories</option>
            </select>
            <p className="text-xs text-gray-500 mt-1">
              The product category for classification purposes
            </p>
          </div>

          {/* Min Price */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Minimum Price ($)
            </label>
            <input
              type="number"
              placeholder="123456"
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
            />
            <p className="text-xs text-gray-500 mt-1">
              The lowest retail price of the authentic product
            </p>
          </div>

          {/* Max Price */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Maximum Price ($)
            </label>
            <input
              type="number"
              placeholder="123456"
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
            />
            <p className="text-xs text-gray-500 mt-1">
              The highest retail price of the authentic product
            </p>
          </div>
        </div>

        {/* Footer Navigation Buttons */}
        <div className="flex justify-between items-center mt-12">
          <button
            onClick={handleGoBack}
            className="cursor-pointer flex items-center gap-2 px-5 py-2 border border-gray-300 rounded-lg text-sm hover:bg-gray-100 transition"
          >
            <IoArrowBackSharp className="text-lg" />
            Previous
          </button>
          <button
            onClick={handleStart}
            className="cursor-pointer flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white px-6 py-2 rounded-lg text-sm font-medium transition"
          >
            Next
            <IoArrowForwardSharp className="text-lg" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default StepOneForm;
