document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navList = document.querySelector('.nav-list');

    navToggle.addEventListener('click', function() {
        navList.classList.toggle('active');
    });

    const dateInput = document.querySelector('#date');
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);

    // Add event listeners for social media links
    const instagramLink = document.querySelector('#instagram-link');
    const facebookLink = document.querySelector('#facebook-link');

    instagramLink.addEventListener('click', function(event) {
        event.preventDefault();
        window.open('https://www.instagram.com', '_blank');
    });

    facebookLink.addEventListener('click', function(event) {
        event.preventDefault();
        window.open('https://www.facebook.com', '_blank');
    });
});