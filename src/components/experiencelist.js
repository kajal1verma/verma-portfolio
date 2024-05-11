import React, { useState } from 'react'
import Experience from './Experience'
import ExperienceListApi from '../api/experienceapi'
const ExperienceList = () => {
    const [experience,setexperience]= useState(ExperienceListApi)
  return (
    // <div>ExperienceList</div>
    <Experience experience={experience} />
    
  )
}

export default ExperienceList