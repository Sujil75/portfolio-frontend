import React from 'react'

import ContactMeForm from '../../components/forms/ContactMeForm';
import ContactMeDetailsCard from '../../components/cards/ContactMeDetailsCard';
import { ViewerTypes } from '../../data/ViewerType';
import './ContactMe.css'

function ContactMe({portfolio}) {
    const contactDetails = portfolio?.contact

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

                    <ContactMeForm viewerTypes={ViewerTypes} />
                </div>

                {contactDetails !== undefined && <ContactMeDetailsCard contactDetails={contactDetails} />}
            </div>
        </div>
    </section>
    )
}

export default ContactMe