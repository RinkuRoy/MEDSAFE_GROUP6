import React from 'react';
import { Navbar, Footer } from '../Layout/Layout';  // Ensure path accuracy

function Profile() {
  // Define inline styles here for a professional and centered appearance
  const styles = {
    profileContainer: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
      paddingTop: '70px',  // Ensuring top padding to avoid navbar overlap
      paddingBottom: '20px',
      paddingLeft: '20px',
      paddingRight: '20px',
      alignItems: 'center',  // Center align the content vertically and horizontally
      backgroundColor: '#f4f4f4',  // Gentle background for easy on the eyes
    },
    profileContent: {
      width: '100%', 
      maxWidth: '500px',  // Ideal width for form elements
      margin: 'auto',  // Centering within the container
      textAlign: 'center',
      backgroundColor: 'white',
      padding: '20px',
      borderRadius: '10px',
      boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',  // Subtle shadow for depth
    },
    profileTitle: {
      color: '#0056b3',
      margin: '20px 0',
      fontSize: '2.5em',  // Enhancing font size for visibility
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',  // Ensuring all form items are centrally aligned
    },
    inputGroup: {
      width: '100%',  // Ensuring full width use within the form
      marginBottom: '20px',
    },
    label: {
      display: 'block',  // Ensures the label is on a new line
      marginBottom: '8px',
      fontWeight: '600',
      fontSize: '1.1em',  // Clear and visible label size
    },
    input: {
      width: '100%',  // Full width to match label
      padding: '12px 15px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      fontSize: '1em',
      boxSizing: 'border-box',  // Includes padding and border in the width calculation
    },
    saveButton: {
      backgroundColor: '#0056b3',
      color: 'white',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      fontSize: '1em',
      marginTop: '20px',
      width: '100%',  // Button width matches input fields
    },
    passwordNote: {
      fontSize: '0.85rem',
      color: '#666',
      marginTop: '15px',
    }
  };

  return (
    <div style={styles.profileContainer}>
      <Navbar />
      <div style={styles.profileContent}>
        <h1 style={styles.profileTitle}>Profile Information</h1>
        <form style={styles.form}>
          <div style={styles.inputGroup}>
            <label htmlFor="firstName" style={styles.label}>First Name</label>
            <input type="text" id="firstName" style={styles.input} required />
          </div>
          <div style={styles.inputGroup}>
            <label htmlFor="lastName" style={styles.label}>Last Name</label>
            <input type="text" id="lastName" style={styles.input} required />
          </div>
          <div style={styles.inputGroup}>
            <label htmlFor="email" style={styles.label}>Email Address</label>
            <input type="email" id="email" style={styles.input} required />
          </div>
          <button type="submit" style={styles.saveButton}>Save Changes</button>
        </form>
        <form style={styles.form}>
          <h2 style={styles.profileTitle}>Change Password</h2>
          <div style={styles.inputGroup}>
            <label htmlFor="newPassword" style={styles.label}>New Password</label>
            <input type="password" id="newPassword" style={styles.input} required />
          </div>
          <div style={styles.inputGroup}>
            <label htmlFor="confirmPassword" style={styles.label}>Confirm New Password</label>
            <input type="password" id="confirmPassword" style={styles.input} required />
          </div>
          <button type="submit" style={styles.saveButton}>Save Changes</button>
        </form>
        <p style={styles.passwordNote}>
          You will be asked to log in again with your new password after you save your changes.
        </p>
      </div>
      <Footer />
    </div>
  );
}

export default Profile;
