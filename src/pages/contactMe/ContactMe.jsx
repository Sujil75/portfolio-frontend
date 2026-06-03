import React from 'react'

import ContactMeForm from '../../components/forms/ContactMeForm';
import ContactMeDetailsCard from '../../components/cards/ContactMeDetailsCard';
import './ContactMe.css'

const viewerTypes = [
  { id: 'RECRUITERS', type: 'Recruiters' },
  { id: 'HIRING_MANAGERS', type: 'Hiring Managers' },
  { id: 'TECHNICAL_INTERVIEWERS', type: 'Technical Interviewers' },
  { id: 'HR_PROFESSIONALS', type: 'HR Professionals' },
  { id: 'STARTUP_FOUNDERS', type: 'Startup Founders' },
  { id: 'CTOS_ENGINEERING_LEADERS', type: 'CTOs / Engineering Leaders' },
  { id: 'POTENTIAL_CLIENTS', type: 'Potential Clients' },
  { id: 'FREELANCE_CLIENTS', type: 'Freelance Clients' },
  { id: 'COLLABORATORS', type: 'Collaborators' },
  { id: 'OPEN_SOURCE_MAINTAINERS', type: 'Open Source Maintainers' },
  { id: 'PRODUCT_MANAGERS', type: 'Product Managers' },
  { id: 'TECH_MENTORS', type: 'Tech Mentors' },
  { id: 'NETWORKING_CONNECTIONS', type: 'Networking Connections' },
  { id: 'INVESTORS', type: 'Investors (if startup-focused)' },
  { id: 'FELLOW_DEVELOPERS_PEERS', type: 'Fellow Developers / Peers' },
  { id: 'COMMUNITY_MEMBERS', type: 'Community Members' },
  { id: 'HACKATHON_JUDGES', type: 'Hackathon Judges' },
  { id: 'INTERNSHIP_EVALUATORS', type: 'Internship Evaluators' },
  { id: 'AGENCY_RECRUITERS', type: 'Agency Recruiters' },
  { id: 'UNIVERSITY_PLACEMENT_COORDINATORS', type: 'University / Placement Coordinators' }
];

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