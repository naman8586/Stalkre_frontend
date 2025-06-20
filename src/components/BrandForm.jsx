import React from 'react';
import { useNavigate } from 'react-router-dom';

const BrandForm = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Optional: Add form validation or API submission here
    navigate('/BrandDashboard'); // Navigate to your dashboard route
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-[length:140%_140%] bg-center px-4"
      style={{ backgroundImage: `url('/assets/bg.png')` }}
    >
      <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 w-full max-w-2xl">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img
            src="/assets/framelogo.png"
            alt="Stalkre Logo"
            className="h-18 w-30"
          />
        </div>

        {/* Form */}
        <form className="space-y-6" onSubmit={handleSubmit}>
          {/* Brand name + Website URL */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">Brand name</label>
              <input
                type="text"
                placeholder="eg: Nike"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:outline-none"
              />
            </div>

            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">Website URL</label>
              <input
                type="text"
                placeholder="eg: www.nike.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              placeholder="you@company.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:outline-none"
            />
          </div>

          {/* Brand Category */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Brand category</label>
            <select
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:outline-none"
              defaultValue=""
            >
              <option value="" disabled>Choose category</option>
              <option value="fashion">Fashion</option>
              <option value="electronics">Electronics</option>
              <option value="health">Health</option>
            </select>
          </div>

          {/* Platforms */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select platforms you wish to search for counterfeits
            </label>
            <div className="flex flex-wrap gap-2">
              {['Alibaba', 'Etsy', 'Ebay', 'Amazon', 'Instagram', 'Facebook', 'Shopify', 'Flipkart'].map((platform) => (
                <span
                  key={platform}
                  className="px-3 py-1 border border-gray-300 rounded-full text-sm cursor-pointer hover:bg-pink-100"
                >
                  {platform}
                </span>
              ))}
            </div>
          </div>

          {/* Geographical Reach */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Geographical reach</label>
            <select
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:outline-none"
              defaultValue=""
            >
              <option value="" disabled>Select countries</option>
              <option>India</option>
              <option>USA</option>
              <option>Europe</option>
              <option>Others</option>
            </select>
          </div>

          {/* Keywords */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Write down potential keywords for potential counterfeit
            </label>
            <textarea
              rows="4"
              placeholder="e.g., fake Nike shoes, replica Air Max..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-pink-500 focus:outline-none"
            ></textarea>
          </div>

          {/* Finish Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="cursor-pointer w-full py-2 rounded-lg bg-gradient-to-r from-blue-500 to-pink-500 text-white font-semibold hover:opacity-90 transition"
            >
              Finish
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BrandForm;
