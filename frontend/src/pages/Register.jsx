import React, { useState } from 'react';

const Register = () => {
  const [user, setUser] = useState({
    name: '',
    contact: '',
    email: '',
    membershipType: '',
    expirationDate: ''
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted:', user);
    // Add your axios call here to send data to the backend
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center p-6">
      <div className="bg-white p-10 rounded-xl shadow-2xl max-w-md w-full">
        <h2 className="text-3xl font-bold mb-6 text-center text-indigo-600">Create Account</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name Field */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none transition"
              placeholder="John Doe"
              required
            />
          </div>

          {/* Contact Field */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">Contact</label>
            <input
              type="text"
              name="contact"
              value={user.contact}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none transition"
              placeholder="123-456-7890"
              required
            />
          </div>

          {/* Email Field */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none transition"
              placeholder="you@example.com"
              required
            />
          </div>

          {/* Membership Type Field */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">Membership Type</label>
            <select
              name="membershipType"
              value={user.membershipType}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none transition"
              required
            >
              <option value="" disabled>Select Membership</option>
              <option value="Basic">Basic</option>
              <option value="Premium">Premium</option>
              <option value="VIP">VIP</option>
            </select>
          </div>

          {/* Expiration Date Field */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">Expiration Date</label>
            <input
              type="date"
              name="expirationDate"
              value={user.expirationDate}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:outline-none transition"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-lg font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
          >
            Sign Up
          </button>
        </form>

        <p className="text-sm text-gray-500 text-center mt-5">
          Already have an account? <a href="#" className="text-indigo-600 hover:underline">Log in</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
