import React, { useState } from "react";
import './navbar.css';

function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav className='nav'>
            <h1><a href="#home">DentalCare</a></h1>
            <button
                className="nav-toggle"
                aria-label="Apri menu"
                onClick={() => setOpen(!open)}
            >
                &#9776;
            </button>
            <div className={`link ${open ? 'open' : ''}`}>
                <ul>
                    <li><a href="#about">Chi Siamo</a></li>
                    <li><a href="#contact">Contatti</a></li>
                    <li><a href="#contact" className="cta">Prenota</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;