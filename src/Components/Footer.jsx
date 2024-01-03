// componente que vai renderizar o footer das páginas

import React from "react";
import { Link } from 'react-router-dom';
import '../Styles/Footer.css'

function Footer() {
    return (
        <footer>
            <div className="footer-main">
                <div className="adress">
                    <address>
                        Rua da Amostra, 123 <br />
                        1234-567 Lisboa <br />
                        Portugal
                    </address>
                </div>
                <div className="social-media">
                    <a href='https://www.facebook.com/'><i className="fi fi-brands-facebook"></i></a>
                    <a href="https://www.instagram.com/"><i className="fi fi-brands-instagram"></i></a>
                    <a href="https://www.linkedin.com/feed/"><i className="fi fi-brands-linkedin"></i></a>
                </div>
                <ul className="policies">
                    <li>
                        <Link to="/privacyPolicy" className="policy-links">Política de Privacidade</Link>
                    </li>
                    <li>
                        <Link to="/legalNotice" className="policy-links">Aviso Legal</Link>
                    </li>
                    <li>
                        <Link to="/cookiesPolicy" className="policy-links">Política de Cookie</Link>
                    </li>
                </ul>
            </div>
            <div className="referências">
                <a href="https://www.flaticon.com/uicons">Uicons by Flaticon</a> 
                <a href="https://www.flaticon.com/free-icons/languages" title="languages icons">Languages icons created by Freepik - Flaticon</a>
                <a href="https://www.flaticon.com/free-icons/international-flags" title="flags icons">Flags icons created by Freepik - Flaticon</a>
            </div>

        </footer>
    );
}

export default Footer;