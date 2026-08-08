import React, { useState } from 'react';

function Projects({ projects, setProjects, setSelectedProject }) {
  const [newProjectName, setNewProjectName] = useState('');

  const addProject = () => {
    if (newProjectName.trim()) {
      setProjects([...projects, { id: Date.now(), name: newProjectName }]);
      setNewProjectName('');
    }
  };

  return (
    <div className="projects">
      <h2>Projects</h2>
      <input
        type="text"
        value={newProjectName}
        onChange={(e) => setNewProjectName(e.target.value)}
        placeholder="New Project Name"
      />
      <button onClick={addProject}>Add Project</button>
      <ul>
        {projects.map((project) => (
          <li key={project.id} onClick={() => setSelectedProject(project.id)}>
            {project.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Projects;