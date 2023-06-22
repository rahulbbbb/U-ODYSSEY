import React from 'react'
import './scrollup.css'
import { BiUpArrowAlt } from "react-icons/bi";

const ScrollUp = () => {
    window.addEventListener("scroll",function () {
        const scrollUp = document.querySelector(".scrollup");
        if(this.scrollY >= 560) scrollUp.classList.add("show-scroll")
        else scrollUp.classList.remove("show-scroll")
    })
    return (
        <a href="#" className='scrollup'>
            <BiUpArrowAlt className="scrollup__icon"></BiUpArrowAlt>
        </a>
    )
}

export default ScrollUp