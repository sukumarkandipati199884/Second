# Task Management API

This is a Flask-based REST API for managing tasks with JWT authentication.

## Setup

1. Create a virtual environment:
   ```bash
   python3 -m venv venv
   source venv/bin/activate
   ```

2. Install the dependencies:
   ```bash
   pip install -r requirements.txt
   ```

3. Run the application:
   ```bash
   flask run
   ```

## Endpoints

- `GET /tasks`: Retrieve all tasks (JWT required)
- `POST /tasks`: Create a new task (JWT required)
- `PUT /tasks/<task_id>`: Update a task (JWT required)
- `DELETE /tasks/<task_id>`: Delete a task (JWT required)
- `POST /login`: Login to receive a JWT token
- `GET /health`: Health check endpoint

## Deployment

This application is ready to be deployed with Gunicorn:

```bash
gunicorn -w 4 app:app
```
