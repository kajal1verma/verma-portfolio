import React, { useState } from "react";
import home from "../images/home.jpg";
import AcadmicCard from "./AcadmicCard.js";
import AcadmicData from '../api/acadmic'
const About = ({select}) => {
  const  [acadmic, setacadmic] = useState(AcadmicData)
  return (
    <>
      <div className="about">
        <div className="about-logo">
          <img src={home} alt="" />
        </div>
        <div className="about-myself">
          <h1>
           
            about <span>me</span>
          </h1>
          <p className="paragraph">
            I am Front End Developer with 3 years of experience working with
            javascript,HTML,CSS to deliver exceptional customer experiences. I
            have a strong technical background in HTML, CSS, JavaScript and
            other related technologies. I have extensive experience in
            developing user interfaces for web applications and creating
            visually appealing websites. My greatest strengths include
            problem-solving, creativity, attention to detail and excellent
            interpersonal communication skills. I have successfully implemented
            various projects for clients in the past such as building custom
            dashboards for web applications and designing intuitive user
            interfaces. My biggest achievements include leading development
            teams in creating high-performance websites that have also won
            awards for their design quality. I am a motivated self-starter with
            a passion for creating high-quality products that meet customer
            needs.
          </p>
          <AcadmicCard acadmic={acadmic}/>
          
        </div>
      </div>
    </>
  );
};

export default About;
