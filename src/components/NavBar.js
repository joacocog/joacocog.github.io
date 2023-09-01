import "./NavBarStyles.css";
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import {FaBars, FaTimes} from "react-icons/fa";

const NavBar = () => {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const [color, setColor] = useState(false);
    const changeColor = () => {
        if(window.scrollY >=100){
            setColor(true);
        }else{
            setColor(false); 
        }
    }

    window.addEventListener("scroll", changeColor);


  return (
    <div className={color ? "header header-bg" : "header"}>
        <Link to="mailto:joacocog@icloud.com"><h2>joacocog@icloud.com</h2></Link>
        <ul className={click ? ("nav-menu active") : ("nav-menu")}>
            <li>
                <a href="#home">Home</a>
            </li>
            <li> 
                <a href="#about">About me</a>
            </li>
            <li>
                <a href="#skills">Skills</a>
            </li>
            <li>
                <a href="#work">Work</a>
            </li>
            <li>
                <a href="#contact">Contact Me</a>
            </li>  
        </ul>
        <div className="burguer-menu" onClick={handleClick}>
            {click ? (<FaTimes size={20} style={{color: '#fff'}}/>)
            : (<FaBars size={20} style={{color: '#fff'}}/>)}
            
            
        </div>
    </div>
  )
}

export default NavBar