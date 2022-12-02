import React from 'react'
import './packages.css'


const Packages = ({ UserData }) => {

    const packages = UserData.packages

    return (
        <section className='Packages-section-main'>
            <div className="Packages-section-title">
                <span class="Packages-section-border"></span>
                <span class="Packages-title-content">Hands-on on Expireance in Advance Packages</span>
                <span class="Packages-section-border"></span>
            </div>
            <div className="Packages-section-items">
                {packages && packages.map((P, i) => (
                    <div key={i} className="Packages-section-item">
                        <img src={P.logo} alt="" />
                        <h1>{P.name}</h1>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Packages;