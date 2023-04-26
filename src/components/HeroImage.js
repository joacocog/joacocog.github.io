import "./HeroStyles.css";
import React from 'react';
import HeroBg from "../assets/hero-bg.jpg";
import { Link } from "react-router-dom";

const HeroImage = () => {
  return (
    <div className="hero">
        <div className="hero-bg">
            <img className="hero-image" src={HeroBg} alt="hero-img" />
        </div>
        <div className="content">
            <p>HI, I'M A FREELANCER.</p>
            <h1>REACT DEVELOPER</h1>
            <div>
                <Link to="/" className="btn">PROJECTS</Link>
            </div>
        </div>
    </div>
  )
}

export default HeroImage