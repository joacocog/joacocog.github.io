import "./FooterStyles.css";

import {FaFacebook, FaHome, FaLinkedin, FaMailBulk, FaPhone, FaTwitter} from "react-icons/fa";

import React from 'react'

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-content">
            <div className="side">
                <div className="icon">
                    <FaHome size={20} style={{color: "#fff", marginRight: "2rem"}}/>
                    <p>1559 Michigan Ave, Hi</p>
                </div>
                <div className="icon">
                    <FaPhone size={20} style={{color: "#fff", marginRight: "2rem"}}/>
                    <p>786-793-3095</p>
                </div>
                <div className="icon ">
                    <FaMailBulk size={20} style={{color: "#fff", marginRight: "2rem"}}/>
                    <p>joacocog@icloud.com</p>
                </div>
            </div>
            <div className="side">
                <h4>About the Company</h4>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                <div className="social">
                    <FaFacebook size={30} style={{color: "#fff", marginRight: "1rem"}}/>
                    <FaTwitter size={30} style={{color: "#fff", marginRight: "1rem"}}/>
                    <FaLinkedin size={30} style={{color: "#fff", marginRight: "1rem"}}/> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer