// /backend/models/vehicleModel.js
const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
  brand: {
    type: String,
    required: true,
  },
  model: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model('Vehicle', vehicleSchema);
