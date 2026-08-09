document.addEventListener('DOMContentLoaded', () => {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    const taskForm = document.getElementById('task-form');
    const taskList = document.getElementById('task-list');
    const totalProjects = document.getElementById('total-projects');
    const completedTasks = document.getElementById('completed-tasks');
    const pendingTasks = document.getElementById('pending-tasks');

    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    let projects = JSON.parse(localStorage.getItem('projects')) || [];

    const updateStats = () => {
        totalProjects.textContent = projects.length;
        completedTasks.textContent = tasks.filter(task => task.completed).length;
        pendingTasks.textContent = tasks.filter(task => !task.completed).length;
    };

    const renderTasks = () => {
        taskList.innerHTML = '';
        tasks.forEach((task, index) => {
            const li = document.createElement('li');
            li.textContent = `${task.name} - ${task.priority}`;
            const completeButton = document.createElement('button');
            completeButton.textContent = task.completed ? 'Undo' : 'Complete';
            completeButton.addEventListener('click', () => {
                tasks[index].completed = !tasks[index].completed;
                localStorage.setItem('tasks', JSON.stringify(tasks));
                renderTasks();
                updateStats();
            });
            li.appendChild(completeButton);
            taskList.appendChild(li);
        });
    };

    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const taskName = document.getElementById('task-name').value.trim();
        const taskPriority = document.getElementById('task-priority').value;
        if (taskName) {
            tasks.push({ name: taskName, priority: taskPriority, completed: false });
            localStorage.setItem('tasks', JSON.stringify(tasks));
            renderTasks();
            updateStats();
            taskForm.reset();
        }
    });

    renderTasks();
    updateStats();
});