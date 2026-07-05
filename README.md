# Employee Management API

This is a simple Flask-based REST API for managing employees.

## Setup

1. Clone the repository.
2. Navigate to the project directory.
3. Create a virtual environment:
   ```bash
   python3 -m venv venv
   ```
4. Activate the virtual environment:
   - On macOS/Linux:
     ```bash
     source venv/bin/activate
     ```
   - On Windows:
     ```bash
     venv\Scripts\activate
     ```
5. Install the dependencies:
   ```bash
   pip install -r requirements.txt
   ```

## Running the API

1. Ensure the virtual environment is activated.
2. Run the application:
   ```bash
   python app.py
   ```
3. The API will be available at `http://127.0.0.1:5000/`.

## API Endpoints

- `GET /`: Welcome message.
- `GET /health`: Health check.
- `GET /employees`: Retrieve all employees.
- `POST /employees`: Add a new employee.
- `GET /employees/<employee_id>`: Retrieve a specific employee.
- `PUT /employees/<employee_id>`: Update a specific employee.
- `DELETE /employees/<employee_id>`: Delete a specific employee.

## Deployment

This project is ready to be deployed on Render. Ensure you have a `Procfile` and `runtime.txt` for deployment.

## Environment Variables

Copy `.env.example` to `.env` and adjust the settings as needed.