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
   

2. Create a virtual environment:
   bash
   python3 -m venv venv
   source venv/bin/activate
   

3. Install dependencies:
   bash
   pip install -r requirements.txt
   

4. Run the application:
   bash
   flask run
   

5. The API will be available at `http://127.0.0.1:5000/`.

## Deployment

This application is ready for deployment on Render. Ensure you have a `Procfile` and `runtime.txt` for deployment.

## API Endpoints

- `GET /students`: Returns all students.
- `GET /students/<id>`: Returns a student by ID.
- `POST /students`: Creates a new student.
- `PUT /students/<id>`: Updates a student by ID.
- `DELETE /students/<id>`: Deletes a student by ID.

## Environment Variables

- `FLASK_ENV`: Set to `development` for local development.
- `SECRET_KEY`: A secret key for session management.

## Notes

- This API uses in-memory storage, so data will be lost when the server is restarted.
- CORS is enabled for all domains.