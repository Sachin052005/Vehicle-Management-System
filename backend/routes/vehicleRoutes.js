// /backend/routes/vehicleRoutes.js
const express = require('express');
const { getVehicles, addVehicle, updateVehicle, deleteVehicle } = require('../controllers/vehicleController');

const router = express.Router();

router.get('/', getVehicles);
router.post('/vehicles', addVehicle);
router.put('/vehicles/:id', updateVehicle);
router.delete('/vehicles/:id', deleteVehicle);

module.exports = router;
