document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const taskForm = document.getElementById('task-form');
    const taskList = document.getElementById('task-list');
    const projectList = document.getElementById('project-list');
    const taskSearch = document.getElementById('task-search');
    const priorityFilter = document.getElementById('priority-filter');
    const statusFilter = document.getElementById('status-filter');
    const totalProjectsElement = document.getElementById('total-projects');
    const totalTasksElement = document.getElementById('total-tasks');
    const completedTasksElement = document.getElementById('completed-tasks');

    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    let tasks = [];
    let projects = [];

    try {
        tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        projects = JSON.parse(localStorage.getItem('projects')) || [];
    } catch (error) {
        console.error('Error loading from localStorage', error);
    }

    function saveTasks() {
        try {
            localStorage.setItem('tasks', JSON.stringify(tasks));
        } catch (error) {
            console.error('Error saving tasks to localStorage', error);
        }
    }

    function saveProjects() {
        try {
            localStorage.setItem('projects', JSON.stringify(projects));
        } catch (error) {
            console.error('Error saving projects to localStorage', error);
        }
    }

    function renderTasks() {
        taskList.innerHTML = '';
        const filteredTasks = tasks.filter(task => {
            const matchesSearch = task.name.toLowerCase().includes(taskSearch.value.toLowerCase());
            const matchesPriority = priorityFilter.value === '' || task.priority === priorityFilter.value;
            const matchesStatus = statusFilter.value === '' || (statusFilter.value === 'complete' && task.complete) || (statusFilter.value === 'incomplete' && !task.complete);
            return matchesSearch && matchesPriority && matchesStatus;
        });
        if (filteredTasks.length === 0) {
            taskList.innerHTML = '<li>No tasks found</li>';
        } else {
            filteredTasks.forEach(task => {
                const li = document.createElement('li');
                li.textContent = `${task.name} (${task.project}) - ${task.priority}`;
                const completeButton = document.createElement('button');
                completeButton.textContent = task.complete ? 'Mark Incomplete' : 'Mark Complete';
                completeButton.addEventListener('click', () => {
                    task.complete = !task.complete;
                    saveTasks();
                    renderTasks();
                    updateStatistics();
                });
                const deleteButton = document.createElement('button');
                deleteButton.textContent = 'Delete';
                deleteButton.addEventListener('click', () => {
                    const index = tasks.indexOf(task);
                    tasks.splice(index, 1);
                    saveTasks();
                    renderTasks();
                    updateStatistics();
                });
                li.appendChild(completeButton);
                li.appendChild(deleteButton);
                taskList.appendChild(li);
            });
        }
    }

    function renderProjects() {
        projectList.innerHTML = '';
        if (projects.length === 0) {
            projectList.innerHTML = '<li>No projects found</li>';
        } else {
            projects.forEach(project => {
                const li = document.createElement('li');
                li.textContent = project;
                projectList.appendChild(li);
            });
        }
        updateStatistics();
    }

    function updateStatistics() {
        totalProjectsElement.textContent = projects.length;
        totalTasksElement.textContent = tasks.length;
        completedTasksElement.textContent = tasks.filter(task => task.complete).length;
    }

    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const taskName = document.getElementById('task-name').value.trim();
        const taskProject = document.getElementById('task-project').value.trim();
        const taskPriority = document.getElementById('task-priority').value;
        if (!taskName || !taskProject || !taskPriority) {
            alert('Please fill in all fields');
            return;
        }
        const newTask = {
            name: taskName,
            project: taskProject,
            priority: taskPriority,
            complete: false
        };
        tasks.push(newTask);
        if (!projects.includes(taskProject)) {
            projects.push(taskProject);
            saveProjects();
            renderProjects();
        }
        saveTasks();
        renderTasks();
        updateStatistics();
        taskForm.reset();
    });

    taskSearch.addEventListener('input', renderTasks);
    priorityFilter.addEventListener('change', renderTasks);
    statusFilter.addEventListener('change', renderTasks);

    renderTasks();
    renderProjects();
    updateStatistics();
});