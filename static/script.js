document.addEventListener('DOMContentLoaded', function() {
    console.log('JavaScript loaded');

    // Example of updating statistics dynamically
    const totalTasksElement = document.getElementById('total-tasks');
    const completedTasksElement = document.getElementById('completed-tasks');

    // Simulate fetching data from an API or database
    const totalTasks = 2;
    const completedTasks = 1;

    totalTasksElement.textContent = totalTasks;
    completedTasksElement.textContent = completedTasks;
});