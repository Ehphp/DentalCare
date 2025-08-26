import React from "react";

import Card from "./Card";
import './contactHero.css';
function ContactHero() {
    return (
        <div className="contact-hero">
            <Card
                title="Contattaci"
                subtitle={"A DentalCare, combiniamo tecnologie all'avanguardia con un ambiente accogliente " +
                "per offrire trattamenti di alta qualità in un'atmosfera rilassante."}
            />
        </div>
    );
}

export default ContactHero;
