document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    const filterButtons = document.querySelectorAll('.filter-btn');
    const menuItems = document.querySelectorAll('.menu-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-category');
            menuItems.forEach(item => {
                if (category === 'all' || item.getAttribute('data-category') === category) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    const reservationForm = document.getElementById('reservation-form');
    const reservationFeedback = document.getElementById('reservation-feedback');

    reservationForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(reservationForm);
        let valid = true;
        formData.forEach((value, key) => {
            if (!value) {
                valid = false;
            }
        });
        if (valid) {
            reservationFeedback.textContent = 'Thank you for your reservation! We will contact you soon.';
            reservationFeedback.style.color = 'green';
            reservationForm.reset();
        } else {
            reservationFeedback.textContent = 'Please fill out all required fields.';
            reservationFeedback.style.color = 'red';
        }
    });
});