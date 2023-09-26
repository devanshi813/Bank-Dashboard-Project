document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const id = document.getElementById("id").value;
        const password = document.getElementById("password").value;

        if (id === "your_username" && password === "your_password") {
            window.location.href = "../Dashboard/HomeDashBoard.html";
        } else {
            alert("Invalid credentials. Please try again.");
        }
    });
});
