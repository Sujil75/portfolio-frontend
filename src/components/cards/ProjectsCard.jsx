import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

function ProjectsCard({projectsData}) {
  return (
    <section>
        <Swiper
            modules={[Autoplay]}
            loop={true}
            speed={3000}
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 1500,
                disableOnInteraction: true,
            }}
            className='projects-swiper'
            breakpoints={{
                0: {
                    slidesPerView: 1,
                    spaceBetween: 60,
                },
                768: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                }
            }}
        >
            {
                projectsData.map(edu => (
                    <SwiperSlide key={edu.id}>
                        <div className="projects-card">
                            <img src='' className='project-img' />
                            
                            <div className='project-card-content'>
                                <h3>{edu.name}</h3>
                                <h4>{edu.languages}</h4>
                                <span>{edu.framework}</span>
                                <p>{edu.description}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    </section>
  )
}

export default ProjectsCard