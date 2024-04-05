document.getElementById("insuranceForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    // Get form values
    var insuranceProvider = document.getElementById("insuranceProvider").value;
    var policyNumber = document.getElementById("policyNumber").value;
    var coverage = document.getElementById("coverage").value;

    // Create insurance item
    var insuranceItem = document.createElement("li");
    insuranceItem.classList.add("insurance-item");
    insuranceItem.innerHTML = "<strong>Provider:</strong> " + insuranceProvider + ", <strong>Policy Number:</strong> " + policyNumber + ", <strong>Coverage:</strong> " + coverage;

    // Append insurance item to list
    document.getElementById("insuranceItems").appendChild(insuranceItem);

    // Clear form fields
    document.getElementById("insuranceForm").reset();
});
