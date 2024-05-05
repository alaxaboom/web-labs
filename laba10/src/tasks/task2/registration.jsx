import React, { useState } from 'react';
import axios from 'axios';

const RegistrationForm = () => {
  const [user, setUser] = useState({ nickname: '', password: '' });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3001/user', user)
      .then(() => {
        window.location.href = '/login';
      })
      .catch((error) => {
        console.error('Error registering user', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="nickname" onChange={handleChange} />
      <input type="password" name="password" onChange={handleChange} />
      <button type="submit">Register</button>
    </form>
  );
};
export default RegistrationForm