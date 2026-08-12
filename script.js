document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.querySelector('.theme-toggle');
    const navToggle = document.querySelector('.nav-toggle');
    const body = document.body;
    const sidebar = document.querySelector('.sidebar');
    const revenueElement = document.getElementById('monthly-revenue');
    const usersElement = document.getElementById('active-users');
    const conversionElement = document.getElementById('conversion-rate');
    const ticketsElement = document.getElementById('support-tickets');
    const customerTable = document.getElementById('customer-table');
    const activityFeed = document.getElementById('activity-feed');
    const customerSearch = document.getElementById('customer-search');

    const sampleMetrics = {
        revenue: 12000,
        users: 1500,
        conversion: 3.5,
        tickets: 45
    };

    const sampleCustomers = [
        { name: 'Alice Johnson', email: 'alice@example.com', joined: '2023-01-15' },
        { name: 'Bob Smith', email: 'bob@example.com', joined: '2023-02-20' },
        { name: 'Charlie Brown', email: 'charlie@example.com', joined: '2023-03-10' },
        { name: 'David Wilson', email: 'david@example.com', joined: '2023-04-05' },
        { name: 'Eva Green', email: 'eva@example.com', joined: '2023-05-25' }
    ];

    const sampleActivities = [
        'Alice Johnson signed up.',
        'Bob Smith upgraded his plan.',
        'Charlie Brown submitted a support ticket.',
        'David Wilson logged in.',
        'Eva Green canceled her subscription.'
    ];

    function updateMetrics() {
        revenueElement.textContent = `$${sampleMetrics.revenue}`;
        usersElement.textContent = sampleMetrics.users;
        conversionElement.textContent = `${sampleMetrics.conversion}%`;
        ticketsElement.textContent = sampleMetrics.tickets;
    }

    function populateCustomers() {
        customerTable.innerHTML = sampleCustomers.map(customer => `
            <tr>
                <td>${customer.name}</td>
                <td>${customer.email}</td>
                <td>${customer.joined}</td>
            </tr>
        `).join('');
    }

    function populateActivities() {
        activityFeed.innerHTML = sampleActivities.map(activity => `<li>${activity}</li>`).join('');
    }

    function filterCustomers() {
        const query = customerSearch.value.toLowerCase();
        const filteredCustomers = sampleCustomers.filter(customer =>
            customer.name.toLowerCase().includes(query) ||
            customer.email.toLowerCase().includes(query)
        );
        customerTable.innerHTML = filteredCustomers.map(customer => `
            <tr>
                <td>${customer.name}</td>
                <td>${customer.email}</td>
                <td>${customer.joined}</td>
            </tr>
        `).join('');
    }

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
        themeToggle.textContent = body.classList.contains('dark-theme') ? '☀️' : '🌙';
    });

    navToggle.addEventListener('click', () => {
        sidebar.classList.toggle('visible');
        navToggle.setAttribute('aria-expanded', sidebar.classList.contains('visible'));
    });

    customerSearch.addEventListener('input', filterCustomers);

    updateMetrics();
    populateCustomers();
    populateActivities();

    // Implement chart rendering logic here using Canvas API or similar
    const revenueCanvas = document.getElementById('revenueCanvas');
    const activityCanvas = document.getElementById('activityCanvas');

    // Example chart rendering logic
    const ctxRevenue = revenueCanvas.getContext('2d');
    ctxRevenue.fillStyle = 'green';
    ctxRevenue.fillRect(10, 10, 150, 100);

    const ctxActivity = activityCanvas.getContext('2d');
    ctxActivity.fillStyle = 'blue';
    ctxActivity.fillRect(10, 10, 150, 100);
});