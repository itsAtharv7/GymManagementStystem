import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send registration request to backend
      const response = await axios.post("http://localhost:3000/api/signup", {
        username,
        password,
      });

      // Check if registration was successful
      if (response.status === 201) {
        // Redirect to login page
        navigate("/Login");
      } else {
        alert("Registration failed. Please try again.");
      }
    } catch (error) {
      console.error("Error during registration:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div
      className="registermain"
      style={{
        backgroundColor: "#18181b",
        height: "100vh",
        width: "100vw",
        color: "white",
      }}
    >
      <div className="container pt-5">
        <div className="row justify-content-center">
          <div className="col-md-4">
            <h3 className="text-center mb-4">Register</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group mb-3">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  className="form-control w-100"
                  id="username"
                  placeholder="Enter username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  className="form-control w-100"
                  id="password"
                  placeholder="Enter password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Register
              </button>
            </form>
            <div className="text-center mt-3">
              <small>
                Already have an account? <Link to="/login">Login</Link>
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
