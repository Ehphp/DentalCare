import React, { useState } from 'react';
import styles from './formHome.css';
import axios from 'axios'
const FormHome = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        date: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('http://localhost:3000/sendemail', formData)
            .then(response => {
                console.log('Success:', response.data);
                // Qui puoi gestire ulteriormente la risposta, come mostrare un messaggio di successo all'utente
            })
            .catch(error => {
                console.error('Error:', error);
                // Qui puoi gestire gli errori, come mostrare un messaggio di errore all'utente
            });
            
    };

    return (
        <form onSubmit={handleSubmit} className="appointment-form">
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
    );
};

export default FormHome;
