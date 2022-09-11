import React from "react";
import "./SlideProject.css";
import Left from "../../pic/left.png";
import Right from "../../pic/right.png";

import { themeContext } from "../../Context";
import { useContext } from "react";

const SlideProject = ({
  projectName,
  projectDes,
  projectImg,
  projects,
  project,
}) => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      className="slide-project"
      key={project.id}
      style={darkMode ? { color: "white" } : null}
    >
      <img src={projectImg} alt="zxcxzc" />
      <span>{projectName}</span>
      <span style={darkMode ? { color: "white" } : null}>{projectDes}</span>
    </div>
  );
};

export default SlideProject;
