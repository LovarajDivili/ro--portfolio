import React, { useState } from 'react'
import './contact.css'

import emailjs from 'emailjs-com'
import Config from '../../config/config'

const Contact = ({ UserData }) => {

    const [emailSuccess, setEmailSuccess] = useState(false)

    let social = UserData.social


    function sendEmail(e) {

        let EmailPopup = document.querySelector('.email-popup')

        e.preventDefault()

        emailjs.init(Config.USER_ID)
        emailjs.sendForm(Config.SERVICE_ID, Config.TEMPLATE_ID, e.target)
            .then(res => {

                EmailPopup.style.transform = 'translateX(0)'
                setTimeout(() => { EmailPopup.style.transform = 'translateX(50rem)' }, 3000)
                setEmailSuccess(true)
            }).catch(err => console.log(err))

    }

    return (
        <section id="contact" className='Contact-section-main'>
            <div className={'email-popup' + (emailSuccess ? ' email-success' : ' email-failed')}>
                {emailSuccess ? ('Email sent successfully🥳!') : ('Email not sent successfully😞!')}
            </div>
            <span class="Contact-section-border"></span>

            <div className="Contact-section-title">
                <h1> Wanna Hire me ? <br />
                    <span className='text-gradient'> Let's Talk!</span>
                </h1>
            </div>
            <div className="Contact-section-items">
                <a href={social.gmail} target={'_blank'}>
                    <div className="Contact-section-item">
                        Gmail
                    </div>
                </a>
                <a href={social.linkedin} target={'_blank'}>
                    <div className="Contact-section-item">
                        Linked In
                    </div>
                </a>
                <a href={social.whatsapp} target={'_blank'}>
                    <div className="Contact-section-item">
                        What's App
                    </div>
                </a>
            </div>
            <span class="Contact-section-border-inner"></span>
            <div className="Contact-section-form">
                <div className="Contact-section-form-content">
                    <span className="Contact-form-content-drop">
                        <i class='bx bx-envelope' ></i>
                    </span>
                    <form onSubmit={sendEmail} >
                        <div className="Contact-section-form-item">
                            <input name='name' type="text" required placeholder='Enter Your Name...' />
                        </div>
                        <div className="Contact-section-form-item">
                            <input name='userEmail' type="text" required placeholder='Enter Your Email...' />
                        </div>
                        <div className="Contact-section-form-item">
                            <textarea name='message' rows={5} required placeholder='Enter Your Message...'></textarea>
                        </div>
                        <div className="Contact-section-form-item">
                            <button className="Contact-section-form-button" type='submit'>Send</button>
                        </div>
                    </form>
                </div>
            </div>
            <span class="Contact-section-border"></span>
            <div className="Contact-section-footer">
                <div className="Contact-section-footer-item">
                    <a href={social.gmail}>
                        <i class='bx bx-envelope' ></i>
                    </a>
                    <a href={social.github}>
                        <i class='bx bxl-github' ></i>
                    </a>
                    <a href={social.linkedin}>
                        <i class='bx bxl-linkedin' ></i>
                    </a>
                    <a href={social.instagram}>
                        <i class='bx bxl-instagram' ></i>
                    </a>
                    <a href={social.twitter}>
                        <i class='bx bxl-twitter' ></i>
                    </a>
                    <a href={social.dribbble}>
                        <i class='bx bxl-dribbble' ></i>
                    </a>
                </div>
                <div className="Contact-section-footer-item">
                    Copyright © Rajajayaruban | All Rights Reserved
                </div>
            </div>
        </section>
    )
}

export default Contact;