document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); 

       
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const subject = document.getElementById("subject").value;
        const message = document.getElementById("message").value;
      
        const formData = {
            name,
            email,
            subject,
            message
        };

       
        localStorage.setItem("contactFormData", JSON.stringify(formData));

     
        Swal.fire({
            icon: 'success',
            title: 'تم ارسال الرسالة',
            text: 'شكرًا سيتم التواصل معك في أقرب وقت',
            confirmButtonText: 'موافق'
        });
    });
});