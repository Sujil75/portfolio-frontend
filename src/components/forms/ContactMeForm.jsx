import React, {useState} from 'react'

import {icons} from '../../assets/icons.js'
import useViewerContact from '../../hooks/useViewerContact.jsx';

function ContactMeForm({viewerTypes, setMessage}) {
  const {DropDownIcon} = icons;
  const [recruiterBtn, setRecruiterBtn] = useState(false)
  const [recruiter, setRecruiter] = useState(viewerTypes[0].type)
  const [viewerName, setViewerName] = useState("")
  const [viewerMail, setViewerMail] = useState("")
  const [viewerSubject, setViewerSubject] = useState("")
  const [viewerMessage, setViewerMessage] = useState("")
  const {contactData} = useViewerContact()

  async function contactFormSubmit(e, name, mail, type, subject, message) {
    e.preventDefault()

    const newData = {
        name: name?.trim(),
        mail: mail?.trim(),
        type,
        subject: subject?.trim(),
        message: message?.trim(),
    }

    if (!newData.name || !newData.mail || !newData.subject || !newData.message) {
        return setMessage("Please, complete all the required fields")
    }

    const result = await contactData(newData)
    setMessage(result.message)
  }

  return (
    <form className='form-container' onSubmit={(e) => contactFormSubmit(e, viewerName, viewerMail, recruiter, viewerSubject, viewerMessage)}>
        <div className='form-row-container'>
            <h4>Details</h4>

            <div>
                <label htmlFor='viewerName'>Name</label>
                <input id='viewerName' value={viewerName} onChange={(e) => setViewerName(e.target.value)} />
            </div>

            <div>
                <label htmlFor='viewerEmail'>Email</label>
                <input id='viewerEmail' value={viewerMail} onChange={(e) => setViewerMail(e.target.value)} />
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

                <input id='viewerSubject' value={viewerSubject} onChange={e =>  setViewerSubject(e.target.value)} />
            </div>

            <div>
                <label htmlFor='viewerMsg'>Message</label>

                <textarea id='viewerMsg' value={viewerMessage} onChange={e => setViewerMessage(e.target.value)} />
            </div>

            <button 
                type='submit' 
                className='contact-me-form-submit-btn'
            >Submit</button>
        </div>
    </form>
  )
}

export default ContactMeForm