document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    const form = document.querySelector('form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('Demo form: data is not stored or transmitted.');
    });
});