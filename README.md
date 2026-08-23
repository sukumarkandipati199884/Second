# Flask API

This is a simple Flask web application with a home page and a health check endpoint.

## Features
- Home endpoint (`/`): Returns a welcome message.
- Health endpoint (`/health`): Returns the health status of the application.
- CORS support.
- JSON responses.
- Error handling for 404 and 500 errors.

## Setup

1. Clone the repository:
   bash
   git clone <repository-url>
   cd <repository-directory>
   

2. Create a virtual environment:
   bash
   python3 -m venv venv
   source venv/bin/activate
   

3. Install dependencies:
   bash
   pip install -r requirements.txt
   

4. Run the application:
   bash
   python app.py
   

5. The application will be available at `http://localhost:5000`.

## Deployment

This application is ready to be deployed on Render. Use the `Procfile` and `runtime.txt` for deployment configuration.

## Environment Variables

Copy `.env.example` to `.env` and configure your environment variables as needed.