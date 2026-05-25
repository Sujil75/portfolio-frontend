import React from 'react'

import {Swiper, SwiperSlide} from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import "swiper/css";


function EducationCard({educationData}) { /* educationList */
  return (
    <section className='education-section'>
        <Swiper
            modules={[Autoplay]}
            slidesPerView={3}
            centeredSlides={true}
            loop={true}
            spaceBetween={30}
            speed={1000}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false
            }}
            className='education-swiper'
        >
            {
                educationData.map(edu => (
                    <SwiperSlide key={edu.id}>
                        <div className="education-card">
                            <h3>{edu.degree}</h3>
                            <h4>{edu.institution}</h4>
                            <span>{edu.year}</span>
                            <p>{edu.description}</p>
                        </div>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    </section>
  )
}

export default EducationCard