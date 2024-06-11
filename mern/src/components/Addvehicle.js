import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function AddVehicle() {
  const [vehicles, setVehicles] = useState([]);
  const [brand, setBrand] = useState('');
  const [model, setModel] = useState('');
  const [year, setYear] = useState('');
  const [editId, setEditId] = useState('');
  const [search, setSearch] = useState('');

  useEffect(() => {
    fetchVehicles();
  }, []);

  const fetchVehicles = async () => {
    try {
      const response = await axios.get('http://localhost:7000/vehicles');
      setVehicles(response.data.vehicles);
    } catch (error) {
      console.error('Error fetching vehicles: ', error);
    }
  };

  const addVehicle = async () => {
    try {
      await axios.post('http://localhost:7000/vehicles', { brand, model, year });
      fetchVehicles();
      setBrand('');
      setModel('');
      setYear('');
    } catch (error) {
      console.error('Error adding vehicle: ', error);
    }
  };

  const deleteVehicle = async (id) => {
    try {
      await axios.delete(`http://localhost:7000/vehicles/${id}`);
      fetchVehicles();
    } catch (error) {
      console.error('Error deleting vehicle: ', error);
    }
  };

  const updateVehicle = async () => {
    try {
      await axios.put(`http://localhost:7000/vehicles/${editId}`, { brand, model, year });
      fetchVehicles();
      setBrand('');
      setModel('');
      setYear('');
      setEditId('');
    } catch (error) {
      console.error('Error updating vehicle: ', error);
    }
  };

  const handleEdit = (vehicle) => {
    setBrand(vehicle.brand);
    setModel(vehicle.model);
    setYear(vehicle.year);
    setEditId(vehicle._id);
  };

  return (
    <div className="container-fluid background-image">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/addvehicle">Add Vehicle</Link>
              </li>
            </ul>
            <form className="d-flex">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search by brand"
                aria-label="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button className="btn btn-primary" type="button">Search</button>
            </form>
          </div>
        </div>
      </nav>

      <h1 className="my-4 text-center">Vehicle Management System</h1>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="toolbar">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Add Vehicle</h5>
                <input
                  type="text"
                  value={brand}
                  placeholder="Brand"
                  onChange={(e) => setBrand(e.target.value)}
                  className="form-control mb-2"
                />
                <input
                  type="text"
                  value={model}
                  placeholder="Model"
                  onChange={(e) => setModel(e.target.value)}
                  className="form-control mb-2"
                />
                <input
                  type="number"
                  value={year}
                  placeholder="Year"
                  onChange={(e) => setYear(e.target.value)}
                  className="form-control mb-2"
                />
                {editId ? (
                  <button onClick={updateVehicle} className="btn btn-primary custom-btn">Update</button>
                ) : (
                  <button onClick={addVehicle} className="btn btn-primary custom-btn">Add Vehicle</button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center mt-4">
        {vehicles.map((vehicle) => (
          vehicle.brand.toLowerCase().includes(search.toLowerCase()) && (
            <div key={vehicle._id} className="col-md-4 mb-4">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{vehicle.brand}</h5>
                  <p className="card-text">Model: {vehicle.model}</p>
                  <p className="card-text">Year: {vehicle.year}</p>
                  <button onClick={() => deleteVehicle(vehicle._id)} className="btn btn-danger custom-btn">Delete</button>
                  <button onClick={() => handleEdit(vehicle)} className="btn btn-primary custom-btn">Edit</button>
                </div>
              </div>
            </div>
          )
        ))}
      </div>
    </div>
  );
}

export default AddVehicle;
