# Student Records API

This is a Flask-based REST API for managing student records. It supports operations to create, read, update, and delete student information.

## Features
- List all students
- Retrieve a single student by ID
- Create a new student
- Update an existing student
- Delete a student

## Setup

1. Clone the repository:
   bash
   git clone <repository-url>
   cd <repository-directory>
   

2. Create a virtual environment:
   bash
   python3 -m venv venv
   source venv/bin/activate
   

3. Install the dependencies:
   bash
   pip install -r requirements.txt
   

4. Run the application:
   bash
   python app.py
   

5. The API will be available at `http://localhost:5000`.

## Deployment

This application is ready to be deployed on Render or any platform that supports Python and Flask.

## API Endpoints

- `GET /` - Welcome message
- `GET /health` - Health check
- `GET /students` - Retrieve all students
- `GET /students/<id>` - Retrieve a student by ID
- `POST /students` - Create a new student
- `PUT /students/<id>` - Update a student
- `DELETE /students/<id>` - Delete a student

## Environment Variables

- `FLASK_ENV`: Set to `development` for development mode.
- `SECRET_KEY`: A secret key for session management.

## Error Handling

- Returns `404` for not found resources.
- Returns `400` for bad requests with missing fields.

## License

This project is licensed under the MIT License.