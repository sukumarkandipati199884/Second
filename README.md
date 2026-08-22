# AutoDeploy.AI GitHub Render Test

This is a simple Flask web application designed to be deployed on Render. It includes a homepage and a health check endpoint.

## Features
- Homepage displaying a welcome message
- Health check endpoint
- CORS support
- JSON error handling
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
   

5. Access the application in your browser at `http://localhost:5000`

## Deployment

This application is ready to be deployed on Render. Ensure you have a Render account and follow their deployment instructions, using the provided `Procfile` and `runtime.txt`.

## Endpoints

- `GET /`: Returns the homepage message.
- `GET /health`: Returns a JSON response indicating the API is healthy.

## Environment Variables

Use the `.env.example` file to set up your environment variables.