# Student Records API

This is a Flask-based REST API for managing student records.

## Features
- Retrieve all students
- Retrieve a specific student by ID
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
   

3. Install the dependencies:
   bash
   pip install -r requirements.txt
   

4. Run the application:
   bash
   flask run
   

## Deployment

This application is ready for deployment on Render. Use the provided `Procfile` and `runtime.txt` for configuration.

## API Endpoints

- `GET /`: Root route
- `GET /health`: Health check route
- `GET /students`: Retrieve all students
- `GET /students/<id>`: Retrieve a student by ID
- `POST /students`: Create a new student
- `PUT /students/<id>`: Update a student
- `DELETE /students/<id>`: Delete a student

## Error Handling

The API returns appropriate HTTP status codes and error messages for invalid requests, such as missing fields or non-existent student IDs.

## CORS Support

CORS is enabled for all routes using `flask-cors`.