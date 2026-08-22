# Student Management System API

This is a Flask-based REST API for managing students. It provides CRUD operations for student data and includes user authentication.

## Features
- CRUD operations for students
- User authentication
- JSON responses
- CORS support
- PostgreSQL database

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
   

4. Set up the environment variables:
   - Copy `.env.example` to `.env` and fill in the necessary details.

5. Initialize the database:
   bash
   flask db init
   flask db migrate
   flask db upgrade
   

6. Run the application:
   bash
   flask run
   

## Endpoints

- `GET /`: Welcome message
- `GET /health`: Health check
- `POST /login`: User login
- `GET /students`: Get all students (requires authentication)
- `POST /students`: Add a new student (requires authentication)
- `PUT /students/<id>`: Update a student (requires authentication)
- `DELETE /students/<id>`: Delete a student (requires authentication)

## Deployment

This application is ready to be deployed on Render. Ensure that the environment variables are set correctly in the Render dashboard.