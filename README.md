# Student Records API

This is a Flask-based REST API for managing student records. It supports basic CRUD operations and stores data in memory.

## Features
- List all students
- Retrieve a single student by ID
- Create a new student
- Update an existing student
- Delete a student

## Setup

1. Clone the repository:
   bash
   git clone <repository-url>
   cd <repository-directory>
   

2. Create a virtual environment and activate it:
   bash
   python3 -m venv venv
   source venv/bin/activate
   

3. Install the dependencies:
   bash
   pip install -r requirements.txt
   

4. Run the application:
   bash
   python app.py
   

5. The API will be available at `http://127.0.0.1:5000/`

## Deployment

This application is ready to be deployed on Render. Ensure you have a `Procfile` and `runtime.txt` for deployment.

## API Endpoints

- `GET /students`: Retrieve all students.
- `GET /students/<id>`: Retrieve a student by ID.
- `POST /students`: Create a new student.
- `PUT /students/<id>`: Update an existing student.
- `DELETE /students/<id>`: Delete a student.

## Error Handling

- Returns `404` for not found resources.
- Returns `400` for bad requests with missing fields.

## Environment Variables

- `FLASK_ENV`: Set to `production` for production environment.
- `SECRET_KEY`: Set a secret key for session management.