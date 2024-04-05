// Example patient data
const patientsData = {
    '100001': {
        name: 'Rithwick',
        age: 21,
        diseaseType: 'Abc',
        contactNumber: '123-456-7890',
        email: 'rithwick@example.com',
        admitDate: '2024-04-10',
        appointmentDate: '2024-04-15'
    },
    '100002': {
        name: 'Sajib Ghosh',
        age: 21,
        diseaseType: 'Abc',
        contactNumber: '123-456-7890',
        email: 'sajib@example.com',
        admitDate: '2024-04-10',
        appointmentDate: '2024-04-15',
    },
    '100003': {
        name: 'Abu Sayed',
        age: 21,
        diseaseType: 'Abc',
        contactNumber: '123-456-7890',
        email: 'abu@example.com',
        admitDate: '2024-04-10',
        appointmentDate: '2024-04-15'
    },
    '100004': {
        name: 'Rinku Roy',
        age: 21,
        diseaseType: 'Abc',
        contactNumber: '123-456-7890',
        email: 'rinku@example.com',
        admitDate: '2024-04-10',
        appointmentDate: '2024-04-15'
    },
    '100005': {
        name: 'Ann Jose',
        age: 21,
        diseaseType: 'ABC',
        contactNumber: '123-456-7890',
        email: 'Abc@example.com',
        admitDate: '2024-04-10',
        appointmentDate: '2024-04-15'
    },
    '100006': {
        name: 'megha',
        age: 21,
        diseaseType: 'Abc',
        contactNumber: '123-456-7890',
        email: 'megha@example.com',
        admitDate: '2024-04-10',
        appointmentDate: '2024-04-15'
    },
    '100007': {
        name: 'Shraboni',
        age: 21,
        diseaseType: 'Abc',
        contactNumber: '123-456-7890',
        email: 'shraboni@example.com',
        admitDate: '2024-04-10',
        appointmentDate: '2024-04-15'
    }

    // Add more patient data objects here
};

let selectedPatientId = null;

document.addEventListener('DOMContentLoaded', function() {
    // Populate the patient list on page load
    populatePatientList();

    // Event listener for the "Show Information" button
    document.getElementById('showInfoBtn').addEventListener('click', function() {
        if (selectedPatientId) {
            showPatientInfo(selectedPatientId);
        }
    });
});

function populatePatientList() {
    const patientList = document.getElementById('patientList');
    patientList.innerHTML = ''; // Clear existing list
    for (const id in patientsData) {
        const patient = patientsData[id];
        const listItem = document.createElement('li');
        listItem.textContent = `${id} - ${patient.name}`;
        listItem.setAttribute('data-patient-id', id);
        listItem.addEventListener('click', function() {
            // Set the selected patient ID and enable the "Show Information" button
            selectedPatientId = this.getAttribute('data-patient-id');
            document.getElementById('showInfoBtn').disabled = false;
        });
        patientList.appendChild(listItem);
    }
}

function showPatientInfo(patientId) {
    const patientInfo = patientsData[patientId];
    const patientInfoSection = document.getElementById('patientInfoSection');
    
    // Construct the HTML for the patient information
    patientInfoSection.innerHTML = `
        <h3>Patient Information</h3>
        <p>ID: ${patientId}</p>
        <p>Name: ${patientInfo.name}</p>
        <p>Age: ${patientInfo.age}</p>
        <p>Disease Type: ${patientInfo.diseaseType}</p>
        <p>Contact Number: ${patientInfo.contactNumber}</p>
        <p>Email: ${patientInfo.email}</p>
        <p>Admit Date: ${patientInfo.admitDate}</p>
        <p>Appointment Date: ${patientInfo.appointmentDate}</p>
    `;
    
    // Show the patient information section
    patientInfoSection.style.display = 'block';
}
