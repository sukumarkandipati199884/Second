# Task Management Web Application

This is a professional Flask-based task management web application with a responsive design.

## Features
- Responsive homepage with navigation bar, hero section, task dashboard, and footer.
- Task dashboard with sample task cards and status badges.
- Statistics section with sample statistics cards.
- Health check endpoint at `/health`.

## Setup

1. Clone the repository:
   bash
   git clone <repository-url>
   cd <repository-directory>
   

2. Create a virtual environment and activate it:
   bash
   python3 -m venv venv
   source venv/bin/activate
   

3. Install the dependencies:
   bash
   pip install -r requirements.txt
   

4. Run the application:
   bash
   flask run
   

5. Access the application at `http://localhost:5000`.

## Deployment

This application is ready for deployment on Render. Ensure you have a Render account and follow their deployment instructions.

## Endpoints
- `GET /`: Returns the homepage.
- `GET /health`: Returns a JSON response indicating the health status of the application.

## Environment Variables

- `FLASK_ENV`: Set to `production` for production environment.
- `SECRET_KEY`: Set a secret key for session management.

## License

This project is licensed under the MIT License.