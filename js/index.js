document.addEventListener("DOMContentLoaded", function () {
    let isLoggedIn = localStorage.getItem("loggedIn");
    if (isLoggedIn) {
        document.getElementById("register-btn").style.display = "none";
        document.getElementById("login-btn").style.display = "none";
        document.getElementById("account-btn").style.display = "block";
        document.getElementById("logout-btn").style.display = "block";
    }
});

function logout() {
    localStorage.removeItem("loggedIn");
    location.reload();
}