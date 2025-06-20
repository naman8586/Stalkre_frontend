import React from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();

  // Handle login submit
  const handleLogin = (e) => {
    e.preventDefault();

    // You can add form validation or auth logic here

    navigate('/dashboard'); // Redirect to dashboard
  };

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

      {/* Right Section / Login Form */}
      <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 w-full max-w-lg min-h-[600px] flex flex-col justify-between">
        <div className="mb-4">
          <h1 className="text-4xl font-semibold text-gray-900">Welcome Back</h1>
          <p className="text-gray-500 text-sm md:text-base mt-1">
            Please Enter Your Email & Password
          </p>
        </div>

        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              placeholder="Ex: Maguire@FlexUI.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
            />
          </div>

          <div className="mb-2">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter Password"
              className="w-full mb-8 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-pink-500"
              required
            />
          </div>

          <div className="text-left text-sm text-pink-600 mb-6 hover:underline cursor-pointer">
            Forget Password
          </div>

          <button
            type="submit"
            className="cursor-pointer flex items-center justify-center w-full py-2 rounded-lg bg-gradient-to-r from-blue-500 to-pink-500 text-white font-semibold"
          >
            Login
          </button>
        </form>

        <div className="flex items-center justify-between text-sm text-gray-500 mt-4">
          <span>Don’t Have an Account?</span>
          <button
            onClick={() => navigate('/signup')}
            className="cursor-pointer px-4 py-1 bg-gray-200 text-gray-800 rounded-lg font-medium hover:bg-gray-300"
          >
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
