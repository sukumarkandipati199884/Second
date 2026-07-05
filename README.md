# Flask REST API

This is a production-ready Flask REST API with CORS support and a health check endpoint.

## Setup

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd <repository-directory>
   ```

2. Create a virtual environment and activate it:
   ```bash
   python3 -m venv venv
   source venv/bin/activate
   ```

3. Install the dependencies:
   ```bash
   pip install -r requirements.txt
   ```

## Running the API Locally

1. Ensure your virtual environment is activated.
2. Run the Flask application:
   ```bash
   python app.py
   ```
3. The API will be available at `http://127.0.0.1:5000/`.

## Deployment

This application is ready to be deployed on Render. Ensure you have a `Procfile` and `runtime.txt` for deployment.

## Endpoints

- `GET /`: Root endpoint, returns a welcome message.
- `GET /health`: Health check endpoint, returns the status of the API.

## Error Handling

- Returns JSON formatted error messages for 404 and 500 errors.

## Environment Variables

- Use the `.env.example` file to set up your environment variables.
