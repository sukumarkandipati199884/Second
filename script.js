document.addEventListener('DOMContentLoaded', function() {
    const sampleData = {
        totalRevenue: 50000,
        totalOrders: 200,
        averageOrderValue: 250,
        totalCustomers: 150,
        recentOrders: [
            { id: '001', customer: 'John Doe', date: '2023-10-01', amount: '$200' },
            { id: '002', customer: 'Jane Smith', date: '2023-10-02', amount: '$150' },
            { id: '003', customer: 'Alice Johnson', date: '2023-10-03', amount: '$300' }
        ],
        categoryPerformance: {
            electronics: 20000,
            clothing: 15000,
            home: 15000
        }
    };

    // Update summary cards
    document.getElementById('total-revenue').textContent = `$${sampleData.totalRevenue}`;
    document.getElementById('total-orders').textContent = sampleData.totalOrders;
    document.getElementById('average-order-value').textContent = `$${sampleData.averageOrderValue}`;
    document.getElementById('total-customers').textContent = sampleData.totalCustomers;

    // Populate recent orders table
    const recentOrdersTable = document.getElementById('recent-orders-table');
    sampleData.recentOrders.forEach(order => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${order.id}</td><td>${order.customer}</td><td>${order.date}</td><td>${order.amount}</td>`;
        recentOrdersTable.appendChild(row);
    });

    // Initialize charts
    const ctxMonthlySales = document.getElementById('monthlySalesChart').getContext('2d');
    const monthlySalesChart = new Chart(ctxMonthlySales, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            datasets: [{
                label: 'Monthly Sales',
                data: [4000, 3000, 5000, 7000, 6000, 8000, 9000, 10000, 11000, 12000, 13000, 14000],
                borderColor: 'rgba(75, 192, 192, 1)',
                fill: false
            }]
        }
    });

    const ctxCategoryPerformance = document.getElementById('categoryPerformanceChart').getContext('2d');
    const categoryPerformanceChart = new Chart(ctxCategoryPerformance, {
        type: 'bar',
        data: {
            labels: ['Electronics', 'Clothing', 'Home'],
            datasets: [{
                label: 'Category Performance',
                data: [sampleData.categoryPerformance.electronics, sampleData.categoryPerformance.clothing, sampleData.categoryPerformance.home],
                backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)'],
                borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
                borderWidth: 1
            }]
        }
    });

    // Update charts based on category filter
    document.getElementById('category-filter').addEventListener('change', function(event) {
        const selectedCategory = event.target.value;
        if (selectedCategory === 'all') {
            categoryPerformanceChart.data.datasets[0].data = [sampleData.categoryPerformance.electronics, sampleData.categoryPerformance.clothing, sampleData.categoryPerformance.home];
        } else {
            categoryPerformanceChart.data.datasets[0].data = [sampleData.categoryPerformance[selectedCategory]];
        }
        categoryPerformanceChart.update();
    });
});