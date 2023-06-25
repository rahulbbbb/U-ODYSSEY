import React, {useState} from "react";
//import web from "../src/images/s1.jpg";

import serviceapi from "../API/seviceApi";



const Services = (props) => {
  const[serviceData, setServiceData]=useState(serviceapi)
    return (
      <>
        <section className="service-main-container">
          <div className="container service-container">
            <h1 className="main-heading text-center fw-bold ">Packages We Offer</h1>
            <div className="row">
              {serviceData.map((item)=>{
                const{id, image, title, info}=item;
                return(<>
                    <div className="col-11 col-lg-4 col-xxl-4 work-container-subdiv">
                    <img src={item.image}/>
                <h2 className="sub-heading">{title}</h2>
                <p className="main-hero-para">
                  {info} 
                </p>
              </div>
                </>)
              })}
             
            </div>
          </div>
        </section>
       </>
    )};
  export default Services;
  