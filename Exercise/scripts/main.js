document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Countdown timer for promotion
    const countdown = () => {
        const endDate = new Date('2023-12-31T23:59:59');
        const now = new Date();
        const diff = endDate - now;

        if (diff <= 0) {
            document.getElementById('countdown').innerHTML = "Chương trình đã kết thúc";
            return;
        }

        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        document.getElementById('countdown').innerHTML = `
            ${days} ngày ${hours} giờ ${minutes} phút ${seconds} giây
        `;
    };

    setInterval(countdown, 1000);
    countdown();

    // Form validation
    const registrationForm = document.getElementById('registration-form');
    if (registrationForm) {
        registrationForm.addEventListener('submit', function(e) {
            e.preventDefault();
            // Add form validation logic here
        });
    }
});