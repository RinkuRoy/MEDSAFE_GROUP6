document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const fullName = document.getElementById('fullName').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    let users = JSON.parse(localStorage.getItem('users')) || {};
    if (users[email]) {
        alert('Email already exists. Please log in.');
        return;
    }

    users[email] = generateDummyData(fullName, phoneNumber, password);
    localStorage.setItem('users', JSON.stringify(users));

    alert('Signup successful. Please login.');
    window.location.href = 'login.html';
});

function generateDummyData(fullName, phoneNumber, password) {
    // Randomly generate records, results, and appointments from a set of dummy data
    const medicalRecordTypes = ['Annual Checkup', 'Dental Checkup', 'Eye Examination', 'Routine Blood Work', 'Physical Therapy'];
    const labResultTypes = ['Blood Work', 'Urine Analysis', 'Allergy Testing', 'Cholesterol Test', 'Blood Sugar Test'];
    const doctors = ['Dr. Sarah Smith', 'Dr. John Doe', 'Dr. Emily Chen', 'Dr. Raymond Holt', 'Dr. Laura Hastings'];

    // Function to generate random date
    const generateRandomDate = (startYear) => {
        const month = Math.floor(Math.random() * 12) + 1;
        const day = Math.floor(Math.random() * 28) + 1; // Simplification to avoid month/day mismatch
        return `${startYear}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
    };

    // Function to randomly pick an item from a list
    const getRandomItem = (list) => list[Math.floor(Math.random() * list.length)];

    // Generate dynamic data
    return {
        fullName,
        phoneNumber,
        password,
        medicalRecords: [
            { date: generateRandomDate(2019), type: getRandomItem(medicalRecordTypes), physician: getRandomItem(doctors), summary: `${fullName}'s ${getRandomItem(medicalRecordTypes)}. Follow-up recommended.` },
            { date: generateRandomDate(2021), type: getRandomItem(medicalRecordTypes), physician: getRandomItem(doctors), summary: `${fullName}'s ${getRandomItem(medicalRecordTypes)}. All good.` }
        ],
        labResults: [
            { date: generateRandomDate(2019), type: getRandomItem(labResultTypes), results: 'Results within normal range.', comments: 'Keep a healthy lifestyle.' },
            { date: generateRandomDate(2021), type: getRandomItem(labResultTypes), results: 'Minor concerns detected.', comments: 'Recommend follow-up.' }
        ],
        appointmentHistory: [
            { date: generateRandomDate(2019), doctorName: getRandomItem(doctors), summary: `Routine check-up. ${fullName} is in good health.` },
            { date: generateRandomDate(2021), doctorName: getRandomItem(doctors), summary: `Consultation for minor symptoms. Prescribed medication.` }
        ]
    };
}
