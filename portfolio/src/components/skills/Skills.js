import React from 'react'
import './skills.css'
import Frontend from './Frontend'
import Backend from './Backend'

const Skills = () => {
    return (
        <section className="skills section" id="skills">
            <h2 className='section__title'>Skills</h2>
            <span className='section__subtitle'>My Technical Level</span>
            
            <div className='skills__container container grid'>
                <img className="image" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE2L7qPVR_Cp6eAGaNVxUri44VE9d2EchNtw&usqp=CAU" alt=""/>
                <Frontend/>
                <Backend/>
                <img className="image" src="https://devabit.com/uploads/node.js-developers-for-hire-devabit.webp" alt=""/>
            </div>
        </section>
    )
}

export default Skills