document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    navToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });

    const products = JSON.parse(localStorage.getItem('products')) || [
        { id: 1, name: 'Product A', stock: 10 },
        { id: 2, name: 'Product B', stock: 2 },
        { id: 3, name: 'Product C', stock: 0 },
        { id: 4, name: 'Product D', stock: 5 }
    ];

    const productContainer = document.getElementById('product-list');
    const emptyState = document.getElementById('empty-state');
    const totalProducts = document.getElementById('total-products');
    const lowStock = document.getElementById('low-stock');
    const outOfStock = document.getElementById('out-of-stock');

    function renderProducts() {
        productContainer.innerHTML = '';
        let lowStockCount = 0;
        let outOfStockCount = 0;

        products.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('product');
            productDiv.innerHTML = `<h3>${product.name}</h3><p>Stock: ${product.stock}</p>`;

            if (product.stock < 3) {
                productDiv.classList.add('low-stock');
                lowStockCount++;
            }

            if (product.stock === 0) {
                productDiv.classList.add('out-of-stock');
                outOfStockCount++;
            }

            productContainer.appendChild(productDiv);
        });

        totalProducts.textContent = products.length;
        lowStock.textContent = lowStockCount;
        outOfStock.textContent = outOfStockCount;

        emptyState.style.display = products.length === 0 ? 'block' : 'none';

        localStorage.setItem('products', JSON.stringify(products));
    }

    document.getElementById('search').addEventListener('input', function(e) {
        const query = e.target.value.toLowerCase();
        const filteredProducts = products.filter(product => product.name.toLowerCase().includes(query));
        renderFilteredProducts(filteredProducts);
    });

    function renderFilteredProducts(filteredProducts) {
        productContainer.innerHTML = '';

        filteredProducts.forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('product');
            productDiv.innerHTML = `<h3>${product.name}</h3><p>Stock: ${product.stock}</p>`;
            productContainer.appendChild(productDiv);
        });

        emptyState.style.display = filteredProducts.length === 0 ? 'block' : 'none';
    }

    renderProducts();
});