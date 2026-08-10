document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    navToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });

    const reservationLink = document.getElementById('reservation-link');
    reservationLink.addEventListener('click', function(event) {
        event.preventDefault();
        alert('Reservation feature coming soon!');
    });

    const instagramLink = document.getElementById('instagram-link');
    instagramLink.addEventListener('click', function(event) {
        event.preventDefault();
        window.open('https://www.instagram.com', '_blank');
    });

    const facebookLink = document.getElementById('facebook-link');
    facebookLink.addEventListener('click', function(event) {
        event.preventDefault();
        window.open('https://www.facebook.com', '_blank');
    });
});