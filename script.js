document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskList = document.getElementById('task-list');
    const projectList = document.getElementById('project-list');
    const taskSearch = document.getElementById('task-search');
    const priorityFilter = document.getElementById('priority-filter');
    const statusFilter = document.getElementById('status-filter');
    const totalProjects = document.getElementById('total-projects');
    const totalTasks = document.getElementById('total-tasks');
    const completedTasks = document.getElementById('completed-tasks');
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');

    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    let projects = JSON.parse(localStorage.getItem('projects')) || [];

    const saveTasks = () => {
        try {
            localStorage.setItem('tasks', JSON.stringify(tasks));
        } catch (e) {
            console.error('Failed to save tasks to localStorage', e);
        }
    };

    const saveProjects = () => {
        try {
            localStorage.setItem('projects', JSON.stringify(projects));
        } catch (e) {
            console.error('Failed to save projects to localStorage', e);
        }
    };

    const renderTasks = () => {
        taskList.innerHTML = '';
        const filteredTasks = tasks.filter(task => {
            const matchesSearch = task.name.toLowerCase().includes(taskSearch.value.toLowerCase());
            const matchesPriority = priorityFilter.value === '' || task.priority === priorityFilter.value;
            const matchesStatus = statusFilter.value === '' || task.status === statusFilter.value;
            return matchesSearch && matchesPriority && matchesStatus;
        });

        if (filteredTasks.length === 0) {
            taskList.innerHTML = '<li>No tasks found.</li>';
        } else {
            filteredTasks.forEach((task, index) => {
                const li = document.createElement('li');
                li.textContent = `${task.name} - ${task.priority} - ${task.status}`;
                const editButton = document.createElement('button');
                editButton.textContent = 'Edit';
                editButton.addEventListener('click', () => editTask(index));
                li.appendChild(editButton);
                taskList.appendChild(li);
            });
        }
        updateDashboard();
    };

    const renderProjects = () => {
        projectList.innerHTML = '';
        if (projects.length === 0) {
            projectList.innerHTML = '<li>No projects found.</li>';
        } else {
            projects.forEach(project => {
                const li = document.createElement('li');
                li.textContent = project.name;
                projectList.appendChild(li);
            });
        }
        updateDashboard();
    };

    const updateDashboard = () => {
        totalProjects.textContent = projects.length;
        totalTasks.textContent = tasks.length;
        completedTasks.textContent = tasks.filter(task => task.status === 'completed').length;
    };

    const editTask = (index) => {
        const task = tasks[index];
        const newName = prompt('Edit Task Name:', task.name);
        const newPriority = prompt('Edit Task Priority:', task.priority);
        if (newName !== null && newPriority !== null) {
            tasks[index].name = newName.trim();
            tasks[index].priority = newPriority.trim();
            saveTasks();
            renderTasks();
        }
    };

    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const taskName = document.getElementById('task-name').value.trim();
        const taskPriority = document.getElementById('task-priority').value.trim();

        if (taskName && taskPriority) {
            const newTask = {
                name: taskName,
                priority: taskPriority,
                status: 'pending'
            };
            tasks.push(newTask);
            saveTasks();
            renderTasks();
            taskForm.reset();
        } else {
            alert('Please fill out all fields.');
        }
    });

    taskSearch.addEventListener('input', renderTasks);
    priorityFilter.addEventListener('change', renderTasks);
    statusFilter.addEventListener('change', renderTasks);

    burger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    renderTasks();
    renderProjects();
});