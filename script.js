document.addEventListener('DOMContentLoaded', function() {
    const inventory = [
        { name: 'Item 1', category: 'Category 1', quantity: 10 },
        { name: 'Item 2', category: 'Category 2', quantity: 5 },
        { name: 'Item 3', category: 'Category 1', quantity: 0 },
    ];

    const inventoryTable = document.getElementById('inventory-table').getElementsByTagName('tbody')[0];
    const totalItems = document.getElementById('total-items');
    const lowStockItems = document.getElementById('low-stock-items');
    const outOfStockItems = document.getElementById('out-of-stock-items');
    const emptyState = document.getElementById('empty-state');
    const stockFilter = document.getElementById('stock-filter');

    function updateDashboard() {
        totalItems.textContent = inventory.length;
        lowStockItems.textContent = inventory.filter(item => item.quantity > 0 && item.quantity < 5).length;
        outOfStockItems.textContent = inventory.filter(item => item.quantity === 0).length;
    }

    function renderInventory() {
        inventoryTable.innerHTML = '';
        const filteredInventory = inventory.filter(item => {
            if (stockFilter.value === 'in-stock') return item.quantity > 0;
            if (stockFilter.value === 'low-stock') return item.quantity > 0 && item.quantity < 5;
            if (stockFilter.value === 'out-of-stock') return item.quantity === 0;
            return true;
        });

        filteredInventory.forEach(item => {
            const row = inventoryTable.insertRow();
            row.insertCell(0).textContent = item.name;
            row.insertCell(1).textContent = item.category;
            row.insertCell(2).textContent = item.quantity;
            const actionsCell = row.insertCell(3);
            const editButton = document.createElement('button');
            editButton.textContent = 'Edit';
            editButton.onclick = () => editItem(item);
            actionsCell.appendChild(editButton);
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.onclick = () => deleteItem(item);
            actionsCell.appendChild(deleteButton);
        });
        emptyState.style.display = filteredInventory.length === 0 ? 'block' : 'none';
    }

    function editItem(item) {
        alert('Edit functionality is a demo.');
    }

    function deleteItem(item) {
        const index = inventory.indexOf(item);
        if (index > -1) {
            inventory.splice(index, 1);
            renderInventory();
            updateDashboard();
        }
    }

    document.getElementById('add-item').onclick = function() {
        alert('Add item functionality is a demo.');
    };

    document.getElementById('generate-report').onclick = function() {
        alert('Generate report functionality is a demo.');
    };

    stockFilter.onchange = renderInventory;

    renderInventory();
    updateDashboard();
});