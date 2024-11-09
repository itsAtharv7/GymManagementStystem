import React, { useState } from "react";
import "../Styles/Navbar.css";
import { Link, Route, Routes } from "react-router-dom";
import Herosection from "./Herosection.jsx";
import PricePlane from "./PricePlan.jsx";
import Dashboard from "./Dashboard.jsx";
import Login from "./Login.jsx";
import Register from "./Register.jsx";
import Workout from "./Workout.jsx";

function Navbar() {
  const [mood, setmood] = useState(true);

  function changemood() {
    setmood(!mood);
  }

  return (
    <>
      <div className="main">
        <div className="fy">
          <h2>FitnessARC</h2>
        </div>

        <div className="sy">
          <Link className="navlink" to="/">
            Home
          </Link>
          <Link className="navlink" to="/Dashboard">
            My Info
          </Link>
          <Link className="navlink" to="/PricePlan">
            GYM Planes{" "}
          </Link>
          <Link className="navlink" to="/Workout">
            Workout
          </Link>
          <Link className="navlink" to="/Login">
            Login
          </Link>
          <Link className="navlink" to="/register">
            Login
          </Link>
        </div>
      </div>

      <div>
        <Routes>
          <Route path="/" element={<Herosection />}>
            {" "}
          </Route>
          <Route path="/Dashboard" element={<Dashboard />}>
            {" "}
          </Route>
          <Route path="/PricePlan" element={<PricePlane />}>
            {" "}
          </Route>
          <Route path="/Login" element={<Login />}>
            {" "}
          </Route>
          <Route path="/Register" element={<Register />}>
            {" "}
          </Route>
          <Route path="/Workout" element={<Workout />}>
            {" "}
          </Route>
          <Route path="/register" element={<Workout />}>
            {" "}
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default Navbar;
