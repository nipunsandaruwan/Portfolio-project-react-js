import './Intro.css'
import React from 'react'
import { useState } from 'react'
import { Floatingdiv } from '../Floating Div/Floatingdiv'
import Linkdin from '../../pic/linkedin.png'
import Facebook from '../../pic/Facebook.png'
import Insta from '../../pic/instagram.png'
import Vector1 from '../../pic/Vector1.png'
import Vector2 from '../../pic/Vector2.png'
import Boy from '../../pic/boy.png'
import Thumbup from '../../pic/thumbup.png'
import Crown from '../../pic/crown.png'
import Glassesimoji from '../../pic/glassesimoji.png'

import { themeContext } from '../../Context'
import { useContext } from 'react'

import {motion} from 'framer-motion'

const Intro = () => {

    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    const transition = {duration : 2 , type : 'spring'}

  return (
    <div className='intro'>

        <div className="i-left">
            <div className="i-name">
                <span>Hi! I'm</span>
                <span>Nipun Sandaruwan</span>
                <span style={darkMode ? {color:'white'}: null}>For now , I'm a frontend developer... <br />
                    I want to become a fullstack developer..!
                </span>
            </div>
            <div className="hire-me">
                <button className="button">Hire Me</button> 
            </div>

            <div className="social-media-icons">
                <img src={Linkdin} alt="" />
                <img src={Facebook} alt="" />
                <img src={Insta} alt="" />
            </div>
        </div>

        <div className="i-right">
            <img src={Vector1} alt="" />
            <img src={Vector2} alt="" />
            <img src={Boy} alt="" />
            <motion.img
                initial={{left:'-300px'}}
                whileInView={{left:'-200px'}}
                transition={transition}
                src={Glassesimoji} alt="" 
            />
        </div>

        <motion.div 
            initial={{right:'100px'}}
            whileInView={{right:'60px'}}
            transition={transition}    
            className="float-item fitem1"
        >
            <Floatingdiv imgUrl={Crown} txt1="Web" txt2="Developer" />
        </motion.div>

        <motion.div 
            initial={{right:'300px'}}
            whileInView={{right:'400px'}}
            transition={transition}
            className="float-item fitem2"
        >
            <Floatingdiv imgUrl={Thumbup} txt1="React.js" txt2="" />
        </motion.div>
        
      
    </div>
  )
}

export default Intro
