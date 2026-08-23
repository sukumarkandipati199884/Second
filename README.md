# Flask API

This is a simple Flask web application with a home page and a health check endpoint.

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
   

The application will be available at `http://localhost:5000`.

## Endpoints

- `GET /`: Returns a welcome message.
- `GET /health`: Returns the health status of the application.

## Deployment

This application is ready to be deployed on Render. Ensure you have the following files:

- `Procfile`: Specifies the command to run the application.
- `runtime.txt`: Specifies the Python version.

## Environment Variables

Copy `.env.example` to `.env` and configure the necessary environment variables.

## Logging

The application logs requests and errors to the console.