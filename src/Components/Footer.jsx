import React from "react";
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer>
            <div className="adress">
                <address>
                    Rua da Amostra, 123 <br />
                    1234-567 Lisboa <br />
                    Portugal
                </address>
            </div>
            <div className="social-media">
                <i className="instagram"></i>
                <i className="facebook"></i>
                <i className="youtube"></i>
                <i className="twitter"></i>
                <i className="whatsapp"></i>     
            </div>
            <ul className="policies">
                <li>
                    <Link to="/privacyPolicy">Política de Privacidade</Link>
                </li>
                <li>
                    <Link to="/legalNotice">Aviso Legal</Link>
                </li>
                <li>
                    <Link to="/cookiesPolicy">Política de Cookie</Link>
                </li>
            </ul>
        </footer>
    );
}

export default Footer;