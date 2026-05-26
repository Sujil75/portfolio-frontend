import React from 'react'

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
                
                <h1>Let's Build Something</h1>

                <p>Open to FullStack Roles, Open Collaborations, and Freelance Projects</p>
            </div>

            <div className='contact-actions-container'>
                <div className='viewer-action-container'>
                    {/*<div className='viewer-glass'></div>*/}

                    <div className='viewer-reach-out-form-container'>
                        <h2>Reach Out Directly</h2>

                        <form>
                            <div className='form-row-container'>
                                <h4>Details</h4>

                                <div>
                                    <label htmlFor='viewerName'>Name</label>

                                    <input id='viewerName' />
                                </div>

                                <div>
                                    <label htmlFor='viewerEmail'>Email</label>

                                    <input id='viewerEmail' />
                                </div>

                                <div>
                                    <label htmlFor='viewerType'>Who Are you</label>
                                    <select>
                                        {
                                            viewerTypes.map(each => (
                                                <option>{each}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                            </div>

                            <div className='form-row-container'>
                                <h4>Message</h4>

                                <div>
                                    <label htmlFor='viewerSubject'>Subject</label>

                                    <input id='viewerSubject' />
                                </div>

                                <div>
                                    <label htmlFor='viewerMsg'>Message</label>

                                    <textarea id='viewerMsg' />
                                </div>

                                <button type='button'>Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ContactMe