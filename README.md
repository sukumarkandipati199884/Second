# AutoDeploy.AI Flask Render Test

This is a Flask web application with a responsive homepage and a health check endpoint.

## Features
- Responsive homepage displaying 'AutoDeploy.AI Flask Render Test'
- Health check endpoint at `/health`
- CORS support

## Setup

1. Clone the repository:
   
   git clone <repository-url>
   cd <repository-directory>
   

2. Create a virtual environment and activate it:
   
   python3 -m venv venv
   source venv/bin/activate
   

3. Install the dependencies:
   
   pip install -r requirements.txt
   

4. Run the application:
   
   python app.py
   

5. Visit `http://localhost:5000` in your browser.

## Deployment

This application is ready to be deployed on Render. Ensure you have the following files:
- `Procfile`
- `runtime.txt`

## Endpoints

- `GET /`: Renders the homepage.
- `GET /health`: Returns a JSON response indicating the health status.

## License

This project is licensed under the MIT License.