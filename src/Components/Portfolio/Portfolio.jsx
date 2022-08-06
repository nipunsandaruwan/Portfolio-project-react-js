import './Portfolio.css'
// import {Swiper,SwiperSlide} from 'swiper/react'
import {Swiper,SwiperSlide} from 'swiper/react'
import { FreeMode } from 'swiper'
import 'swiper/css'
import 'swiper/css/free-mode'


import React from 'react'
import Projectpic from '../../pic/project.jpg'
import Left from '../../pic/left.png'
import Right from '../../pic/right.png'
import SlideProject from '../Slide Project/SlideProject'


//First you must add swiper npm package to the project (npm add swiper)
const Portfolio = () => {

    const projects = [
        { pname : 'Portfolio Web Site',
          id : 1,
          description :'This was created using HTML and CSS and is my own website',
          pic : Projectpic
        },
        { pname : 'Weather App',
          id : 2,
          description :'This was created using HTML and CSS and is my own website',
          pic : Projectpic
        },
        { pname : 'Quiz App',
          id : 3,
          description :'This was created using HTML and CSS and is my own website',
          pic : Projectpic
        },
        { pname : 'Fire Fighting Robot',
          id : 4,
          description :'This was created using HTML and CSS and is my own website',
          pic : Projectpic
        }

          
    ]

  return (
    <div className="portfolio" id='Portfolio'>
        <span>Recent Projects</span>
        <span>Portfolio</span>
          
        {/* Swiper */}
        <Swiper
            
            slidesPerView={1}
            grabCursor={true}
            className="portfolio-slider"
        >
            {projects.map(project => (
                <SwiperSlide className='slide-item'>
                    <SlideProject 
                        key = {project.id .toString()}
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
                     slide </span>
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
  )
}

export default Portfolio
