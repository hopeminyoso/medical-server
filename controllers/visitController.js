// Import the Visit model
const Visit = require('../models/visit');

// Controller to capture a new visit
const captureVisit = async (req, res) => {
  try {
    // Extract visit data from the request body
    const { patientId, vitals,} = req.body;

    // Create a new visit instance
    const visit = new Visit({
      patientId,
      vitals,
    });

    // Save the visit record to the database
    await visit.save();

    res.status(201).json(visit);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Controller to retrieve all visits
const getAllVisits = async (req, res) => {
  try {
    const visits = await Visit.find();
    res.json(visits);
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  captureVisit,
  getAllVisits,
};
