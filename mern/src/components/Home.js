import React from "react";
import { Card, CardBody } from "reactstrap";
import Navbar from './Navbar';

function Home() {
  return (
    <div className="container-fluid background-image">
      <Navbar />
      <div className="row justify-content-center align-items-center">
        <div className="col-md-8">
          <h1 className="my-4 text-center">Welcome to Vehicle Management System</h1>
          <div className="text-center">
            <img src="https://www.arenasoftwares.com/images/companies/1/VEHICLE-MANAGEMENT-SYSTEM.png"></img>
          </div>
          <div className="mt-4">
            <h2>Features:</h2>
            <div className="row">
              <div className="col-md-6">
                <Card>
                  <CardBody>
                    <h5 className="card-title">User-friendly interface for easy vehicle navigation</h5>
                  </CardBody>
                </Card>
              </div>
              <div className="col-md-6">
                <Card>
                  <CardBody>
                    <h5 className="card-title">Efficient management of vehicles and their details</h5>
                  </CardBody>
                </Card>
              </div>
              <div className="col-md-6">
                <Card>
                  <CardBody>
                    <h5 className="card-title">Track vehicle details including maintenance history</h5>
                  </CardBody>
                </Card>
              </div>
              <div className="col-md-6">
                <Card>
                  <CardBody>
                    <h5 className="card-title">Edit and update vehicle information as needed</h5>
                  </CardBody>
                </Card>
              </div>
              <div className="col-md-6">
                <Card>
                  <CardBody>
                    <h5 className="card-title">Generate reports based on vehicle data</h5>
                  </CardBody>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
