document.addEventListener("DOMContentLoaded", function() {
    const bookingForm = document.getElementById("bookingForm");

    if (bookingForm) {
        bookingForm.addEventListener("submit", function(event) {
            event.preventDefault();

            const fullName = document.getElementById("fullName").value.trim();
            const email = document.getElementById("email").value.trim();
            const service = document.getElementById("service").value;
            const day = document.getElementById("day").value;

            if (fullName === "" || email === "" || service === "" || day === "") {
                alert("Please fill in all required fields.");
                return;
            }

            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert("Please enter a valid email address.");
                return;
            }

            alert(`Thank you, ${fullName}! Your booking request for ${service} on ${day} has been submitted.`);
            bookingForm.reset();
        });
    }

    const galleryImages = document.querySelectorAll(".gallery-grid img");
    galleryImages.forEach(img => {
        img.addEventListener("click", function() {
            this.classList.toggle("enlarged");
        });
    });
});
