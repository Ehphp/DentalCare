import React from 'react';
import './heroSection.css';

function HeroSection() {
    const image = "/heronew.png";

    return (
        <section id="home" className="heroSection">
            <img src={image} className='heroSectionImg active' alt="Studio dentistico" />
            <div className="heroContent">
                <div className="heroTitle">
                    <h1>Il tuo sorriso, la nostra passione</h1>
                </div>
                <div className="heroSubtitle">
                    <p>Cure dentistiche professionali per tutta la famiglia.</p>
                </div>
                <a href="#contact" className="heroButton">Prenota visita</a>
            </div>
        </section>
    );
}

export default HeroSection;
