# Task Management API

This is a Flask-based REST API for managing tasks with JWT authentication.

## Features
- JWT Authentication
- CRUD operations for tasks
- SQLite database (in-memory for demonstration)
- CORS support
- Health check endpoint

## Setup

1. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

2. Run the application:
   ```bash
   python app.py
   ```

3. The API will be available at `http://localhost:5000`.

## Deployment

This application is ready to be deployed with Gunicorn. Example command:
```bash
gunicorn -w 4 app:app
```

## Endpoints

- `GET /task/`: Retrieve all tasks
- `POST /task/`: Create a new task
- `PUT /task/<task_id>`: Update a task
- `DELETE /task/<task_id>`: Delete a task
- `GET /health`: Health check endpoint

## Note

- Replace `your_jwt_secret_key` in `app.py` with a secure key in production.
