// Get the modal
var modal = document.getElementById('myModal');

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the span (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the page loads, open the modal
window.onload = function() {
    modal.style.display = "block";
}
