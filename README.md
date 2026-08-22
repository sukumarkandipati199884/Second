# Flask Task Management Application

This is a professional task management web application built with Flask. It features a responsive homepage, a task dashboard, and a health check endpoint.

## Features
- Responsive homepage with navigation bar and hero section
- Task dashboard with sample task cards, status badges, and statistics
- Health check endpoint at `/health`

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
   flask run
   

5. Access the application at `http://localhost:5000`

## Deployment

This application is ready for deployment on Render. Ensure you have a `Procfile` and `runtime.txt` for the deployment configuration.

## Endpoints

- `GET /`: Returns the homepage.
- `GET /health`: Returns a JSON response indicating the health status of the application.