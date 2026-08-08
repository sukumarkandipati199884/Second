import React, { useState, useEffect } from 'react';
import Dashboard from './components/Dashboard';
import Projects from './components/Projects';
import Tasks from './components/Tasks';
import './styles.css';

function App() {
  const [projects, setProjects] = useState([]);
  const [tasks, setTasks] = useState([]);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const storedProjects = JSON.parse(localStorage.getItem('projects')) || [];
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setProjects(storedProjects);
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('projects', JSON.stringify(projects));
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [projects, tasks]);

  return (
    <div className="app-container">
      <Dashboard projects={projects} tasks={tasks} />
      <Projects projects={projects} setProjects={setProjects} setSelectedProject={setSelectedProject} />
      <Tasks tasks={tasks} setTasks={setTasks} selectedProject={selectedProject} />
    </div>
  );
}

export default App;