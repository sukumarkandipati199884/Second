import React from 'react';

function Dashboard({ projects, tasks }) {
  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <p>Total Projects: {projects.length}</p>
      <p>Total Tasks: {tasks.length}</p>
    </div>
  );
}

export default Dashboard;