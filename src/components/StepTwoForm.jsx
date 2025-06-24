import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CloudArrowUpIcon } from '@heroicons/react/24/outline';

const StepTwoForm = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/StepThreeForm');
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  const [image, setImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) setImage(file);
  };

  const steps = ['General Info', 'Authentic Details', 'Keywords & Hashtags', 'Trends'];

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4 py-12 bg-[length:140%_140%] bg-center"
      style={{ backgroundImage: `url('/assets/bg.png')` }}
    >
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-2xl px-10 py-12">
        <h2 className="text-3xl font-bold mb-10 text-center text-gray-800">
          Product Onboarding Form
        </h2>

        {/* Stepper */}
        <div className="flex justify-between items-center mb-12">
          {steps.map((label, index) => (
            <div key={index} className="flex-1 flex flex-col items-center relative">
              {index < steps.length - 1 && (
                <div className="absolute top-4 left-1/2 w-full h-0.5 bg-gray-300 z-0" />
              )}

              <div
                className={`w-9 h-9 flex items-center justify-center rounded-full border-2 z-10 text-sm font-medium ${
                  index === 0
                    ? 'border-green-500 bg-green-500 text-white'
                    : 'border-gray-300 bg-white text-gray-400'
                }`}
              >
                {index === 0 ? '✓' : index + 1}
              </div>
              <span
                className={`text-xs mt-2 text-center ${
                  index === 0 ? 'text-green-500 font-medium' : 'text-gray-400'
                }`}
              >
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* Authentic Details Section */}
        <h3 className="text-xl font-semibold mb-6 text-gray-800">Authentic Product Details</h3>

        <div className="mb-8">
          <label className="block mb-1 text-sm font-medium text-gray-700">Unique Identifiers</label>
          <input
            type="text"
            placeholder="Serial numbers, bar codes, authentication codes"
            className="w-full border border-gray-300 rounded-lg px-4 py-2"
          />
          <p className="text-sm text-gray-500 mt-1">
            Provide serial No, Bar Code or Authentication No. used to verify authentic products
          </p>
        </div>

        {/* Image Upload Section */}
        <div className="mb-10">
          <label className="block text-sm font-medium text-gray-700 mb-2">Packaging Details</label>
          <div className="border-2 border-dashed border-gray-300 p-6 text-center rounded-xl">
            <label
              htmlFor="image-upload"
              className="cursor-pointer flex flex-col items-center justify-center"
            >
              <CloudArrowUpIcon className="h-10 w-10 text-blue-600" />
              <p className="text-blue-600 font-semibold mt-2">Upload Image</p>
              <p className="text-sm text-gray-500">Click to browse or drag and drop</p>
              <input
                type="file"
                id="image-upload"
                onChange={handleImageUpload}
                className="hidden"
                accept="image/*"
              />
            </label>
            {image && (
              <div className="mt-4 text-sm text-gray-700">Selected file: {image.name}</div>
            )}
          </div>
          <p className="text-sm text-gray-500 mt-2">
            Upload actual image from genuine products
          </p>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-6">
          <button
            onClick={handleGoBack}
            className="cursor-pointer px-6 py-2 border border-gray-400 rounded-lg text-gray-700 hover:bg-gray-100 transition"
          >
            ← Previous
          </button>
          <button
            onClick={handleStart}
            className="cursor-pointer px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  );
};

export default StepTwoForm;
