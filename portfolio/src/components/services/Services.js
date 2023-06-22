import React,{useState} from 'react'
import './service.css'
import { MdMiscellaneousServices } from "react-icons/md";
import { GrClose } from "react-icons/gr";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { CgCodeSlash } from "react-icons/cg";

const Service = () => {

    const [toggleState, setToggleState] = useState(0)

    const toggleTab = (index) =>{
        setToggleState(index)
        console.log(setToggleState(index))
    }

    return (
        <section className='services section' id="services">
            <h2 className='section__title'>Services</h2>
            <span className='section__subtitle'>What i offer</span>

            <div className='services__container container grid'>
                <div className='services__content'>
                    <div>
                        <MdMiscellaneousServices className='services__icon'></MdMiscellaneousServices>
                        <h3 className='services__title'>Website <br /> Developer</h3>
                    </div>

                    <span className='services__button' onClick={() => toggleTab(1)}>View More 
                    <BsFillArrowRightCircleFill className='services__button-icon'></BsFillArrowRightCircleFill></span>
                    <div className={toggleState === 1 ?  'services__modal active__modal ' : "services__modal" } >
                        <div className='services__modal-content'>
                            <GrClose className='services__modal-close' onClick={() => toggleTab(0)}></GrClose>

                            <h3 className='services__modal-title'>Website Developer</h3>
                            <p className='services__modal-description'>Service with more than 1 years of experience. Providing quality work to clients and companies</p>
                            <ul className='services__modal-services grid'>

                                <li className='services__modal-service'>                    
                                        <p className='services__modal-info'>I develop the user interface</p>
                                </li>


                                <li className='services__modal-service'>
                                        <p className='services__modal-info'>I Build reusable code and libraries</p>
                                </li>


                                <li className='services__modal-service'>                             
                                        <p className='services__modal-info'>I position your company brand</p>
                                </li>


                                <li className='services__modal-service'>                      
                                        <p className='services__modal-info'>Design and mockups of products for companies</p>                                
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className='services__content'>
                    <div>
                        <CgCodeSlash className='services__icon'></CgCodeSlash>
                        <h3 className='services__title'>Responsive <br /> Designer</h3>
                    </div>

                    <span className='services__button'  onClick={() => toggleTab(2)}>View More 
                    <BsFillArrowRightCircleFill className='services__button-icon'></BsFillArrowRightCircleFill></span>
                    <div className={toggleState === 2 ?  'services__modal active__modal ' : "services__modal" } >
                        <div className='services__modal-content'>
                            <GrClose className='services__modal-close' onClick={() => toggleTab(0)}></GrClose>

                            <h3 className='services__modal-title'>Responsive Designer</h3>
                            <p className='services__modal-description'>Service with more than 1 years of experience. Providing quality work to clients and companies</p>
                            <ul className='services__modal-services grid'>
                                <li className='services__modal-service'>
                                    <i className='uil uil-check-circle services__modal-icon'>
                                        <p className='services__modal-info'>I develop the user interface</p>
                                    </i>
                                </li>

                                <li className='services__modal-service'>
                                    <i className='uil uil-check-circle services__modal-icon'>
                                        <p className='services__modal-info'>I Build reusable code and libraries for future use</p>
                                    </i>
                                </li>

                                <li className='services__modal-service'>
                                    <i className='uil uil-check-circle services__modal-icon'>
                                        <p className='services__modal-info'>I position your company brand</p>
                                    </i>
                                </li>

                                <li className='services__modal-service'>
                                    <i className='uil uil-check-circle services__modal-icon'>
                                        <p className='services__modal-info'>Design and mockups of products for companies</p>
                                    </i>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                
                {/* <div className='services__content'>
                    <div>
                        <i className='uil uil-web-grid services__icon'></i>
                        <h3 className='services__title'>Product <br /> Designer</h3>
                    </div>

                    <span className='services__button'>View More 
                    <i className='uil uil-arrow-right services__button-icon'></i></span>
                    <div className='services__modal'>
                        <div className='services__modal-content'>
                            <i className='uil uil-times services__modal-close'></i>

                            <h3 className='services__modal-title'></h3>
                            <p className='services__modal-description'>Service with more than 1 years of experience. Providing quality work to clients and companies</p>
                            <ul className='services__modal-services grid'>
                                <li className='services__modal-service'>
                                    <i className='uil uil-check-circle services__modal-icon'>
                                        <p className='services__modal-info'>I develop the user interface</p>
                                    </i>
                                </li>

                                <li className='services__modal-service'>
                                    <i className='uil uil-check-circle services__modal-icon'>
                                        <p className='services__modal-info'>I Build reusable code and libraries for future use</p>
                                    </i>
                                </li>

                                <li className='services__modal-service'>
                                    <i className='uil uil-check-circle services__modal-icon'>
                                        <p className='services__modal-info'>I position your company brand</p>
                                    </i>
                                </li>

                                <li className='services__modal-service'>
                                    <i className='uil uil-check-circle services__modal-icon'>
                                        <p className='services__modal-info'>Design and mockups of products for companies</p>
                                    </i>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div> */}
            </div>
        </section>
    )
}

export default Service