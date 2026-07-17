# Healthcare Appointment Booking App

## Overview
This application is a healthcare appointment booking system that allows patients to book appointments with doctors. It includes features such as doctor profiles, available time slots, an admin panel, and a secure, responsive interface.

## Features
- User authentication for patients and doctors
- Doctor profiles with specialization and availability
- Patient appointment booking
- Admin panel for managing users and appointments
- Responsive design for mobile and desktop

## Technology Stack
- Frontend: React.js
- Backend: Node.js with Express
- Database: MongoDB
- Authentication: JWT

## Setup Instructions

### Prerequisites
- Node.js and npm installed
- MongoDB installed and running

### Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd healthcare-appointment-booking
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```

### Environment Variables
Create a `.env` file in the root directory and add the following:
```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000
```

### Running the Application
1. Start the server:
   ```bash
   npm start
   ```
2. Open your browser and go to `http://localhost:5000`

## Deployment
- Ensure your environment variables are set in your hosting environment.
- Use a service like Heroku, AWS, or DigitalOcean for deployment.

## API Documentation
- The API documentation is available at `/api-docs` when the server is running.

## License
This project is licensed under the MIT License.