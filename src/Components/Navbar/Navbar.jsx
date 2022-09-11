import React, { useState } from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";

import { Link } from "react-scroll";

const Navbar = () => {
  const [menuBar, setMenuBar] = useState(false);

  const handleMenu = () => {
    setMenuBar(!menuBar);
  };
  return (
    <div className="n-wrapper" id="Navbar">
      <div className="n-left">
        <div className="n-name">Nipun Sandaruwan</div>
        <Toggle />
      </div>
      <div className="hamburger" onClick={handleMenu}>
        {!menuBar && <span></span>}
        <span></span>
        {!menuBar && <span></span>}
      </div>
      {menuBar && (
        <div className="hamburgerMenu-body" onClick={(e) => setMenuBar(false)}>
          <ul>
            <Link spy={true} to="Myskills" smooth={true}>
              <li onClick={(e) => setMenuBar(false)}>Skills</li>
            </Link>
            <Link spy={true} to="Portfolio" smooth={true}>
              <li
                style={{ whiteSpace: "nowrap" }}
                onClick={(e) => setMenuBar(false)}
              >
                Projects
              </li>
            </Link>
            <Link spy={true} to="ContactMe" smooth={true}>
              <li
                style={{
                  fontSize: "28px",
                  color: "#eb0000",
                  whiteSpace: "nowrap",
                }}
                onClick={(e) => setMenuBar(false)}
              >
                Contact Me
              </li>
            </Link>
          </ul>
        </div>
      )}

      <div className="n-right">
        <div className="n-list">
          <ul>
            <Link spy={true} to="Navbar" smooth={true}>
              <li>Home</li>
            </Link>

            <Link spy={true} to="Myskills" smooth={true}>
              <li>Skills</li>
            </Link>

            <Link spy={true} to="Portfolio" smooth={true}>
              <li>Portfolio</li>
            </Link>

            <Link spy={true} to="ContactMe" smooth={true}>
              <li style={{ whiteSpace: "nowrap" }}>Contact Me</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
