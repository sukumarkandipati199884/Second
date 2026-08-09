document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const taskModal = document.getElementById('task-modal');
    const closeModal = document.querySelector('.close');
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskForm = document.getElementById('task-form');
    const taskList = document.getElementById('task-list');
    const taskSearch = document.getElementById('task-search');
    const priorityFilter = document.getElementById('priority-filter');
    const statusFilter = document.getElementById('status-filter');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    addTaskBtn.addEventListener('click', () => {
        taskModal.style.display = 'block';
    });

    closeModal.addEventListener('click', () => {
        taskModal.style.display = 'none';
    });

    window.onclick = function(event) {
        if (event.target == taskModal) {
            taskModal.style.display = 'none';
        }
    }

    taskForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const taskName = document.getElementById('task-name').value;
        const taskPriority = document.getElementById('task-priority').value;
        const taskStatus = document.getElementById('task-status').value;

        if (taskName.trim() === '') {
            alert('Task name is required.');
            return;
        }

        const task = {
            id: Date.now(),
            name: taskName,
            priority: taskPriority,
            status: taskStatus
        };

        saveTask(task);
        taskModal.style.display = 'none';
        taskForm.reset();
        renderTasks();
    });

    function saveTask(task) {
        const tasks = getTasks();
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    function getTasks() {
        const tasks = localStorage.getItem('tasks');
        return tasks ? JSON.parse(tasks) : [];
    }

    function renderTasks() {
        const tasks = getTasks();
        taskList.innerHTML = '';
        tasks.forEach(task => {
            const taskItem = document.createElement('div');
            taskItem.className = 'task-item';
            taskItem.innerHTML = `
                <p>${task.name}</p>
                <p>Priority: ${task.priority}</p>
                <p>Status: ${task.status}</p>
                <button onclick="editTask(${task.id})">Edit</button>
                <button onclick="deleteTask(${task.id})">Delete</button>
                <button onclick="toggleComplete(${task.id})">${task.status === 'complete' ? 'Mark Incomplete' : 'Mark Complete'}</button>
            `;
            taskList.appendChild(taskItem);
        });
    }

    function editTask(id) {
        const tasks = getTasks();
        const task = tasks.find(t => t.id === id);
        if (task) {
            document.getElementById('task-name').value = task.name;
            document.getElementById('task-priority').value = task.priority;
            document.getElementById('task-status').value = task.status;
            taskModal.style.display = 'block';
            deleteTask(id);
        }
    }

    function deleteTask(id) {
        let tasks = getTasks();
        tasks = tasks.filter(task => task.id !== id);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        renderTasks();
    }

    function toggleComplete(id) {
        const tasks = getTasks();
        const task = tasks.find(t => t.id === id);
        if (task) {
            task.status = task.status === 'complete' ? 'incomplete' : 'complete';
            localStorage.setItem('tasks', JSON.stringify(tasks));
            renderTasks();
        }
    }

    taskSearch.addEventListener('input', function() {
        const query = taskSearch.value.toLowerCase();
        const tasks = getTasks();
        const filteredTasks = tasks.filter(task => task.name.toLowerCase().includes(query));
        renderFilteredTasks(filteredTasks);
    });

    priorityFilter.addEventListener('change', function() {
        filterTasks();
    });

    statusFilter.addEventListener('change', function() {
        filterTasks();
    });

    function filterTasks() {
        const priority = priorityFilter.value;
        const status = statusFilter.value;
        const tasks = getTasks();
        const filteredTasks = tasks.filter(task => {
            return (priority === '' || task.priority === priority) &&
                   (status === '' || task.status === status);
        });
        renderFilteredTasks(filteredTasks);
    }

    function renderFilteredTasks(tasks) {
        taskList.innerHTML = '';
        tasks.forEach(task => {
            const taskItem = document.createElement('div');
            taskItem.className = 'task-item';
            taskItem.innerHTML = `
                <p>${task.name}</p>
                <p>Priority: ${task.priority}</p>
                <p>Status: ${task.status}</p>
                <button onclick="editTask(${task.id})">Edit</button>
                <button onclick="deleteTask(${task.id})">Delete</button>
                <button onclick="toggleComplete(${task.id})">${task.status === 'complete' ? 'Mark Incomplete' : 'Mark Complete'}</button>
            `;
            taskList.appendChild(taskItem);
        });
    }

    renderTasks();
});