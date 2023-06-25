import React, {useState} from 'react'
import howToUseApp from '../API/howToUse'


const AboutUs = () => {
   const [aboutData, setAboutData]=useState(howToUseApp);
   const [secondSectionData, setSecondSectionData] = useState([
    {
      id: 4,
      title: 'Safety',
      info: ' The safety and well-being of our clients are of paramount importance to us. We adhere to strict safety standards and work with experienced guides and drivers who prioritize the security of our travelers.',
    },
    {
      id: 5,
      title: 'History',
      info: 'With over a decade of experience in organizing tours in Uttarakhand, we have built a strong reputation for delivering exceptional travel experiences. Our journey started with a deep passion for showcasing the beauty and cultural richness of Uttarakhand to the world.',
    },
    {
        id: 6,
        title: 'Expertise',
        info: 'Our team of dedicated travel experts possesses extensive knowledge and expertise in organizing tours in Uttarakhand. We have a deep understanding of the regions geography, cultural nuances, and travel logistics. From designing customized itineraries to providing expert guidance, we ensure that every aspect of your tour is meticulously planned and executed.'
      },
  ]);
  return (
    <>
    <section className="common-section our-services">
        <div className="container mb-5">
            <div className="row">
                <div className="col-12 col-lg-5 text-center our-service-leftside-img">
                    <img src="./Images/imm2.jpg" alt="aboutusImg"/>
                </div>
                 <div className="col-12 col-lg-7 our-services-list">
                    <h3 className="mini-title">
                        --AVAILABLE @ GOOGLE AND IOS APP STORE ONLY
                    </h3>
                    <h1 className="main-heading">ABOUT US</h1>

                    {
                        aboutData.map((items)=>{
                            const{id,title,info}=items;
                            return (
                            <>
                              <div className="row our-services-info" key={id}>
                              <div className="col-1 our-services-number">{id}</div>
                              <div className="col-10 our-services-data">
                              <h2>{title}</h2>
                              <p className="main-hero-para">{info}</p>
                              </div>

                              </div>
                            </>
                            );

                            
                        
                         })}
                   
                    <br/>
                    
                 </div>
            </div>
        </div>

    </section>

    {/* second part of this section */}
   
    
    <section className="common-section our-services our-services-rightside">
        <div className="container mb-5">
            <div className="row">
                
                 <div className="col-12 col-lg-7 our-services-rightside-content d-flex justify-content-center align-items-start flex-column">
                    
                    {
                        secondSectionData.map((items)=>{
                            const{id,title,info}=items;
                            return (
                            <>
                              <div className="row our-services-info" key={id}>
                              <div className="col-1 our-services-number">{id}</div>
                              <div className="col-10 our-services-data">
                              <h2>{title}</h2>
                              <p className="main-hero-para">{info}</p>
                              </div>

                              </div>
                            </>
                            );

                            
                        
                         })}
                   
                    <br/>
                    <button className="btn-style btn-style-border">learn more</button>
                 </div>
                 <div className="col-12 col-lg-5  our-service-rightside-img">
                    <img src="./Images/pg4.webp" alt="aboutusImg"/>
                </div>
            </div>
        </div>

    </section>

    </>
  )
}

export default AboutUs