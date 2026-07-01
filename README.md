# Library Management System

This is a Flask-based REST API for a library management system with user authentication and book management.

## Setup

1. Create a virtual environment:
   ```bash
   python3 -m venv venv
   ```

2. Activate the virtual environment:
   - On Windows:
     ```bash
     venv\Scripts\activate
     ```
   - On macOS and Linux:
     ```bash
     source venv/bin/activate
     ```

3. Install the dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Run the application:
   ```bash
   python app.py
   ```

## API Endpoints

- `POST /api/login`: Login a user.
- `POST /api/logout`: Logout a user.
- `GET /api/books`: Retrieve all books.
- `POST /api/books`: Add a new book.

## Error Handling

- 404: Not found
- 500: Internal server error
