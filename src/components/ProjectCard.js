import './ProjectCardStyles.css';

import React from 'react';
import { NavLink } from 'react-router-dom';

const ProjectCard = (props) => {
  return (
    <div className='project-card'>
                <div className="project-info">
                  <img src={props.imgsrc} alt='project1'></img>
                  <h2 className='project-title'>{props.title}</h2>
                  <p className='project-description'>{props.text}</p>
                </div>
                <div className='project-btn'>
                    <NavLink to={props.view} className="btn">View</NavLink>
                    <NavLink to={props.source} className="btn">Source</NavLink>
                </div>
            </div>
  )
}

export default ProjectCard