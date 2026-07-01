# Task Management API

This is a Flask-based REST API for managing tasks with JWT authentication.

## Setup

1. Create a virtual environment:
   ```bash
   python3 -m venv venv
   source venv/bin/activate
   ```

2. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

3. Run the application:
   ```bash
   python app.py
   ```

## Deployment

This application is compatible with Gunicorn for deployment on platforms like Render.

## Endpoints

- `GET /tasks`: Retrieve all tasks
- `POST /tasks`: Create a new task
- `PUT /tasks/<task_id>`: Update a task
- `DELETE /tasks/<task_id>`: Delete a task
- `GET /health`: Health check endpoint

## Authentication

This API uses JWT for authentication. Ensure to replace `your_jwt_secret_key` in `app.py` with a secure key.