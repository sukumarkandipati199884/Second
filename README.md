# Flask REST API

This is a production-ready Flask REST API with CORS support and a health check endpoint.

## Features
- Root endpoint: `/`
- Health check endpoint: `/health`
- CORS support
- JSON error handling

## Setup

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. Create a virtual environment:
   ```bash
   python3 -m venv venv
   source venv/bin/activate
   ```

3. Install the dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Copy the example environment file and configure it:
   ```bash
   cp .env.example .env
   ```

5. Run the application:
   ```bash
   flask run
   ```

## Deployment

This application is ready to be deployed on Render using Gunicorn. Ensure that the `Procfile` is included in the root directory.

## Usage

- Access the root endpoint at `http://localhost:5000/`
- Access the health check endpoint at `http://localhost:5000/health`

## Logging

The application logs requests and errors to the console.