import React, { useState } from 'react';

function Tasks({ tasks, setTasks, selectedProject }) {
  const [newTaskName, setNewTaskName] = useState('');

  const addTask = () => {
    if (newTaskName.trim() && selectedProject) {
      setTasks([...tasks, { id: Date.now(), name: newTaskName, projectId: selectedProject, completed: false }]);
      setNewTaskName('');
    }
  };

  const toggleTaskCompletion = (taskId) => {
    setTasks(tasks.map(task => task.id === taskId ? { ...task, completed: !task.completed } : task));
  };

  return (
    <div className="tasks">
      <h2>Tasks</h2>
      <input
        type="text"
        value={newTaskName}
        onChange={(e) => setNewTaskName(e.target.value)}
        placeholder="New Task Name"
      />
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.filter(task => task.projectId === selectedProject).map((task) => (
          <li key={task.id}>
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
              {task.name}
            </span>
            <button onClick={() => toggleTaskCompletion(task.id)}>
              {task.completed ? 'Undo' : 'Complete'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Tasks;