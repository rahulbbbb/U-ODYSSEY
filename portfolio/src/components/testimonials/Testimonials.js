import React from 'react'
import './testimonials.css'
import { Data } from './Data'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";


import { Pagination } from "swiper";

const Testimonials = () => {
    return (
        <section className='testimonial container section'>
            <h2 className='section__title'>My Clients says</h2>
            <span className='section__subtitle'>Testimonial</span>

            <Swiper 
                loop={true}
                grabCursor={true}
                spaceBetween={24}
                pagination={{
                   clickable: true,
                }}
                breakpoints={{
                    576: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 1,
                        spaceBetween: 48,
                    },
                    1024: {
                        slidesPerView: 2,
                        spaceBetween: 50,
                    },
                 }}
                 modules={[Pagination]}
                className='testimonial__container'>
                {Data.map(({id,image,title,description}) => {
                    return(
                        <SwiperSlide className='testimonial__card' key={id}>
                            <img src={image} alt="Testimonial" className='testimonial__img' />

                            <h3 className='testimonial__name'>{title}</h3>
                            <p className='testimonial_description'>{description}</p>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </section>
    )
}

export default Testimonials