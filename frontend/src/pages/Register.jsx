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
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-lg max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={user.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
              placeholder="John Doe"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-700">Contact</label>
            <input
              type="text"
              name="contact"
              value={user.contact}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
              placeholder="1234567890"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={user.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
              placeholder="john@example.com"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-700">Membership Type</label>
            <input
              type="text"
              name="membershipType"
              value={user.membershipType}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
              placeholder="Premium"
              required
            />
          </div>
          <div>
            <label className="block mb-1 font-medium text-gray-700">Expiration Date</label>
            <input
              type="date"
              name="expirationDate"
              value={user.expirationDate}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-indigo-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-500 transition"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
