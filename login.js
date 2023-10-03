const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-submit");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const email = loginForm.email.value;
    const password = loginForm.password.value;

    if (email && password) {
        alert("You have successfully logged in.");
        // location.reload();
        location.href = 'index.html';
    } else {
        alert("You could not log in! Missing credentials.");
    }
})