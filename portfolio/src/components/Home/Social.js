import React from 'react'
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";




const Social = () => {
    return (
        <div className='home__social'>
            <a href="https://github.com/rahulbbbb/rahulbbbb/new/main?filename=README.md&path=%2F&value=-+%F0%9F%91%8B+Hi%2C+I%E2%80%99m+%40rahulbbbb%0A-+%F0%9F%91%80+I%E2%80%99m+interested+in+...%0A-+%F0%9F%8C%B1+I%E2%80%99m+currently+learning+...%0A-+%F0%9F%92%9E%EF%B8%8F+I%E2%80%99m+looking+to+collaborate+on+...%0A-+%F0%9F%93%AB+How+to+reach+me+...%0A%0A%3C%21---%0Arahulbbbb%2Frahulbbbb+is+a+%E2%9C%A8+special+%E2%9C%A8+repository+because+its+%60README.md%60+%28this+file%29+appears+on+your+GitHub+profile.%0AYou+can+click+the+Preview+link+to+take+a+look+at+your+changes.%0A---%3E%0A" className='home__social-icon' target='_blank' rel="noreferrer">
              <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/rahul-singh-683739231/" className='home__social-icon' target='_blank' rel="noreferrer">
           <CiLinkedin />
            </a>
            <a href="https://www.instagram.com/being_bankoti/" className='home__social-icon' target='_blank' rel="noreferrer">
                <FaInstagram />
            </a>
        </div>
     )
}

export default Social;