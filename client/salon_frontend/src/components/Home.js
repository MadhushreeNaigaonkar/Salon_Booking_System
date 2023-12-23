import React from "react";
import NavLogout from "./NavLogout";

const Home = () => {
  return (
    <>
      <NavLogout />
      <div className="container mt-4">
        <h1 className="mb-4">Services Provided</h1>
        <div className="row">
          <div className="col-md-4 mb-3">
            <div className="text-center">
              <img
                alt="Haircut"
                className="img-fluid rounded-circle"
                src={require("../assests/haircut.jpeg")}
              />
              <h5 className="mt-3">Haircut</h5>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="text-center">
              <img
                src={require("../assests/manicure.jpeg")}
                alt="Manicure"
                className="img-fluid rounded-circle"
              />
              <h5 className="mt-3">Manicure</h5>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="text-center">
              <img
                src={require("../assests/facial.jpeg")}
                alt="Facial"
                className="img-fluid rounded-circle"
              />
              <h5 className="mt-3">Facial</h5>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="text-center">
              <img
                src={require("../assests/massage.jpeg")}
                alt="Massage"
                className="img-fluid rounded-circle"
              />
              <h5 className="mt-3">Massage</h5>
            </div>
          </div>
          <div className="col-md-4 mb-3">
            <div className="text-center">
              <img
                src={require("../assests/haircoloring.jpeg")}
                alt="Coloring"
                className="img-fluid rounded-circle"
              />
              <h5 className="mt-3">Coloring</h5>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
