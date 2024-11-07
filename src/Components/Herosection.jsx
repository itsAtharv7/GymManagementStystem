import "../Styles/Herosection.css";
import mainImg from "../Img/gymhero.png";
import jstImg from "../Img/jst.png";

import { useState, useRef } from 'react';
import { Link } from "react-router-dom";
import React from 'react';



function Herosection({ mood }) {

    const containerRef = useRef(null);

    return (
        <>
        
                    <div className="heromain" style={mood ? { backgroundColor: '#18181b' } : { background: 'linear-gradient(to right,#5899E2, #FFFF)' }}>
                        <div className="one">
                            <div className="namesec"  style={mood ? { backgroundColor: '#18181b' } : { background: 'linear-gradient(to right,#5899E2, #FFFF)' }}>
                                <h2 className="txt1" style={mood ? { color:'white' } : { color:'black' }}>Unlock Your Strength</h2>
                                <h2 className="txt1" style={mood ? { color:'white' } : { color:'black' }}> Elevate Your Fitness.</h2>
                            </div>

                            <div className="imgsec" style={mood ? { backgroundColor: '#18181b' } : { backgroundColor: '#FFFF' }}>
                                <img src={mainImg} alt="Parking Hero" id="mainimgcss" />
                            </div>
                        </div>

                        
                        <div className="mainbutton"
                            style={mood ? { backgroundColor: '#18181b' } : { backgroundColor: '#FFFF' }}>
                            <Link to="/Dashboard" className="mainBtn">My Info</Link>
                            <Link to='/PricePlan' className="mainBtn">Price Plans</Link>
                            <Link to='/Workout' className="mainBtn">Workout</Link>

                        </div>
                     <div>
                    <center><img src={jstImg} alt="Parking Hero" id="mainimgcss" /></center> 
                     </div>


                        








      <footer className="bg-dark text-light pt-4">
        <div className="container text-center text-md-start">
          <div className="row">
            {/* Company Info */}
            <div className="col-md-4 mb-4">
              <h5 className="text-uppercase">FitnessARC</h5>
              <p>
                MGM gate no 5 , cidco n6 , ch.Sambhajinagar.
              </p>
            </div>
            {/* Links */}
            <div className="col-md-4 mb-4">
              <h5 className="text-uppercase">Links</h5>
              <ul className="list-unstyled">
                <li><a href="#!" className="text-light">Home</a></li>
                <li><a href="#!" className="text-light">About Us</a></li>
                <li><a href="#!" className="text-light">Services</a></li>
                <li><a href="#!" className="text-light">Contact</a></li>
              </ul>
            </div>
            {/* Social Media */}
            <div className="col-md-4 mb-4">
              <h5 className="text-uppercase">Follow Us</h5>
              <ul className="list-unstyled d-flex">
                <li><a href="#!" className="text-light me-3"><i className="bi bi-facebook" /> Facebook</a></li>
                <li><a href="#!" className="text-light me-3"><i className="bi bi-twitter" /> Twitter</a></li>
                <li><a href="#!" className="text-light"><i className="bi bi-instagram" /> Instagram</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-center py-3">
          © 2024 FitnessARC. All rights reserved.
        </div>
      </footer>




                    </div>
        </>
    );
}

export default Herosection;
