import React from "react";
import "./Footer.css";
import Wave from "../../pic/wave.png";
import Linkdin from "../../pic/linkedin.png";
import Facebook from "../../pic/facebook.png";
import Insta from "../../pic/instagram.png";
import Git from "../../pic/github.png";

import { Link } from "react-scroll";

//// icon library (npm add @iconscout/react-unicons)
const Footer = () => {
  return (
    // <div className='footer'>
    //   <img src={Wave} alt="" />

    //   <div className="f-content">
    //     <span>nipunsandaruwan47@gmail.com</span>
    //     <div className="f-icons">
    //       <Insta size='4rem' color='white' />
    //       <Facebook size='4rem' color='white' />
    //       <Linkedin size='4rem' color='white' />
    //     </div>
    //   </div>
    // </div>
    <div id="footer" className="footer">
      <div className="footer-bottom">
        <div className="footert-card paddingtop">
          <p className="address">No 69,</p>
          <p className="address">Shasanajhothi Mw,</p>
          <p className="address">Thelawala Rd,</p>
          <p className="address">Mount Lavinia .</p>
        </div>
        <div className="footert-card display-none marginLrft footerMiddle">
          <Link spy={true} to="Navbar" smooth={true}>
            <p>Home</p>
          </Link>
          <Link spy={true} to="Myskills" smooth={true}>
            <p>My Skills</p>
          </Link>
          <Link spy={true} to="Portfolio" smooth={true}>
            <p>My Projects</p>
          </Link>

          {/* <p>Contact Us</p> */}
        </div>
        <div className="footert-card">
          <p>Social Media</p>
          <div className="icons">
            <img src={Linkdin} alt="" />
            <img src={Facebook} alt="" />
            <img src={Insta} alt="" />
            <img
              style={{ background: "black", borderRadius: "5px" }}
              src={Git}
              alt=""
            />
          </div>
        </div>
      </div>
      <p className="copywright">
        Copyrights © 2022 Nipun Sandaruwan. All Rights Reserved .
      </p>
      {/* <a href="tel:+94758027362">+94 758027 362</a> */}
    </div>
  );
};

export default Footer;
