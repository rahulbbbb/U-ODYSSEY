import React, {useState} from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { WiDaySunny } from 'react-icons/wi';

const Navbar = () => {
 const[show, setShow]=useState(false);
 const navigate=useNavigate();

 function handleOnClick(){
  navigate('/weather')
 }

  return (
    <>
    <section className="navbar-bg">
      
            <nav className="navbar navbar-expand-lg navbar-light ">
              <div className="container">
              <NavLink exact className="navbar-brand font-weight-bold " to="/home">
                U-ODYSSEY
              </NavLink>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                onClick={()=>setShow(!show)}
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div
                className={`collapse navbar-collapse ${show ? "show" : ""}`}
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <NavLink
                      activeClassName="menu_active"
                      exact
                      className="nav-link"
                      to="/home"
                    >
                      Home <span className="sr-only">(current)</span>
                    </NavLink>
                  </li>
                  

                  <li className="nav-item">
                    <NavLink
                      activeClassName="menu_active"
                      className="nav-link"
                      to="/about"
                    >
                      About
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      activeClassName="menu_active"
                      className="nav-link"
                      to="/service"
                    >
                      Services
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      activeClassName="menu_active"
                      className="nav-link"
                      to="/gallery"
                    >
                      Gallery
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      activeClassName="menu_active"
                      className="nav-link"
                      to="/contact"
                    >
                      Contact
                    </NavLink>
                  </li>
                </ul>
                <button onClick={handleOnClick} className="btn btn-style" type="submit">Weather {<WiDaySunny font-size="35px"/>}</button>
                {/* <button className="btn btn-style btn-style-border" type="submit">Sign Up</button> */}

              </div>
              </div>
            </nav>
        
       
      </section>
    </>
  );
};

export default Navbar;
