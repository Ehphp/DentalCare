import React, { useState } from 'react';
import './formHome.css';
import axios from 'axios';

const FormHome = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        date: '',
        message: '',
    });
    const [status, setStatus] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.post('/sendemail', formData)
            .then(() => {
                setStatus('success');
                setFormData({ name: '', email: '', date: '', message: '' });
            })
            .catch(() => {
                setStatus('error');
            });

    };

    return (
        <form onSubmit={handleSubmit} id="booking" className="appointment-form">
            <label htmlFor="name">Nome</label>
            <input
                id="name"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
            />
            <label htmlFor="email">Email</label>
            <input
                id="email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
            />
            <label htmlFor="date">Data</label>
            <input
                id="date"
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
            />
            <label htmlFor="message">Messaggio</label>
            <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
            />
            <button type="submit">Prenota appuntamento</button>
            {status === 'success' && <p className="form-success">Richiesta inviata!</p>}
            {status === 'error' && <p className="form-error">Errore durante l'invio.</p>}
        </form>
    );
};

export default FormHome;
