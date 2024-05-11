import React from 'react'
// import portfolio from "../images/portfolio.png";

const ProjectList = ({project}) => {
  return (
    <>
        <div className="project">
        <div className="project-heading">
        <div className="flex-heading">
            <h1 className='left' > my</h1>
            <h1 className='right'>projects</h1>

        </div>

        </div>
        <div className="project-detail">
        {
            project.map((ele)=>{
                return(
                    <>
                    <div className="project-list">
                <h2>project-name : <span>  {ele.name}</span> </h2>
                <div className="flex-list">
                <div className="project-screen-shot">
                    <img src={ele.image} alt="" />
                </div>
                <div className="project-list-detail">
                    <p> <b>description : </b> <span> {ele.description}</span> </p><br />
                    <h3>techlogogy used: <span>{ele.technology}</span></h3>
                </div>
                </div>
            </div>

                    </>
                )
            })
        }
        {/* <img src="home.png" alt="" /> */}
           
            
        </div>          
              
        </div>
    </>
  )
}

export default ProjectList