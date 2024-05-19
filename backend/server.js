const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cors());

let vehicles = [
  {
    id: 1,
    brand: "Toyota",
    model: "Camry",
    year: 2020,
  },
];

// Routes for CRUD operations

app.get("/vehicles", (req, res) => {
  res.json({ vehicles });
});

app.post("/vehicles", (req, res) => {
  const { brand, model, year } = req.body;
  const id = vehicles.length + 1;
  const newVehicle = { id, brand, model, year };
  vehicles.push(newVehicle);
  res.json({ success: true, vehicle: newVehicle });
});

app.put("/vehicles/:id", (req, res) => {
  const { id } = req.params;
  const { brand, model, year } = req.body;
  const index = vehicles.findIndex((vehicle) => vehicle.id === parseInt(id));
  if (index !== -1) {
    vehicles[index] = { id: parseInt(id), brand, model, year };
    res.json({ success: true, vehicle: vehicles[index] });
  } else {
    res.status(404).json({ success: false, message: "Vehicle not found" });
  }
});

app.delete("/vehicles/:id", (req, res) => {
  const { id } = req.params;
  vehicles = vehicles.filter((vehicle) => vehicle.id !== parseInt(id));
  res.json({ success: true });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
