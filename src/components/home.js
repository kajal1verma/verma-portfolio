import React, { useState } from "react";
import home from "../images/home.jpg";
import ResumeDownloadButton from './ResumeDownloadButton'
import { Link } from 'react-scroll';

import {
  FaGithub,
  FaInstagram,
  FaWhatsapp,
  FaTelegram,
} from "react-icons/fa6";
import {useTypewriter,Cursor} from 'react-simple-typewriter'

const Main = ({}) => {
const [text]= useTypewriter({
  words:['frontend developer','web developer'],
  loop:{},
  typeSpeed:50,
  deleteSpeed:50,
  
})

  return (
    // <div>Main</div>
    <>
      <section>
        <div className="home">
        
         
      
<div className="heading">
<div className="content">

            <h2>hello it's me</h2>
            <h1>kajal verma</h1>
              <p>i'm <b>a</b> <span> {text}</span><span><Cursor/> </span> </p>
            <p>
              i am a front end developer passion about creating interactive
              application and experience on web.
            </p>
            <div className="social-media">
              <div className="icon">
                <a href="https://github.com/kajal1verma" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
              </div>
              <div className="icon">
                <a href="https://www.instagram.com/kv4555kajal" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              </div>
              <div className="icon">
                <a href="https://wa.me/9027174819" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>
              </div>
              <div className="icon">
               <a href="https://t.me/@kajal5219" target="_blank" rel="noopener noreferrer"><FaTelegram /></a>
              </div>
            </div>
            <div className="read-more">
              <a href=""><ResumeDownloadButton /></a>
             

            </div>
            
           
</div>
         
         

          
<div className="image">

            <img className="image" src={home} />
            
</div>
        
</div>
        </div>
      </section>
    </>
  );
};

export default Main;
