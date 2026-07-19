import React from 'react'

import {Swiper, SwiperSlide} from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import "swiper/css";


function EducationCard({educationData}) { /* educationList */
  return (
    <section className='swiper-section'>
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
            breakpoints={{
                0: {
                    slidesPerView: 1
                },
                768: {
                    slidesPerView: 3
                }
            }}
        >
            {
                educationData.map(edu => (
                    <SwiperSlide key={edu.id}>
                        <div className="education-card">
                            <h3>{edu.name}</h3>
                            <h4>{edu.institute}</h4>
                            <span>{edu.issuedOn}</span>
                            <p>{edu.brief}</p>
                        </div>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    </section>
  )
}

export default EducationCard