import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Navbar, Footer } from '../Layout/Layout';

function LoginPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const { role } = location.state || {}; // Default role or fallback to "USER"

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Inline styles
  const loginPageStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    position: 'relative',
    padding: '60px 20px 20px', // top padding increased to avoid navbar overlap
  };

  const loginFormStyle = {
    maxWidth: '320px',
    width: '100%',
    padding: '30px',
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    margin: '0 auto',  // Centering the form
  };

  const inputStyle = {
    width: '100%',
    padding: '12px',
    marginBottom: '15px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  };

  const buttonStyle = {
    width: '100%',
    padding: '12px',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: '#0056b3',
    color: 'white',
    fontSize: '16px',
    cursor: 'pointer',
    marginBottom: '10px',
  };

  const backButtonStyle = {
    ...buttonStyle,
    backgroundColor: '#6c757d',
  };

  const handleLogin = async () => {
    if (!email || !password) {
      setError('Please fill in both fields');
      return;
    }

    try {
      const response = await fetch('http://localhost:9000/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.token); // Save the token to localStorage
        navigate('/'); // Redirect user to home or dashboard page
      } else {
        setError(data.message || 'Failed to login');
      }
    } catch (error) {
      console.log(error);
      setError('Failed to connect to the server');
    }
  };

  const goBack = () => navigate('/');

  return (
    <div style={loginPageStyle}>
      <Navbar />
      <div style={loginFormStyle}>
        <h2>LOGIN AS {role ? role.toUpperCase() : 'USER'}</h2>
        <input
          style={inputStyle}
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          style={inputStyle}
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button style={buttonStyle} onClick={handleLogin}>Login</button>
        <button style={backButtonStyle} onClick={goBack}>Go Back</button>
        <p><a href="/forgot-password" style={{ color: '#0056b3' }}>Forgot Password?</a></p>
        <p>Don't have an account? <a href="/sign-up" style={{ color: '#0056b3' }}>Sign up</a></p>
      </div>
      <Footer />
    </div>
  );
}

export default LoginPage;
