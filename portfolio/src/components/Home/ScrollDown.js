import React from 'react'
import { BiDownArrowAlt } from "react-icons/bi";
// assets
 import scroll from '../../assets/scroll.png'

const ScrollDown = () => {
    return (
        <div className='home__scroll'>
            <a href="#about" className='home__scroll-button button--flex'>
                <img   src={scroll} alt="scroll" style={{ width: '50px', height: '50px' }} />
                <span className='home__scroll-name'>Scroll Down</span>
                <BiDownArrowAlt className="home__scroll-arrow"></BiDownArrowAlt>
            </a>
        </div>
    )
}

export default ScrollDown