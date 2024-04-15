import React, { useState } from 'react';
import Modal from 'react-modal';
import { Navbar, Footer } from '../Layout/Layout';

Modal.setAppElement('#root'); // Set the root element for accessibility in modals

function Bookings() {
  const [appointments, setAppointments] = useState([
    { id: 1, date: 'July 15, 2024', time: '10:00 AM - 11:00 AM', doctor: 'Dr. John Doe', status: 'Confirmed' },
    { id: 2, date: 'July 20, 2024', time: '2:00 PM - 3:00 PM', doctor: 'Dr. Jane Smith', status: 'Confirmed' },
    { id: 3, date: 'August 5, 2024', time: '11:30 AM - 12:30 PM', doctor: 'Dr. Amy Pond', status: 'Confirmed' },
  ]);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [newDate, setNewDate] = useState('');
  const [reason, setReason] = useState('');
  const [isRescheduling, setIsRescheduling] = useState(false);

  // Inline styles for modal
  const modalStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      transform: 'translate(-50%, -50%)',
      width: '80%',
      maxWidth: '500px',
      backgroundColor: '#FFF',
      padding: '20px',
      borderRadius: '10px',
    },
    overlay: {
      backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
  };

  const buttonStyle = {
    padding: '10px 20px',
    margin: '10px',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    color: 'white',
    fontSize: '16px',
  };

  const handleOpenModal = (appointment, isReschedule) => {
    setIsRescheduling(isReschedule);
    setSelectedAppointment(appointment);
    setNewDate(appointment.date); // Prepopulate with current date if rescheduling
    setModalIsOpen(true);
  };

  const handleConfirm = () => {
    if (isRescheduling) {
      if (!newDate) {
        alert('Please select a new date to reschedule.');
        return;
      }
      setAppointments(prev => prev.map(app => app.id === selectedAppointment.id ? { ...app, date: newDate } : app));
    } else {
      setAppointments(prev => prev.filter(app => app.id !== selectedAppointment.id));
    }
    closeModal();
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedAppointment(null);
    setNewDate('');
    setReason('');
  };

  return (
    <div>
      <Navbar />
      <div style={{ padding: '20px', maxWidth: '800px', margin: '120px auto 60px' }}>
        {appointments.map(appointment => (
          <div key={appointment.id} style={{ background: '#f9f9f9', padding: '15px', margin: '10px 0', borderRadius: '5px' }}>
            <h2>Appointment Details</h2>
            <p><strong>Date:</strong> {appointment.date}</p>
            <p><strong>Time:</strong> {appointment.time}</p>
            <p><strong>Doctor:</strong> {appointment.doctor}</p>
            <p><strong>Status:</strong> {appointment.status}</p>
            <button onClick={() => handleOpenModal(appointment, true)} style={{ ...buttonStyle, backgroundColor: '#4CAF50' }}>
              Reschedule
            </button>
            <button onClick={() => handleOpenModal(appointment, false)} style={{ ...buttonStyle, backgroundColor: '#f44336' }}>
              Cancel
            </button>
          </div>
        ))}
      </div>

      <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={modalStyles}>
        <h2>{isRescheduling ? 'Reschedule Appointment' : 'Cancel Appointment'}</h2>
        {isRescheduling ? (
          <>
            <label>New Date:</label>
            <input type="date" value={newDate} onChange={(e) => setNewDate(e.target.value)} style={{ width: '100%', padding: '10px', margin: '10px 0' }} />
          </>
        ) : (
          <>
            <label>Reason for Canceling:</label>
            <textarea value={reason} onChange={(e) => setReason(e.target.value)} style={{ width: '100%', padding: '10px', margin: '10px 0', minHeight: '100px' }} />
          </>
        )}
        <button onClick={handleConfirm} style={{ ...buttonStyle, backgroundColor: '#4CAF50' }}>
          Confirm
        </button>
        <button onClick={closeModal} style={{ ...buttonStyle, backgroundColor: '#6c757d' }}>
          Close
        </button>
      </Modal>

      <Footer />
    </div>
  );
}

export default Bookings;
