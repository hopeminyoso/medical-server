const express = require('express');
const router = express.Router();

// Import the patientController to handle patient-related requests
const patientController = require('../controllers/patientController');

// Patients routes
router.post('/patients', patientController.createPatient); // Create a new patient
router.get('/patients', patientController.getAllPatients); // Get a list of all patients
router.get('/patients/:patientId', patientController.getPatientById); // Get a specific patient by ID
router.put('/patients/:patientId', patientController.updatePatient); // Update a specific patient by ID
router.delete('/patients/:patientId', patientController.deletePatient); // Delete a specific patient by ID

module.exports = router;


