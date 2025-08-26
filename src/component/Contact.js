import React from "react";

import Map from "./Map";
import ContactInfo from "./ContactInfo";
import FormHome from "./FormHome";

import './contact.css';


function Contact() {


    return (

        <section id="contact" className="contactContent">
            <div className="contact-layout">
                <ContactInfo />
                <FormHome />
            </div>

            <Map />
        </section>
    );
}

export default Contact;
