import React, { useState } from 'react'
import './header.css'
import { GrMenu } from "react-icons/gr";
import { GrFormClose } from "react-icons/gr";

const Header = () => {
    window.addEventListener("scroll",function () {
        const header = document.querySelector(".header");
        if(this.scrollY >= 80) header.classList.add("scroll-header")
        else header.classList.remove("scroll-header")
    })

    const [Toggle, showMenu] = useState(false)
    const [activeNav, setActiveNav] = useState('#home')
    return (
        <header className='header'>
            <div className="nav container">
                <a href="index.html" className='nav__logo'>Rahul Bankoti</a>
                <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list grid">
                        <li className='nav__item'>
                            <a href="#home" 
                                onClick={() => setActiveNav('#home')} 
                                className={activeNav === "#home" ? 'nav__link active-link' : 'nav__link' }>
                                <i class="uil uil-estate nav__icon"></i>Home
                            </a>
                        </li>
                        <li className='nav__item'>
                            <a href="#about" 
                             onClick={() => setActiveNav('#about')} 
                             className={activeNav === "#about" ? 'nav__link active-link' : 'nav__link' }>
                                <i class="uil uil-user nav__icon"></i>About
                            </a>
                        </li>
                        <li className='nav__item'>
                            <a href="#skills" 
                            onClick={() => setActiveNav('#skills')} 
                            className={activeNav === "#skills" ? 'nav__link active-link' : 'nav__link' }>
                                <i class="uil uil-file-alt nav__icon"></i>Skills
                            </a>
                        </li>
                        <li className='nav__item'>
                            <a href="#services"
                            onClick={() => setActiveNav('#services')} 
                            className={activeNav === "#services" ? 'nav__link active-link' : 'nav__link' }>
                                <i class="uil uil-briefcase-alt nav__icon"></i>Projects
                            </a>
                        </li>

                        <li className='nav__item'>
                            <a href="#contact"
                            onClick={() => setActiveNav('#contact')} 
                            className={activeNav === "#contact" ? 'nav__link active-link' : 'nav__link' }>
                                <i class="uil uil-message nav__icon"></i>Contact
                            </a>
                        </li>
                        <GrFormClose  onClick={() => showMenu(!Toggle)} className="close"></GrFormClose>
                    </ul>
                </div>
                <div className='nav__toggle' onClick={() => showMenu(!Toggle)}>
                  <GrMenu />
                </div>
            </div>
        </header>
    )
}

export default Header