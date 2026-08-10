document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    navToggle.addEventListener('click', function() {
        navLinks.classList.toggle('nav-open');
    });

    const today = new Date().toISOString().split('T')[0];
    document.getElementById('date').setAttribute('min', today);
});