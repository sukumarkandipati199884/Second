document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.querySelector('.theme-toggle');
    const navToggle = document.querySelector('.nav-toggle');
    const sidebar = document.querySelector('.sidebar');
    const body = document.body;
    const customerTable = document.getElementById('customer-table');
    const activityFeed = document.getElementById('activity-feed');
    const customerSearch = document.getElementById('customer-search');

    const sampleMetrics = {
        monthlyRevenue: 50000,
        activeUsers: 1200,
        conversionRate: 3.5,
        supportTickets: 45,
        totalProjects: 150
    };

    const sampleCustomers = [
        { name: 'John Doe', email: 'john@example.com', joined: '2023-01-15' },
        { name: 'Jane Smith', email: 'jane@example.com', joined: '2023-02-20' },
        { name: 'Alice Johnson', email: 'alice@example.com', joined: '2023-03-10' },
        { name: 'Bob Brown', email: 'bob@example.com', joined: '2023-04-05' },
        { name: 'Charlie Black', email: 'charlie@example.com', joined: '2023-05-25' }
    ];

    const sampleActivities = [
        'User John Doe signed up',
        'Jane Smith upgraded her plan',
        'Alice Johnson submitted a support ticket',
        'Bob Brown downloaded a report',
        'Charlie Black logged in'
    ];

    function updateMetrics() {
        document.getElementById('monthly-revenue').textContent = `$${sampleMetrics.monthlyRevenue}`;
        document.getElementById('active-users').textContent = sampleMetrics.activeUsers;
        document.getElementById('conversion-rate').textContent = `${sampleMetrics.conversionRate}%`;
        document.getElementById('support-tickets').textContent = sampleMetrics.supportTickets;
        document.getElementById('total-projects').textContent = sampleMetrics.totalProjects;
    }

    function populateCustomers() {
        customerTable.innerHTML = '';
        sampleCustomers.forEach(customer => {
            const row = document.createElement('tr');
            row.innerHTML = `<td>${customer.name}</td><td>${customer.email}</td><td>${customer.joined}</td>`;
            customerTable.appendChild(row);
        });
    }

    function populateActivities() {
        activityFeed.innerHTML = '';
        sampleActivities.forEach(activity => {
            const li = document.createElement('li');
            li.textContent = activity;
            activityFeed.appendChild(li);
        });
    }

    function filterCustomers() {
        const searchTerm = customerSearch.value.toLowerCase();
        const filteredCustomers = sampleCustomers.filter(customer =>
            customer.name.toLowerCase().includes(searchTerm) ||
            customer.email.toLowerCase().includes(searchTerm)
        );
        customerTable.innerHTML = '';
        filteredCustomers.forEach(customer => {
            const row = document.createElement('tr');
            row.innerHTML = `<td>${customer.name}</td><td>${customer.email}</td><td>${customer.joined}</td>`;
            customerTable.appendChild(row);
        });
    }

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
        if (body.classList.contains('dark-theme')) {
            themeToggle.textContent = '☀️';
        } else {
            themeToggle.textContent = '🌙';
        }
    });

    navToggle.addEventListener('click', () => {
        sidebar.classList.toggle('active');
    });

    customerSearch.addEventListener('input', filterCustomers);

    updateMetrics();
    populateCustomers();
    populateActivities();
});