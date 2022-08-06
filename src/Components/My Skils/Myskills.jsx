import './Myskills.css'
import Skillcard from '../Skill Card/Skillcard'
import Html from '../../pic/html.png'
import Css from '../../pic/css.webp'
import Javascript from '../../pic/javascript.jpg'
import Reactlogo from '../../pic/react.png'
import Angular from '../../pic/angular.jpg'
import Resume from './resume.pdf'

import React from 'react'
import { themeContext } from '../../Context'
import { useContext } from 'react'

const Myskills = () => {

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="skills" id='Myskills'>
        <div className="skills-left">
            <span>My Awesome</span>
            <span>Skills</span>
            <span style={darkMode ? {color:"white"}: null}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa suscipit harum possimus recusandae laboriosam nemo quis mollitia incidunt ad alias! Exercitationem, </span>
            <a href={Resume} download>
                <button className="button download-cv">Download CV</button>
            </a>
        </div>

        <div className="skills-right">
                <div className="item-skill item1">
                        <Skillcard  
                            image={Html} 
                            skill="HTML & CSS" 
                            aboutSkill="HTML is the standard markup language for creating Web pages."
                            learnMore="https://www.w3schools.com/html/default.asp"
                        />
                </div>

                <div className="item-skill item2">
                        <Skillcard  
                            image={Css} 
                            skill="Node.js" 
                            aboutSkill="HTML is the standard markup language for creating Web pages."
                            learnMore="https://www.w3schools.com/html/default.asp"
                        />
                </div>

                <div className="item-skill item3">
                        <Skillcard  
                            image={Javascript} 
                            skill="Javascript" 
                            aboutSkill="HTML is the standard markup language for creating Web pages."
                            learnMore="https://www.w3schools.com/html/default.asp"
                        />
                </div>

                <div className="item-skill item4">
                        <Skillcard  
                            image={Reactlogo} 
                            skill="React.js" 
                            aboutSkill="HTML is the standard markup language for creating Web pages."
                            learnMore="https://www.w3schools.com/html/default.asp"
                        />
                </div>

                <div className="item-skill item5">
                        <Skillcard  
                            image={Angular} 
                            skill="Angular" 
                            aboutSkill="HTML is the standard markup language for creating Web pages."
                            learnMore="https://www.w3schools.com/html/default.asp"
                        />
                </div>
        </div>
    </div>
  )
}

export default Myskills
