# Healthcare Appointment Booking App

## Overview
This application is a healthcare appointment booking system that allows patients to book appointments with doctors. It includes features such as doctor profiles, available time slots, an admin panel, and a secure responsive interface.

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
- Node.js
- MongoDB

### Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd healthcare-appointment-app
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Set up environment variables by creating a `.env` file in the root directory:
   ```
   MONGODB_URI=<your_mongodb_uri>
   JWT_SECRET=<your_jwt_secret>
   PORT=3000
   ```

### Running the Application
1. Start the server:
   ```bash
   npm start
   ```
2. Open your browser and navigate to `http://localhost:3000`

## Deployment
- The application can be deployed on any Node.js compatible hosting service.

## API Documentation
- The API documentation is available at `http://localhost:3000/api-docs` after running the application.