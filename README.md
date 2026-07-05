# Employee Management API

This is a simple Flask-based REST API for managing employees.

## Setup

1. Clone the repository.
2. Create a virtual environment:
   ```bash
   python3 -m venv venv
   ```
3. Activate the virtual environment:
   - On macOS/Linux:
     ```bash
     source venv/bin/activate
     ```
   - On Windows:
     ```bash
     venv\Scripts\activate
     ```
4. Install the dependencies:
   ```bash
   pip install -r requirements.txt
   ```

## Running the API

1. Ensure the virtual environment is activated.
2. Run the application:
   ```bash
   python app.py
   ```

The API will be available at `http://localhost:5000`.

## Deployment

This application is ready to be deployed on Render. Ensure you have the necessary environment variables set as per `.env.example`.

## API Endpoints

- `GET /`: Root endpoint, returns a welcome message.
- `GET /health`: Health check endpoint.
- `GET /employees`: Retrieve all employees.
- `POST /employees`: Add a new employee.
- `GET /employees/<employee_id>`: Retrieve a specific employee by ID.
- `PUT /employees/<employee_id>`: Update an existing employee by ID.
- `DELETE /employees/<employee_id>`: Delete an employee by ID.

## Error Handling

The API includes basic error handling for invalid input and server errors.

## CORS Support

CORS is enabled for all routes using `flask-cors`.
