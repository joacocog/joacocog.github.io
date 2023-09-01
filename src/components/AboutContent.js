import "./AboutContentStyles.css";
import resume from "../assets/JoaquinCognigni-resume.pdf";
import meImage from "../assets/me-image.png";


import React from 'react';

const AboutContent = () => {
  return (
    <div className="about" id="about">
        <h1>A bit about me</h1>
        <div className="about-info">
            <img src={meImage} alt="" />
            <div className="info-text">
                <p className="primary">
                    Proficient in front-end and back-end web development. Enthusiastic about crafting efficient solutions. Eager to contribute to the web industry's growth and explore opportunities in the dynamic realm of video game technology.
                </p>
                <p className="secondary">
                    I'm a self-taught Full Stack Web Developer focusing on backend programming. Infused with creativity, I'm captivated by the programming realm. Currently in Buenos Aires, I'm diving into the world of Computer Engineering through a preparatory course and am set to embark on my formal studies next year.
                </p>
                <a href={resume} download={'JoaquinCognigni-resume'}>
                    <button className="btn">Download Resume</button>
                </a>
            </div>
        </div>
    </div>
  )
}

export default AboutContent

            