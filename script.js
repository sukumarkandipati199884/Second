document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.querySelector('.theme-toggle');
    const navToggle = document.querySelector('.nav-toggle');
    const body = document.body;
    const sidebar = document.querySelector('.sidebar');

    themeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-theme');
        if (body.classList.contains('dark-theme')) {
            themeToggle.textContent = 'Light Theme';
        } else {
            themeToggle.textContent = 'Dark Theme';
        }
    });

    navToggle.addEventListener('click', function() {
        sidebar.classList.toggle('collapsed');
        if (sidebar.classList.contains('collapsed')) {
            sidebar.style.display = 'none';
        } else {
            sidebar.style.display = 'block';
        }
    });

    const metrics = {
        monthlyRevenue: 50000,
        activeUsers: 1200,
        conversionRate: 3.5,
        supportTickets: 45
    };

    document.getElementById('monthly-revenue').textContent = `$${metrics.monthlyRevenue}`;
    document.getElementById('active-users').textContent = metrics.activeUsers;
    document.getElementById('conversion-rate').textContent = `${metrics.conversionRate}%`;
    document.getElementById('support-tickets').textContent = metrics.supportTickets;

    const customers = [
        { name: 'John Doe', email: 'john@example.com', joined: '2023-01-15' },
        { name: 'Jane Smith', email: 'jane@example.com', joined: '2023-02-20' },
        { name: 'Alice Johnson', email: 'alice@example.com', joined: '2023-03-10' },
        { name: 'Bob Brown', email: 'bob@example.com', joined: '2023-04-05' },
        { name: 'Charlie Davis', email: 'charlie@example.com', joined: '2023-05-22' }
    ];

    const customerTable = document.getElementById('customer-table');
    customers.forEach(customer => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${customer.name}</td><td>${customer.email}</td><td>${customer.joined}</td>`;
        customerTable.appendChild(row);
    });

    const activityFeed = document.getElementById('activity-feed');
    const activities = [
        'User John Doe signed up',
        'Jane Smith upgraded her plan',
        'Alice Johnson submitted a support ticket',
        'Bob Brown renewed his subscription',
        'Charlie Davis updated his profile'
    ];

    activities.forEach(activity => {
        const li = document.createElement('li');
        li.textContent = activity;
        activityFeed.appendChild(li);
    });

    const customerSearch = document.getElementById('customer-search');
    customerSearch.addEventListener('input', function() {
        const searchTerm = customerSearch.value.toLowerCase();
        const rows = customerTable.querySelectorAll('tr');
        rows.forEach(row => {
            const cells = row.querySelectorAll('td');
            const name = cells[0].textContent.toLowerCase();
            const email = cells[1].textContent.toLowerCase();
            if (name.includes(searchTerm) || email.includes(searchTerm)) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        });
    });

    // Simulate chart data
    const revenueCanvas = document.getElementById('revenueCanvas').getContext('2d');
    const activityCanvas = document.getElementById('activityCanvas').getContext('2d');

    // Basic chart rendering logic
    revenueCanvas.fillStyle = 'blue';
    revenueCanvas.fillRect(10, 10, 150, 100);

    activityCanvas.fillStyle = 'green';
    activityCanvas.fillRect(10, 10, 150, 100);
});