import React from 'react'
import Navbar from './components/nav';

// import Nav from './filternav';
import { Routes, Route } from 'react-router-dom';
import Project from './components/project';
// import Experience from './components/Experience';
import './css/style.css'
const App = () => {
  
  return (
     <>
      {/* <Nav /> */}
      {/* <Main/>
      <About/>
      <ExperienceList/>
   <Skills/>
   <Project/> 
<Contact/> */}

      <Navbar />
{/* <Routes>
     
        <Route  path="/" element={<Main/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/experiencelist" element={<ExperienceList/>} />
        <Route path="/skills" element={<Skills/>} />
        {/* <Route path="/services" component={Services} /> */}
        {/* <Route path="/contact" element={<Contact/>} /> */}
      
    {/* </Routes>  */}


     </>
  )
}

export default App