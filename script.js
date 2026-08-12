document.addEventListener('DOMContentLoaded', () => {
    const sampleData = {
        totalRevenue: 50000,
        totalOrders: 150,
        averageOrderValue: 333.33,
        totalCustomers: 120,
        recentOrders: [
            { id: '001', customer: 'John Doe', amount: '$200', date: '2023-10-01' },
            { id: '002', customer: 'Jane Smith', amount: '$150', date: '2023-10-02' },
            { id: '003', customer: 'Alice Johnson', amount: '$300', date: '2023-10-03' }
        ],
        monthlySales: [
            { month: 'January', sales: 4000 },
            { month: 'February', sales: 4500 },
            { month: 'March', sales: 5000 },
            { month: 'April', sales: 5500 },
            { month: 'May', sales: 6000 },
            { month: 'June', sales: 6500 },
            { month: 'July', sales: 7000 },
            { month: 'August', sales: 7500 },
            { month: 'September', sales: 8000 },
            { month: 'October', sales: 8500 },
            { month: 'November', sales: 9000 },
            { month: 'December', sales: 9500 }
        ],
        categoryPerformance: {
            electronics: 20000,
            fashion: 15000,
            home: 15000
        }
    };

    const totalRevenueEl = document.getElementById('total-revenue');
    const totalOrdersEl = document.getElementById('total-orders');
    const averageOrderValueEl = document.getElementById('average-order-value');
    const totalCustomersEl = document.getElementById('total-customers');
    const recentOrdersEl = document.getElementById('recent-orders');
    const categoryFilterEl = document.getElementById('category-filter');

    totalRevenueEl.textContent = `$${sampleData.totalRevenue}`;
    totalOrdersEl.textContent = sampleData.totalOrders;
    averageOrderValueEl.textContent = `$${sampleData.averageOrderValue.toFixed(2)}`;
    totalCustomersEl.textContent = sampleData.totalCustomers;

    sampleData.recentOrders.forEach(order => {
        const row = document.createElement('tr');
        row.innerHTML = `<td>${order.id}</td><td>${order.customer}</td><td>${order.amount}</td><td>${order.date}</td>`;
        recentOrdersEl.appendChild(row);
    });

    const updateDashboard = (category) => {
        let filteredRevenue = sampleData.totalRevenue;
        let filteredOrders = sampleData.totalOrders;
        let filteredAverageOrderValue = sampleData.averageOrderValue;

        if (category !== 'all') {
            filteredRevenue = sampleData.categoryPerformance[category];
            filteredOrders = Math.round(sampleData.totalOrders / 3);
            filteredAverageOrderValue = filteredRevenue / filteredOrders;
        }

        totalRevenueEl.textContent = `$${filteredRevenue}`;
        totalOrdersEl.textContent = filteredOrders;
        averageOrderValueEl.textContent = `$${filteredAverageOrderValue.toFixed(2)}`;
    };

    categoryFilterEl.addEventListener('change', (event) => {
        updateDashboard(event.target.value);
    });

    const ctxMonthlySales = document.getElementById('monthly-sales-chart').getContext('2d');
    const monthlySalesChart = new Chart(ctxMonthlySales, {
        type: 'line',
        data: {
            labels: sampleData.monthlySales.map(s => s.month),
            datasets: [{
                label: 'Sales',
                data: sampleData.monthlySales.map(s => s.sales),
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2,
                fill: false
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });

    const ctxCategoryPerformance = document.getElementById('category-performance-chart').getContext('2d');
    const categoryPerformanceChart = new Chart(ctxCategoryPerformance, {
        type: 'bar',
        data: {
            labels: Object.keys(sampleData.categoryPerformance),
            datasets: [{
                label: 'Revenue',
                data: Object.values(sampleData.categoryPerformance),
                backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)', 'rgba(255, 206, 86, 0.2)'],
                borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)'],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });
});