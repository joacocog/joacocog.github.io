import "./HeroStyles.css";
import React from 'react';
import HeroBg from "../assets/hero-bg.jpg";

const HeroImage = () => {
  return (
    <div className="hero" id="home">
        <div className="hero-bg">
            <img className="hero-image" src={HeroBg} alt="hero-img" />
        </div>
        <div className="content">
            <p>HI, I'M <span className="span">JOAQUIN</span></p>
            <h1>FULL STACK DEVELOPER</h1>
            <div>
                <a href="#work" className="btn">View my work</a>
            </div>
        </div>
    </div>
  )
}

export default HeroImage