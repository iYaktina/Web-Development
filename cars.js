document.addEventListener("DOMContentLoaded", function() {
    // Get references to the login and signup forms and their buttons
    const loginForm = document.querySelector(".login_form");
    const signupForm = document.querySelector(".signup_form");
    const loginButton = document.querySelector(".Login");
    const signupButton = document.querySelector(".Signup");

    // Hide the signup form initially
    signupForm.style.display = "none";

    // Event listener for the login button
    loginButton.addEventListener("click", function() {
        // Show the login form and hide the signup form
        loginForm.style.display = "block";
        signupForm.style.display = "none";
    });

    // Event listener for the signup button
    signupButton.addEventListener("click", function() {
        // Show the signup form and hide the login form
        signupForm.style.display = "block";
        loginForm.style.display = "none";
    });
});


