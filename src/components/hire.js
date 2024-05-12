import React from "react";
import {
  FaGithub,
  FaInstagram,
  FaWhatsapp,
  FaTelegram,
} from "react-icons/fa6";
import { MdContactMail } from "react-icons/md";

const Hire = () => {
  return (
    <>
      <div>
        <div className="hire">
          <br />
          <h1> contact me </h1>
          <div className="container">
            <div className="contact-logo">
            <div className="worktogether">
                 <MdContactMail className="contact-mail"/>
                <h4>lets work together</h4>

            </div>
              <br />
              {/* <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eligendi et repellat unde ducimus magnam, quo nobis necessitatibus in recusandae sapiente accusantium est nemo expedita voluptatum excepturi explicabo dolores! Quidem, voluptas?</p> */}
              <p>
                A great Leader will identify the root cause of the ‘stressors,’
                develop and implement a solution to overcome them.
              </p>
              <br />
              <div className="social">
                <div className="icons">
                <a href="https://github.com/kajal1verma" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                {/* <FaGithub /> */}
                </div>
                <div className="icons">
                  {/* <FaInstagram /> */}
                <a href="https://www.instagram.com/kv4555kajal" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                </div>
                <div className="icons">
                  {/* <FaWhatsapp /> */}
                  <a href="https://wa.me/9027174819" target="_blank" rel="noopener noreferrer"><FaWhatsapp /></a>

                </div>
                <div className="icons">
                  {/* <FaTelegram /> */}
               <a href="https://t.me/@kajal5219" target="_blank" rel="noopener noreferrer"><FaTelegram /></a>

                </div>
              </div>
            </div>
            <div className="form">
              <h2>write me a massage</h2>
              <br />
              <form action="https://formspree.io/f/mdoqjkwj" method="POST">
                <label htmlFor=""> your name</label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  autoComplete="off"
                  required
                />
                <label htmlFor="">your email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  autoComplete="off"
                  required
                />
                <label htmlFor="">phone</label>
                <input type="number" name="phone number"
                  placeholder="phone number"
                  autoComplete="off"
                  required />
                <label htmlFor="">message</label>
                <textarea
                  name="message"
                  placeholder="massage"
                  autoComplete="off"
                  required
                  rows={10}
                  
                  id=""
                ></textarea>
                <br />
             

                <input className="send" type="submit" value="send" />

                
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hire;
