import React, { useState } from 'react';
import axios from 'axios';
const LoginForm = () => {
    const [user, setUser] = useState({ nickname: '', password: '' });
  
    const handleChange = (e) => {
      setUser({ ...user, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      axios.post('http://localhost:3001/auth', user)
        .then(() => {
          window.location.href = '/home';
        })
        .catch((error) => {
          console.error('Error logging in', error);
        });
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input type="text" name="nickname" onChange={handleChange} />
        <input type="password" name="password" onChange={handleChange} />
        <button type="submit">Login</button>
      </form>
    );
  };
  export default LoginForm