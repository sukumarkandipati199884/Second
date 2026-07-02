# Employee Management System

This is a Flask-based backend application for managing employees with CRUD operations.

## Features
- List all employees
- Retrieve a specific employee
- Add a new employee
- Update an existing employee
- Delete an employee

## Setup

1. Install dependencies:
   ```
   pip install -r requirements.txt
   ```

2. Run the application:
   ```
   python app.py
   ```

## API Endpoints
- `GET /employees`: List all employees
- `GET /employees/<emp_id>`: Retrieve a specific employee
- `POST /employees`: Add a new employee
- `PUT /employees/<emp_id>`: Update an existing employee
- `DELETE /employees/<emp_id>`: Delete an employee