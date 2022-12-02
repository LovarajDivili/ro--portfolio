import React from 'react'
import './selfIntro.css'



const SelfIntro = ({ UserData }) => {

    const About = UserData.about

    return (
        <section id="about" className='SelfIntro-section-main'>

            <h1 className="SelfIntro-title">
                About <span className='text-gradient'>Me</span>
            </h1>
            <div className="SelfIntro-contents-container">
                <div className="SelfIntro-left-content">
                    <img src={UserData.fullPhoto} alt="" />
                </div>
                <div className="SelfIntro-right-content">
                    <div className="SelfIntro-right-about">{About}</div>
                    <div className="SelfIntro-right-about-items">
                        <div className="SelfIntro-right-about-item">
                            <span>Name</span>
                            <span>{UserData.name}</span>
                        </div>
                        <div className="SelfIntro-right-about-item">
                            <span>Born</span>
                            <span>{UserData.born}</span>
                        </div>
                        <div className="SelfIntro-right-about-item">
                            <span>Occupation</span>
                            <span>{UserData.designation}</span>
                        </div>
                        <div className="SelfIntro-right-about-item">
                            <span>Hobbies</span>
                            <span>{UserData.hobbies}</span>
                        </div>
                    </div>

                </div>
            </div>

        </section>
    )
}

export default SelfIntro;