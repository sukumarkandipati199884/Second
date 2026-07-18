# Employee Management API

This is a simple employee management API built with Flask.

## Setup

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
     venv\Scripts\activate
     
4. Install the dependencies:
   bash
   pip install -r requirements.txt
   

## Running the Application

1. Start the Flask application:
   bash
   flask run
   

2. The API will be available at `http://127.0.0.1:5000/`.

## API Endpoints

- `GET /`: Welcome message
- `GET /health`: Health check
- `GET /employees`: List all employees
- `POST /employees`: Add a new employee
- `GET /employees/<id>`: Get an employee by ID
- `PUT /employees/<id>`: Update an employee by ID
- `DELETE /employees/<id>`: Delete an employee by ID

## Deployment

This application is ready to be deployed on Render using the provided `Procfile`.
