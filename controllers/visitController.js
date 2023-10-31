const Visit = require('../models/visitModel');
const Patient = require('../models/patientModel');

exports.recordVisit = async (req, res, next) => {
  try {
    const { patientId, visitDate, height, weight, BMI } = req.body;

    // Check if the patient exists
    const patient = await Patient.findById(patientId);
    if (!patient) {
      return res.status(404).json({ error: 'Patient not found' });
    }

    const newVisit = new Visit({
      patient: patientId,
      visitDate,
      height,
      weight,
      BMI // received from the frontend
    });

    const savedVisit = await newVisit.save();

    res.status(201).json({ message: 'Visit recorded successfully', visit: savedVisit });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

