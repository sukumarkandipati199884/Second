document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('nav-open');
    });

    const projects = JSON.parse(localStorage.getItem('projects')) || [];
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    function updateDashboard() {
        document.getElementById('project-count').textContent = projects.length;
        document.getElementById('task-count').textContent = tasks.length;
    }

    function renderProjects() {
        const projectList = document.getElementById('project-list');
        projectList.innerHTML = '';
        if (projects.length === 0) {
            projectList.innerHTML = '<p>No projects available.</p>';
        } else {
            projects.forEach(project => {
                const projectItem = document.createElement('div');
                projectItem.textContent = project.name;
                projectList.appendChild(projectItem);
            });
        }
    }

    function renderTasks() {
        const taskList = document.getElementById('task-list');
        taskList.innerHTML = '';
        if (tasks.length === 0) {
            taskList.innerHTML = '<p>No tasks available.</p>';
        } else {
            tasks.forEach(task => {
                const taskItem = document.createElement('div');
                taskItem.textContent = task.name;
                taskList.appendChild(taskItem);
            });
        }
    }

    document.getElementById('add-task').addEventListener('click', () => {
        const taskName = prompt('Enter task name:');
        if (taskName) {
            tasks.push({ name: taskName, completed: false });
            localStorage.setItem('tasks', JSON.stringify(tasks));
            renderTasks();
            updateDashboard();
        }
    });

    document.getElementById('task-search').addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredTasks = tasks.filter(task => task.name.toLowerCase().includes(searchTerm));
        const taskList = document.getElementById('task-list');
        taskList.innerHTML = '';
        if (filteredTasks.length === 0) {
            taskList.innerHTML = '<p>No tasks found.</p>';
        } else {
            filteredTasks.forEach(task => {
                const taskItem = document.createElement('div');
                taskItem.textContent = task.name;
                taskList.appendChild(taskItem);
            });
        }
    });

    document.getElementById('task-filter').addEventListener('change', (e) => {
        const filter = e.target.value;
        let filteredTasks = tasks;
        if (filter === 'completed') {
            filteredTasks = tasks.filter(task => task.completed);
        } else if (filter === 'pending') {
            filteredTasks = tasks.filter(task => !task.completed);
        }
        const taskList = document.getElementById('task-list');
        taskList.innerHTML = '';
        if (filteredTasks.length === 0) {
            taskList.innerHTML = '<p>No tasks available.</p>';
        } else {
            filteredTasks.forEach(task => {
                const taskItem = document.createElement('div');
                taskItem.textContent = task.name;
                taskList.appendChild(taskItem);
            });
        }
    });

    updateDashboard();
    renderProjects();
    renderTasks();
});