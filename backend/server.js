require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 7000;

const MONGODB_URL = process.env.MONGODB_URL;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB:', err));

// Define a schema and model
const vehicleSchema = new mongoose.Schema({
  brand: String,
  model: String,
  year: Number,
});

const Vehicle = mongoose.model('Vehicle', vehicleSchema);

// Routes
app.get('/vehicles', async (req, res) => {
  const vehicles = await Vehicle.find();
  res.json({ vehicles });
});

app.post('/vehicles', async (req, res) => {
  const { brand, model, year } = req.body;
  const newVehicle = new Vehicle({ brand, model, year });
  await newVehicle.save();
  res.status(201).json(newVehicle);
});

app.delete('/vehicles/:id', async (req, res) => {
  const { id } = req.params;
  await Vehicle.findByIdAndDelete(id);
  res.status(204).send();
});

app.put('/vehicles/:id', async (req, res) => {
  const { id } = req.params;
  const { brand, model, year } = req.body;
  const updatedVehicle = await Vehicle.findByIdAndUpdate(id, { brand, model, year }, { new: true });
  res.json(updatedVehicle);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
