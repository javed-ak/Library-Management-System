// src/components/Register.jsx
import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    email: '',
    membershipType: 'Full Day',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/register', formData);
      console.log('User registered:', response.data);
      alert('Registration successful');
    } catch (error) {
      console.error('Error registering user:', error);
      alert('Registration failed');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
        required
      />
      <input
        type="text"
        name="contact"
        value={formData.contact}
        onChange={handleChange}
        placeholder="Contact"
        required
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />
      <select name="membershipType" value={formData.membershipType} onChange={handleChange}>
        <option value="Full Day">Full Day</option>
        <option value="7 AM to 5 PM">7 AM to 5 PM</option>
        <option value="7 AM to 12 PM">7 AM to 12 PM</option>
      </select>
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
