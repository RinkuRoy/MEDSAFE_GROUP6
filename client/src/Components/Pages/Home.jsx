import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar, Footer } from '../Layout/Layout';
import background from '../../../src/Assests/Images/medsafe-about-us-1.jpg'; // Ensure correct path

function Home() {
  const navigate = useNavigate();

  // Styles
  const homeStyle = {
    backgroundImage: `url(${background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    textAlign: 'center',
  };

  const titleStyle = {
    fontSize: '3em', // Larger font size for emphasis
    fontWeight: 'bold',
    textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)', // Text shadow for better visibility
    padding: '20px',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background for better readability
    borderRadius: '10px',
    maxWidth: '90%', // Ensure it doesn't overflow on smaller screens
  };

  const buttonStyle = {
    fontSize: '16px',
    padding: '15px 30px',
    margin: '10px',
    backgroundColor: '#0056b3',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.5)', // Box shadow for a 3D effect
  };

  const handleLogin = (role) => {
    navigate('/login', { state: { role } });
  };

  return (
    <div style={homeStyle}>
      <Navbar />
      <h1 style={titleStyle}>Welcome to MEDSAFE</h1>
      <button onClick={() => handleLogin('patient')} style={buttonStyle}>Login as a Patient</button>
      <button onClick={() => handleLogin('doctor')} style={buttonStyle}>Login as a Doctor</button>
      <button onClick={() => handleLogin('admin')} style={buttonStyle}>Login as an Admin</button>
      <Footer />
    </div>
  );
}

export default Home;