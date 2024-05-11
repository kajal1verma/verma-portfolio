import React from 'react'

const AcadmicCard = ({acadmic}) => {
  return (
   <>
            <h2 className='education'> education</h2>
           
    <div className="acadmic-detail">
           {
            acadmic.map((ele)=>{
                return(
                    <>


            <div className="acadmic-container">
             
                <h3 className='course-name'>{ele.course}</h3>
                  <p><b>year </b>: {ele.year}</p>  
                  <p><b>course</b> : {ele.coursename} <span>{ele.span}</span></p>  
                  <p><b>college</b> : {ele.college}</p>    
               
            </div>
            
            
                    </>

                )
            })
           }
          </div>
   </>
  )
}

export default AcadmicCard


