import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
//changes handler
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const data = {
        username,
        email,
        password,
      }
    try {
      // Data send to server
      const response = await axios.post('http://localhost:3000/auth/register',data );
      if (response.data.error) {
        console.error('Błąd:', response.data.error);
    } else {
        console.log('Odpowiedź z serwera:', response.data.message);
    }
    } catch (error) {
      console.error('Error:', error);
    }
    console.log('Submitted:', { username, email, password });
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-md shadow-md mt-10">
      <h2 className="text-2xl font-semibold mb-4">Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="username" className="block text-gray-600 mb-2">
            Username:
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={username}
            onChange={handleUsernameChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-600 mb-2">
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleEmailChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-600 mb-2">
            Password:
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={password}
            onChange={handlePasswordChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>
        <div className="mt-4">
          <button
            type="submit"
            className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600"
          >
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
