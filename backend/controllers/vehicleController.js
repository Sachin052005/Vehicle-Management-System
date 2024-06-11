// /backend/controllers/vehicleController.js
const Vehicle = require('../models/vehicleModel');

const getVehicles = async (req, res) => {
  try {
    const vehicles = await Vehicle.find();
    res.json({ vehicles });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const addVehicle = async (req, res) => {
  const { brand, model, year } = req.body;
  const newVehicle = new Vehicle({ brand, model, year });
  try {
    await newVehicle.save();
    res.status(201).json({ success: true, vehicle: newVehicle });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const updateVehicle = async (req, res) => {
  const { id } = req.params;
  const { brand, model, year } = req.body;
  try {
    const vehicle = await Vehicle.findByIdAndUpdate(id, { brand, model, year }, { new: true });
    if (!vehicle) {
      return res.status(404).json({ success: false, message: 'Vehicle not found' });
    }
    res.json({ success: true, vehicle });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const deleteVehicle = async (req, res) => {
  const { id } = req.params;
  try {
    const vehicle = await Vehicle.findByIdAndDelete(id);
    if (!vehicle) {
      return res.status(404).json({ success: false, message: 'Vehicle not found' });
    }
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getVehicles,
  addVehicle,
  updateVehicle,
  deleteVehicle,
};
