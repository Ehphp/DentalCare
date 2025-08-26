import React from "react";

import Map from "./Map";
import ContactInfo from "./ContactInfo";
import ContactHero from "./ContactHero";
import FormHome from "./FormHome";

import './contact.css';


function Contact() {


    return (

        <section id="contact" className="contactContent">
            <ContactHero />
            <div className="contact-layout">
                <ContactInfo />
                <FormHome />
            </div>
            <h3>
                vieni a trovarci presso la nostra nuova sede
            </h3>
            <h4>in via Corso Umberto I, 15</h4>
            <Map />
        </section>
    );
}

export default Contact;
