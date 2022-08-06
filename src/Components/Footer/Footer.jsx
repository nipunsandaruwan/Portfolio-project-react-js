import React from 'react'
import'./Footer.css'
import Wave from '../../pic/wave.png'

import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Facebook from '@iconscout/react-unicons/icons/uil-facebook'
import Linkedin from '@iconscout/react-unicons/icons/uil-linkedin'

//// icon library (npm add @iconscout/react-unicons)
const Footer = () => {
  return (
    <div className='footer'>
      <img src={Wave} alt="" />

      <div className="f-content">
        <span>nipunsandaruwan47@gmail.com</span>
        <div className="f-icons">
          <Insta size='4rem' color='white' />
          <Facebook size='4rem' color='white' />
          <Linkedin size='4rem' color='white' />
        </div>
      </div>
    </div>
  )
}

export default Footer