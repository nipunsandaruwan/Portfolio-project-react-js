import "./Portfolio.css";
// import {Swiper,SwiperSlide} from 'swiper/react'
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";

import React, { useState } from "react";
import Projectpic from "../../pic/project.jpg";
import Left from "../../pic/left.png";
import Right from "../../pic/right.png";
import SlideProject from "../Slide Project/SlideProject";
import project1 from "../../pic/project1.png";
import project2 from "../../pic/project2.png";
import project3 from "../../pic/project3.png";

//First you must add swiper npm package to the project (npm add swiper)
const Portfolio = () => {
  const projects = [
    {
      pname: "Portfolio Web Site",
      id: 1,
      description:
        "A personal website was created as my portfolio describing my projects, my skills and mock ups. ",
      pic: project1,
    },
    {
      pname: "Weather App",
      id: 2,
      description:
        "With weather Application the user can search for weather forecast on Any location. The application provides weather status,sunrise-set,temperature max/min wind speed and humidity information hourly and daily.The application is also consists of Celsius to Fahrenheit conversion. The application was created using react and fetch data from openweathermap.org",
      pic: project2,
    },
    {
      pname: "Who wants to be a Millionaire",
      id: 3,
      description:
        "The application who wants to be a millionaire is a duplicate project as who wants to be a millionaire television show project. The application provides different questions to the user. After answering the correct answer user gets rewards and can move to next level. If the user provides incorrect answer the game finishes. User has Only 30s to provide the answer. ",
      pic: project3,
    },
    {
      pname: "Travel Web",
      id: 4,
      description:
        "The travel app was created for the travelers in all around the world. The travelers can add their traveled places through a travler account . This application standards as a social media for travelers to share their traveling experiences with the others. ",
      pic: Projectpic,
    },
  ];

  return (
    <div className="portfolio" id="Portfolio">
      <span>Recent Projects</span>
      <span>Portfolio</span>

      {/* Swiper */}
      <Swiper slidesPerView={1} grabCursor={true} className="portfolio-slider">
        {projects.map((project) => (
          <SwiperSlide className="slide-item">
            <SlideProject
              key={project.id.toString()}
              project={project}
              projectName={project.pname}
              projectDes={project.description}
              projectImg={project.pic}
              projects={projects}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="next-previous">
        <div className="next-project">
          <span>
            <img src={Left} alt="" />
            slide{" "}
          </span>
          <span>Previous Project</span>
        </div>

        <div className="previous-project">
          <span>
            slide
            <img src={Right} alt="" />
          </span>
          <span>Next Project</span>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
