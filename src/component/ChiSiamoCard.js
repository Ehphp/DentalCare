

import React, { useState, useEffect } from 'react';

import './chiSiamoCard.css';


function ChiSiamoCard({ dipendenti, onHoverChange }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [hoveredCardIndex, setHoveredCardIndex] = useState(null);     // Funzione per passare alla prossima slide
    const goToNextSlide = () => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % dipendenti.length);
    };
    const handleMouseEnter = (index) => {
        setHoveredCardIndex(index);
        onHoverChange(true); // Notifica al componente padre
    };

    const handleMouseLeave = () => {
        setHoveredCardIndex(null);
        onHoverChange(false); // Notifica al componente padre
    };

    // Effetto per lo scorrimento automatico
    useEffect(() => {
        const timer = setInterval(goToNextSlide, 3000); // Cambia ogni 3 secondi
        return () => clearInterval(timer);
    }, [currentIndex, dipendenti.length]);

    // Gestione del click sui puntini
    const handleDotClick = (index) => {
        setCurrentIndex(index);
    };



    return (
        <div className="chiSiamoContainer">
            <div className="slider">
                <div className="slider-items" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
                    {dipendenti.map((dipendente, index) => (
                        <div
                            key={index}
                            className={`card ${index === currentIndex ? 'active' : ''} ${index === hoveredCardIndex ? 'cardHover' : ''}`}
                            onMouseEnter={() => handleMouseEnter(index)}
                            onMouseLeave={handleMouseLeave}
                        >
                            <div className='cardSx'>
                                <div className="imgStaff">
                                    <img src={dipendente.imgSrc}

                                        alt={dipendente.nome} />
                                </div>
                                <h1>{dipendente.nome}</h1>
                            </div>
                            <div className={`infoStaff ${hoveredCardIndex !== null ? '' : ''}`}>
                                <h3 className="mansione">{dipendente.mansione}</h3>
                                <p className="descrizione">{dipendente.descrizione}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="dots">
                    {dipendenti.map((_, index) => (
                        <span
                            key={index}
                            className={`dot ${index === currentIndex ? 'active' : ''}`}
                            onClick={() => handleDotClick(index)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ChiSiamoCard