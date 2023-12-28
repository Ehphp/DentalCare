import React from "react";
import './footer.css';

// Assumi che le immagini siano nella cartella /assets
const fbIcon= '/facebook.png'; // Sostituisci con il percorso corretto dell'icona di Facebook
const igIcon='/instagram.png'; // Sostituisci con il percorso corretto dell'icona di Instagram

function Footer() {
    return (
        <div className="footer">
            <div className="socialMediaIcons">
                <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <img src={fbIcon} alt="Facebook" />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <img src={igIcon} alt="Instagram" />
                </a>
            </div>
            <div className="copyright">
                <p>&copy; {new Date().getFullYear()} Il Tuo Nome o Società. Tutti i diritti riservati.</p>
            </div>
        </div>
    );
}

export default Footer;
