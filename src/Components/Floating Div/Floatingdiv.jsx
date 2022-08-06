import React from 'react'
import './Floatingdiv.css'

import { themeContext } from '../../Context'
import { useContext } from 'react'



export const Floatingdiv = ({imgUrl,txt1,txt2}) => {
  
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  
  return (
    <div className="floating-div" style={darkMode ? {color:'black'}: null}>
        <img src={imgUrl} alt="" />
        <div className="txt">
            <span>{txt1}</span>
            <span>{txt2}</span>
        </div>
        
    </div>
  )
}
