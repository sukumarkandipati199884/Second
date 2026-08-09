document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    const taskForm = document.getElementById('task-form');
    const taskList = document.getElementById('task-list');
    const taskSearch = document.getElementById('task-search');
    const taskFilter = document.getElementById('task-filter');

    navToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    taskForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const taskName = document.getElementById('task-name').value;
        const taskPriority = document.getElementById('task-priority').value;
        if (taskName && taskPriority) {
            addTask(taskName, taskPriority);
            taskForm.reset();
        }
    });

    taskSearch.addEventListener('input', function () {
        const searchTerm = taskSearch.value.toLowerCase();
        filterTasks(searchTerm, taskFilter.value);
    });

    taskFilter.addEventListener('change', function () {
        filterTasks(taskSearch.value.toLowerCase(), taskFilter.value);
    });

    function addTask(name, priority) {
        const task = {
            id: Date.now(),
            name,
            priority,
            completed: false
        };
        const tasks = getTasks();
        tasks.push(task);
        saveTasks(tasks);
        renderTasks(tasks);
    }

    function renderTasks(tasks) {
        taskList.innerHTML = '';
        tasks.forEach(task => {
            const li = document.createElement('li');
            li.textContent = `${task.name} - ${task.priority}`;
            li.className = task.completed ? 'completed' : '';
            li.addEventListener('click', () => toggleTaskCompletion(task.id));
            taskList.appendChild(li);
        });
    }

    function toggleTaskCompletion(taskId) {
        const tasks = getTasks();
        const task = tasks.find(t => t.id === taskId);
        if (task) {
            task.completed = !task.completed;
            saveTasks(tasks);
            renderTasks(tasks);
        }
    }

    function filterTasks(searchTerm, filter) {
        const tasks = getTasks().filter(task => {
            const matchesSearch = task.name.toLowerCase().includes(searchTerm);
            const matchesFilter = filter === 'all' || (filter === 'completed' && task.completed) || (filter === 'pending' && !task.completed);
            return matchesSearch && matchesFilter;
        });
        renderTasks(tasks);
    }

    function getTasks() {
        return JSON.parse(localStorage.getItem('tasks')) || [];
    }

    function saveTasks(tasks) {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    renderTasks(getTasks());
});