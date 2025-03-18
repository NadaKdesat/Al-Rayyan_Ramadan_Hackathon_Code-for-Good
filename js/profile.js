window.onload = function() {
    let userData = JSON.parse(localStorage.getItem('user1'));
    let donationsData = JSON.parse(localStorage.getItem('donationFormData')) || [];

    if (userData) {
        document.getElementById("profileUsername").textContent = userData.username;
        document.getElementById("profileEmail").textContent = userData.email;
        document.getElementById("profileCity").textContent = userData.city;
        document.getElementById("profilenumber").textContent = userData.number;
    } else {
        alert("لم يتم العثور على بيانات المستخدم. يرجى التسجيل أولاً.");
        window.location.href = "register.html";
    }

    let tableBody = document.getElementById("donationTableBody");

    if (donationsData.length > 0) {
        donationsData.forEach((donation, index) => {
            let row = document.createElement("tr");
            row.innerHTML = `
                <td>${index + 1}</td>
                <td>${donation.fullName}</td>
                <td>${donation.phoneNumber}</td>
                <td>${donation.email}</td>
                <td>${donation.donorType}</td>
                <td>${donation.pickupArea}</td>
                <td><a href="${donation.mapLink}" target="_blank">عرض الموقع</a></td>
                <td>${donation.donationType}</td>
                <td>${donation.pickupDate}</td>
                <td>${donation.pickupTime}</td>
            `;
            tableBody.appendChild(row);
        });
    } else {
        tableBody.innerHTML = `<tr><td colspan="10">لا توجد تبرعات سابقة.</td></tr>`;
    }
};
