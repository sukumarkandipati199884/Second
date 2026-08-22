# Flask Web Application

## Overview
This is a simple Flask web application with a root route and a health check endpoint. It is designed to be deployed on Render.

## Features
- Root route (`/`) serving an HTML page
- Health check endpoint (`/health`) returning JSON
- CORS support
- Error handling for 404 and 500 errors

## Setup Instructions
1. Clone the repository.
2. Create a virtual environment:
   bash
   python3 -m venv venv
   
3. Activate the virtual environment:
   - On macOS/Linux:
     bash
     source venv/bin/activate
     
   - On Windows:
     bash
     .\venv\Scripts\activate
     
4. Install the dependencies:
   bash
   pip install -r requirements.txt
   
5. Run the application:
   bash
   python app.py
   

## Deployment
- This application is ready to be deployed on Render. Ensure you have a Render account and follow their deployment instructions.

## Endpoints
- `GET /`: Renders the main HTML page.
- `GET /health`: Returns a JSON response indicating the health status of the application.

## Environment Variables
- See `.env.example` for environment variable configuration.
