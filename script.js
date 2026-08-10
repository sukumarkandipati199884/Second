document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    const products = JSON.parse(localStorage.getItem('products')) || [
        { id: 1, name: 'Product A', stock: 20 },
        { id: 2, name: 'Product B', stock: 5 },
        { id: 3, name: 'Product C', stock: 0 },
        { id: 4, name: 'Product D', stock: 15 }
    ];

    const productList = document.getElementById('product-list');
    const totalProducts = document.getElementById('total-products');
    const lowStockItems = document.getElementById('low-stock-items');
    const outOfStock = document.getElementById('out-of-stock');
    const emptyState = document.getElementById('empty-state');
    const searchInput = document.getElementById('search');
    const filterSelect = document.getElementById('filter');

    function updateDashboard() {
        const lowStockCount = products.filter(p => p.stock > 0 && p.stock < 10).length;
        const outOfStockCount = products.filter(p => p.stock === 0).length;

        totalProducts.textContent = products.length;
        lowStockItems.textContent = lowStockCount;
        outOfStock.textContent = outOfStockCount;
    }

    function renderProducts(filter = 'all', search = '') {
        productList.innerHTML = '';
        const filteredProducts = products.filter(product => {
            if (filter === 'low-stock' && (product.stock >= 10 || product.stock === 0)) return false;
            if (filter === 'out-of-stock' && product.stock !== 0) return false;
            if (search && !product.name.toLowerCase().includes(search.toLowerCase())) return false;
            return true;
        });

        if (filteredProducts.length === 0) {
            emptyState.style.display = 'block';
        } else {
            emptyState.style.display = 'none';
            filteredProducts.forEach(product => {
                const productItem = document.createElement('div');
                productItem.className = 'product-item';
                productItem.innerHTML = `
                    <h3>${product.name}</h3>
                    <p>Stock: ${product.stock}</p>
                `;
                productList.appendChild(productItem);
            });
        }
    }

    function saveProducts() {
        localStorage.setItem('products', JSON.stringify(products));
    }

    searchInput.addEventListener('input', () => {
        renderProducts(filterSelect.value, searchInput.value);
    });

    filterSelect.addEventListener('change', () => {
        renderProducts(filterSelect.value, searchInput.value);
    });

    window.addEventListener('beforeunload', saveProducts);

    updateDashboard();
    renderProducts();
});