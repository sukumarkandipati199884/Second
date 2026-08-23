# Flask Web Application

This is a simple Flask web application with a home page and a health check endpoint.

## Features
- Home endpoint (`/`): Returns a welcome message.
- Health endpoint (`/health`): Returns the health status of the application.
- CORS support enabled.
- JSON responses with proper error handling.

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
   

5. The application will be available at `http://127.0.0.1:5000/`.

## Deployment

This application is ready to be deployed on Render using the provided `Procfile` and `runtime.txt`.

## Endpoints

- **GET /**: Returns a welcome message.
- **GET /health**: Returns the health status of the application.

## Environment Variables

- `FLASK_ENV`: Set to `development` for development mode.
- `SECRET_KEY`: Set your secret key for session management.

## Logging

The application logs access to the endpoints and errors using Python's built-in logging module.