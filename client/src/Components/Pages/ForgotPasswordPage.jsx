import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar, Footer } from '../Layout/Layout';

function ForgotPasswordPage() {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSendLink = () => {
    // Here you can implement the logic to send the password reset link to the provided email address
    // For simplicity, let's just show a message indicating the link is sent
    setMessage(`Password reset link sent to ${email}`);
    setTimeout(() => {
      setMessage('');
      navigate('/');
    }, 3000); // Redirect after 3 seconds
  };

  // Inline styles
  const forgotPasswordPageStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    position: 'relative',
    padding: '60px 20px 20px', // top padding increased to avoid navbar overlap
  };
  
  const formStyle = {
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

  return (
    <div style={forgotPasswordPageStyle}>
      <Navbar />
      <div style={formStyle}>
        <h2>Forgot Password</h2>
        <input
          style={inputStyle}
          type="email"
          placeholder="Enter your Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button style={buttonStyle} onClick={handleSendLink}>Send Reset Link</button>
        {message && <p style={{ color: 'green' }}>{message}</p>}
        <p>Remember your password? <a href="/login" style={{ color: '#0056b3' }}>Log in</a></p>
      </div>
      <Footer />
    </div>
  );
}

export default ForgotPasswordPage;
