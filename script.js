document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const taskForm = document.getElementById('task-form');
    const taskList = document.getElementById('task-list');
    const totalProjects = document.getElementById('total-projects');
    const completedTasks = document.getElementById('completed-tasks');
    const pendingTasks = document.getElementById('pending-tasks');

    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });

    taskForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const taskName = document.getElementById('task-name').value;
        const taskPriority = document.getElementById('task-priority').value;
        addTask(taskName, taskPriority);
        taskForm.reset();
    });

    function addTask(name, priority) {
        const taskItem = document.createElement('li');
        taskItem.textContent = `${name} - ${priority}`;
        taskList.appendChild(taskItem);
        updateTaskStats();
    }

    function updateTaskStats() {
        const tasks = taskList.children.length;
        totalProjects.textContent = '1'; // Static for demo purposes
        completedTasks.textContent = '0'; // Static for demo purposes
        pendingTasks.textContent = tasks;
    }

    updateTaskStats();
});