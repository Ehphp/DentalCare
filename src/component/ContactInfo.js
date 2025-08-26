import React from "react";
import TabOrari from "./TabOrari";
import './contactInfo.css';

function ContactInfo() {
    const telefono = '3518005213';
    const email = 'info@dentalcare.com';

    return (
        <div className="contattiDx">
            <TabOrari />
            <div className="contactDetails">
                <p><a href={`tel:${telefono}`}>{telefono}</a></p>
                <p><a href={`mailto:${email}`}>{email}</a></p>
            </div>
        </div>
    );
}

export default ContactInfo;
