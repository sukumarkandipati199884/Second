# AutoDeploy Render Correlation Test

This is a Flask web application with a styled home page displaying "AutoDeploy Render Correlation Test". It includes a `/health` endpoint returning JSON with status `healthy`.

## Setup

1. Clone the repository.
2. Create a virtual environment and activate it:
   
   python3 -m venv venv
   source venv/bin/activate
   
3. Install the dependencies:
   
   pip install -r requirements.txt
   

## Running Locally

1. Ensure your virtual environment is activated.
2. Run the application:
   
   python app.py
   
3. Visit `http://127.0.0.1:5000` in your browser to see the home page.
4. Visit `http://127.0.0.1:5000/health` to check the health status.

## Deployment

This application is ready to be deployed on Render. Ensure you have a `Procfile` and `runtime.txt` for deployment.

## Endpoints

- `GET /`: Displays the home page.
- `GET /health`: Returns a JSON response with the health status.

## Error Handling

- 404 errors return a JSON response with an error message.
- 500 errors return a JSON response with an error message.

## CORS Support

CORS is enabled for all routes using `Flask-Cors`.