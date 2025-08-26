import React, { useState, useEffect } from 'react';
import './heroSection.css';

function HeroSection() {
    const images = [
        "/heronew.png",
        "/dentistaHeroSection.png",
        "/dentidta2.png"
    ];

    const altTexts = [
        "Studio dentistico moderno",
        "Dentista al lavoro",
        "Attrezzature odontoiatriche"
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <section id="home" className="heroSection">
            <img src={images[currentIndex]} className='heroSectionImg active' alt={altTexts[currentIndex]} />
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
