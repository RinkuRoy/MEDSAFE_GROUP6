import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Navbar, Footer } from '../Layout/Layout';

const PatientDetails = () => {
  const { patientId } = useParams();
  const [activeTab, setActiveTab] = useState('aboutPatient');
  const [treatmentPlanNote, setTreatmentPlanNote] = useState('');
  const [progressNote, setProgressNote] = useState('');
  const [prescriptionNote, setPrescriptionNote] = useState('');

  // Define the tab data
  const tabData = {
    aboutPatient: {
      title: 'About Patient',
      content: 'Patient details go here...',
      download: true,
    },
    treatmentPlan: {
      title: 'Treatment Plan',
      content: 'Treatment plan details...',
      download: false,
    },
    progressNotes: {
      title: 'Progress Notes',
      content: 'Progress notes...',
      download: false,
    },
    prescriptions: {
      title: 'Prescriptions',
      content: 'List of prescriptions...',
      download: false,
    }
  };

  // Define styles for the tabs
  const styles = {
    tabList: {
      listStyleType: 'none',
      padding: 0,
      display: 'flex',
      justifyContent: 'space-around',
      backgroundColor: '#f1f1f1',
      margin: 0,
    },
    tabItem: {
      padding: '10px 20px',
      cursor: 'pointer',
      borderBottom: '2px solid transparent',
    },
    activeTabItem: {
      borderBottom: '2px solid #007bff',
    },
    contentBox: {
      border: '1px solid #ccc',
      padding: '20px',
      marginTop: '20px',
      borderRadius: '4px',
      backgroundColor: 'white',
    },
    button: {
      backgroundColor: '#007bff',
      color: 'white',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
      textDecoration: 'none',
      display: 'inline-block',
      margin: '20px 0',
    },
    noteTextarea: {
      width: '100%',
      height: '100px',
      padding: '5px',
      margin: '10px 0',
    },
  };

  return (
    <div>
      <Navbar />
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px' }}>
        <ul style={styles.tabList}>
          {Object.keys(tabData).map((tabKey) => (
            <li
              key={tabKey}
              style={activeTab === tabKey ? { ...styles.tabItem, ...styles.activeTabItem } : styles.tabItem}
              onClick={() => setActiveTab(tabKey)}
            >
              {tabData[tabKey].title}
            </li>
          ))}
        </ul>
        <div style={styles.contentBox}>
          <h1>{tabData[activeTab].title}</h1>
          {activeTab === 'treatmentPlan' && (
            <textarea
              style={styles.noteTextarea}
              value={treatmentPlanNote}
              onChange={(e) => setTreatmentPlanNote(e.target.value)}
              placeholder="Enter treatment plan notes here..."
            />
          )}
          {activeTab === 'progressNotes' && (
            <textarea
              style={styles.noteTextarea}
              value={progressNote}
              onChange={(e) => setProgressNote(e.target.value)}
              placeholder="Enter progress notes here..."
            />
          )}
          {activeTab === 'prescriptions' && (
            <textarea
              style={styles.noteTextarea}
              value={prescriptionNote}
              onChange={(e) => setPrescriptionNote(e.target.value)}
              placeholder="Enter prescription notes here..."
            />
          )}
          <p>{tabData[activeTab].content}</p>
          {tabData[activeTab].download && (
            <button style={styles.button} onClick={() => alert('Downloading...')}>Download Medical Record</button>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PatientDetails;
