
import React, { useState } from 'react';
import { Navbar, Footer } from '../Layout/Layout';

function Doctor() {
  const [specialization, setSpecialization] = useState('');
  const [doctors, setDoctors] = useState([]);

  const specializations = ["Cardiology", "Dermatology", "Neurology", "Pediatrics", "Orthopedics"];

  const dummyDoctors = [
    { id: 1, name: "Dr. John Doe", specialization: "Cardiology", availability: "Monday to Friday 9 AM to 5 PM" },
    { id: 2, name: "Dr. Jane Smith", specialization: "Dermatology", availability: "Monday to Friday 10 AM to 4 PM" },
    { id: 3, name: "Dr. Amy Pond", specialization: "Neurology", availability: "Tuesday to Saturday 8 AM to 4 PM" },
    { id: 4, name: "Dr. Clara Oswald", specialization: "Pediatrics", availability: "Wednesday to Sunday 9 AM to 3 PM" },
    { id: 5, name: "Dr. Rory Williams", specialization: "Orthopedics", availability: "Monday to Friday 10 AM to 6 PM" },
    { id: 6, name: "Dr. Martha Jones", specialization: "Cardiology", availability: "Monday to Friday 7 AM to 3 PM" },
    { id: 7, name: "Dr. Rose Tyler", specialization: "Dermatology", availability: "Monday to Friday 12 PM to 8 PM" },
  ];

  const handleSearch = () => {
    const filteredDoctors = dummyDoctors.filter(doc => doc.specialization === specialization);
    setDoctors(filteredDoctors);
  };

  const styles = {
    container: {
      padding: '20px',
      maxWidth: '800px',
      margin: '120px auto 40px', // Increased top margin to ensure space below the Navbar
      textAlign: 'center',
      backgroundColor: 'white',
      borderRadius: '10px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      minHeight: '100vh', // Ensuring full viewport height
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center', // Center content vertically and horizontally
    },
    
    formControl: {
      margin: '20px 0',
      padding: '10px',
      fontSize: '16px',
      borderRadius: '5px',
      border: '1px solid #ccc',
      width: '100%',
      boxSizing: 'border-box',
    },
    button: {
      padding: '10px 20px',
      backgroundColor: '#0056b3',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
    },
    doctorCard: {
      padding: '20px',
      margin: '10px 0',
      boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
      borderRadius: '5px',
      textAlign: 'left',
      backgroundColor: '#f9f9f9',
    },
    bookButton: {
      padding: '5px 10px',
      backgroundColor: '#28a745',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer',
      marginTop: '10px',
    }
  };

  return (
    <div>
      <Navbar />
      <div style={styles.container}>
        <h1>Find a Doctor</h1>
        <div>
          <select style={styles.formControl} value={specialization} onChange={(e) => setSpecialization(e.target.value)}>
            <option value="">Select Specialization</option>
            {specializations.map(spec => <option key={spec} value={spec}>{spec}</option>)}
          </select>
          <button style={styles.button} onClick={handleSearch}>Search for Doctors</button>
        </div>
        {doctors.map(doctor => (
          <div key={doctor.id} style={styles.doctorCard}>
            <p><strong>Name:</strong> {doctor.name}</p>
            <p><strong>Specialization:</strong> {doctor.specialization}</p>
            <p><strong>Availability:</strong> {doctor.availability}</p>
            <button style={styles.bookButton}>Book Now</button>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Doctor;
