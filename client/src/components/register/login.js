import React, { useState } from 'react';
import axios from 'axios';

const Login = ({ onToggleForm }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3001/auth/sign_in', {
        email,
        password,
      });

      if (response.status === 200) {
        // Login successful, you can handle redirection or other actions here
        console.log('Login successful');
      } else {
        // Handle login error
        console.log('Login failed');
      }
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <div className="auth-form bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-semibold mb-4 text-blue-600">Login</h2>
      <form onSubmit={handleLogin}>
        <div className="mb-3">
          <label className="block text-sm font-medium text-gray-600">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-1 p-2 border rounded border-solid border-blue-400 w-full focus:border-blue-400 focus:outline-none"
            required
          />
        </div>
        <div className="mb-3">
          <label className="block text-sm font-medium text-gray-600">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 p-2 border rounded border-solid border-blue-400 w-full focus:border-blue-400 focus:outline-none"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition duration-300 shadow-md"
        >
          Login
        </button>
      </form>
      <p className="mt-4">
        Don't have an account?{' '}
        <button onClick={onToggleForm} className="text-blue-500 hover:underline focus:outline-none">
          Sign Up
        </button>
      </p>
    </div>
  );
};

export default Login;



