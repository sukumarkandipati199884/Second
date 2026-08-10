document.addEventListener('DOMContentLoaded', () => {
    const taskList = document.getElementById('task-list');
    const totalTasks = document.getElementById('total-tasks');
    const completedTasks = document.getElementById('completed-tasks');
    const emptyState = document.getElementById('empty-state');
    const taskSearch = document.getElementById('task-search');
    const addTaskButton = document.getElementById('add-task');
    const priorityFilter = document.getElementById('priority-filter');

    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    function updateTaskList() {
        taskList.innerHTML = '';
        const filteredTasks = tasks.filter(task => {
            const matchesSearch = task.name.toLowerCase().includes(taskSearch.value.toLowerCase());
            const matchesPriority = priorityFilter.value === '' || task.priority === priorityFilter.value;
            return matchesSearch && matchesPriority;
        });
        filteredTasks.forEach(task => {
            const li = document.createElement('li');
            li.textContent = task.name;
            const completeButton = document.createElement('button');
            completeButton.textContent = task.completed ? 'Incomplete' : 'Complete';
            completeButton.addEventListener('click', () => toggleTaskCompletion(task.id));
            const editButton = document.createElement('button');
            editButton.textContent = 'Edit';
            editButton.addEventListener('click', () => editTask(task.id));
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', () => deleteTask(task.id));
            li.appendChild(completeButton);
            li.appendChild(editButton);
            li.appendChild(deleteButton);
            taskList.appendChild(li);
        });
        totalTasks.textContent = tasks.length;
        completedTasks.textContent = tasks.filter(task => task.completed).length;
        emptyState.classList.toggle('hidden', tasks.length > 0);
    }

    function toggleTaskCompletion(taskId) {
        const task = tasks.find(t => t.id === taskId);
        if (task) {
            task.completed = !task.completed;
            saveTasks();
            updateTaskList();
        }
    }

    function editTask(taskId) {
        const task = tasks.find(t => t.id === taskId);
        if (task) {
            const newTaskName = prompt('Edit task name:', task.name);
            if (newTaskName) {
                task.name = newTaskName;
                saveTasks();
                updateTaskList();
            }
        }
    }

    function deleteTask(taskId) {
        tasks = tasks.filter(t => t.id !== taskId);
        saveTasks();
        updateTaskList();
    }

    function saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    addTaskButton.addEventListener('click', () => {
        const taskName = prompt('Enter task name:');
        if (taskName) {
            const priority = prompt('Enter task priority (high, medium, low):', 'medium');
            const newTask = {
                id: Date.now(),
                name: taskName,
                completed: false,
                priority: priority
            };
            tasks.push(newTask);
            saveTasks();
            updateTaskList();
        }
    });

    taskSearch.addEventListener('input', updateTaskList);
    priorityFilter.addEventListener('change', updateTaskList);

    updateTaskList();
});