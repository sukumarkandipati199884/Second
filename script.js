document.addEventListener('DOMContentLoaded', function() {
    const sampleData = {
        revenue: 50000,
        orders: 120,
        averageOrderValue: 416.67,
        customers: 100,
        recentOrders: [
            { id: '001', customer: 'John Doe', amount: 250, date: '2023-10-01' },
            { id: '002', customer: 'Jane Smith', amount: 150, date: '2023-10-02' },
            { id: '003', customer: 'Alice Johnson', amount: 300, date: '2023-10-03' }
        ]
    };

    document.getElementById('total-revenue').textContent = `$${sampleData.revenue}`;
    document.getElementById('total-orders').textContent = sampleData.orders;
    document.getElementById('average-order-value').textContent = `$${sampleData.averageOrderValue.toFixed(2)}`;
    document.getElementById('total-customers').textContent = sampleData.customers;

    const recentOrdersTable = document.getElementById('recent-orders');
    sampleData.recentOrders.forEach(order => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${order.id}</td><td>${order.customer}</td><td>$${order.amount}</td><td>${order.date}</td>`;
        recentOrdersTable.appendChild(row);
    });

    const categoryFilter = document.getElementById('category-filter');
    categoryFilter.addEventListener('change', function() {
        const selectedCategory = categoryFilter.value;
        // Update dashboard metrics based on selected category
        // This is a demo, so no real data filtering is implemented
        console.log(`Category filter changed to: ${selectedCategory}`);
    });

    // Placeholder for chart initialization
    // In a real application, you would use a charting library like Chart.js
    const ctx1 = document.getElementById('monthly-sales-chart').getContext('2d');
    const ctx2 = document.getElementById('category-performance-chart').getContext('2d');
    // Example of chart initialization
    // new Chart(ctx1, { type: 'line', data: {}, options: {} });
    // new Chart(ctx2, { type: 'bar', data: {}, options: {} });
});