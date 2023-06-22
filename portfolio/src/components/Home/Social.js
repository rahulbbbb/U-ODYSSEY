import React from 'react'
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";




const Social = () => {
    return (
        <div className='home__social'>
            <a href="https://github.com/ShadmanKhan007/" className='home__social-icon' target='_blank' rel="noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/shadman-khan/" className='home__social-icon' target='_blank' rel="noreferrer">
           <CiLinkedin />
            </a>
            <a href="https://www.instagram.com/shadman-shamshad-khan001/" className='home__social-icon' target='_blank' rel="noreferrer">
                <FaInstagram />
            </a>
        </div>
     )
}

export default Social;