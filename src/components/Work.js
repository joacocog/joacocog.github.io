import './ProjectCardStyles.css';
import './WorkStyles.css';
import ProjectCard from './ProjectCard';
import ProjectCardData from './ProjectCardData';

import React from 'react';

const Work  = () => {
  return (
    <div className='work-container' id='work'>
        <h1>Stuff I've done</h1>
        <div className='project-container'>
            {ProjectCardData.map((val, index) =>{
              return(
                <ProjectCard 
                key={index}
                imgsrc={val.imgsrc}
                title={val.title}
                text={val.text}
                view={val.view}
                source={val.source}
                />
              )
            })}
        </div>
    </div>
  )
}

export default Work 