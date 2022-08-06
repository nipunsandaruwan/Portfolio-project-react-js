import React from 'react'
import './Skillcard.css'

import { themeContext } from '../../Context'
import { useContext } from 'react'

const Skillcard = ({image,skill,aboutSkill,learnMore}) => {
  
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="skill-card">
        <img src={image} alt="" />
        <span className="skill-name">{skill}</span>
        <span className="about-skill" style={darkMode ? {color:"white"}: null}>{aboutSkill}</span>

        <a href={learnMore} target="_blank">
            <button className='button'>Learn More</button>
        </a>
    </div>
  )
}

export default Skillcard
