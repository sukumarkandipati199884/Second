document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelector('.nav-links');
    const burger = document.querySelector('.burger');
    const form = document.getElementById('contact-form');
    const feedback = document.getElementById('form-feedback');
    const detailButtons = document.querySelectorAll('.details-btn');

    burger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        burger.classList.toggle('toggle');
    });

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = form.name.value.trim();
        const email = form.email.value.trim();
        const message = form.message.value.trim();

        if (name === '' || email === '' || message === '') {
            feedback.textContent = 'Please fill in all fields.';
            return;
        }

        if (!validateEmail(email)) {
            feedback.textContent = 'Please enter a valid email address.';
            return;
        }

        feedback.textContent = 'Demo form: data is not stored or transmitted.';
    });

    function validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i;
        return re.test(String(email).toLowerCase());
    }

    detailButtons.forEach(button => {
        button.addEventListener('click', () => {
            const projectCard = button.parentElement;
            const projectDetails = projectCard.querySelector('p').textContent;
            alert(`Project Details: ${projectDetails}`);
        });
    });
});