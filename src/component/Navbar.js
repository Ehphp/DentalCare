import React from "react";
import { Link } from 'react-router-dom';
import './navbar.css'

function Navbar() {
    return (
        <nav className='nav'>
            <h1><a href="#home">DentalCare</a></h1>
            <div className="logo"></div>
            <div className='link'>
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;