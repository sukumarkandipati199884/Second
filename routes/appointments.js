const express = require('express');
const Appointment = require('../models/Appointment');

const router = express.Router();

// Create appointment
router.post('/', async (req, res) => {
  const { patientId, doctorId, date, time } = req.body;
  try {
    const appointment = new Appointment({ patientId, doctorId, date, time });
    await appointment.save();
    res.status(201).json({ message: 'Appointment booked successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Get appointments
router.get('/', async (req, res) => {
  try {
    const appointments = await Appointment.find();
    res.json(appointments);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;