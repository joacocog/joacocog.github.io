import "./FooterStyles.css";
import { Link } from "react-router-dom";
import {FaLinkedin, FaGithubSquare} from "react-icons/fa";

import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-content">
            <div className="side">
                <a href="https://www.linkedin.com/in/joaquin-cognigni"><FaLinkedin /></a>
                <a href="https://github.com/joacocog"><FaGithubSquare /></a>
            </div>
            <Link to="mailto:joacocog@icloud.com"><h2>joacocog@icloud.com</h2></Link>
        </div>
    </div>
  )
}

export default Footer