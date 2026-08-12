document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.querySelector('.theme-toggle');
    const navToggle = document.querySelector('.nav-toggle');
    const body = document.body;
    const sidebar = document.querySelector('.sidebar');
    const monthlyRevenue = document.getElementById('monthly-revenue');
    const activeUsers = document.getElementById('active-users');
    const conversionRate = document.getElementById('conversion-rate');
    const supportTickets = document.getElementById('support-tickets');
    const customerTable = document.getElementById('customer-table');
    const activityFeed = document.getElementById('activity-feed');
    const customerSearch = document.getElementById('customer-search');

    const sampleData = {
        metrics: {
            revenue: 50000,
            users: 1200,
            conversion: 5.4,
            tickets: 23
        },
        customers: [
            { name: 'John Doe', email: 'john@example.com', joined: '2023-01-15' },
            { name: 'Jane Smith', email: 'jane@example.com', joined: '2023-02-20' },
            { name: 'Sam Johnson', email: 'sam@example.com', joined: '2023-03-05' },
            { name: 'Chris Lee', email: 'chris@example.com', joined: '2023-04-10' },
            { name: 'Pat Brown', email: 'pat@example.com', joined: '2023-05-25' }
        ],
        activities: [
            'User John Doe signed up.',
            'Jane Smith upgraded her plan.',
            'Sam Johnson submitted a support ticket.',
            'Chris Lee downloaded a report.',
            'Pat Brown changed account settings.'
        ]
    };

    function updateMetrics() {
        monthlyRevenue.textContent = `$${sampleData.metrics.revenue}`;
        activeUsers.textContent = sampleData.metrics.users;
        conversionRate.textContent = `${sampleData.metrics.conversion}%`;
        supportTickets.textContent = sampleData.metrics.tickets;
    }

    function populateCustomers() {
        customerTable.innerHTML = '';
        sampleData.customers.forEach(customer => {
            const row = document.createElement('tr');
            row.innerHTML = `<td>${customer.name}</td><td>${customer.email}</td><td>${customer.joined}</td>`;
            customerTable.appendChild(row);
        });
    }

    function populateActivities() {
        activityFeed.innerHTML = '';
        sampleData.activities.forEach(activity => {
            const item = document.createElement('li');
            item.textContent = activity;
            activityFeed.appendChild(item);
        });
    }

    function filterCustomers() {
        const filter = customerSearch.value.toLowerCase();
        const rows = customerTable.getElementsByTagName('tr');
        Array.from(rows).forEach(row => {
            const cells = row.getElementsByTagName('td');
            const name = cells[0].textContent.toLowerCase();
            const email = cells[1].textContent.toLowerCase();
            if (name.includes(filter) || email.includes(filter)) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        });
    }

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-theme');
        if (body.classList.contains('dark-theme')) {
            themeToggle.textContent = 'Light Theme';
        } else {
            themeToggle.textContent = 'Dark Theme';
        }
    });

    navToggle.addEventListener('click', () => {
        sidebar.classList.toggle('active');
        if (sidebar.classList.contains('active')) {
            navToggle.textContent = '✖';
        } else {
            navToggle.textContent = '☰';
        }
    });

    customerSearch.addEventListener('input', filterCustomers);

    updateMetrics();
    populateCustomers();
    populateActivities();
});