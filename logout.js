document.addEventListener('DOMContentLoaded', () => {
    const logoutBtn = document.getElementById('logoutButton');
    if (logoutBtn) {
        logoutBtn.addEventListener('click', function() {
            sessionStorage.removeItem('userLoggedIn'); // Clear session flag
            window.location.href = 'login.html'; // Redirect to login page
        });
    }
});
