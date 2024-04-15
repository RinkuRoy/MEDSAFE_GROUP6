import React, { useState } from 'react';
import { Navbar, Footer } from '../Layout/Layout';

function Contact() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'message') {
      setMessage(value);
    }
  };

  const styles = {
    container: {
      padding: '20px',
      maxWidth: '600px',
      margin: '120px auto',  // Increased top margin to ensure space below the Navbar
      textAlign: 'center',
      backgroundColor: 'white',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    },
    title: {
      fontSize: '2em',
      color: '#0056b3',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      margin: '20px 0',
    },
    input: {
      padding: '10px',
      marginBottom: '15px',
      borderRadius: '5px',
      border: '1px solid #ccc',
    },
    textarea: {
      height: '150px',
      padding: '10px',
      borderRadius: '5px',
      border: '1px solid #ccc',
      marginBottom: '15px',
    },
    button: {
      backgroundColor: '#0056b3',
      color: 'white',
      fontSize: '1em',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },
    thankYouMessage: {
      fontSize: '1.2em',
      color: '#28a745',
      marginTop: '20px',
    }
  };

  return (
    <div>
      <Navbar />
      <div style={styles.container}>
        <h1 style={styles.title}>Contact Us</h1>
        {submitted ? (
          <p style={styles.thankYouMessage}>Thank you! We will be responding through the mail.</p>
        ) : (
          <form onSubmit={handleSubmit} style={styles.form}>
            <input type="email" name="email" value={email} onChange={handleChange} placeholder="Your email address" style={styles.input} required />
            <textarea name="message" value={message} onChange={handleChange} placeholder="Write your message here" style={styles.textarea} required />
            <button type="submit" style={styles.button}>Send Message</button>
          </form>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
