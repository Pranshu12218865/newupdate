function signIn() {
    // Get email and password values (for demonstration purposes)
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Simple validation (for demonstration purposes)
    if (email && password) {
        // Redirect to home page (for demonstration purposes)
        window.location.href = 'kkt.js';
    } else {
        alert('Please enter email and password');
    }
}
