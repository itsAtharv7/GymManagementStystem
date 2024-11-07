import React, { useState } from 'react'
import { useRef } from 'react';
import "../Styles/Dashboard.css"

//locomotive js
import { LocomotiveScrollProvider } from "react-locomotive-scroll";
import 'locomotive-scroll/dist/locomotive-scroll.css';

function Dashboard() {
  const containerRef = useRef(null);
  const [plane, setPlane] = useState("Select a Package");
  const [mood, setMood] = useState(false);  // Assuming light/dark mode toggle

  return (
    <LocomotiveScrollProvider containerRef={containerRef} options={{ smooth: true }} watch={[]}>
      <div data-scroll-container ref={containerRef}>

        <div className='main-addstu' style={mood ? { backgroundColor: '#18181b' } : { backgroundColor: "white" }}>
          <div className="selectPlan" style={ { backgroundColor: '#79ff4d'  }}>
            <center><h3>Select your Gym Package</h3></center>
            <form>
              <div className='mainform'>

                <div className="dropdown">
                  <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    {plane}
                  </button>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" onClick={() => setPlane("3 Month ₹399")}>2 Month ₹2100</a></li>
                    <li><a className="dropdown-item" onClick={() => setPlane("6 Month ₹599")}>6 Month ₹5400</a></li>
                    <li><a className="dropdown-item" onClick={() => setPlane("12 Month ₹999")}>12 Month ₹9999</a></li>
                  </ul>
                </div>

              

                <div className="form-group">
                  <input type="text" className="form-control" id="textInput" placeholder="Enter Your Prefer Timing" />
                </div>

                <div>
                  <button type="submit" className="btn btn-primary">Pay</button>
                </div>

              </div>
            </form>
          </div>

          <div className="PlanData" style={ {backgroundColor: "#18181b"}} >
            <center><h3 className='mt-3'>User Info</h3></center>
            <div className="jstflex">
              <div className="infoONE">
                <div className="rowinfo"><h5> Name:</h5><h5>Atharva k</h5></div>
                <div className="rowinfo"><h5>Gym id Number:</h5><h5>M786</h5></div>
                <div className="rowinfo"><h5>Contact:</h5><h5>7756808374</h5></div>
                <div className="rowinfo"><h5>Gender:</h5><h5>Male</h5></div>
                <div className="rowinfo"><h5>Timing:</h5><h5>Morning 5-7</h5></div>
              </div>

              <div className="infoTWO" style={{ marginLeft: '60px' }}>
                <div className="rowinfo"><h5>Package Duration:</h5><h5 style={{ color: 'yellow' }}>6 month</h5></div>
                <div className="rowinfo"><h5>Start Time:</h5><h5>1/1/2024</h5></div>
                <div className="rowinfo"><h5>End Time:</h5><h5>30/6/2024</h5></div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </LocomotiveScrollProvider>
  )
}

export default Dashboard;
