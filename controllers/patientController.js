const Patient = require('../models/patient');

const registerPatient = async (req, res) => {
  try {
    const { registrationNumber, name, age, gender, height, weight } = req.body;

    // Validate input data
    if (!registrationNumber || !name || !age || !gender || !height || !weight) {
      return res.status(400).json({ error: 'Invalid input data' });
    }

    // Calculate BMI
    const bmi = weight / ((height / 100) ** 2);

    // Create a new patient record
    const newPatient = new Patient({
      registrationNumber,
      name,
      age,
      gender,
      height,
      weight,
      bmi,
    });

    // Save the patient record to the database
    const savedPatient = await newPatient.save();

    res.status(201).json(savedPatient);
  } catch (error) {
    res.status(500).json({ error: 'Unable to register the patient', details: error.message });
  }
};

module.exports = {
  registerPatient,
};

