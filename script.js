// Simulated dataset of doctors
var doctors = [
    { name: "Dr. Emily Roberts", specialization: "cardiology", availability: "Mon, Wed - 10:00 AM to 4:00 PM" },
    { name: "Dr. John Miller", specialization: "dermatology", availability: "Tue, Thu - 9:00 AM to 3:00 PM" },
    { name: "Dr. Anna Johnson", specialization: "cardiology", availability: "Mon, Fri - 12:00 PM to 6:00 PM" },
    // Add more simulated doctors as needed
];

document.getElementById("doctorSearchForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    var selectedSpecialization = document.getElementById("specialization").value;
    var resultsDiv = document.getElementById("results");

    // Filter doctors by the selected specialization
    var filteredDoctors = doctors.filter(function(doctor) {
        return doctor.specialization === selectedSpecialization;
    });

    // Clear previous results
    resultsDiv.innerHTML = "";

    // Display message if no doctors found
    if (filteredDoctors.length === 0) {
        resultsDiv.innerHTML = "<p>No doctors found for the selected specialization.</p>";
        return;
    }

    // Dynamically generate and display results
    filteredDoctors.forEach(function(doctor) {
        var doctorDiv = document.createElement("div");
        doctorDiv.classList.add("doctor");
        doctorDiv.innerHTML = `
            <h2>${doctor.name} - ${doctor.specialization}</h2>
            <p>Availability: <span>${doctor.availability}</span></p>
            <button onclick="bookAppointment('${doctor.name}')">Book Now</button>
        `;
        resultsDiv.appendChild(doctorDiv);
    });
});

// Function to simulate booking an appointment
function bookAppointment(doctorName) {
    alert("Booking appointment with " + doctorName);
}
