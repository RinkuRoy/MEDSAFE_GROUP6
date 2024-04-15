import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar, Footer } from '../Layout/Layout';

const fetchPatients = () => {
  return Promise.resolve([
    { id: 1, name: "John Doe", dob: "1990-01-01", appointments: [{ id: 101, date: "2023-04-15", time: "10:00 AM", status: "Pending" }] },
    { id: 2, name: "Jane Smith", dob: "1985-05-23", appointments: [{ id: 102, date: "2023-04-16", time: "12:00 PM", status: "Confirmed" }] }
  ]);
};

const updateAppointmentStatus = (appointmentId, status) => {
    // Replace with actual API call
    console.log(`Updating appointment ${appointmentId} to ${status}`);
    return Promise.resolve({ id: appointmentId, status: status });
  };
  
  const PatientDashboard = () => {
    const [patients, setPatients] = useState([]);
    const navigate = useNavigate();
  
    useEffect(() => {
      fetchPatients().then(setPatients);
    }, []);
  
    const handleAppointmentAction = (patientId, appointmentId, action) => {
        updateAppointmentStatus(appointmentId, action).then(updatedAppointment => {
          setPatients(prevPatients =>
            prevPatients.map(patient =>
              patient.id === patientId ? {
                ...patient,
                appointments: patient.appointments.map(appointment =>
                  appointment.id === appointmentId ? { ...appointment, status: action } : appointment
                )
              } : patient
            )
          );
        });
      };
      
  
    const handleViewRecords = (patientId) => {
      navigate(`/patient-details/${patientId}`);
    };
  
    const buttonStyle = {
      padding: '8px 15px',
      margin: '0 5px',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      fontSize: '14px',
    };
  
    const confirmButtonStyle = {
      ...buttonStyle,
      backgroundColor: '#4CAF50',
      color: 'white',
    };
  
    const cancelButtonStyle = {
      ...buttonStyle,
      backgroundColor: '#f44336',
      color: 'white',
    };
  
    const viewRecordsButtonStyle = {
      ...buttonStyle,
      backgroundColor: '#2196F3',
      color: 'white',
    };
  
    return (
      <div style={{ fontFamily: 'Arial, sans-serif' }}>
        <Navbar />
        <div style={{ padding: '20px', maxWidth: '1000px', margin: 'auto' }}>
          <h1 style={{ textAlign: 'center' }}>Patient Dashboard</h1>
          {patients.map(patient => (
            <div key={patient.id} style={{ background: '#f9f9f9', padding: '15px', marginBottom: '10px', borderRadius: '5px' }}>
              <h2 style={{ borderBottom: '1px solid #ddd', paddingBottom: '10px' }}>{patient.name} (DOB: {patient.dob})</h2>
              <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
                {patient.appointments.map(appointment => (
                  <li key={appointment.id} style={{ padding: '10px 0', borderBottom: '1px solid #eee' }}>
                    <span>Appointment on {appointment.date} at {appointment.time}</span>
                    <span style={{ float: 'right', fontWeight: 'bold', textTransform: 'capitalize' }}>{appointment.status}</span>
                    <div style={{ marginTop: '10px' }}>
                      <button style={confirmButtonStyle} onClick={() => handleAppointmentAction(patient.id, appointment.id, 'Confirmed')}>
                        Confirm
                      </button>
                      <button style={cancelButtonStyle} onClick={() => handleAppointmentAction(patient.id, appointment.id, 'Cancelled')}>
                        Cancel
                      </button>
                      <button style={viewRecordsButtonStyle} onClick={() => handleViewRecords(patient.id)}>
                        View Records
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <Footer />
      </div>
    );
  };

export default PatientDashboard;
