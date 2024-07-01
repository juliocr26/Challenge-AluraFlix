import React from 'react';
import '../Footer/Footer.css';
import logoImage from '/Image/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';


export default function Footer() {
    return (
        <footer className='footer'>
            <img src={logoImage} alt="" />
            <div className="redes">
                <a href="www.linkedin.com/in/julio-césar-rodriguez-3b546922a" className="redes-icon"><FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
                <a href="https://github.com/juliocr26" className="redes-icon"><FontAwesomeIcon icon={faGithub} size="2x" /></a>
                <a href="https://wa.me/56993509609" className="redes-icon"><FontAwesomeIcon icon={faWhatsapp} size="2x" /></a>
            </div>
            <p>Web Desarrollada por | Julio Cesar Rodriguez 2024</p>
        </footer>

    );
}
