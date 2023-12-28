import React, { useState } from 'react';
import './emailCalendar.css'
function EmailSender() {
    const [date, setDate] = useState('');

    const handleDateChange = (event) => {
        setDate(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        // Qui invieresti una richiesta al tuo backend o servizio di email
        const response = await sendEmail(date);
        if (response.success) {
            alert(`Email inviata per la data: ${date}`);
        } else {
            alert("Errore nell'invio dell'email");
        }
    };

    // Funzione fittizia per rappresentare l'invio di una email
    const sendEmail = async (date) => {
        // Qui ci sarebbe il codice per inviare una richiesta HTTP al backend
        return { success: true };
    };

    return (
        <div className='emailDiv'>
            <h2>Verifica la nostra disponibilita, scegli il giorno, inviaci una mail</h2>
            <form className='emailForm' onSubmit={handleSubmit}>
                <input
                    type="date"
                    value={date}
                    onChange={handleDateChange}
                />
                <button type="submit">Invia Email</button>
            </form>
        </div>

    );
}

export default EmailSender;
