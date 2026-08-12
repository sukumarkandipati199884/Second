document.addEventListener('DOMContentLoaded', function() {
    const sampleData = {
        totalRevenue: 50000,
        totalOrders: 200,
        averageOrderValue: 250,
        totalCustomers: 150,
        orders: [
            { id: 1, customer: 'John Doe', category: 'electronics', amount: 300 },
            { id: 2, customer: 'Jane Smith', category: 'fashion', amount: 150 },
            { id: 3, customer: 'Alice Johnson', category: 'home', amount: 200 },
            { id: 4, customer: 'Chris Lee', category: 'electronics', amount: 400 }
        ]
    };

    function updateSummary() {
        document.getElementById('total-revenue').textContent = `$${sampleData.totalRevenue}`;
        document.getElementById('total-orders').textContent = sampleData.totalOrders;
        document.getElementById('average-order-value').textContent = `$${sampleData.averageOrderValue}`;
        document.getElementById('total-customers').textContent = sampleData.totalCustomers;
    }

    function populateOrdersTable(category) {
        const tbody = document.getElementById('orders-table-body');
        tbody.innerHTML = '';
        const filteredOrders = category === 'all' ? sampleData.orders : sampleData.orders.filter(order => order.category === category);
        filteredOrders.forEach(order => {
            const row = document.createElement('tr');
            row.innerHTML = `<td>${order.id}</td><td>${order.customer}</td><td>${order.category}</td><td>$${order.amount}</td>`;
            tbody.appendChild(row);
        });
    }

    document.getElementById('category-filter').addEventListener('change', function(event) {
        populateOrdersTable(event.target.value);
    });

    updateSummary();
    populateOrdersTable('all');

    // Placeholder for chart rendering
    // You can use a library like Chart.js to render charts
    // Example: new Chart(document.getElementById('monthly-sales-chart'), { /* chart config */ });
    // Example: new Chart(document.getElementById('category-performance-chart'), { /* chart config */ });
});