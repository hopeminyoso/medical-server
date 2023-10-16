const express = require('express');
const router = express.Router();

// Import the patientController to handle patient-related requests
const patientController = require('../controllers/patientController');

// Define routes for patient registration
router.post('/patient', patientController.createPatient); // Create a new patient
router.get('/patient', patientController.getAllPatients); // Get a list of all patients
router.get('/patient/:patientId', patientController.getPatientById); // Get a specific patient by ID
router.put('/patient/:patientId', patientController.updatePatient); // Update a specific patient by ID
router.delete('/patient/:patientId', patientController.deletePatient); // Delete a specific patient by ID

module.exports = router;

