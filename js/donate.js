document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); 

        const fullName = document.getElementById("fullName").value.trim();
        const phoneNumber = document.getElementById("phoneNumber").value.trim();
        const email = document.getElementById("email").value.trim();
        const donorType = document.getElementById("donorType").value;
        const pickupArea = document.getElementById("pickupArea").value.trim();
        const mapLink = document.getElementById("mapLink").value.trim();
        const donationType = document.getElementById("donationType").value;
        const pickupDate = document.getElementById("preferredPickupDate").value;
        const pickupTime = document.getElementById("preferredPickupTime").value;

        if (!fullName || !phoneNumber || !email || !donorType || !pickupArea || !mapLink || !donationType || !pickupDate || !pickupTime) {
            alert("يرجى ملء جميع الحقول المطلوبة.");
            return;
        }

        let storedData = localStorage.getItem("donationFormData");
        let donations = [];

        if (storedData) {
            try {
                donations = JSON.parse(storedData);
                if (!Array.isArray(donations)) {
                    donations = []; 
                }
            } catch (error) {
                console.error("Error parsing localStorage data:", error);
                donations = []; 
            }
        }

        const newDonation = {
            fullName,
            phoneNumber,
            email,
            donorType,
            pickupArea,
            mapLink,
            donationType,
            pickupDate,
            pickupTime
        };

        donations.push(newDonation);

        localStorage.setItem("donationFormData", JSON.stringify(donations));

        Swal.fire({
            title: "شكراً لك!",
            text: "تم إرسال طلب التبرع بنجاح",
            icon: "success",
            confirmButtonText: "حسناً"
        });
                form.reset(); 
    });
});