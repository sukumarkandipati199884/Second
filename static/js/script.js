document.addEventListener('DOMContentLoaded', function() {
    console.log('JavaScript Loaded');

    // Navigation link event listeners
    document.getElementById('logo').addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    document.getElementById('home-link').addEventListener('click', function() {
        document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
    });

    document.getElementById('dashboard-link').addEventListener('click', function() {
        document.getElementById('dashboard').scrollIntoView({ behavior: 'smooth' });
    });

    document.getElementById('about-link').addEventListener('click', function() {
        document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
    });

    document.getElementById('contact-link').addEventListener('click', function() {
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    });
});