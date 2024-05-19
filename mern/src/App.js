import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import Home from './components/Home';
import AddVehicle from './components/Addvehicle';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header title="Vehicle Management System " />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addvehicle" element={<AddVehicle />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
