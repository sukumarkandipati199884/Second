document.addEventListener('DOMContentLoaded', function() {
    const taskForm = document.getElementById('task-form');
    const taskList = document.getElementById('task-list');
    const projectList = document.getElementById('project-list');
    const taskSearch = document.getElementById('task-search');
    const priorityFilter = document.getElementById('priority-filter');
    const statusFilter = document.getElementById('status-filter');
    const mobileMenu = document.getElementById('mobile-menu');
    const nav = document.querySelector('nav ul');
    const totalProjectsElement = document.getElementById('total-projects');
    const totalTasksElement = document.getElementById('total-tasks');
    const completedTasksElement = document.getElementById('completed-tasks');

    let tasks = [];

    function loadTasks() {
        try {
            const storedTasks = localStorage.getItem('tasks');
            if (storedTasks) {
                tasks = JSON.parse(storedTasks);
            }
        } catch (error) {
            console.error('Error loading tasks from localStorage:', error);
        }
    }

    function saveTasks() {
        try {
            localStorage.setItem('tasks', JSON.stringify(tasks));
        } catch (error) {
            console.error('Error saving tasks to localStorage:', error);
        }
    }

    function updateDashboard() {
        const totalProjects = new Set(tasks.map(task => task.project)).size;
        const totalTasks = tasks.length;
        const completedTasks = tasks.filter(task => task.completed).length;

        totalProjectsElement.textContent = totalProjects;
        totalTasksElement.textContent = totalTasks;
        completedTasksElement.textContent = completedTasks;
    }

    function renderTasks() {
        taskList.innerHTML = '';
        const filteredTasks = tasks.filter(task => {
            const matchesSearch = task.name.toLowerCase().includes(taskSearch.value.toLowerCase());
            const matchesPriority = priorityFilter.value === '' || task.priority === priorityFilter.value;
            const matchesStatus = statusFilter.value === '' || (task.completed ? 'completed' : 'pending') === statusFilter.value;
            return matchesSearch && matchesPriority && matchesStatus;
        });

        if (filteredTasks.length === 0) {
            taskList.innerHTML = '<li>No tasks found.</li>';
        } else {
            filteredTasks.forEach(task => {
                const li = document.createElement('li');
                li.textContent = `${task.name} (${task.priority}) - ${task.completed ? 'Completed' : 'Pending'}`;
                const completeButton = document.createElement('button');
                completeButton.textContent = 'Complete';
                completeButton.onclick = () => {
                    task.completed = !task.completed;
                    saveTasks();
                    renderTasks();
                    updateDashboard();
                };
                const deleteButton = document.createElement('button');
                deleteButton.textContent = 'Delete';
                deleteButton.onclick = () => {
                    tasks = tasks.filter(t => t !== task);
                    saveTasks();
                    renderTasks();
                    updateDashboard();
                };
                li.appendChild(completeButton);
                li.appendChild(deleteButton);
                taskList.appendChild(li);
            });
        }
    }

    taskForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const taskName = document.getElementById('task-name').value.trim();
        const taskProject = document.getElementById('task-project').value.trim();
        const taskPriority = document.getElementById('task-priority').value;

        if (taskName && taskProject && taskPriority) {
            tasks.push({ name: taskName, project: taskProject, priority: taskPriority, completed: false });
            saveTasks();
            renderTasks();
            updateDashboard();
            taskForm.reset();
        } else {
            alert('Please fill in all fields.');
        }
    });

    taskSearch.addEventListener('input', renderTasks);
    priorityFilter.addEventListener('change', renderTasks);
    statusFilter.addEventListener('change', renderTasks);

    mobileMenu.addEventListener('click', () => {
        nav.classList.toggle('show');
    });

    loadTasks();
    renderTasks();
    updateDashboard();
});