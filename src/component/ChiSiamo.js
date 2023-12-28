import React, { useState } from 'react';
import ChiSiamoCard from "./ChiSiamoCard";

import './chiSiamo.css'

function ChiSiamo() {
    const [hovered, setHovered] = useState(false);

    const handleHoverChange = (isHovered) => {
        setHovered(isHovered);
    };
    const dipendenti = [{
        nome: 'Luigi Rotula',
        imgSrc: './arciere.png',
        mansione: 'Medico Chirurgo Odontotecnico',
        descrizione: `Con anni di esperienza nel campo odontoiatrico,
                        offre trattamenti all'avanguardia per garantire salute e bellezza al
                        tuo sorriso.Applicando tecniche moderne e un approccio personalizzato,
                        ci impegniamo a fornire risultati eccellenti in un ambiente confortevole
                        e rilassante.Che si tratti di una semplice pulizia dentale o di interventi
                        più complessi, la tua salute orale è nelle mani migliori.
            `
    },
    {
        nome: 'Leo Faustiana',
        imgSrc: './kisiamo.png',
        mansione: 'Infermiere Specialista Odontotecnico',
        descrizione: `Con anni di esperienza nel campo odontoiatrico,
                    offre trattamenti all'avanguardia per garantire salute e bellezza al
                    tuo sorriso.Applicando tecniche moderne e un approccio personalizzato,
                    ci impegniamo a fornire risultati eccellenti in un ambiente confortevole
                    e rilassante.Che si tratti di una semplice pulizia dentale o di interventi
                    più complessi, la tua salute orale è nelle mani migliori.
           `
    },
    {
        nome: 'Eleonora Satena',
        imgSrc: './arciere.png',
        mansione: 'Direttore Odontotecnico Generale ',
        descrizione: `Con anni di esperienza nel campo odontoiatrico
                    offre trattamenti all'avanguardia per garantire salute e bellezza al
                    tuo sorriso.Applicando tecniche moderne e un approccio personalizzato,
                    ci impegniamo a fornire risultati eccellenti in un ambiente confortevole
                    e rilassante.Che si tratti di una semplice pulizia dentale o di interventi
                    più complessi, la tua salute orale è nelle mani migliori.
           `
    },

    ]
    return (
        <section id="about" className={`chiSiamoSection ${hovered ? 'hoveredClass' : ''}`}>
            <ChiSiamoCard dipendenti={dipendenti} onHoverChange={handleHoverChange} />
        </section>)

}

export default ChiSiamo;