import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const StepFourForm = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/Dashboard'); // Navigate to MainStepForm
    
  };
  const handleGoBack = () => {
    navigate(-1); // This goes back to the previous page in history
  };
  


  const [region, setRegion] = useState('');
  const [marketPlace, setMarketPlace] = useState('');
  const [language, setLanguage] = useState('');
  const [contentType, setContentType] = useState('');

  const steps = ['General Info', 'Authentic Details', 'Keywords & Hashtags', 'Trends'];

  return (
 <div
      className="min-h-screen flex items-center justify-center px-4 py-12 bg-[length:140%_140%] bg-center"
      style={{ backgroundImage: `url('/assets/bg.png')` }}
    >


    <div className="max-w-4xl mx-auto mt-10 p-8 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Product Onboarding Form</h2>

      {/* Progress Bar with Lines and Gaps */}
      <div className="relative mb-10">
  <div className="flex justify-between items-center">
    {steps.map((label, index) => (
      <div key={index} className="flex-1 flex flex-col items-center relative">
        {/* Step circle */}
        <div
          className={`w-8 h-8 flex items-center justify-center rounded-full border-2 z-10 ${
            index < 3
              ? 'border-green-500 bg-green-500 text-white'
              : 'border-gray-300 bg-white text-gray-400'
          }`}
        >
          {index < 3 ? '✓' : index + 1}
        </div>

        {/* Step label */}
        <div
          className={`text-xs mt-2 text-center ${
            index < 3
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


      {/* Form Title */}
      <h3 className="text-lg font-semibold mb-6">Counterfeit Trend Information</h3>

      {/* Form Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block mb-1 text-sm font-medium">Geographic Distribution</label>
          <select
            value={region}
            onChange={(e) => setRegion(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 bg-white"
          >
            <option value="">Select Region</option>
            <option>North America</option>
            <option>Europe</option>
            <option>Asia</option>
            <option>Other</option>
          </select>
          <p className="text-sm text-gray-500 mt-1">
            Where counterfeit versions of this product are most commonly found
          </p>
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium">Language</label>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 bg-white"
          >
            <option value="">Select Language</option>
            <option>English</option>
            <option>Spanish</option>
            <option>Chinese</option>
            <option>Hindi</option>
          </select>
          <p className="text-sm text-gray-500 mt-1">
            Primary language used in listings or promotions of counterfeit versions
          </p>
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium">Market Place</label>
          <select
            value={marketPlace}
            onChange={(e) => setMarketPlace(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 bg-white"
          >
            <option value="">Select Market Place</option>
            <option>Amazon</option>
            <option>eBay</option>
            <option>AliExpress</option>
            <option>Other</option>
          </select>
          <p className="text-sm text-gray-500 mt-1">
            Platforms where counterfeit versions are commonly sold
          </p>
        </div>

        <div>
          <label className="block mb-1 text-sm font-medium">Content Type</label>
          <select
            value={contentType}
            onChange={(e) => setContentType(e.target.value)}
            className="w-full border border-gray-300 rounded px-3 py-2 bg-white"
          >
            <option value="">Select Content Type</option>
            <option>Text</option>
            <option>Image</option>
            <option>Video</option>
            <option>Live Stream</option>
          </select>
          <p className="text-sm text-gray-500 mt-1">
            How counterfeits are primarily marketed or sold online
          </p>
        </div>
      </div>

      {/* Info Box */}
      <div className="mt-8 bg-blue-50 border-l-4 border-blue-400 p-4 text-sm text-gray-800 rounded">
        <p className="font-semibold text-blue-800 mb-1">How we use this information</p>
        <p>
          This trend data helps us identify patterns in counterfeit distribution and improves our monitoring systems. We aggregate this information to provide better protection and countermeasures against counterfeiters.
        </p>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-8">
        <button 
         onClick={handleGoBack}
        className="cursor-pointer px-4 py-2 border rounded text-gray-700">← Previous</button>
        <button 
         onClick={handleStart}
        className="cursor-pointer px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Finish →
        </button>
      </div>
    </div>
    </div>
  );
};

export default StepFourForm;