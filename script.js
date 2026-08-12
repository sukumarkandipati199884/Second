document.addEventListener('DOMContentLoaded', function() {
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    const body = document.body;
    const monthlyRevenue = document.getElementById('monthly-revenue');
    const activeUsers = document.getElementById('active-users');
    const conversionRate = document.getElementById('conversion-rate');
    const supportTickets = document.getElementById('support-tickets');
    const customerSearch = document.getElementById('customer-search');
    const customerTableBody = document.getElementById('customer-table-body');
    const activityFeed = document.getElementById('activity-feed');
    const updateMetricsBtn = document.getElementById('update-metrics');
    const startDateInput = document.getElementById('start-date');
    const endDateInput = document.getElementById('end-date');

    let isDarkTheme = false;

    themeToggleBtn.addEventListener('click', function() {
        isDarkTheme = !isDarkTheme;
        if (isDarkTheme) {
            body.classList.add('dark-theme');
        } else {
            body.classList.remove('dark-theme');
        }
    });

    const sampleMetrics = {
        monthlyRevenue: 50000,
        activeUsers: 1200,
        conversionRate: 5.6,
        supportTickets: 23
    };

    function updateMetrics() {
        monthlyRevenue.textContent = `$${sampleMetrics.monthlyRevenue}`;
        activeUsers.textContent = sampleMetrics.activeUsers;
        conversionRate.textContent = `${sampleMetrics.conversionRate}%`;
        supportTickets.textContent = sampleMetrics.supportTickets;
    }

    updateMetrics();

    customerSearch.addEventListener('input', function() {
        const filter = customerSearch.value.toLowerCase();
        const rows = customerTableBody.getElementsByTagName('tr');
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
    });

    updateMetricsBtn.addEventListener('click', function() {
        const startDate = new Date(startDateInput.value);
        const endDate = new Date(endDateInput.value);
        if (startDate && endDate && startDate <= endDate) {
            console.log('Metrics updated for date range:', startDate, endDate);
            // Simulate metrics update
            updateMetrics();
        } else {
            alert('Please select a valid date range.');
        }
    });

    const ctxRevenue = document.getElementById('revenueCanvas').getContext('2d');
    const revenueChart = new Chart(ctxRevenue, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May'],
            datasets: [{
                label: 'Revenue',
                data: [12000, 15000, 18000, 20000, 25000],
                borderColor: '#4a4e69',
                fill: false
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });

    const ctxActivity = document.getElementById('activityCanvas').getContext('2d');
    const activityChart = new Chart(ctxActivity, {
        type: 'bar',
        data: {
            labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            datasets: [{
                label: 'User Activity',
                data: [200, 300, 250, 400, 350],
                backgroundColor: '#4a4e69'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});