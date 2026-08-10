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
    const emptyTaskListMessage = document.getElementById('empty-task-list');
    let tasks = [];

    try {
        tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    } catch (error) {
        console.error('Error loading tasks from localStorage:', error);
        tasks = [];
    }

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    addTaskBtn.addEventListener('click', () => {
        taskModal.style.display = 'block';
    });

    closeModal.addEventListener('click', () => {
        taskModal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === taskModal) {
            taskModal.style.display = 'none';
        }
    });

    taskForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const taskName = document.getElementById('task-name').value.trim();
        const taskPriority = document.getElementById('task-priority').value;
        const taskStatus = document.getElementById('task-status').value;

        if (!taskName) {
            alert('Task name is required.');
            return;
        }

        const task = {
            id: Date.now(),
            name: taskName,
            priority: taskPriority,
            status: taskStatus
        };

        tasks.push(task);
        saveTasks();
        renderTasks();
        taskModal.style.display = 'none';
        taskForm.reset();
    });

    taskSearch.addEventListener('input', renderTasks);
    priorityFilter.addEventListener('change', renderTasks);
    statusFilter.addEventListener('change', renderTasks);

    function renderTasks() {
        const searchQuery = taskSearch.value.toLowerCase();
        const priority = priorityFilter.value;
        const status = statusFilter.value;

        const filteredTasks = tasks.filter(task => {
            const matchesSearch = task.name.toLowerCase().includes(searchQuery);
            const matchesPriority = priority ? task.priority === priority : true;
            const matchesStatus = status ? task.status === status : true;
            return matchesSearch && matchesPriority && matchesStatus;
        });

        taskList.innerHTML = '';
        filteredTasks.forEach(task => {
            const taskItem = document.createElement('li');
            taskItem.textContent = `${task.name} - ${task.priority} - ${task.status}`;

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', () => deleteTask(task.id));

            taskItem.appendChild(deleteButton);
            taskItem.addEventListener('click', () => editTask(task.id));
            taskList.appendChild(taskItem);
        });

        emptyTaskListMessage.style.display = filteredTasks.length === 0 ? 'block' : 'none';

        document.getElementById('total-tasks').textContent = tasks.length;
        document.getElementById('completed-tasks').textContent = tasks.filter(t => t.status === 'complete').length;
    }

    function editTask(id) {
        const task = tasks.find(t => t.id === id);
        if (task) {
            document.getElementById('task-name').value = task.name;
            document.getElementById('task-priority').value = task.priority;
            document.getElementById('task-status').value = task.status;
            taskModal.style.display = 'block';

            taskForm.onsubmit = function(event) {
                event.preventDefault();
                task.name = document.getElementById('task-name').value.trim();
                task.priority = document.getElementById('task-priority').value;
                task.status = document.getElementById('task-status').value;

                if (!task.name) {
                    alert('Task name is required.');
                    return;
                }

                saveTasks();
                renderTasks();
                taskModal.style.display = 'none';
                taskForm.reset();
                taskForm.onsubmit = null;
            };
        }
    }

    function deleteTask(id) {
        tasks = tasks.filter(task => task.id !== id);
        saveTasks();
        renderTasks();
    }

    function saveTasks() {
        try {
            localStorage.setItem('tasks', JSON.stringify(tasks));
        } catch (error) {
            console.error('Error saving tasks to localStorage:', error);
        }
    }

    renderTasks();
});