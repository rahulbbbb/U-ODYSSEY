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
                <a href="https://github.com/rahulbbbb/rahulbbbb/new/main?filename=README.md&path=%2F&value=-+%F0%9F%91%8B+Hi%2C+I%E2%80%99m+%40rahulbbbb%0A-+%F0%9F%91%80+I%E2%80%99m+interested+in+...%0A-+%F0%9F%8C%B1+I%E2%80%99m+currently+learning+...%0A-+%F0%9F%92%9E%EF%B8%8F+I%E2%80%99m+looking+to+collaborate+on+...%0A-+%F0%9F%93%AB+How+to+reach+me+...%0A%0A%3C%21---%0Arahulbbbb%2Frahulbbbb+is+a+%E2%9C%A8+special+%E2%9C%A8+repository+because+its+%60README.md%60+%28this+file%29+appears+on+your+GitHub+profile.%0AYou+can+click+the+Preview+link+to+take+a+look+at+your+changes.%0A---%3E%0A" className='footer__social-icon' target='_blank' rel="noreferrer">
                <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/rahul-singh-683739231/" className='footer__social-icon' target='_blank' rel="noreferrer">
                <CiLinkedin />
                </a>
                <a href="https://www.instagram.com/being_bankoti/" className='footer__social-icon' target='_blank' rel="noreferrer">
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