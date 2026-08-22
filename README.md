# AutoDeploy Render Verification Test

This is a simple Flask web application with a home page and a health check endpoint.

## Features
- Home page displaying a verification message
- Health check endpoint
- JSON responses
- CORS support
- Logging

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
   

5. The application will be available at `http://localhost:5000`

## Endpoints

- `GET /`: Returns a JSON message "AutoDeploy Render Verification Test"
- `GET /health`: Returns a JSON status "healthy"

## Deployment

This application is ready to be deployed on Render. Ensure you have a `Procfile` and `runtime.txt` for deployment configuration.

## Environment Variables

Use the `.env.example` file to set up your environment variables.