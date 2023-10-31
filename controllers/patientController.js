const Patient = require('../models/patientModel');

exports.registerPatient = async (req, res, next) => {
  try {
    const { firstName, lastName, dateOfBirth, gender } = req.body;
    const newPatient = new Patient({ firstName, lastName, dateOfBirth,
       gender });

    const savedPatient = await newPatient.save();

    res.status(201).json({ message: 'Patient registered successfully', patient: savedPatient });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
