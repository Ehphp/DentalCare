import React from 'react';
import './heroSection.css';

function HeroSection() {
    const image = "/heronew.png";

    return (
        <section id="home" className="heroSection">
            <img src={image} className='heroSectionImg active' alt="Studio dentistico" />
            <div className="heroContent">
                <h1>Il tuo sorriso, la nostra passione</h1>
                <p>Cure dentistiche professionali per tutta la famiglia.</p>
                <a href="#contact" className="heroButton">Prenota visita</a>
            </div>
        </section>
    );
}

export default HeroSection;
