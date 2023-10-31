const mongoose = require('mongoose');

const visitSchema = new mongoose.Schema({
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Patient',
    required: true
  },
  visitDate: {
    type: Date,
    default: Date.now,
    required: true
  },
  height: {
    type: Number,
    required: true
  },
  weight: {
    type: Number,
    required: true
  },
  BMI: {
    type: Number
  }
});

const Visit = mongoose.model('Visit', visitSchema);

module.exports = Visit;

