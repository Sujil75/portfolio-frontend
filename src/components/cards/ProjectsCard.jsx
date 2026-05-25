import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

function ProjectsCard({projectsData}) {
  return (
    <section>
        <Swiper
            modules={[Autoplay]}
            slidesPerView={3}
            loop={true}
            speed={3000}
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: true,
            }}
            className='projects-swiper'
        >
            {
                projectsData.map(edu => (
                    <SwiperSlide key={edu.id}>
                        <div className="projects-card">
                            <h3>{edu.name}</h3>
                            <h4>{edu.languages}</h4>
                            <span>{edu.framework}</span>
                            <p>{edu.description}</p>
                        </div>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    </section>
  )
}

export default ProjectsCard