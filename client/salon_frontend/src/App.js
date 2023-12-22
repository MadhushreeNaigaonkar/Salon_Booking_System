import React, { useState } from "react";
import { Route, Router, Routes } from "react-router-dom";
import Landing from "./components/Landing";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import UpdatePass from "./components/UpdatePass";
import Crousal from "./components/Crousal";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };
  return (
    <>
      <Routes>
        <Route
          path="/*"
          element={
            <>
              <Landing isLoggedIn={isLoggedIn} onLogout={handleLogout} />
              <Crousal />
            </>
          }
        />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/updatepwd" element={<UpdatePass />} />
      </Routes>
    </>
  );
}

export default App;
