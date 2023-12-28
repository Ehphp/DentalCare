const express = require('express');
const nodemailer = require('nodemailer');
const { google } = require('google-auth-library');
const credentials = require('./dentistawebsite-6b51cbaefc86.json'); // Percorso del file JSON delle credenziali
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

async function createTransporter() {
    // Creazione dell'oggetto auth usando il costruttore JWT
    const auth = new google.auth.JWT(
        credentials.client_email,
        null, // Chiave del file non necessaria poiché viene passata direttamente
        credentials.private_key,
        ['https://www.googleapis.com/auth/gmail.send'],
        null // Il parametro di delega (delegate email) non è necessario
    );

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            type: 'OAuth2',
            user: 'dentistawebsiteserviceaccount@dentistawebsite.iam.gserviceaccount.com',
            auth,
        },
    });

    return transporter;
}

// Endpoint per l'invio delle email
app.post('/sendemail', async (req, res) => {
    const { name, email, date, message } = req.body;
    const transporter = await createTransporter();

    const mailOptions = {
        from: 'dentistawebsiteserviceaccount@dentistawebsite.iam.gserviceaccount.com',
        to: 'hopalong.ph96@gmail.com',
        subject: `Nuovo Messaggio da ${name}`,
        text: `Messaggio: ${message} - Da: ${name}, Email: ${email}, Data: ${date}`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error("Errore completo:", error);
            res.status(500).send("Errore durante l'invio dell'email");
        } else {
            console.log('Email inviata: ' + info.response);
            res.status(200).send('Email inviata con successo');
        }
    });
});

// Avvia il server
app.listen(3000, () => {
    console.log('Server in ascolto sulla porta 3000');
});
