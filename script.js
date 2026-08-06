document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    document.querySelector('form').addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Demo form: data is not stored or transmitted.');
    });
});