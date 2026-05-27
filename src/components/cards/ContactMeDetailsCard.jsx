import React from 'react'

const contactData = [
    {
        id: 1,
        name: "EMAIL",
        alt: "email img",
        img: "",
        content: "mail@gmail.com",
    },{
        id: 2,
        name: "PHONE",
        alt: "phone img",
        img: "",
        content: "1234567890",
    },{
        id: 3,
        name: "STATUS",
        alt: "status img",
        img: "",
        content: "status",
    },
]

function ContactMeDetailsCard() {
  return (
    <ul className='contact-me-list'>
        {
            contactData.map(item => (
                <li>
                    <div className='contact-me-blur-bg'></div>

                    <div className='contact-me-list-content'>
                        <img src={item.img} alt={item.alt} />

                        <div>
                            <h5>{item.name}</h5>
                            <p>{item.content}</p>
                        </div>
                    </div>
                </li>
            ))
        }
    </ul>
  )
}

export default ContactMeDetailsCard