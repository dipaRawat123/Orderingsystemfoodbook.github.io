document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("login-form");
    const errorMessage = document.getElementById("error-message");

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();
        
        // Replace with your actual authentication logic
        const validUsername = "Deepa";
        const validPassword = "1143";

        const enteredUsername = document.getElementById("username").value;
        const enteredPassword = document.getElementById("password").value;

        if (enteredUsername === validUsername && enteredPassword === validPassword) {
            // Redirect to a protected page upon successful login
            window.location.href = "index.html";
        } else {
            errorMessage.textContent = "Invalid username or password. Please try again.";
        }
    });
});
