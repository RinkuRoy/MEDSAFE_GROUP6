import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar, Footer } from '../Layout/Layout';

function SignUpPage() {
  const navigate = useNavigate();

  // State for form fields and error messages
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dob, setDob] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [role, setRole] = useState('patient'); // Default role is patient
  const [error, setError] = useState('');

  const validateForm = () => {
    // Basic validation
    if (!email || !password || !firstName || !lastName || !dob || !phoneNumber) {
      setError('Please fill all the fields');
      return false;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return false;
    }
    return true;
  };

  const signUp = async () => {
    if (!validateForm()) {
      return;
    }

    try {
      const response = await fetch('http://localhost:9000/users/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username,
          email,
          password
        })
      });

      const data = await response.json();

      if (response.ok) {
        alert('Registered successfully!');
        navigate('/');
      } else {
        // Ensure that server-side validation or errors are properly sent as JSON
        setError(data.message || 'Failed to register');
      }
    } catch (error) {
      console.error('Signup error:', error);
      setError('Failed to connect to the server'); // This line will execute if the fetch itself fails
    }
  };


  // Styles
  const signUpPageStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    position: 'relative',
    padding: '60px 20px 20px',
  };

  const signUpFormStyle = {
    maxWidth: '320px',
    width: '100%',
    padding: '30px',
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: '8px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    margin: '0 auto',
  };

  const inputStyle = {
    width: '100%',
    padding: '12px',
    marginBottom: '15px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  };

  const signUpButtonStyle = {
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

  const titleStyle = {
    fontSize: '2em',
    color: '#0056b3',
  };

  return (
    <div style={signUpPageStyle}>
      <Navbar />
      <div style={signUpFormStyle}>
        <h2 style={titleStyle}>Sign Up</h2>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <select style={inputStyle} value={role} onChange={e => setRole(e.target.value)}>
          <option value="patient">Patient</option>
          <option value="doctor">Doctor</option>
          <option value="admin">Admin</option>
        </select>
        <input style={inputStyle} type="text" placeholder="First Name" value={firstName} onChange={e => setFirstName(e.target.value)} />
        <input style={inputStyle} type="text" placeholder="Last Name" value={lastName} onChange={e => setLastName(e.target.value)} />
        <input style={inputStyle} type="text" placeholder="User Name" value={username} onChange={e => setUsername(e.target.value)} />
        <input style={inputStyle} type="date" placeholder="Date of Birth" value={dob} onChange={e => setDob(e.target.value)} />
        <input style={inputStyle} type="tel" placeholder="Phone Number" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} />
        <input style={inputStyle} type="email" placeholder="Email Address" value={email} onChange={e => setEmail(e.target.value)} />
        <input style={inputStyle} type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} />
        <input style={inputStyle} type="password" placeholder="Confirm Password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} />
        <button style={signUpButtonStyle} onClick={signUp}>Sign Up</button>
      </div>
      <Footer />
    </div>
  );
}

export default SignUpPage;
