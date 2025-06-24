import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const StepThreeForm = () => {
const navigate = useNavigate();

  const handleStart = () => {
    navigate('/StepFourForm'); // Navigate to MainStepForm
  };
   const handleGoBack = () => {
    navigate(-1); // This goes back to the previous page in history
  };


  const [keywords, setKeywords] = useState('');
  const [hashtags, setHashtags] = useState('');

  const steps = [
    'General Info',
    'Authentic Details',
    'Keywords & Hashtags',
    'Trends',
  ];

  return (
 <div
      className="min-h-screen flex items-center justify-center px-4 py-12 bg-[length:140%_140%] bg-center"
      style={{ backgroundImage: `url('/assets/bg.png')` }}
    >

    <div className="max-w-4xl mx-auto mt-10 p-8 bg-white rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">Product Onboarding Form</h2>

      {/* Stepper */}
      <div className="relative mb-10">
  <div className="flex justify-between items-center">
    {steps.map((label, index) => (
      <div key={index} className="flex-1 flex flex-col items-center relative">
        <div
          className={`w-8 h-8 flex items-center justify-center rounded-full border-2 z-10 ${
            index < 2
              ? 'border-green-500 bg-green-500 text-white'
              : 'border-gray-300 text-gray-400 bg-white'
          }`}
        >
          {index < 2 ? '✓' : index + 1}
        </div>
        <div
          className={`text-xs mt-2 text-center ${
            index < 2
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


      {/* Counterfeit Keywords and Hashtags */}
      <h3 className="text-lg font-semibold mb-6">Counterfeit Keywords and Hashtags</h3>

      {/* Keywords */}
      <div className="mb-6">
        <label className="block mb-1 text-sm font-medium">Keywords</label>
        <textarea
          rows={3}
          value={keywords}
          onChange={(e) => setKeywords(e.target.value)}
          placeholder="Enter keywords commonly used for counterfeit versions of this product, separated by commas"
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
        <p className="text-sm text-gray-500 mt-1">
          Include terms like "replica", "AAA quality", "mirror", "1:1 copy", or any specific terminology used for counterfeits of this product
        </p>
      </div>

      {/* Hashtags */}
      <div className="mb-6">
        <label className="block mb-1 text-sm font-medium">Hashtags</label>
        <textarea
          rows={3}
          value={hashtags}
          onChange={(e) => setHashtags(e.target.value)}
          placeholder="Enter hashtags used to promote counterfeit versions, separated by commas"
          className="w-full border border-gray-300 rounded px-3 py-2"
        />
        <p className="text-sm text-gray-500 mt-1">
          Include hashtags used on social media platforms that are commonly associated with counterfeit versions of this product
        </p>
      </div>

      {/* Why this matters */}
      <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 text-sm text-gray-800 rounded">
        <p className="font-semibold text-yellow-900 mb-1">Why this matters</p>
        <p>
          Identifying keywords and hashtags helps our system monitor online marketplaces and social media for counterfeit activity related to your product.
        </p>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-8">
        <button onClick={handleGoBack} className="cursor-pointer px-4 py-2 border rounded text-gray-700">← Previous</button>
        <button onClick={handleStart} className="cursor-pointer px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
          Next →
        </button>
      </div>
    </div>
    </div>
  );
};

export default StepThreeForm;