document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskForm = document.getElementById('task-form');
    const cancelTaskBtn = document.getElementById('cancel-task-btn');
    const taskList = document.getElementById('task-list');
    const projectList = document.getElementById('project-list');
    const totalProjects = document.getElementById('total-projects');
    const totalTasks = document.getElementById('total-tasks');
    const completedTasks = document.getElementById('completed-tasks');
    const taskSearch = document.getElementById('task-search');
    const priorityFilter = document.getElementById('priority-filter');
    const statusFilter = document.getElementById('status-filter');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    addTaskBtn.addEventListener('click', () => {
        taskForm.classList.remove('hidden');
        addTaskBtn.classList.add('hidden');
    });

    cancelTaskBtn.addEventListener('click', () => {
        taskForm.classList.add('hidden');
        addTaskBtn.classList.remove('hidden');
    });

    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const title = document.getElementById('task-title').value.trim();
        const desc = document.getElementById('task-desc').value.trim();
        const priority = document.getElementById('task-priority').value;

        if (!title) {
            alert('Task title is required.');
            return;
        }

        const task = {
            id: Date.now(),
            title,
            desc,
            priority,
            status: 'incomplete'
        };

        try {
            saveTask(task);
            renderTasks();
            taskForm.reset();
            taskForm.classList.add('hidden');
            addTaskBtn.classList.remove('hidden');
        } catch (error) {
            console.error('Error saving task:', error);
            alert('Failed to save task. Please try again.');
        }
    });

    taskSearch.addEventListener('input', renderTasks);
    priorityFilter.addEventListener('change', renderTasks);
    statusFilter.addEventListener('change', renderTasks);

    function saveTask(task) {
        const tasks = getTasks();
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    function getTasks() {
        try {
            return JSON.parse(localStorage.getItem('tasks')) || [];
        } catch (error) {
            console.error('Error retrieving tasks:', error);
            return [];
        }
    }

    function renderTasks() {
        const tasks = getTasks();
        const searchQuery = taskSearch.value.toLowerCase();
        const priority = priorityFilter.value;
        const status = statusFilter.value;

        const filteredTasks = tasks.filter(task => {
            const matchesSearch = task.title.toLowerCase().includes(searchQuery);
            const matchesPriority = !priority || task.priority === priority;
            const matchesStatus = !status || task.status === status;
            return matchesSearch && matchesPriority && matchesStatus;
        });

        taskList.innerHTML = '';
        if (filteredTasks.length === 0) {
            taskList.classList.add('empty-state');
            taskList.textContent = 'No tasks available. Add a new task to get started.';
        } else {
            taskList.classList.remove('empty-state');
            filteredTasks.forEach(task => {
                const taskItem = document.createElement('div');
                taskItem.className = 'task-item';
                taskItem.innerHTML = `
                    <h3>${task.title}</h3>
                    <p>${task.desc}</p>
                    <p>Priority: ${task.priority}</p>
                    <button class="toggle-status-btn" data-id="${task.id}">${task.status === 'complete' ? 'Mark Incomplete' : 'Mark Complete'}</button>
                    <button class="delete-task-btn" data-id="${task.id}">Delete</button>
                `;
                taskList.appendChild(taskItem);
            });
        }
        updateDashboard();
    }

    taskList.addEventListener('click', (e) => {
        if (e.target.classList.contains('toggle-status-btn')) {
            toggleTaskStatus(parseInt(e.target.dataset.id));
        } else if (e.target.classList.contains('delete-task-btn')) {
            deleteTask(parseInt(e.target.dataset.id));
        }
    });

    function toggleTaskStatus(taskId) {
        const tasks = getTasks();
        const task = tasks.find(t => t.id === taskId);
        if (task) {
            task.status = task.status === 'complete' ? 'incomplete' : 'complete';
            localStorage.setItem('tasks', JSON.stringify(tasks));
            renderTasks();
        }
    }

    function deleteTask(taskId) {
        const tasks = getTasks().filter(t => t.id !== taskId);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        renderTasks();
    }

    function updateDashboard() {
        const tasks = getTasks();
        totalTasks.textContent = tasks.length;
        completedTasks.textContent = tasks.filter(t => t.status === 'complete').length;
        totalProjects.textContent = '1'; // Placeholder for project count
    }

    renderTasks();
});