import React, { useState } from 'react';
import { NextPage } from 'next';

const LoginPage: NextPage = () => {
  // State to manage form inputs and error messages
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Handler for form submission
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    
    // Simple validation
    if (!email || !password) {
      setError('Please enter both email and password.');
      return;
    }

    // Simulate login process
    console.log('Logging in with:', { email, password });

    // Clear error if any
    setError('');

    // Handle login logic (e.g., API call) here
  };

  return (
    <div className="container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit} className="login-form">
        {error && <div className="error">{error}</div>}
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <style jsx>{`
        .container {
          max-width: 400px;
          margin: 0 auto;
          padding: 2rem;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .login-form {
          width: 100%;
        }
        .form-group {
          margin-bottom: 1rem;
        }
        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
        }
        .form-group input {
          width: 100%;
          padding: 0.5rem;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
        button {
          padding: 0.5rem 1rem;
          border: none;
          border-radius: 4px;
          background-color: #0070f3;
          color: white;
          cursor: pointer;
        }
        button:hover {
          background-color: #005bb5;
        }
        .error {
          color: red;
          margin-bottom: 1rem;
        }
      `}</style>
    </div>
  );
};

export default LoginPage;
