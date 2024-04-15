import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';

// Import pages
import Home from './Components/Pages/Home';
import Login from './Components/Pages/Login';
import Doctor from './Components/Pages/Doctor';
import Bookings from './Components/Pages/Bookings';
import Contact from './Components/Pages/Contact';
import Profile from './Components/Pages/Profile';
import Patient from './Components/Pages/Patient'; 
import PatientDetails from './Components/Pages/Patientdetails';
import SignUpPage from './Components/Pages/SignUpPage';
import ForgotPasswordPage from './Components/Pages/ForgotPasswordPage'; // Import the new ForgotPasswordPage component

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/find-doctor" element={<Doctor />} />
      <Route path="/bookings" element={<Bookings />} />
      <Route path="/contact-us" element={<Contact />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/patient-dashboard" element={<Patient />} />
      <Route path="/patient-details/:patientId" element={<PatientDetails />} />
      <Route path="/sign-up" element={<SignUpPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} /> {/* New route for forgot password page */}
    </Routes>
  );
}

export default App;
