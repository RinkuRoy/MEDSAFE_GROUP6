document.getElementById("paymentForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    var patientName = document.getElementById("patientName").value;
    var billAmount = document.getElementById("billAmount").value;
    var paymentMethod = document.getElementById("paymentMethod").value;

    // Example: Send form data to backend for processing
    // Replace this with your actual backend API call
    console.log("Patient Name:", patientName);
    console.log("Bill Amount:", billAmount);
    console.log("Payment Method:", paymentMethod);

    // Simulate successful payment for demonstration
    alert("Payment Successful!");
});
