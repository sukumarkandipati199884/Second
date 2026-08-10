document.addEventListener('DOMContentLoaded', () => {
    const projects = JSON.parse(localStorage.getItem('projects')) || [];
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    const projectList = document.getElementById('project-list');
    const taskList = document.getElementById('task-list');
    const totalProjects = document.getElementById('total-projects');
    const completedTasks = document.getElementById('completed-tasks');
    const pendingTasks = document.getElementById('pending-tasks');
    const taskSearch = document.getElementById('task-search');
    const priorityFilter = document.getElementById('priority-filter');
    const statusFilter = document.getElementById('status-filter');
    const emptyTaskListMessage = document.getElementById('empty-task-list');

    const renderProjects = () => {
        projectList.innerHTML = '';
        projects.forEach((project, index) => {
            const li = document.createElement('li');
            li.textContent = project.name;
            li.dataset.index = index;
            projectList.appendChild(li);
        });
        totalProjects.textContent = projects.length;
    };

    const renderTasks = () => {
        taskList.innerHTML = '';
        let completedCount = 0;
        const filteredTasks = tasks.filter(task => {
            const matchesSearch = task.name.toLowerCase().includes(taskSearch.value.toLowerCase());
            const matchesPriority = priorityFilter.value === '' || task.priority === priorityFilter.value;
            const matchesStatus = statusFilter.value === '' || task.status === statusFilter.value;
            return matchesSearch && matchesPriority && matchesStatus;
        });

        filteredTasks.forEach((task, index) => {
            const li = document.createElement('li');
            li.textContent = `${task.name} - ${task.priority}`;
            li.dataset.index = index;
            if (task.status === 'complete') {
                li.classList.add('complete');
                completedCount++;
            }
            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', () => deleteTask(index));
            const toggleStatusButton = document.createElement('button');
            toggleStatusButton.textContent = task.status === 'complete' ? 'Mark Incomplete' : 'Mark Complete';
            toggleStatusButton.addEventListener('click', () => toggleTaskStatus(index));
            li.appendChild(deleteButton);
            li.appendChild(toggleStatusButton);
            taskList.appendChild(li);
        });

        completedTasks.textContent = completedCount;
        pendingTasks.textContent = tasks.length - completedCount;

        if (filteredTasks.length === 0) {
            emptyTaskListMessage.style.display = 'block';
        } else {
            emptyTaskListMessage.style.display = 'none';
        }
    };

    const addProject = (name) => {
        projects.push({ name });
        localStorage.setItem('projects', JSON.stringify(projects));
        renderProjects();
    };

    const addTask = (name, priority, status = 'incomplete') => {
        tasks.push({ name, priority, status });
        localStorage.setItem('tasks', JSON.stringify(tasks));
        renderTasks();
    };

    const deleteTask = (index) => {
        tasks.splice(index, 1);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        renderTasks();
    };

    const toggleTaskStatus = (index) => {
        tasks[index].status = tasks[index].status === 'complete' ? 'incomplete' : 'complete';
        localStorage.setItem('tasks', JSON.stringify(tasks));
        renderTasks();
    };

    document.getElementById('add-project').addEventListener('click', () => {
        const projectName = prompt('Enter project name:');
        if (projectName) {
            addProject(projectName);
        }
    });

    document.getElementById('add-task').addEventListener('click', () => {
        const taskName = prompt('Enter task name:');
        const taskPriority = prompt('Enter task priority (high, medium, low):');
        if (!taskName || !taskPriority || !['high', 'medium', 'low'].includes(taskPriority.toLowerCase())) {
            alert('Invalid input. Please enter a valid task name and priority.');
            return;
        }
        addTask(taskName, taskPriority.toLowerCase());
    });

    taskSearch.addEventListener('input', renderTasks);
    priorityFilter.addEventListener('change', renderTasks);
    statusFilter.addEventListener('change', renderTasks);

    document.querySelector('.nav-toggle').addEventListener('click', () => {
        document.querySelector('.nav-list').classList.toggle('active');
    });

    renderProjects();
    renderTasks();
});