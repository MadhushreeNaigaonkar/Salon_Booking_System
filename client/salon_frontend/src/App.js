import React from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "./components/Landing";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import UpdatePass from "./components/UpdatePass";
import Crousal from "./components/Crousal";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/*"
          element={
            <>
              <Landing />
              <Crousal />
            </>
          }
        />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/updatepwd" element={<UpdatePass />} />
      </Routes>
    </>
  );
}

export default App;
