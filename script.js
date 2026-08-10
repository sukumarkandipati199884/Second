document.addEventListener('DOMContentLoaded', () => {
    const projectList = document.getElementById('project-list');
    const taskList = document.getElementById('task-list');
    const addProjectBtn = document.getElementById('add-project');
    const addTaskBtn = document.getElementById('add-task');
    const taskSearch = document.getElementById('task-search');
    const priorityFilter = document.getElementById('priority-filter');
    const statusFilter = document.getElementById('status-filter');
    const totalProjectsElem = document.getElementById('total-projects');
    const totalTasksElem = document.getElementById('total-tasks');
    const completedTasksElem = document.getElementById('completed-tasks');

    let projects = JSON.parse(localStorage.getItem('projects')) || [];
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    function saveProjects() {
        localStorage.setItem('projects', JSON.stringify(projects));
    }

    function saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    function renderProjects() {
        projectList.innerHTML = '';
        if (projects.length === 0) {
            projectList.innerHTML = '<p>No projects available.</p>';
        } else {
            projects.forEach((project, index) => {
                const projectDiv = document.createElement('div');
                projectDiv.className = 'project';
                projectDiv.innerHTML = `<h3>${project.name}</h3><button onclick="deleteProject(${index})">Delete</button>`;
                projectList.appendChild(projectDiv);
            });
        }
        totalProjectsElem.textContent = projects.length;
    }

    function renderTasks() {
        taskList.innerHTML = '';
        const filteredTasks = tasks.filter(task => {
            return (priorityFilter.value === '' || task.priority === priorityFilter.value) &&
                   (statusFilter.value === '' || task.status === statusFilter.value) &&
                   (task.name.toLowerCase().includes(taskSearch.value.toLowerCase()));
        });

        if (filteredTasks.length === 0) {
            taskList.innerHTML = '<p>No tasks available.</p>';
        } else {
            filteredTasks.forEach((task, index) => {
                const taskDiv = document.createElement('div');
                taskDiv.className = 'task';
                taskDiv.innerHTML = `<h4>${task.name}</h4><p>Priority: ${task.priority}</p><p>Status: ${task.status}</p><button onclick="toggleTaskStatus(${index})">${task.status === 'completed' ? 'Mark Incomplete' : 'Mark Complete'}</button><button onclick="deleteTask(${index})">Delete</button>`;
                taskList.appendChild(taskDiv);
            });
        }

        totalTasksElem.textContent = tasks.length;
        completedTasksElem.textContent = tasks.filter(task => task.status === 'completed').length;
    }

    window.deleteProject = function(index) {
        projects.splice(index, 1);
        saveProjects();
        renderProjects();
    }

    window.deleteTask = function(index) {
        tasks.splice(index, 1);
        saveTasks();
        renderTasks();
    }

    window.toggleTaskStatus = function(index) {
        tasks[index].status = tasks[index].status === 'completed' ? 'pending' : 'completed';
        saveTasks();
        renderTasks();
    }

    addProjectBtn.addEventListener('click', () => {
        const projectName = prompt('Enter project name:');
        if (projectName) {
            projects.push({ name: projectName });
            saveProjects();
            renderProjects();
        }
    });

    addTaskBtn.addEventListener('click', () => {
        const taskName = prompt('Enter task name:');
        const taskPriority = prompt('Enter task priority (high, medium, low):');
        if (taskName && taskPriority && ['high', 'medium', 'low'].includes(taskPriority.toLowerCase())) {
            tasks.push({ name: taskName, priority: taskPriority.toLowerCase(), status: 'pending' });
            saveTasks();
            renderTasks();
        } else {
            alert('Invalid input. Please enter a valid task name and priority.');
        }
    });

    taskSearch.addEventListener('input', renderTasks);
    priorityFilter.addEventListener('change', renderTasks);
    statusFilter.addEventListener('change', renderTasks);

    renderProjects();
    renderTasks();

    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');
    });
});