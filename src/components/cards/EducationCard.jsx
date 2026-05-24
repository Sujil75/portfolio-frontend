import React from 'react'

import {Swiper, SwiperSlide} from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import "swiper/css";

const educationData = [
  {
    id: 1,
    degree: "B.Tech Computer Science",
    institution: "XYZ University",
    year: "2020 - 2024",
    description: "Focused on fullstack development and AI."
  },
  {
    id: 2,
    degree: "Higher Secondary",
    institution: "ABC School",
    year: "2018 - 2020",
    description: "Science stream with mathematics."
  },
  {
    id: 3,
    degree: "Secondary School",
    institution: "DEF School",
    year: "2016 - 2018",
    description: "Foundational academic learning."
  },
  {
    id: 4,
    degree: "Certification in MERN",
    institution: "Online Academy",
    year: "2024",
    description: "Advanced MERN stack specialization."
  }
];


function EducationCard() { /* educationList */
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