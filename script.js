document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });

    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const taskList = document.getElementById('task-list');
    const addTaskButton = document.getElementById('add-task');
    const searchInput = document.getElementById('search');
    const filterPriority = document.getElementById('filter-priority');
    const filterStatus = document.getElementById('filter-status');

    function renderTasks() {
        taskList.innerHTML = '';
        const filteredTasks = tasks.filter(task => {
            const matchesSearch = task.name.toLowerCase().includes(searchInput.value.toLowerCase());
            const matchesPriority = filterPriority.value === '' || task.priority === filterPriority.value;
            const matchesStatus = filterStatus.value === '' || task.status === filterStatus.value;
            return matchesSearch && matchesPriority && matchesStatus;
        });
        if (filteredTasks.length === 0) {
            taskList.innerHTML = '<p>No tasks found.</p>';
        } else {
            filteredTasks.forEach(task => {
                const taskItem = document.createElement('div');
                taskItem.className = 'task-item';
                taskItem.innerHTML = `
                    <p>${task.name}</p>
                    <p>Priority: ${task.priority}</p>
                    <p>Status: ${task.status}</p>
                    <button onclick="completeTask('${task.id}')">Complete</button>
                    <button onclick="deleteTask('${task.id}')">Delete</button>
                `;
                taskList.appendChild(taskItem);
            });
        }
    }

    function addTask(name, priority) {
        const newTask = {
            id: Date.now().toString(),
            name,
            priority,
            status: 'pending'
        };
        tasks.push(newTask);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        renderTasks();
    }

    function completeTask(id) {
        const task = tasks.find(task => task.id === id);
        if (task) {
            task.status = 'completed';
            localStorage.setItem('tasks', JSON.stringify(tasks));
            renderTasks();
        }
    }

    function deleteTask(id) {
        const taskIndex = tasks.findIndex(task => task.id === id);
        if (taskIndex > -1) {
            tasks.splice(taskIndex, 1);
            localStorage.setItem('tasks', JSON.stringify(tasks));
            renderTasks();
        }
    }

    addTaskButton.addEventListener('click', () => {
        const taskName = prompt('Enter task name:');
        const taskPriority = prompt('Enter task priority (high, medium, low):');
        if (taskName && taskPriority) {
            addTask(taskName, taskPriority);
        }
    });

    searchInput.addEventListener('input', renderTasks);
    filterPriority.addEventListener('change', renderTasks);
    filterStatus.addEventListener('change', renderTasks);

    renderTasks();
});