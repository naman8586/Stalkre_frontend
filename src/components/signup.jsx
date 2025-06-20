import React from 'react';
import { useNavigate } from 'react-router-dom';

function SignupPage() {
  const navigate = useNavigate();

  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col md:flex-row items-center justify-center px-4 md:px-20"
      style={{ backgroundImage: `url('/assets/bg.png')` }}
    >
      {/* Left Section */}
      <div className="flex items-center justify-center md:w-1/2 mb-12 md:mb-0 h-full">
        <img
          src="/assets/frame.png"
          alt="Stalkre Logo"
          className="w-full max-w-[400px] md:max-w-[500px] lg:max-w-[600px] h-auto object-contain"
        />
      </div>

      {/* Right Section / Signup Form */}
      <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 w-full max-w-lg min-h-[600px] flex flex-col justify-between">
        {/* Title + Subtitle */}
        <div className="mb-4">
          <h1 className="text-4xl font-semibold text-gray-900">Welcome To Stalkre</h1>
          <p className="text-gray-500 text-sm md:text-base mt-1">
            We take care of counterfeits!
          </p>
        </div>

        {/* Form */}
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Ex: Maguire@FlexUI.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="create-password" className="block text-sm font-medium text-gray-700 mb-1">
              Create Password
            </label>
            <input
              type="password"
              id="create-password"
              placeholder="Enter Password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          <div className="mb-2">
            <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700 mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm-password"
              placeholder="Confirm Password"
              className="w-full mb-8 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>

          <div className="flex items-start gap-2 text-sm text-gray-600 mb-6">
            <input
              type="checkbox"
              id="privacy"
              className="mt-1 accent-pink-500 w-4 h-4"
              required
            />
            <label htmlFor="privacy" className="cursor-pointer select-none">
              You agree to our friendly{' '}
              <span className="text-pink-600 underline">privacy policy</span>
            </label>
          </div>

          <button
            type="submit"
            className="cursor-pointer w-full py-2 rounded-lg bg-gradient-to-r from-blue-500 to-pink-500 text-white font-semibold"
          >
            Signup
          </button>
        </form>

        {/* Bottom row aligned left-right */}
        <div className="flex items-center justify-between text-sm text-gray-500 mt-4">
          <span>Already have an account?</span>
          <button
            onClick={() => navigate('/')}
            className="cursor-pointer px-4 py-1 bg-gray-200 text-gray-800 rounded-lg font-medium hover:bg-gray-300"
          >
            Log In
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignupPage;
