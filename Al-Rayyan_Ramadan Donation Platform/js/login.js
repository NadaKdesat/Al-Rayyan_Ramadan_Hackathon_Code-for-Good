// تسجيل المستخدم
document.getElementById("registerForm")?.addEventListener("submit", function(event) {
    event.preventDefault();

    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let city = document.getElementById("city").value;

    if (!username || !email || !password || !city) {
        alert("يرجى ملء جميع الحقول!");
        return;
    }

    let userData = {
        username: username,
        email: email,
        password: password,
        city: city
    };

    // حساب ID فريد للمستخدم بناءً على عدد المستخدمين في localStorage
    let id = localStorage.length + 1; 
    localStorage.setItem(`user${id}`, JSON.stringify(userData));

    alert("تم التسجيل بنجاح! يمكنك تسجيل الدخول الآن.");
    window.location.href = "login.html"; // الانتقال لصفحة تسجيل الدخول
});

// تسجيل الدخول
document.getElementById("loginForm")?.addEventListener("submit", function(event) {
    event.preventDefault();

    let loginEmail = document.getElementById("loginEmail").value;
    let loginPassword = document.getElementById("loginPassword").value;

    let userFound = false;

    // التحقق من جميع المستخدمين المخزنين في localStorage
    for (let i = 1; i <= localStorage.length; i++) {
        let storedUser = JSON.parse(localStorage.getItem(`user${i}`));
        if (storedUser && loginEmail === storedUser.email && loginPassword === storedUser.password) {
            userFound = true;
            
            alert("تم تسجيل الدخول بنجاح! مرحبًا " + storedUser.username);
            // Set "isLoggedIn" to true in localStorage
            console.log("11111111111111111111111");
            
            localStorage.setItem("loggedIn",true);

            window.location.href = "index.html";
            break;
        }
    }

    if (!userFound) {
        alert("البريد الإلكتروني أو كلمة المرور غير صحيحة!");
    }
});