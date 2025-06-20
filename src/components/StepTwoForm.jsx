import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CloudArrowUpIcon } from '@heroicons/react/24/outline';

const StepTwoForm = () => {
const navigate = useNavigate();

  const handleStart = () => {
    navigate('/StepThreeForm'); // Navigate to MainStepForm
  };

  const handleGoBack = () => {
    navigate(-1); // This goes back to the previous page in history
  };


  const [image, setImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) setImage(file);
  };

  const steps = [
    ' General Info',
    ' Authentic Details',
    ' Keywords & Hashtags',
    ' Trends',
  ];

  return (
    <div className="max-w-4xl mx-auto mt-10 p-8 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Product Onboarding Form</h2>

      {/* Stepper */}
      <div className="relative mb-10">
  <div className="flex justify-between items-center">
    {steps.map((label, index) => (
      <div key={index} className="flex-1 flex flex-col items-center relative">
        {/* Step circle */}
        <div
          className={`w-8 h-8 flex items-center justify-center rounded-full border-2 z-10 ${
            index === 0
              ? 'border-green-500 bg-green-500 text-white'
              : 'border-gray-300 bg-white text-gray-400'
          }`}
        >
          {index === 0 ? '✓' : index + 1}
        </div>

        {/* Step label */}
        <div
          className={`text-xs mt-2 text-center ${
            index === 0
              ? 'text-green-500 font-medium'
              : 'text-gray-400'
          }`}
        >
          {label}
        </div>

        {/* Connecting line */}
        {index < steps.length - 1 && (
          <div className="absolute top-4 left-1/2 w-full h-0.5 bg-gray-300 z-0"></div>
        )}
      </div>
    ))}
  </div>
</div>

 



      {/* Authentic Product Details */}
      <h3 className="text-lg font-semibold mb-4">Authentic Product Details</h3>

      <div className="mb-6">
        <label className="block mb-1 text-sm font-medium">Unique Identifiers</label>
        <input
          type="text"
          placeholder="Serial numbers, bar codes, authentication codes"
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
        <p className="text-sm text-gray-500 mt-1">
          Provide serial No, Bar Code or Authentication No. used to verify authentic products
        </p>
      </div>

      {/* Packaging Details */}
      <div className="mb-6">
        <label className="block text-sm font-medium mb-2">Packaging Details</label>

        <div className="border-2 border-dashed border-gray-300 p-6 text-center rounded-lg">
          <label
            htmlFor="image-upload"
            className="cursor-pointer flex flex-col items-center justify-center"
          >
            <CloudArrowUpIcon className="h-10 w-10 text-blue-600" />
            <p className="text-blue-600 font-medium mt-2">Upload Image</p>
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
      <div className="flex justify-between mt-8">
        <button  onClick={handleGoBack} className="cursor-pointer px-4 py-2 border rounded text-gray-700">← Previous</button>
        <button onClick={handleStart}
 className=" cursor-pointer px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Next →
        </button>
      </div>
    </div>
  );
};

export default StepTwoForm;