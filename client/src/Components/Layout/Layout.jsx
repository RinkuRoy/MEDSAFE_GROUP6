import React, { useState } from 'react';
import logo from '../../Assests/Images/medsafe_international_llc_logo.jpeg';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navbarStyle = {
    backgroundColor: '#0056b3',
    padding: '10px 20px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: '#fff',
    borderBottom: '1px solid #ddd',
    position: 'fixed',
    top: '0',
    left: '0',
    right: '0',
    height: '50px',
    zIndex: '1000'
  };

  const navbarBrandStyle = {
    display: 'flex',
    alignItems: 'center',
    fontSize: '24px',
    fontWeight: 'bold',
  };

  const navbarLinkStyle = {
    color: '#fff',
    textDecoration: 'none',
    margin: '0 10px',
    fontSize: '18px',
    fontWeight: 'normal',
    cursor: 'pointer'
  };

  const navbarLinksContainerStyle = {
    display: 'flex',
    alignItems: 'center',
  };

  const dropdownStyle = {
    position: 'absolute',
    backgroundColor: '#0056b3',
    display: isOpen ? 'block' : 'none',
    padding: '10px',
    marginTop: '5px',
    borderRadius: '5px',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    width: '200px' // Fixed width for dropdown
  };

  const dropdownItemStyle = {
    padding: '10px 20px',
    display: 'block',
    color: '#fff',
    textDecoration: 'none',
    cursor: 'pointer',
    whiteSpace: 'nowrap'
  };

  const toggleDropdown = () => setIsOpen(!isOpen);

  const appIcon = <img src={logo} alt="App Icon" style={{ marginRight: '10px', height: '30px' }} />;

  return (
    <nav style={navbarStyle}>
      <div style={navbarBrandStyle}>
        {appIcon}
        MEDSAFE
      </div>
      <div style={navbarLinksContainerStyle}>
        <a href="/" style={navbarLinkStyle}>Home</a>
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
          <div onClick={toggleDropdown} style={navbarLinkStyle}>Services ▼</div>
          <div style={dropdownStyle} onMouseLeave={() => setIsOpen(false)}>
            <a href="/find-doctor" style={dropdownItemStyle}>Find a Doctor</a>
            <a href="/patient-dashboard" style={dropdownItemStyle}>Patient Dashboard</a>
          </div>
        </div>
        <a href="/bookings" style={navbarLinkStyle}>Bookings</a>
        <a href="/contact-us" style={navbarLinkStyle}>Contact Us</a>
        <a href="/profile" style={navbarLinkStyle}>Profile</a>
      </div>
    </nav>
  );
};

// Footer component
const Footer = () => {
  const footerStyle = {
    backgroundColor: '#f0f0f0',
    padding: '5px 8px',
    textAlign: 'center',
    fontSize: '12px',
    color: '#333',
    borderTop: '1px solid #ddd',
    position: 'fixed',
    left: '0',
    bottom: '0',
    width: '100%',
    zIndex: '1000'
  };

  return (
    <footer style={footerStyle}>
      <p>Copyright &copy; 2024, MEDSAFE. All Rights Reserved.</p>
    </footer>
  );
};

export { Navbar, Footer };
