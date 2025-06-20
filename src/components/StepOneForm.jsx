import React from 'react';
import { useNavigate } from 'react-router-dom';

const StepOneForm = () => {
   const navigate = useNavigate();

  const handleStart = () => {
    navigate('/SteptwoForm'); // Navigate to MainStepForm
  };
 const handleGoBack = () => {
    navigate(-1); // This goes back to the previous page in history
  };
  
  const steps = ['General Info', 'Authentic Details', 'Keywords & Hashtags', 'Trends'];

  return (
    <div className="max-w-4xl mx-auto mt-10 p-8 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Product Onboarding Form</h2>

      {/* Step Progress Bar with Lines and Gaps */}
      <div className="relative flex items-center justify-between mb-10">
        {steps.map((step, i) => (
          <div key={i} className="flex-1 flex flex-col items-center relative">
            {/* Line to the next step */}
            {i < steps.length - 1 && (
              <div className="absolute top-4 left-1/2 w-full h-0.5 bg-gray-300 z-0"></div>
            )}

            {/* Step Circle */}
            <div
              className={`w-8 h-8 flex items-center justify-center rounded-full border-2 z-10 ${
                i === 0 ? 'border-blue-600 text-blue-600' : 'border-gray-300 text-gray-400'
              } bg-white`}
            >
              {i + 1}
            </div>

            {/* Step Label */}
            <span
              className={`text-xs mt-2 text-center ${
                i === 0 ? 'text-blue-600 font-medium' : 'text-gray-400'
              }`}
            >
              {step}
            </span>
          </div>
        ))}
      </div>

      {/* General Product Information */}
      <h3 className="text-lg font-semibold mb-4">General Product Information</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block mb-1 text-sm font-medium">Product Name</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="nike airforce"
          />
        </div>
        <div>
          <label className="block mb-1 text-sm font-medium">Brand Name</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="nike"
          />
        </div>
        <div>
          <label className="block mb-1 text-sm font-medium">Model Name/Number</label>
          <input
            type="text"
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="123456"
          />
        </div>
        <div>
          <label className="block mb-1 text-sm font-medium">Category</label>
          <select className="w-full border border-gray-300 rounded px-3 py-2">
            <option>Shoes</option>
            <option>Clothing</option>
            <option>Accessories</option>
          </select>
        </div>
        <div>
          <label className="block mb-1 text-sm font-medium">Minimum Price ($)</label>
          <input
            type="number"
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="123"
          />
        </div>
        <div>
          <label className="block mb-1 text-sm font-medium">Maximum Price ($)</label>
          <input
            type="number"
            className="w-full border border-gray-300 rounded px-3 py-2"
            placeholder="456"
          />
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-8">
        <button onClick={handleGoBack} className="cursor-pointer px-4 py-2 border rounded text-gray-700">← Previous</button>
        <button onClick={handleStart} className="cursor-pointer px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Next →
        </button>
      </div>
    </div>
  );
};

export default StepOneForm;