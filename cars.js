document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.querySelector(".login_form");
    const signupForm = document.querySelector(".signup_form");
    const loginButton = document.querySelector(".Login");
    const signupButton = document.querySelector(".Signup");
    signupForm.style.display = "none";
    loginButton.addEventListener("click", function() {
        
        loginForm.style.display = "block";
        signupForm.style.display = "none";
    });
    signupButton.addEventListener("click", function() {
        signupForm.style.display = "block";
        loginForm.style.display = "none";
    });
});

