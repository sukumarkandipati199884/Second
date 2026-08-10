document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskModal = document.getElementById('task-modal');
    const closeBtn = document.querySelector('.close-btn');
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');
    const projectList = document.getElementById('project-list');
    const taskSearch = document.getElementById('task-search');
    const priorityFilter = document.getElementById('priority-filter');
    const statusFilter = document.getElementById('status-filter');
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');

    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    let projects = JSON.parse(localStorage.getItem('projects')) || [];

    function saveTasks() {
        try {
            localStorage.setItem('tasks', JSON.stringify(tasks));
        } catch (e) {
            console.error('Failed to save tasks:', e);
        }
    }

    function saveProjects() {
        try {
            localStorage.setItem('projects', JSON.stringify(projects));
        } catch (e) {
            console.error('Failed to save projects:', e);
        }
    }

    function renderTasks() {
        taskList.innerHTML = '';
        const filteredTasks = tasks.filter(task => {
            const matchesSearch = task.name.toLowerCase().includes(taskSearch.value.toLowerCase());
            const matchesPriority = priorityFilter.value ? task.priority === priorityFilter.value : true;
            const matchesStatus = statusFilter.value ? task.status === statusFilter.value : true;
            return matchesSearch && matchesPriority && matchesStatus;
        });
        if (filteredTasks.length === 0) {
            taskList.innerHTML = '<li>No tasks found.</li>';
        } else {
            filteredTasks.forEach(task => {
                const taskItem = document.createElement('li');
                taskItem.textContent = `${task.name} - ${task.priority} - ${task.status}`;
                const deleteBtn = document.createElement('button');
                deleteBtn.textContent = 'Delete';
                deleteBtn.addEventListener('click', () => {
                    tasks = tasks.filter(t => t !== task);
                    saveTasks();
                    renderTasks();
                    updateDashboard();
                });
                taskItem.appendChild(deleteBtn);
                taskList.appendChild(taskItem);
            });
        }
    }

    function renderProjects() {
        projectList.innerHTML = '';
        if (projects.length === 0) {
            projectList.innerHTML = '<li>No projects found.</li>';
        } else {
            projects.forEach(project => {
                const projectItem = document.createElement('li');
                projectItem.textContent = project.name;
                projectList.appendChild(projectItem);
            });
        }
    }

    function updateDashboard() {
        document.getElementById('total-projects').textContent = projects.length;
        document.getElementById('total-tasks').textContent = tasks.length;
        document.getElementById('completed-tasks').textContent = tasks.filter(task => task.status === 'complete').length;
    }

    addTaskBtn.addEventListener('click', () => {
        taskModal.style.display = 'flex';
    });

    closeBtn.addEventListener('click', () => {
        taskModal.style.display = 'none';
    });

    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const taskName = document.getElementById('task-name').value.trim();
        const taskPriority = document.getElementById('task-priority').value;
        const taskStatus = document.getElementById('task-status').value;

        if (taskName) {
            tasks.push({ name: taskName, priority: taskPriority, status: taskStatus });
            saveTasks();
            renderTasks();
            updateDashboard();
            taskModal.style.display = 'none';
            taskForm.reset();
        } else {
            alert('Task name is required.');
        }
    });

    taskSearch.addEventListener('input', renderTasks);
    priorityFilter.addEventListener('change', renderTasks);
    statusFilter.addEventListener('change', renderTasks);

    burger.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');
    });

    renderTasks();
    renderProjects();
    updateDashboard();
});