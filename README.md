# Employee Management System

This is a Flask-based backend application for managing employees with CRUD operations.

## Features
- List all employees
- Retrieve a specific employee by ID
- Create a new employee
- Update an existing employee
- Delete an employee

## Setup

1. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

2. Run the application:
   ```bash
   python app.py
   ```

## API Endpoints
- `GET /api/employees` - Retrieve all employees
- `GET /api/employees/<id>` - Retrieve an employee by ID
- `POST /api/employees` - Create a new employee
- `PUT /api/employees/<id>` - Update an employee
- `DELETE /api/employees/<id>` - Delete an employee