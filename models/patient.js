const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema({
  registrationNumber: { type: String, required: true },
  name: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, required: true },
  height: { type: Number, required: true },
  weight: { type: Number, required: true },
  bmi: { type: Number, required: true },
});

const Patient = mongoose.model('Patient', patientSchema);

module.exports = Patient;
