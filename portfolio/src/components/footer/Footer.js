import React from 'react'
import './footer.css'
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='footer'>
        <div className="footer__container container">
            <h2 className='footer__title'>RAHUL BANKOTI</h2>

            <ul className='footer__list'>
                <li>
                    <a href="#about" className='footer__link'>About</a>
                </li>
                <li>
                    <a href="#portfolio" className='footer__link'>Projects</a>
                </li>
                <li>
                    <a href="#about" className='footer__link'>Testimonials</a>
                </li>
            </ul>

            <div className='footer__social'>
                <a href="https://github.com/ShadmanKhan007" className='footer__social-icon' target='_blank' rel="noreferrer">
                <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/shadman-khan-08205122a/" className='footer__social-icon' target='_blank' rel="noreferrer">
                <CiLinkedin />
                </a>
                <a href="https://www.instagram.com/shadman_shamshad_khan001/" className='footer__social-icon' target='_blank' rel="noreferrer">
                <FaInstagram />
                </a>   
            </div>
            <span className='footer__copy'>
                &#169; Rahul Bankoti. All rights reserved
            </span>
        </div>
    </footer>
  )
}

export default Footer