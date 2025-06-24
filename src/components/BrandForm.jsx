import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const BrandForm = ({ onAddBrand }) => {
  const navigate = useNavigate();

  const [brand, setBrand] = useState({
    name: "",
    logo: "",
    email: "",
    website: "",
    category: "",
    platforms: "",
    regions: "",
    keywords: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onAddBrand) {
      onAddBrand({
        name: brand.name,
        logo: brand.logo,
        platforms: brand.platforms,
        regions: brand.regions,
      });
    }
    navigate("/Dashboard");
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
          {/* Brand name + Website */}
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Brand name
              </label>
              <input
                type="text"
                value={brand.name}
                onChange={(e) => setBrand({ ...brand, name: e.target.value })}
                placeholder="eg: Nike"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:outline-none"
                required
              />
            </div>

            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Website URL
              </label>
              <input
                type="text"
                value={brand.website}
                onChange={(e) =>
                  setBrand({ ...brand, website: e.target.value })
                }
                placeholder="eg: www.nike.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:outline-none"
              />
            </div>
          </div>

          {/* Logo URL */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Logo Image URL
            </label>
            <input
              type="text"
              value={brand.logo}
              onChange={(e) => setBrand({ ...brand, logo: e.target.value })}
              placeholder="eg: https://logo.com/image.png"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:outline-none"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              value={brand.email}
              onChange={(e) => setBrand({ ...brand, email: e.target.value })}
              placeholder="you@company.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:outline-none"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Brand category
            </label>
            <select
              value={brand.category}
              onChange={(e) => setBrand({ ...brand, category: e.target.value })}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:outline-none"
            >
              <option value="">Choose category</option>
              <option value="fashion">Fashion</option>
              <option value="electronics">Electronics</option>
              <option value="health">Health</option>
            </select>
          </div>

          {/* Platforms */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Platforms
            </label>
            <input
              type="text"
              value={brand.platforms}
              onChange={(e) =>
                setBrand({ ...brand, platforms: e.target.value })
              }
              placeholder="eg: Amazon, Flipkart, Instagram"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:outline-none"
              required
            />
          </div>

          {/* Regions */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Geographical reach
            </label>
            <input
              type="text"
              value={brand.regions}
              onChange={(e) => setBrand({ ...brand, regions: e.target.value })}
              placeholder="eg: India, USA, Europe"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:outline-none"
              required
            />
          </div>

          {/* Keywords */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Potential Keywords
            </label>
            <textarea
              rows="4"
              value={brand.keywords}
              onChange={(e) => setBrand({ ...brand, keywords: e.target.value })}
              placeholder="e.g., fake Nike shoes, replica Air Max..."
              className="w-full px-4 py-2 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-pink-500 focus:outline-none"
            />
          </div>

          {/* Submit */}
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
