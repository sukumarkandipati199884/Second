# Employee Management API

This is a simple Flask-based REST API for managing employees.

## Setup

1. Clone the repository.
2. Create a virtual environment:
   
   python3 -m venv venv
   
3. Activate the virtual environment:
   - On Windows:
     
     venv\Scripts\activate
     
   - On macOS and Linux:
     
     source venv/bin/activate
     
4. Install the dependencies:
   
   pip install -r requirements.txt
   

## Running the API

1. Ensure the virtual environment is activated.
2. Run the application:
   
   python app.py
   

The API will be available at `http://127.0.0.1:5000/`.

## Deployment

This application is ready to be deployed on Render. Use the provided `Procfile` and `runtime.txt` for deployment.

## API Endpoints

- `GET /`: Welcome message.
- `GET /health`: Health check endpoint.
- `GET /employees`: Retrieve a list of employees.
- `POST /employees`: Add a new employee. Requires JSON body with `name` and `position`.
- `DELETE /employees/<id>`: Delete an employee by ID.

## Environment Variables

Use the `.env.example` file to set up your environment variables.