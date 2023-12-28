import React, { useState } from "react";

import FormHome from "./FormHome";
import TabOrari from "./TabOrari";

import './contactInfo.css';

function ContactInfo() {
    const phoneIcon = '/callUs.PNG';
    const mailIcon = '/email.PNG';
    const [isActivePhone, setIsActivePhone] = useState(false);
    const [isActiveEmail, setIsActiveEmail] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        date: '',
        message: '',
    });
const telefono= 3518005213
    const handleClickPhone = () => {
        setIsActivePhone(!isActivePhone);
    };

    const handleClickEmail = () => {
        setIsActiveEmail(!isActiveEmail);
    };

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <div className="contattiDx">
            <TabOrari />

            <div className='callUsDivSopra'>
                <div className="divContatti">
                    <img className='phoneIcon' onClick={handleClickPhone} src={phoneIcon} alt='img'></img>
                </div>
                <div className="divContatti">
                    <img className='mailIcon' onClick={handleClickEmail} src={mailIcon} alt='email icon'></img>
                </div>
            </div>
            {isActivePhone && (
            <div className="callUsDivSottoPhone">

             <p>Contattaci al: {telefono}</p>




            </div>

            )}
            {isActiveEmail && (
                <div className="callUsDivSottoEmail">
                    
                    <form onSubmit={handleSubmit} className="appointment-form-contact">
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Your Name"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Your Email"
                            required
                        />
                        <input
                            type="date"
                            name="date"
                            value={formData.date}
                            onChange={handleChange}
                            required
                        />
                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Your Message"
                        />
                        <button type="submit">Book an Appointment</button>
                    </form>
                </div>
            )}
        </div>
    );
}

export default ContactInfo;
