import { hover } from "@testing-library/user-event/dist/hover";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-10 mx-auto">
              <div className="row">
                <div className="col-6 col-lg-3">
                  <h2>Company</h2>
                  <ul>
                    <li>
                      <a href="#">About Us</a>
                    </li>
                    <li>
                      <a href="#">Contact</a>
                    </li>
                    <li>
                      <a href="#">Our Team</a>
                    </li>
                    <li>
                      <a href="#">Testimonials</a>
                    </li>
                  </ul>
                </div>
                <div className="col-6 col-lg-3">
                  <h2>Support</h2>
                  <ul>
                    <li>
                      <a href="#">Customer Support</a>
                    </li>
                    <li>
                      <a href="#">FAQs</a>
                    </li>
                    <li>
                      <a href="#">Travel Assistance</a>
                    </li>
                    <li>
                      <a href="#">Feedback</a>
                    </li>
                  </ul>
                </div>
                <div className="col-6 col-lg-3">
                  <h2>Services</h2>
                  <ul>
                    <li>
                      <a href="#">Tour Packages</a>
                    </li>
                    <li>
                      <a href="#">Accommodation</a>
                    </li>
                    <li>
                      <a href="#">Transportation</a>
                    </li>
                    <li>
                      <a href="#">Activities and<br/> Attractions</a>
                    </li>
                  </ul>
                </div>
                <div className="col-6 col-lg-3">
                  <h2>Follow Us</h2>
                    <div className="row">
                      <div className="col-3 mx-auto">
                        
                          <i className="fa-brands fa-instagram fontawesome-style" style={{ fontSize: '2rem', cursor:"pointer" }}></i>
                        
                      </div>
                      <div className="col-3 mx-auto">
                        
                          <i className="fab fa-facebook fontawesome-style" style={{ fontSize: '2rem', cursor:"pointer" }}></i>
                       
                      </div>
                      <div className="col-3 mx-auto">
                        
                          <i className="fab fa-youtube fontawesome-style" style={{ fontSize: '2rem', cursor:"pointer" }}></i>
                        
                      </div>
                      <div className="col-3 mx-auto">
                        
                          <i className="fab fa-twitter fontawesome-style" style={{ fontSize: '2rem' , cursor:"pointer"}}></i>
                        
                      </div>
                    </div>
                    
                </div>
              </div>
              <hr/>
              <div className="mt-5">
                <p className="main-hero-para text-center w-100">
                  Copyright @ 2023 U-ODYSSEY. All rights reserved.
                </p>
              </div>
            </div>
          </div>
        </div>
       
      </footer>
    </>
  );
};

export default Footer;
