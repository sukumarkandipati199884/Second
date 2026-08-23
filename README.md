# Flask REST API

This is a simple Flask web application with a homepage and a health check endpoint.

## Features
- Homepage displaying 'AutoDeploy Render Verification Test'.
- `/health` endpoint returning JSON status 'ok'.
- CORS support enabled.
- Proper error handling for 404 and 500 errors.
- Logging for requests and errors.

## Setup

1. Clone the repository.
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
   

## Deployment

This application is ready to be deployed on Render. Use the provided `Procfile` and `runtime.txt` for deployment configuration.

## Usage

- Access the homepage at `http://localhost:5000/`.
- Check the health status at `http://localhost:5000/health`.

## Environment Variables

Create a `.env` file based on `.env.example` to configure environment variables.