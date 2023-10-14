const mongoose = require('mongoose');

// Define the Patient schema
const patientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  dateOfBirth: { type: Date, required: true },
  gender: { type: String, required: true },
  height: { type: Number, required: true },
  weight: { type: Number, required: true },
});

// Create a Patient model using the schema
const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;
