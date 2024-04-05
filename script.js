// script.js content
document.addEventListener('DOMContentLoaded', function() {
    loadData(); // Load data from localStorage when the page loads
});

document.getElementById('doctorInfoForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting in the traditional way
    saveData();
});

function enableEditing() {
    document.getElementById('doctorName').disabled = false;
    document.getElementById('speciality').disabled = false;
    document.getElementById('contactNumber').disabled = false;
    document.getElementById('email').disabled = false;
    document.getElementById('availability').disabled = false;
}

function saveData() {
    const doctorInfo = {
        name: document.getElementById('doctorName').value,
        speciality: document.getElementById('speciality').value,
        contactNumber: document.getElementById('contactNumber').value,
        email: document.getElementById('email').value,
        availability: document.getElementById('availability').value
    };

    // Save the data to localStorage
    localStorage.setItem('doctorInfo', JSON.stringify(doctorInfo));
    
    alert('Information updated successfully!');
}

function loadData() {
    const storedData = localStorage.getItem('doctorInfo');
    if (storedData) {
        const doctorInfo = JSON.parse(storedData);

        document.getElementById('doctorName').value = doctorInfo.name;
        document.getElementById('speciality').value = doctorInfo.speciality;
        document.getElementById('contactNumber').value = doctorInfo.contactNumber;
        document.getElementById('email').value = doctorInfo.email;
        document.getElementById('availability').value = doctorInfo.availability;
    }
}
