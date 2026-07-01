# Employee Management System

This is a simple Flask application for managing employees with CRUD operations.

## Setup

1. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

2. Run the application:
   ```bash
   python app.py
   ```

3. Access the API at `http://localhost:5000`.

## API Endpoints

- `GET /employees`: Retrieve all employees.
- `POST /employees`: Add a new employee.
- `PUT /employees/<emp_id>`: Update an existing employee.
- `DELETE /employees/<emp_id>`: Delete an employee.