document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelector('.nav-links');
    const burger = document.querySelector('.burger');

    burger.addEventListener('click', () => {
        navLinks.classList.toggle('nav-active');
    });

    const taskList = document.getElementById('task-list');
    const projectList = document.getElementById('project-list');
    const addTaskButton = document.getElementById('add-task');
    const addProjectButton = document.getElementById('add-project');
    const taskSearch = document.getElementById('task-search');
    const priorityFilter = document.getElementById('priority-filter');
    const statusFilter = document.getElementById('status-filter');
    const totalProjectsElem = document.getElementById('total-projects');
    const totalTasksElem = document.getElementById('total-tasks');
    const completedTasksElem = document.getElementById('completed-tasks');
    const emptyProjectsMessage = document.getElementById('empty-projects');
    const emptyTasksMessage = document.getElementById('empty-tasks');

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
            const matchesPriority = priorityFilter.value === '' || task.priority === priorityFilter.value;
            const matchesStatus = statusFilter.value === '' || (task.completed && statusFilter.value === 'complete') || (!task.completed && statusFilter.value === 'incomplete');
            return matchesSearch && matchesPriority && matchesStatus;
        });
        filteredTasks.forEach(task => {
            const taskItem = document.createElement('div');
            taskItem.className = 'task-item';
            taskItem.innerHTML = `
                <p>${task.name} - ${task.priority} - ${task.completed ? 'Complete' : 'Incomplete'}</p>
                <button onclick="toggleComplete('${task.id}')">${task.completed ? 'Undo' : 'Complete'}</button>
                <button onclick="editTask('${task.id}')">Edit</button>
                <button onclick="deleteTask('${task.id}')">Delete</button>
            `;
            taskList.appendChild(taskItem);
        });
        emptyTasksMessage.style.display = filteredTasks.length === 0 ? 'block' : 'none';
        totalTasksElem.textContent = tasks.length;
        completedTasksElem.textContent = tasks.filter(task => task.completed).length;
    }

    function renderProjects() {
        projectList.innerHTML = '';
        projects.forEach(project => {
            const projectItem = document.createElement('div');
            projectItem.className = 'project-item';
            projectItem.innerHTML = `<p>${project.name}</p>`;
            projectList.appendChild(projectItem);
        });
        emptyProjectsMessage.style.display = projects.length === 0 ? 'block' : 'none';
        totalProjectsElem.textContent = projects.length;
    }

    function addTask() {
        const taskName = prompt('Enter task name:');
        const taskPriority = prompt('Enter task priority (high, medium, low):');
        if (!taskName || !taskPriority || !['high', 'medium', 'low'].includes(taskPriority.toLowerCase())) {
            alert('Task name and a valid priority (high, medium, low) are required.');
            return;
        }
        const newTask = {
            id: Date.now().toString(),
            name: taskName,
            priority: taskPriority.toLowerCase(),
            completed: false
        };
        tasks.push(newTask);
        saveTasks();
        renderTasks();
    }

    function addProject() {
        const projectName = prompt('Enter project name:');
        if (projectName) {
            const newProject = {
                id: Date.now().toString(),
                name: projectName
            };
            projects.push(newProject);
            saveProjects();
            renderProjects();
        } else {
            alert('Project name is required.');
        }
    }

    function toggleComplete(taskId) {
        const task = tasks.find(t => t.id === taskId);
        if (task) {
            task.completed = !task.completed;
            saveTasks();
            renderTasks();
        }
    }

    function editTask(taskId) {
        const task = tasks.find(t => t.id === taskId);
        if (task) {
            const newName = prompt('Edit task name:', task.name);
            const newPriority = prompt('Edit task priority (high, medium, low):', task.priority);
            if (!newName || !newPriority || !['high', 'medium', 'low'].includes(newPriority.toLowerCase())) {
                alert('Task name and a valid priority (high, medium, low) are required.');
                return;
            }
            task.name = newName;
            task.priority = newPriority.toLowerCase();
            saveTasks();
            renderTasks();
        }
    }

    function deleteTask(taskId) {
        tasks = tasks.filter(t => t.id !== taskId);
        saveTasks();
        renderTasks();
    }

    addTaskButton.addEventListener('click', addTask);
    addProjectButton.addEventListener('click', addProject);
    taskSearch.addEventListener('input', renderTasks);
    priorityFilter.addEventListener('change', renderTasks);
    statusFilter.addEventListener('change', renderTasks);

    renderTasks();
    renderProjects();
});