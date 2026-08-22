# AutoDeploy.AI Flask API

This is a simple Flask web application with a homepage and a health check endpoint, designed for deployment on Render.

## Features
- Home page displaying a welcome message
- Health check endpoint
- CORS support
- JSON error handling
- Logging

## Setup

1. **Clone the repository:**
   bash
   git clone <repository-url>
   cd <repository-directory>
   

2. **Create a virtual environment:**
   bash
   python3 -m venv venv
   source venv/bin/activate
   

3. **Install dependencies:**
   bash
   pip install -r requirements.txt
   

4. **Run the application locally:**
   bash
   flask run
   

   The application will be available at `http://127.0.0.1:5000/`.

## Deployment

This application is ready to be deployed on Render. Ensure you have a Render account and follow these steps:

1. **Create a new web service** on Render.
2. **Connect your repository** to Render.
3. **Set the build and start commands**:
   - Build command: `pip install -r requirements.txt`
   - Start command: `gunicorn app:app`

4. **Deploy the application**.

## Endpoints

- `GET /`: Returns the homepage message.
- `GET /health`: Returns a JSON response indicating the API is healthy.

## Environment Variables

- `FLASK_ENV`: Set to `development` for local development.
- `SECRET_KEY`: A secret key for session management.

## Logging

Logging is configured to output to the console with `INFO` level by default.

## Error Handling

- `404 Not Found`: Returns a JSON error message.
- `500 Internal Server Error`: Returns a JSON error message.