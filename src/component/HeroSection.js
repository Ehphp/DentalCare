import React, { useEffect, useState } from 'react';
import './heroSection.css';

function HeroSection() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const image = "/heronew.png";

    return (
        <section id="home" className="heroSection">


            <img src={image} className='heroSectionImg active' />
        </section>
    );
}

export default HeroSection;
