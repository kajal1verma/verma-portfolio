import React, { useState } from 'react';
import Main from './home';
import About from './about';


// import Contact from './contact';
import ExperienceList from './experiencelist';
import Project from './project';
import { Link } from 'react-scroll';
import Hire from './hire';



// import {NavLink} from 'react-router-dom'
const Navbar = () => {
    const [active, setactive] = useState('nav-menu');
//    const [select ,setselect] = useState(Nav)
    const toggleNavbar = () => {
        active === 'nav-menu' ? setactive('nav-menu nav-active'): setactive('nav-menu')
    };
    
    return (
       <>
        <nav className='nav'>
        {/* <h1>sssss</h1> */}
        <a href="" className="logo">kajal verma </a>
<ul className={active}>
    <li className="nav-item"><Link  to='home' activeClass="active" spy={true} offset={-40} duration={500} smooth={true}  >home </Link> </li>
    <li className="nav-item"><Link to='about' offset={-40} spy={true}  duration={500} smooth={true}>about </Link> </li>
    <li className="nav-item"><Link to='experiencelist' offset={-40} spy={true} duration={500} smooth={true}>experience </Link> </li>
    <li className="nav-item"><Link to='project'  offset={-40} spy={true}  duration={500} smooth={true}>projects</Link> </li>
    <li className="nav-item"><Link  to='hire'  spy={true} offset={-40} duration={500} smooth={true}  >contact  </Link> </li>
    {/* <li className="nav-item"><Link to='project'  offset={60} spy={true}  duration={500} smooth={true}>projects</Link> </li> */}

    {/* <li className="nav-item"><Link to ='contact' offset={60} spy={true}  duration={500} smooth={true}>contact </Link> </li> */}

    {/* <li className="nav-item"><a  href="" className="">experience</a></li>
    <li className="nav-item"><a href="" className="">skills</a></li>
    <li className="nav-item"><a href="" className="">home</a></li>
    <li className="nav-item"><a  href="" className="">contact</a></li> */}

</ul>
<div onClick={toggleNavbar} className="nav-toggal">
    <div className="line1"></div>
    <div className="line2"></div>
    <div className="line3"></div>
</div>
        </nav>
        <Main/>
        <About/>
    <ExperienceList/>
<Project/>   
<Hire/>
       </>
    );
}

export default Navbar;