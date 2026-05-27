import React from 'react'

function ContactMeForm({viewerTypes}) {
  return (
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
  )
}

export default ContactMeForm