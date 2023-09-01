import "./SkillsCardsStyles.css";
import React from 'react';
import {FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaPhp, FaNode, FaLaravel, FaUnity} from "react-icons/fa";

const SkillsCard = () => {
  return (
    <div className="pricing" id="skills">
        <h1>Skills & Tools</h1>
        <div className="card-container">
            <div className="card">
                <h3>- Frontend -</h3>
                <span className="bar"></span>
                <p className="icons"><FaHtml5 /></p>
                <p className="icons"><FaCss3Alt /></p>
                <p className="icons"><FaJsSquare /></p>
                <p className="icons"><FaReact /></p>
            </div>
            <div className="card" id='backend'>
                <h3>- Backend -</h3>
                <span className="bar"></span>
                <p className="icons"><FaPhp /></p>
                <p className="icon-sql">Sql</p>
            </div>
            <div className="card" id='cl'>
                <h3>- Currently learning -</h3>
                <span className="bar"></span>
                <p className="icons"><FaNode /></p>
                <p className="icons"><FaLaravel /></p>
                <p className="icons"><FaUnity /></p>
            </div>
        </div>
    </div>
  )
}

export default SkillsCard