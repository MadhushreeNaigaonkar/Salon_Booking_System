import React from "react";
import { Route, Link, Routes } from "react-router-dom";
import Login from "./Login";

function NavLogout() {
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
            <Link to="/logout">Logout</Link>
          </div>
          <Routes>
            <Route path="/logout" element={<Login />} />
          </Routes>
        </div>
      </nav>
    </>
  );
}
export default NavLogout;
