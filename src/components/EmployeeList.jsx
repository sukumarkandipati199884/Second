import React, { useState, useEffect } from 'react';
import './EmployeeList.css';

const sampleData = [
  { id: 1, name: 'John Doe', position: 'Software Engineer', department: 'Development' },
  { id: 2, name: 'Jane Smith', position: 'Project Manager', department: 'Management' },
  { id: 3, name: 'Sam Johnson', position: 'UX Designer', department: 'Design' }
];

function EmployeeList() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Simulate an API call
    setTimeout(() => {
      try {
        setEmployees(sampleData);
        setLoading(false);
      } catch (err) {
        setError('Failed to load employee data');
        setLoading(false);
      }
    }, 1000);
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="employee-list">
      <h2>Employee List</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Position</th>
            <th>Department</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(employee => (
            <tr key={employee.id}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.position}</td>
              <td>{employee.department}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default EmployeeList;