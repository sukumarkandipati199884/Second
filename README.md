# Task Management API

This is a Flask-based REST API for a task management application with JWT authentication.

## Features
- JWT Authentication
- CRUD operations for tasks
- SQLite database
- CORS support
- Health check endpoint

## Running Locally

1. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

2. Set up the database:
   ```bash
   flask shell
   >>> from models import db
   >>> db.create_all()
   >>> exit()
   ```

3. Run the application:
   ```bash
   flask run
   ```

4. Access the API at `http://localhost:5000`.

## Deployment

This application is ready to be deployed using Gunicorn. Use the following command:

```bash
gunicorn app:app -b 0.0.0.0:5000
```

Ensure to change the `JWT_SECRET_KEY` in `app.py` for production use.