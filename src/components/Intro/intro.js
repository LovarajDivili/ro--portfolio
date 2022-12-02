import './intro.css'

import LinkedInImg from '../../images/linkedin.png'
import GitHubImg from '../../images/github.png'
import GmailImg from '../../images/gmail.png'
import IntrTemplateImg from '../../images/herobg.png'



const Intro = ({ UserData }) => {
    return (
        <section className='Into-section-main'>
            <div className="intro-section-right">
                <p className='structure-label label-html-open'></p>
                <p className='structure-label label-body-open'></p>
                <p className='structure-label label-h1-open'></p>
                <h1>Hi,I'm <br /><span className='text-gradient'>{UserData.name}</span><br />{UserData.designation}</h1>
                <p className='structure-label label-h1-close'></p>

                <p className='structure-label label-contact-open'></p>
                <div className='social-div'>
                    <div className='item social-items'>
                        <a href={UserData.social.gmail} target={'_blank'}>
                            <div className="social-item">
                                <img src={GmailImg} alt="" />
                                <span className='social-item-title'>Gmail</span>
                            </div>
                        </a>
                        <a href={UserData.social.github} target={'_blank'}>
                            <div className="social-item">
                                <img src={GitHubImg} alt="" />
                                <span className='social-item-title'>GitHub</span>
                            </div>
                        </a>
                        <a href={UserData.social.linkedin} target={'_blank'}>
                            <div className="social-item">
                                <img src={LinkedInImg} alt="" />
                                <span className='social-item-title'>LinkedIn</span>
                            </div>
                        </a>
                    </div>
                </div>
                <p className='structure-label label-contact-close'></p>
                <p className='structure-label label-body-close'></p>
                <p className='structure-label label-html-close'></p>
            </div>
            <div className="intro-section-left">
                <img src={IntrTemplateImg} alt="" />
            </div>
        </section>
    );
}
export default Intro;
