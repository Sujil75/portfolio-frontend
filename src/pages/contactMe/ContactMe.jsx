import React from 'react'

import ContactMeForm from '../../components/forms/ContactMeForm';
import ContactMeDetailsCard from '../../components/cards/ContactMeDetailsCard';
import './ContactMe.css'

const viewerTypes = [
    'Recruiters',
    'Hiring Managers',
    'Technical Interviewers',
    'HR Professionals',
    'Startup Founders',
    'CTOs / Engineering Leaders',
    'Potential Clients',
    'Freelance Clients',
    'Collaborators',
    'Open Source Maintainers',
    'Product Managers',
    'Tech Mentors',
    'Networking Connections',
    'Investors (if startup-focused)',
    'Fellow Developers / Peers',
    'Community Members',
    'Hackathon Judges',
    'Internship Evaluators',
    'Agency Recruiters',
    'University / Placement Coordinators'
]

function ContactMe() {
  return (
    <section id='ContactMe' className='pages-container'>
        <div className='glass'></div>

        <div className='contact-me-container'>
            <div className='pages-intro-container'>
                <div className='topic-container'>
                    <strong>
                        Contact Me
                    </strong>
                </div>
                
                <h1>Let's Build <span>Something</span></h1>

                <p>Open to FullStack Roles, Open Collaborations, and Freelance Projects</p>
            </div>

            <div className='contact-actions-container'>
                <div className='viewer-reach-out-form-container'>
                    <h2>Reach Out Directly</h2>

                    <ContactMeForm viewerTypes={viewerTypes} />
                </div>

                <div className='viewer-reach-out-online-container'>
                    <h2>Find Me Online</h2>

                    <ContactMeDetailsCard viewerTypes={viewerTypes} />
                </div>
            </div>
        </div>
    </section>
  )
}

export default ContactMe