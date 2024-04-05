document.getElementById('reportForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Gather form data
    var patientName = document.getElementById('patientName').value;
    var testName = document.getElementById('testName').value;
    var results = document.getElementById('results').value;

    // Generate report
    var report = `
        <h2>Lab Test Report</h2>
        <p><strong>Patient Name:</strong> ${patientName}</p>
        <p><strong>Test Name:</strong> ${testName}</p>
        <p><strong>Test Results:</strong></p>
        <p>${results}</p>
    `;

    // Display report
    document.getElementById('reportOutput').innerHTML = report;

    // Open a new window for printing
    var printWindow = window.open('', '_blank');
    printWindow.document.open();
    printWindow.document.write('<html><head><title>Lab Test Report</title></head><body>');
    printWindow.document.write(report);
    printWindow.document.write('</body></html>');
    printWindow.document.close();

    // Print the report
    printWindow.print();
});
