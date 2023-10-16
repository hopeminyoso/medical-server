const Patient = require('../models/patient');

// Define the controller function for patient registration
const registerPatient = async (req, res) => {
  try {
    const { registrationNumber, name, age, gender, height, weight } = req.body;

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
    res.status(500).json({ error: 'Unable to register the patient.' });
  }
};

module.exports = {
  registerPatient,
};



