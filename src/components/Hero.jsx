import React from 'react'
import photos from '../assets/photos.svg'

const Hero = () => {
    return (
        <section className="hero-container">
            <img src={photos} alt="" className="hero--photo" />

            <h1 className="hero--header">Online Experiences</h1>
            <p className="hero--text">Join unique interactive activities led by
                one-of-a-kind hosts—all without leaving home.</p>
        </section>
    )
}

export default Hero