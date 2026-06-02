import React from 'react'

import {icons} from '../../assets/icons.js'

function ContactMeForm({viewerTypes}) {
  const DropDownIcon = icons.arrDropdown;

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
                {/* <select>
                    {
                        viewerTypes.map(each => (
                            <option>{each}</option>
                        ))
                    }
                </select> */}

                <div className='viewer-types-button'>
                    <button>
                        {viewerTypes[0]}

                        <DropDownIcon size={24} />
                    </button>
                    
                    <ul className='viewer-types-options-container'>
                        {viewerTypes.map(each => (
                            <li>{each}</li>
                        ))}
                    </ul>
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

            <button type='button'>Submit</button>
        </div>
    </form>
  )
}

export default ContactMeForm