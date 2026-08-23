# Flask REST API

This is a simple Flask web application with a home page and a health check endpoint.

## Features
- Home endpoint (`/`): Returns a welcome message.
- Health endpoint (`/health`): Returns the health status of the application.
- JSON responses for all endpoints.
- CORS support enabled.
- Proper error handling for 404 and 500 errors.

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
   

5. The application will be available at `http://localhost:5000`.

## Deployment

This application is ready to be deployed on Render. Ensure you have a `Procfile` and `runtime.txt` for deployment.

## Environment Variables

Create a `.env` file in the root directory and configure it as shown in `.env.example`.

## Endpoints

- **GET /**: Returns a welcome message.
- **GET /health**: Returns the health status of the application.