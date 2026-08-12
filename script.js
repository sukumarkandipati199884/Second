document.addEventListener('DOMContentLoaded', function() {
    const sampleData = {
        totalRevenue: 50000,
        totalOrders: 1200,
        averageOrderValue: 42,
        totalCustomers: 800,
        recentOrders: [
            { id: '001', customer: 'John Doe', date: '2023-10-01', amount: 150 },
            { id: '002', customer: 'Jane Smith', date: '2023-10-02', amount: 200 },
            { id: '003', customer: 'Sam Green', date: '2023-10-03', amount: 75 }
        ],
        categoryData: {
            all: { totalRevenue: 50000, totalOrders: 1200, averageOrderValue: 42, totalCustomers: 800 },
            electronics: { totalRevenue: 20000, totalOrders: 400, averageOrderValue: 50, totalCustomers: 300 },
            fashion: { totalRevenue: 15000, totalOrders: 500, averageOrderValue: 30, totalCustomers: 250 },
            home: { totalRevenue: 15000, totalOrders: 300, averageOrderValue: 50, totalCustomers: 250 }
        }
    };

    function updateSummaryCards(category) {
        const data = sampleData.categoryData[category];
        document.getElementById('total-revenue').textContent = `$${data.totalRevenue}`;
        document.getElementById('total-orders').textContent = data.totalOrders;
        document.getElementById('average-order-value').textContent = `$${data.averageOrderValue}`;
        document.getElementById('total-customers').textContent = data.totalCustomers;
    }

    updateSummaryCards('all');

    const recentOrdersTable = document.getElementById('recent-orders');
    sampleData.recentOrders.forEach(order => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${order.id}</td><td>${order.customer}</td><td>${order.date}</td><td>$${order.amount}</td>`;
        recentOrdersTable.appendChild(row);
    });

    const categoryFilter = document.getElementById('category-filter');
    categoryFilter.addEventListener('change', function() {
        const selectedCategory = categoryFilter.value;
        updateSummaryCards(selectedCategory);
        console.log(`Filter applied: ${selectedCategory}`);
    });

    // Initialize charts using a library like Chart.js
    // Example: new Chart(document.getElementById('monthly-sales-chart'), { /* chart config */ });
    // Example: new Chart(document.getElementById('category-performance-chart'), { /* chart config */ });
});