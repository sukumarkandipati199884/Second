# Flask REST API

This is a production-ready Flask REST API with a health check endpoint and CORS support.

## Requirements

- Python 3.7+

## Setup

1. Create a virtual environment:
   ```bash
   python3 -m venv venv
   ```

2. Activate the virtual environment:
   - On macOS and Linux:
     ```bash
     source venv/bin/activate
     ```
   - On Windows:
     ```bash
     .\venv\Scripts\activate
     ```

3. Install the dependencies:
   ```bash
   pip install -r requirements.txt
   ```

4. Run the application:
   ```bash
   python app.py
   ```

## Deployment

This application is compatible with Gunicorn for deployment on platforms like Render.

To run with Gunicorn:
```bash
gunicorn -w 4 app:app
```
