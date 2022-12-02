import React from 'react'
import './expireance.css'

const Expireance = ({ UserData }) => {

    const expireance = UserData.expireance

    return (
        <section id="expireance" className='Expireance-section-main' >

            <h1 className="Expireance-title">
                <span className='text-gradient'>Expireance</span>
            </h1>
            <div className="Expireance-content">
                {expireance && expireance.map((E, i) => (
                    <div key={i} className="Expireance-content-item">
                        <div className="expireance-item-header">
                            <img src={E.logo} alt="" />
                            <h2>{E.name}</h2>
                        </div>
                        <div className="expireance-item-dates">
                            <div className="start">{E.start}</div>
                            <div className="end">{E.end}</div>
                        </div>
                        <p className="expireance-item-description">
                            {E.description}
                        </p>
                        <a href={E.link} target={'_blank'} className="expireance-item-link">
                            View
                        </a>
                    </div>
                ))}


            </div>


        </section>
    )
}

export default Expireance;