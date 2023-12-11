/* componente que renderiza a navbar das páginas
em desktop mostra os títulos das outras páginas
em mobile ou outros ecrans pequenos vai mostrar um icon de menu, que ao ser carregado mostra os títulos das outras páginas*/

import React, { useState } from "react";
import { Link } from 'react-router-dom';

function NavBar() {

    // Links de navegação
    const navigationLinks = [
        { to: '/', label: 'Home' },
        { to: '/methodologies', label: 'Metodologias' },
        { to: '/exams', label: 'Exames' },
        { to: '/courses', label: 'Cursos' },
        { to: '/contact', label: 'Contacto' },
    ];

    // useState para controlar se dropdown está aberto ou fechado, inicia fechado
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    // função para alternar o estado do dropdown
    const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);


    return (
        <nav>
            <div className="logo">
                <Link to="/">Culturália</Link>
            </div>

            {/* Desktop Links */}
            <ul className="desktop-links">
                {/* Vai mapear pelos links de navegação e renderiza cada elemento */}
                {navigationLinks.map(({ to, label }) => (
                    // propriedade key para ajudar o react a identificar cada elemento durante as atualizações
                    <li key={to}>
                        <Link to={to}>{label}</Link>
                    </li>
                ))}
            </ul>

            <div className="user-entry">
                <Link className="login" to="/login">Log In</Link>
                <Link className="signup" to="/signup">Registo</Link>
            </div>

            {/* Mobile Links */}
            <div className="mobile-menu-icon" onClick={toggleDropdown}>
                <i className="fi fi-br-menu-burger"></i>
                {/* Se for clicado vai renderizar links */}
                {isDropdownOpen && (
                    <ul className="mobile-links">
                        {navigationLinks.map(({ to, label }) => (
                            <li key={to}>
                                {/* Cada link fecha o dropdown ao ser clicado */}
                                <Link to={to} onClick={toggleDropdown}>{label}</Link>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </nav>
    );
}

export default NavBar;
