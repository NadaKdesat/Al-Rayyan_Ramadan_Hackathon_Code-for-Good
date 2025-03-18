document.getElementById("registerForm").addEventListener("submit", function(event) {
    event.preventDefault(); // منع تحديث الصفحة

    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let city = document.getElementById("city").value;
    let number = document.getElementById("number").value;


    // التأكد من عدم وجود حقول فارغة
    if (username === "" || email === "" || password === "" || city === "") {
        alert("يرجى ملء جميع الحقول!");
        return;
    }

    // حفظ البيانات في Local Storage
    let userData = {
        username: username,
        email: email,
        password: password,
        city: city,
        number : number
    };
let id=0;
    localStorage.setItem(`user${++id}`, JSON.stringify(userData));

    alert("تم التسجيل بنجاح! يمكنك تسجيل الدخول الآن.");
    window.location.href = "login.html"; // الانتقال لصفحة تسجيل الدخول
});