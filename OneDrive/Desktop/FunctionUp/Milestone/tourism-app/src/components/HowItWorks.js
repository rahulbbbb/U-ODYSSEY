import React,{useState} from 'react'
import workapi from '../API/workApi';

const HowItWorks = () => {
   const[workData, setWorkData]=useState(workapi);
  return (
    <>
    <div className="work-container container">
        <h1 className="main-heading text-center">Attractions Uttarakhand Offered</h1>
        <div className="row">
            {workData.map((item)=>{
                const{image,name,Description}=item
                return(
                    <>
                      <div className="col-12 col-lg-4 text-center work-container-subdiv">
                      <img src={item.image} />
                      
                      <h1>{name}</h1>
                      <p className="main-hero-para w-100">{Description}</p>
                      </div>
                    </>
                )
            })}
            
        </div>
    </div>
    </>
  )
}

export default HowItWorks