document.addEventListener('DOMContentLoaded', function() {
    const sampleData = {
        totalRevenue: 50000,
        totalOrders: 150,
        averageOrderValue: 333.33,
        totalCustomers: 120,
        recentOrders: [
            { id: '001', customer: 'John Doe', amount: '$200', date: '2023-10-01' },
            { id: '002', customer: 'Jane Smith', amount: '$150', date: '2023-10-02' },
            { id: '003', customer: 'Alice Johnson', amount: '$300', date: '2023-10-03' }
        ]
    };

    document.getElementById('total-revenue').textContent = `$${sampleData.totalRevenue}`;
    document.getElementById('total-orders').textContent = sampleData.totalOrders;
    document.getElementById('average-order-value').textContent = `$${sampleData.averageOrderValue}`;
    document.getElementById('total-customers').textContent = sampleData.totalCustomers;

    const recentOrdersTable = document.getElementById('recent-orders');
    sampleData.recentOrders.forEach(order => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${order.id}</td><td>${order.customer}</td><td>${order.amount}</td><td>${order.date}</td>`;
        recentOrdersTable.appendChild(row);
    });

    const categoryFilter = document.getElementById('category-filter');
    categoryFilter.addEventListener('change', function() {
        const selectedCategory = categoryFilter.value;
        // Update charts and metrics based on selected category
        console.log(`Filter applied: ${selectedCategory}`);
    });

    // Initialize charts (using Chart.js or similar library)
    // Placeholder for chart initialization
    console.log('Charts initialized');
});