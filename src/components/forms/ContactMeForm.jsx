import React, {useState} from 'react'

import {icons} from '../../assets/icons.js'

function ContactMeForm({viewerTypes}) {
  const DropDownIcon = icons.arrDropdown;
  const [recruiterBtn, setRecruiterBtn] = useState(false)
  const [recruiter, setRecruiter] = useState(viewerTypes[0].type)

  return (
    <form className='form-container'>
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
                <div className='viewer-types-button'>
                    <button
                        type='button' 
                        onClick={() => setRecruiterBtn(!recruiterBtn)}
                    >
                        {recruiter}

                        <DropDownIcon size={18} />
                    </button>
                    
                    {recruiterBtn ? (
                        <ul className='viewer-types-options-container'>
                            {viewerTypes.map(each => (
                                <li key={each.id}>
                                    <button
                                        type='button'
                                        onClick={() => (setRecruiterBtn(false), setRecruiter(each.type))}
                                    >{each.type}</button>
                                </li>
                            ))}
                        </ul>) : null
                    }
                </div>
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

            <button type='button' className='contact-me-form-submit-btn'>Submit</button>
        </div>
    </form>
  )
}

export default ContactMeForm