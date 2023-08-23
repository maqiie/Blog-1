import React, { useState } from 'react';

const Login = ({ onToggleForm }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Logging in with:', email, password);
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



