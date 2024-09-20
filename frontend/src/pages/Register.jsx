import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [user, setUser] = useState({
    name: '',
    contact: '',
    email: '',
    membershipType: '',
    expirationDate: ''
  });

  const [message, setMessage] = useState('');  // To display success or error messages

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();  // Prevents the page from reloading

    try {
      const response = await axios.post('http://localhost:5001/api/users/register', user);
      setMessage('User registered successfully!');
      console.log('User Registered:', response.data);
    } catch (error) {
      setMessage('Failed to register user.');
      console.error('Error registering user:', error.response?.data || error);
    }
  };

  return (
    <div>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" value={user.name} onChange={handleChange} required />
        <input type="text" name="contact" placeholder="Contact" value={user.contact} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={user.email} onChange={handleChange} required />
        <input type="text" name="membershipType" placeholder="Membership Type" value={user.membershipType} onChange={handleChange} required />
        <input type="date" name="expirationDate" value={user.expirationDate} onChange={handleChange} required />
        <button type="submit">Register</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Register;
