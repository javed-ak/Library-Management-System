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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 p-6">
      <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl max-w-2xl w-full space-y-8 border border-indigo-200">
        <div className="text-center space-y-2">
          <h2 className="text-4xl md:text-5xl font-extrabold text-indigo-700">Join Our Library</h2>
          <p className="text-xl text-gray-600">Start your reading journey today!</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-4">
            <InputField
              label="Full Name"
              name="name"
              type="text"
              placeholder="John Doe"
              value={user.name}
              onChange={handleChange}
            />
            <InputField
              label="Contact"
              name="contact"
              type="text"
              placeholder="123-456-7890"
              value={user.contact}
              onChange={handleChange}
            />
            <InputField
              label="Email Address"
              name="email"
              type="email"
              placeholder="you@example.com"
              value={user.email}
              onChange={handleChange}
            />
            <div>
              <label className="block mb-2 text-sm font-semibold text-gray-700">Membership Type</label>
              <select
                name="membershipType"
                value={user.membershipType}
                onChange={handleChange}
                className="w-full px-4 py-3 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none transition duration-200 ease-in-out bg-white"
                required
              >
                <option value="" disabled>Select Membership</option>
                <option value="Basic">Basic</option>
                <option value="Premium">Premium</option>
                <option value="VIP">VIP</option>
              </select>
            </div>
            <InputField
              label="Expiration Date"
              name="expirationDate"
              type="date"
              value={user.expirationDate}
              onChange={handleChange}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-4 rounded-lg text-lg font-bold hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-300 transition duration-200 transform hover:scale-105"
          >
            Create Your Account
          </button>
        </form>

        <p className="text-sm text-gray-600 text-center">
          Already a member? <a href="#" className="text-indigo-600 hover:underline font-semibold">Log in here</a>
        </p>
      </div>
    </div>
  );
};

const InputField = ({ label, name, type, placeholder, value, onChange }) => (
  <div>
    <label className="block mb-2 text-sm font-semibold text-gray-700">{label}</label>
    <input
      type={type}
      name={name}
      value={value}
      onChange={onChange}
      className="w-full px-4 py-3 text-lg border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 focus:outline-none transition duration-200 ease-in-out"
      placeholder={placeholder}
      required
    />
  </div>
);

export default Register;