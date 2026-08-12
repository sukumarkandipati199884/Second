document.addEventListener('DOMContentLoaded', function() {
    const sampleData = {
        totalRevenue: 50000,
        totalOrders: 150,
        averageOrderValue: 333.33,
        totalCustomers: 120,
        orders: [
            { id: 1, customer: 'John Doe', category: 'electronics', total: 299.99 },
            { id: 2, customer: 'Jane Smith', category: 'clothing', total: 89.99 },
            { id: 3, customer: 'Alice Johnson', category: 'home', total: 45.00 },
            { id: 4, customer: 'Chris Lee', category: 'electronics', total: 199.99 }
        ]
    };

    function updateSummary() {
        document.getElementById('total-revenue').textContent = `$${sampleData.totalRevenue}`;
        document.getElementById('total-orders').textContent = sampleData.totalOrders;
        document.getElementById('average-order-value').textContent = `$${sampleData.averageOrderValue.toFixed(2)}`;
        document.getElementById('total-customers').textContent = sampleData.totalCustomers;
    }

    function renderOrders(category) {
        const ordersTable = document.getElementById('orders-table');
        ordersTable.innerHTML = '';
        const filteredOrders = sampleData.orders.filter(order => category === 'all' || order.category === category);
        filteredOrders.forEach(order => {
            const row = document.createElement('tr');
            row.innerHTML = `<td>${order.id}</td><td>${order.customer}</td><td>${order.category}</td><td>$${order.total.toFixed(2)}</td>`;
            ordersTable.appendChild(row);
        });
    }

    document.getElementById('category-filter').addEventListener('change', function(event) {
        renderOrders(event.target.value);
    });

    updateSummary();
    renderOrders('all');

    // Placeholder for chart rendering logic
    // Use a library like Chart.js to render charts in the canvas elements
});