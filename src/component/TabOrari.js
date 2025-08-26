import React from "react";


import './tabOrari.css'
function TabOrari() {
    // Puoi sostituire questi dati con quelli reali o renderli dinamici
    const orari = [
        { giorno: "Lunedì", apertura: "08:00", chiusura: "18:00", giornoNumero: 1 },
        { giorno: "Martedì", apertura: "08:00", chiusura: "18:00", giornoNumero: 2 },
        { giorno: "Mercoledì", apertura: "08:00", chiusura: "18:00", giornoNumero: 3 },
        { giorno: "Giovedì", apertura: "08:00", chiusura: "18:00", giornoNumero: 4 },
        { giorno: "Venerdì", apertura: "08:00", chiusura: "18:00", giornoNumero: 5 },
        { giorno: "Sabato", apertura: "09:00", chiusura: "17:00", giornoNumero: 6 },
        { giorno: "Domenica", apertura: "Chiuso", chiusura: "Chiuso", giornoNumero: 0 }
    ];

    const oggi = new Date(Date.now());
    const giornoSettimana = oggi.getDay();

    const orarioOggi = orari.find(orario => orario.giornoNumero === giornoSettimana);

    return (
        <div className="orariDiv">
            <div className="orari">
                <table>
                    <thead>
                        <tr>
                            <th>Giorno</th>
                            <th>Apertura</th>
                            <th>Chiusura</th>
                        </tr>
                    </thead>
                    <tbody>
                        {orari.map((orario, index) => (
                            <tr key={index} className={orario.giornoNumero === giornoSettimana ? 'current-day' : ''}>
                                <td>{orario.giorno}</td>
                                <td>{orario.apertura}</td>
                                <td>{orario.chiusura}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default TabOrari;
