import React from 'react'
import './skillSet.css'

// Packages

import VisTimeline from '../../images/packages/visjs_logo.png'
import Cesiumjs from '../../images/packages/cesiumjs.png'
import Leaflet from '../../images/packages/leaflet.png'
import Socket from '../../images/packages/socket.png'
import Twilio from '../../images/packages/twilio.png'
import Razorpay from '../../images/packages/razorpay.png'
import Peer from '../../images/packages/peer.png'
import Cloudinary from '../../images/packages/cloudinary.png'

const SkillSet = ({ UserData }) => {

    const skillsets = UserData.skillset

    return (
        <section id="skillset" className='SkillSet-section-main'>

            <div className="SkillSet-content">

                <div className="SkillSet-border-box border-box-1"></div>
                <div className="SkillSet-border-box border-box-2"></div>
                <div className="SkillSet-border-box border-box-3"></div>
                <div className="SkillSet-border-box border-box-4"></div>

                <span className='SkillSet-top-title text-gradient-2'>PROFESSIONAL SKILLS</span>
                <h1 className="SkillSet-title">
                    Programming <span className='text-gradient'> Experience</span>
                </h1>
                <div className="SkillSet-items">
                    <div className="SkillSet-items-left">
                        {
                            skillsets && skillsets.map((S, i) => (
                                <div key={i} className="SkillSet-item">
                                    <img src={S.logo} alt="" />
                                    <span>{S.name}</span>
                                </div>
                            ))
                        }
                    </div>
                    <div className="SkillSet-items-right" >
                        <div className="SkillSet-item">
                            <img src={VisTimeline} alt="" />
                            <span>vis.timeline.Js</span>
                        </div>
                        <div className="SkillSet-item">
                            <img src={Cesiumjs} alt="" />
                            <span>Cesium.Js</span>
                        </div>
                        <div className="SkillSet-item">
                            <img src={Leaflet} alt="" />
                            <span>Leaflet.Js</span>
                        </div>
                        <div className="SkillSet-item">
                            <img src={Socket} alt="" />
                            <span>Socket.io</span>
                        </div>
                        <div className="SkillSet-item">
                            <img src={Twilio} alt="" />
                            <span>Twilio.Js</span>
                        </div>
                        <div className="SkillSet-item">
                            <img src={Razorpay} alt="" />
                            <span>Razorpay</span>
                        </div>
                        <div className="SkillSet-item">
                            <img src={Peer} alt="" />
                            <span>Peer.Js</span>
                        </div>
                        <div className="SkillSet-item">
                            <img src={Cloudinary} alt="" />
                            <span>Cloudinary</span>
                        </div>

                    </div>

                </div>
            </div>
        </section>
    )
}

export default SkillSet;