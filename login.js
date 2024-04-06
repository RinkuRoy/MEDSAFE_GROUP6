document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    const users = JSON.parse(localStorage.getItem('users')) || {};

    if(users[email] && users[email].password === password) {
        sessionStorage.setItem('currentUser', email);
        alert('Login successful!');
        window.location.href = 'index.html';
    } else {
        alert('Login failed. Please check your credentials.');
    }
});
