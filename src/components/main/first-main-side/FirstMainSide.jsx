import React from 'react'
import './FirstMainSide.scss'
import { firstData } from '../../../data/first-data'
import "@fontsource/archivo-black"

const FirstMainSide = () => {
    return (
        <div className="first-main-side">
            <div className='first-main-side-wrapper'>
                <h1>Software Development Services</h1>
                <p className='first-main-side-wrapper-desc'>We are a Software Development Company with more than 10 years of experience. We offer full-cycle web development services for business.</p>
                <section className='first-main-side-wrapper-services'>
                    {
                        firstData.map((dataObj) => {
                            return (
                                <div className='first-main-side-wrapper-services-card' key={dataObj.id}>
                                    <img src={dataObj.image.src} alt={dataObj.image.alt} />
                                    <p>{dataObj.text}</p>
                                </div>
                            )
                        })
                    }
                </section>
                <button className='first-main-side-wrapper-button'>Free Estimation</button>

            </div>
        </div>
    )
}

export default FirstMainSide