document.addEventListener('DOMContentLoaded', () => {
    const inventoryList = document.getElementById('inventory-list');
    const totalItems = document.getElementById('total-items');
    const lowStockItems = document.getElementById('low-stock-items');
    const categories = document.getElementById('categories');
    const searchInput = document.getElementById('search');
    const filterCategory = document.getElementById('filter-category');
    const filterStock = document.getElementById('filter-stock');
    const addItemButton = document.getElementById('add-item');
    const generateReportButton = document.getElementById('generate-report');
    const reportOutput = document.getElementById('report-output');
    const emptyState = document.getElementById('empty-state');

    let inventory = [
        { name: 'Item 1', category: 'Category 1', stock: 20 },
        { name: 'Item 2', category: 'Category 2', stock: 5 },
        { name: 'Item 3', category: 'Category 1', stock: 0 },
    ];

    function renderInventory() {
        inventoryList.innerHTML = '';
        inventory.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.name}</td>
                <td>${item.category}</td>
                <td>${item.stock}</td>
                <td>
                    <button class="edit-button" data-name="${item.name}">Edit</button>
                    <button class="delete-button" data-name="${item.name}">Delete</button>
                </td>
            `;
            inventoryList.appendChild(row);
        });
        updateStats();
        toggleEmptyState();
    }

    function updateStats() {
        totalItems.textContent = inventory.length;
        lowStockItems.textContent = inventory.filter(item => item.stock < 10).length;
        const uniqueCategories = [...new Set(inventory.map(item => item.category))];
        categories.textContent = uniqueCategories.length;
    }

    function toggleEmptyState() {
        if (inventory.length === 0) {
            emptyState.classList.remove('hidden');
        } else {
            emptyState.classList.add('hidden');
        }
    }

    function editItem(name) {
        alert(`Edit functionality for ${name} is not implemented in this demo.`);
    }

    function deleteItem(name) {
        inventory = inventory.filter(item => item.name !== name);
        renderInventory();
    }

    addItemButton.addEventListener('click', () => {
        alert('Add item functionality is not implemented in this demo.');
    });

    generateReportButton.addEventListener('click', () => {
        reportOutput.textContent = 'Report generation is not implemented in this demo.';
    });

    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();
        inventoryList.innerHTML = '';
        inventory.filter(item => item.name.toLowerCase().includes(query)).forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.name}</td>
                <td>${item.category}</td>
                <td>${item.stock}</td>
                <td>
                    <button class="edit-button" data-name="${item.name}">Edit</button>
                    <button class="delete-button" data-name="${item.name}">Delete</button>
                </td>
            `;
            inventoryList.appendChild(row);
        });
        toggleEmptyState();
    });

    filterCategory.addEventListener('change', () => {
        const category = filterCategory.value;
        inventoryList.innerHTML = '';
        inventory.filter(item => !category || item.category === category).forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.name}</td>
                <td>${item.category}</td>
                <td>${item.stock}</td>
                <td>
                    <button class="edit-button" data-name="${item.name}">Edit</button>
                    <button class="delete-button" data-name="${item.name}">Delete</button>
                </td>
            `;
            inventoryList.appendChild(row);
        });
        toggleEmptyState();
    });

    filterStock.addEventListener('change', () => {
        const stockStatus = filterStock.value;
        inventoryList.innerHTML = '';
        inventory.filter(item => {
            if (stockStatus === 'in-stock') return item.stock > 0;
            if (stockStatus === 'low-stock') return item.stock < 10;
            return true;
        }).forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.name}</td>
                <td>${item.category}</td>
                <td>${item.stock}</td>
                <td>
                    <button class="edit-button" data-name="${item.name}">Edit</button>
                    <button class="delete-button" data-name="${item.name}">Delete</button>
                </td>
            `;
            inventoryList.appendChild(row);
        });
        toggleEmptyState();
    });

    inventoryList.addEventListener('click', (event) => {
        if (event.target.classList.contains('edit-button')) {
            editItem(event.target.dataset.name);
        } else if (event.target.classList.contains('delete-button')) {
            deleteItem(event.target.dataset.name);
        }
    });

    renderInventory();
});