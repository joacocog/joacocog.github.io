import "./AboutContentStyles.css";
import react1 from "../assets/react1.jpg";
import react2 from "../assets/react2.webp";

import React from 'react';
import { Link } from 'react-router-dom'

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who Am I?</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus illum consequatur odit mollitia sed iste maxime soluta aliquam totam quasi. Cupiditate repellendus distinctio, natus exercitationem iste cumque! Enim, debitis molestiae.</p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={react1} className="img" alt="true"/>
                </div>
                <div className="img-stack bottom">
                    <img src={react2} className="img" alt="true"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent