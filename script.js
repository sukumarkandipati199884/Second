document.addEventListener('DOMContentLoaded', () => {
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
    const totalProjectsElem = document.getElementById('total-projects');
    const totalTasksElem = document.getElementById('total-tasks');
    const completedTasksElem = document.getElementById('completed-tasks');

    let tasks = [];

    try {
        tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    } catch (error) {
        console.error('Error loading tasks from localStorage', error);
    }

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    addTaskBtn.addEventListener('click', () => {
        taskModal.style.display = 'flex';
    });

    closeModal.addEventListener('click', () => {
        taskModal.style.display = 'none';
    });

    window.onclick = function(event) {
        if (event.target == taskModal) {
            taskModal.style.display = 'none';
        }
    }

    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const taskName = document.getElementById('task-name').value;
        const taskPriority = document.getElementById('task-priority').value;
        const taskStatus = document.getElementById('task-status').value;

        if (!taskName) {
            alert('Task name is required');
            return;
        }

        const newTask = {
            id: Date.now(),
            name: taskName,
            priority: taskPriority,
            status: taskStatus
        };

        tasks.push(newTask);
        try {
            localStorage.setItem('tasks', JSON.stringify(tasks));
        } catch (error) {
            console.error('Error saving tasks to localStorage', error);
        }
        renderTasks();
        taskModal.style.display = 'none';
        taskForm.reset();
    });

    function renderTasks() {
        taskList.innerHTML = '';
        const filteredTasks = tasks.filter(task => {
            const matchesSearch = task.name.toLowerCase().includes(taskSearch.value.toLowerCase());
            const matchesPriority = priorityFilter.value ? task.priority === priorityFilter.value : true;
            const matchesStatus = statusFilter.value ? task.status === statusFilter.value : true;
            return matchesSearch && matchesPriority && matchesStatus;
        });

        if (filteredTasks.length === 0) {
            taskList.innerHTML = '<p>No tasks found.</p>';
            return;
        }

        filteredTasks.forEach(task => {
            const taskItem = document.createElement('div');
            taskItem.className = 'task-item';
            taskItem.innerHTML = `
                <p>${task.name}</p>
                <p>Priority: ${task.priority}</p>
                <p>Status: ${task.status}</p>
                <button onclick="editTask(${task.id})">Edit</button>
                <button onclick="deleteTask(${task.id})">Delete</button>
                <button onclick="toggleTaskStatus(${task.id})">${task.status === 'Complete' ? 'Mark Incomplete' : 'Mark Complete'}</button>
            `;
            taskList.appendChild(taskItem);
        });

        updateStatistics();
    }

    function updateStatistics() {
        totalProjectsElem.textContent = '1'; // Assuming 1 project for simplicity
        totalTasksElem.textContent = tasks.length;
        completedTasksElem.textContent = tasks.filter(task => task.status === 'Complete').length;
    }

    taskSearch.addEventListener('input', renderTasks);
    priorityFilter.addEventListener('change', renderTasks);
    statusFilter.addEventListener('change', renderTasks);

    window.editTask = function(id) {
        const task = tasks.find(t => t.id === id);
        if (task) {
            document.getElementById('task-name').value = task.name;
            document.getElementById('task-priority').value = task.priority;
            document.getElementById('task-status').value = task.status;
            taskModal.style.display = 'flex';
            tasks = tasks.filter(t => t.id !== id);
        }
    }

    window.deleteTask = function(id) {
        tasks = tasks.filter(t => t.id !== id);
        try {
            localStorage.setItem('tasks', JSON.stringify(tasks));
        } catch (error) {
            console.error('Error saving tasks to localStorage', error);
        }
        renderTasks();
    }

    window.toggleTaskStatus = function(id) {
        const task = tasks.find(t => t.id === id);
        if (task) {
            task.status = task.status === 'Complete' ? 'Incomplete' : 'Complete';
            try {
                localStorage.setItem('tasks', JSON.stringify(tasks));
            } catch (error) {
                console.error('Error saving tasks to localStorage', error);
            }
            renderTasks();
        }
    }

    renderTasks();
});