import React from "react";
import { Route, Link, Routes } from "react-router-dom";
import Crousal from "./Crousal";
import Login from "./Login";
import Register from "./Register";
import UpdatePass from "./UpdatePass";

function Landing() {
  return (
    <>
      <nav className="navbar bg-body-tertiary">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img
              src={require("../assests/logo3.png")}
              alt="Logo"
              width="70"
              height="80"
              className="d-inline-block align-text-top"
            />
          </a>
          <div className="nav navbar-nav">
            <Link to="/login">Login</Link>
            <Link to="/register">Registration</Link>
            <Link to="/updatepwd">Update Password</Link>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/main" element={<Crousal />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/updatepwd" element={<UpdatePass />} />
      </Routes>
    </>
  );
}
export default Landing;
