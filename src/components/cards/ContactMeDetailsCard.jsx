import React from 'react'

function ContactMeDetailsCard({contactDetails}) {
  return (
    <ul className='contact-me-list'>
        {
            contactDetails.map(item => (
                <li key={item.id}>
                    <a
                        href={item.link}
                        target='_blank'
                        className='contact-content'
                    ><img src={item.logo} alt={item.name} className='contact-img' /></a>
                </li>
            ))
        }
    </ul>
  )
}

export default ContactMeDetailsCard