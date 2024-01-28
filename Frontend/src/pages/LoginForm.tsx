import React, { useState } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Tutaj można dodać logikę obsługi formularza, np. wysłanie danych do serwera
    console.log('Submitted:', { email, password });
  };

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-md shadow-md mt-10">
      <h2 className="text-2xl font-semibold mb-4">Log In</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-600 mb-2">Email:</label>
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
          <label htmlFor="password" className="block text-gray-600 mb-2">Password:</label>
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
            className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
          >
            Log In
          </button>

        </div>
      </form>
      <div className="py-4">
          <span>Don't have account?</span>
          <a href="/register">
            <button className='px-2 border-[1px] mx-2 rounded-xl'>
                Register here!
            </button>
          </a>        
      </div>

    </div>
  );
};

export default LoginForm;
