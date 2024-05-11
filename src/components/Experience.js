import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaPhp,
  FaNodeJs,
  FaGithub,
  FaBootstrap,
  FaPython,
} from "react-icons/fa6";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMysql } from "react-icons/si";
import { DiVisualstudio } from "react-icons/di";
import { LuFileJson } from "react-icons/lu";

import "../css/card.css";

const Experience = ({ experience }) => {
  return (
    <>
      <div className="experience" id="experiencelist">
        <div className="experience-container">
          <div className="content-design">
            <h1 className="left">experience</h1>
            <h1>and</h1>
            <h1 className="right">skills</h1>
          </div>
          {experience.map((ele) => {
            return (
              <>
                <div className="experience-list">
                  <h2 className="green">{ele.project}</h2>
                  <b>{ele.year}</b>
                  {/* <br /> */}
                  <p>{ele.description}</p>
                  <p>{ele.point1}</p>
                  <p>{ele.point2}</p>
                  <p>{ele.point3}</p>
                </div>
              </>
            );
          })}

          <div className="experience-skills">
            <div className="card">
              <div className="card-body">
                <div className="card-detail">
                  <div className="card-heading">
                    <h1>ui/ux</h1>
                  </div>
                  <div className="card-heading-detail">
                    {/* <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim voluptatibus expedita odio harum modi labore qui, obcaecati quod ducimus sapiente amet eaque aut ratione dicta asperiores tenetur nisi ipsum saepe!</p> */}
                    <p>
                      As UI/UX developer i focuses on creating user interfaces
                      and user experiences for a variety of products, such as
                      websites and mobile apps. i combine elements of graphic
                      design, psychology, and engineering to create a product
                      that looks good and is easy and enjoyable to use.
                    </p>
                  </div>
                </div>
              </div>
              <div className="card-body">
                <div className="card-detail">
                  <div className="card-heading">
                    <h1>developer</h1>
                  </div>
                  <div className="card-heading-detail">
                    {/* <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim voluptatibus expedita odio harum modi labore qui, obcaecati quod ducimus sapiente amet eaque aut ratione dicta asperiores tenetur nisi ipsum saepe!</p> */}
                    <p>
                      i Developed and maintained various websites using HTML,
                      CSS, and JavaScript for a duration of 2 years.Collaborated
                      with cross-functional teams to ensure efficient
                      implementation of new features and troubleshooting of any
                      issues.Utilized content management systems and responsive
                      design techniques to optimize user experience on different
                      devices
                    </p>
                  </div>
                </div>
              </div>{" "}
              <div className="card-body">
                <div className="card-detail">
                  <div className="card-heading">
                    <h1>design</h1>
                  </div>
                  <div className="card-heading-detail">
                    {/* <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim voluptatibus expedita odio harum modi labore qui, obcaecati quod ducimus sapiente amet eaque aut ratione dicta asperiores tenetur nisi ipsum saepe!</p> */}
                    <p>
                      i have worked on many designing tools like
                      figma,photoshop,sketch,adobexd. Design tools are software
                      programs or online platforms that allow designers to
                      create digital designs for a variety of purposes. These
                      tools are used in many different fields, including graphic
                      design, web design, product design, and architectural
                      design{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="skills">
              <div className="skill-box">
                <FaHtml5 className="icon" />
                <p>html</p>
              </div>
              <div className="skill-box">
                <FaCss3Alt className="icon" />
                <p>CSS</p>
              </div>
              <div className="skill-box">
                <IoLogoJavascript className="icon" />
                <p>java script</p>
              </div>
              <div className="skill-box">
                <FaReact className="icon" />
                <p>react</p>
              </div>

              <div className="skill-box">
                <FaPhp className="icon" />
                <p>php</p>
              </div>

              <div className="skill-box">
                <SiMysql className="icon" />
                <p>mysql</p>
              </div>
              <div className="skill-box">
                <FaNodeJs className="icon" />
                <p>node js</p>
              </div>
              <div className="skill-box">
                <FaBootstrap className="icon" />
                <p>bootstrap</p>
              </div>
              <div className="skill-box">
                <RiTailwindCssFill className="icon" />
                <p>tailwind css</p>
              </div>

              <div className="skill-box">
                <FaPython className="icon" />
                <p>python</p>
              </div>

              <div className="skill-box">
                <DiVisualstudio className="icon" />
                <p>vs code</p>
              </div>

              <div className="skill-box">
                <LuFileJson className="icon" />
                <p>json</p>
              </div>

              <div className="skill-box">
                <FaGithub className="icon" />
                <p>git/github</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
