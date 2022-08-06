import React from 'react'
import Toggle from '../Toggle/Toggle'
import './Navbar.css' 

import { Link } from 'react-scroll'

const Navbar = () => {
  return (
    <div className="n-wrapper" id='Navbar'>
        <div className="n-left">
              <div className="n-name">Nipun Sandaruwan</div>
              <Toggle />
        </div>

        <div className="n-right">
              <div className="n-list">
                  <ul>
                    <Link spy={true} to='Navbar' smooth={true}>
                          <li>Home</li>
                    </Link>

                    <Link spy={true} to='Myskills' smooth={true}>
                          <li>Skills</li>
                    </Link>

                    <Link spy={true} to='Portfolio' smooth={true}>
                          <li>Portfolio</li>
                    </Link>

                    <Link spy={true} to='ContactMe' smooth={true}>
                          <li>Contact Me</li>
                    </Link>
                  </ul>
              </div>
              
        </div>
        
    </div>
  )
}

export default Navbar
