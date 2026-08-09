document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    const projects = JSON.parse(localStorage.getItem('projects')) || [];

    const taskList = document.getElementById('task-list');
    const projectList = document.getElementById('project-list');
    const totalProjects = document.getElementById('total-projects');
    const completedTasks = document.getElementById('completed-tasks');
    const pendingTasks = document.getElementById('pending-tasks');

    function updateDashboard() {
        totalProjects.textContent = projects.length;
        completedTasks.textContent = tasks.filter(task => task.status === 'completed').length;
        pendingTasks.textContent = tasks.filter(task => task.status === 'pending').length;
    }

    function renderTasks() {
        taskList.innerHTML = '';
        if (tasks.length === 0) {
            taskList.classList.add('empty-state');
            taskList.innerHTML = '<p>No tasks available. Start by adding a new task.</p>';
        } else {
            taskList.classList.remove('empty-state');
            tasks.forEach(task => {
                const taskItem = document.createElement('div');
                taskItem.className = 'task-item';
                taskItem.innerHTML = `<p>${task.name}</p><button onclick="completeTask('${task.id}')">Complete</button><button onclick="deleteTask('${task.id}')">Delete</button>`;
                taskList.appendChild(taskItem);
            });
        }
    }

    function renderProjects() {
        projectList.innerHTML = '';
        if (projects.length === 0) {
            projectList.classList.add('empty-state');
            projectList.innerHTML = '<p>No projects available. Start by adding a new project.</p>';
        } else {
            projectList.classList.remove('empty-state');
            projects.forEach(project => {
                const projectItem = document.createElement('div');
                projectItem.className = 'project-item';
                projectItem.innerHTML = `<p>${project.name}</p>`;
                projectList.appendChild(projectItem);
            });
        }
    }

    function completeTask(id) {
        const taskIndex = tasks.findIndex(task => task.id === id);
        if (taskIndex > -1) {
            tasks[taskIndex].status = 'completed';
            localStorage.setItem('tasks', JSON.stringify(tasks));
            renderTasks();
            updateDashboard();
        }
    }

    function deleteTask(id) {
        const taskIndex = tasks.findIndex(task => task.id === id);
        if (taskIndex > -1) {
            tasks.splice(taskIndex, 1);
            localStorage.setItem('tasks', JSON.stringify(tasks));
            renderTasks();
            updateDashboard();
        }
    }

    document.getElementById('add-task').addEventListener('click', () => {
        const taskName = prompt('Enter task name:');
        if (taskName) {
            const newTask = {
                id: Date.now().toString(),
                name: taskName,
                status: 'pending'
            };
            tasks.push(newTask);
            localStorage.setItem('tasks', JSON.stringify(tasks));
            renderTasks();
            updateDashboard();
        }
    });

    renderTasks();
    renderProjects();
    updateDashboard();
});