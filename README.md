# Restaurant Booking API

This is a simple Flask-based REST API for managing restaurant table reservations.

## Features
- Create, view, and delete reservations
- CORS support
- JSON responses
- Basic error handling

## Getting Started

### Prerequisites
- Python 3.8+

### Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd restaurant-booking-api
   ```
3. Install the dependencies:
   ```bash
   pip install -r requirements.txt
   ```

### Running the Application
```bash
python app.py
```

The API will be available at `http://localhost:5000`.

## API Endpoints

- `GET /api/reservations`: Retrieve all reservations
- `POST /api/reservations`: Create a new reservation
- `GET /api/reservations/<reservation_id>`: Retrieve a specific reservation
- `DELETE /api/reservations/<reservation_id>`: Delete a reservation

## License
This project is licensed under the MIT License.