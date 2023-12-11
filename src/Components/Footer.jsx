// componente que vai renderizar o footer das páginas

import React from "react";
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer>
            <div>
                <div className="adress">
                    <address>
                        Rua da Amostra, 123 <br />
                        1234-567 Lisboa <br />
                        Portugal
                    </address>
                </div>
                <div className="social-media">
                    <i className="fi fi-brands-facebook"></i>
                    <i className="fi fi-brands-instagram"></i>
                    <i className="fi fi-brands-linkedin"></i>
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
            </div>
            <div className="referências">
                <a href="https://www.flaticon.com/uicons">Uicons by Flaticon</a> 
                <br />
                <a href="https://www.flaticon.com/free-icons/languages" title="languages icons">Languages icons created by Freepik - Flaticon</a>
                <br />
                <a href="https://www.flaticon.com/free-icons/international-flags" title="flags icons">Flags icons created by Freepik - Flaticon</a>
            </div>

        </footer>
    );
}

export default Footer;