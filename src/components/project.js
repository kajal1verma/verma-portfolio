import React, { useState } from 'react'
// import portfolio from "../images/portfolio.png";
import ProjectList from './projectlist'
import ProjectListApi from '../api/projectapi'
const Project = () => {
    const [project ,setproject] = useState(ProjectListApi)
  return (
    // <div>Project</div>
    <>
        <ProjectList project = {project}/>
    </>
  )
}

export default Project