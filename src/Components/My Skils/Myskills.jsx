import "./Myskills.css";
import Skillcard from "../Skill Card/Skillcard";
import Html from "../../pic/html.png";
import Nodejs from "../../pic/nodejs.png";
import Javascript from "../../pic/javascript.jpg";
import Reactlogo from "../../pic/react.png";
import Mongodb from "../../pic/mongodb.png";
import Resume from "./resume.pdf";

import React from "react";
import { themeContext } from "../../Context";
import { useContext } from "react";

const Myskills = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div className="skills" id="Myskills">
      <div className="skills-left">
        <span>My Awesome</span>
        <span>Skills</span>
        <span style={darkMode ? { color: "white" } : null}>
          I'm a passionate university graduate with a hard working personality
          and also a web developer with ability to learn and colloborate in
          rapidly changing environments and compositions.Worked through 1000+
          hours of learning Javascript,React & Node. Eager to tackle web
          development to achieve lasting impacts on user expeirience.
        </span>
        <a href={Resume} download>
          <button className="button download-cv">Download CV</button>
        </a>
      </div>

      <div className="skills-right">
        <div className="item-skill item1">
          <Skillcard
            image={Reactlogo}
            skill="React.js"
            aboutSkill="React is a declarative, efficient, and flexible JavaScript library for building user interfaces."
            learnMore="https://www.w3schools.com/html/default.asp"
          />
        </div>

        <div className="item-skill item2">
          <Skillcard
            image={Nodejs}
            skill="Node.js"
            aboutSkill="Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine."
            learnMore="https://www.w3schools.com/html/default.asp"
          />
        </div>

        <div className="item-skill item3">
          <Skillcard
            image={Javascript}
            skill="Javascript"
            aboutSkill="JavaScript is a scripting or programming language that allows you to implement complex features on web pages"
            learnMore="https://www.w3schools.com/html/default.asp"
          />
        </div>

        <div className="item-skill item4">
          <Skillcard
            image={Html}
            skill="HTML & CSS"
            aboutSkill="HTML is the standard markup language for creating Web pages."
            learnMore="https://www.w3schools.com/html/default.asp"
          />
        </div>

        <div className="item-skill item5">
          <Skillcard
            image={Mongodb}
            skill="MongoDB"
            aboutSkill="MongoDB is a document database with the scalability and flexibility that you want with the querying and indexing that you need."
            learnMore="https://www.w3schools.com/html/default.asp"
          />
        </div>
      </div>
    </div>
  );
};

export default Myskills;
