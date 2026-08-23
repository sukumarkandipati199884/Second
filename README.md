# Deployment Status API

This is a Flask-based REST API to check the status of a deployment after a GitHub push.

## Features
- Root route (`/`): Welcome message
- Health check route (`/health`): Check if the API is running
- Deployment status route (`/deployment/status`): Check if a deployment was successful or failed

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
   

## Deployment

This application is ready to be deployed on Render. Ensure you have a `Procfile` and `runtime.txt` for deployment.

## Usage

- **GET /**: Returns a welcome message.
- **GET /health**: Returns the health status of the API.
- **POST /deployment/status**: Check the status of a deployment.
  - Request body should include a JSON object with `deployment_id`.
  - Example:
    json
    {
      "deployment_id": "12345"
    }
    

## Environment Variables

Copy `.env.example` to `.env` and configure your environment variables.