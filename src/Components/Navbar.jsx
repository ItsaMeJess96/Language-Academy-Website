import React from "react";
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <nav className="navbar">
            <div className="logo">
                <Link to="/">Culturália</Link>
            </div>
            <ul className="navigation-links"> 
                <li>
                    <Link to="/methodologies">Metodologias</Link>
                </li>
                <li>
                    <Link to="/exams">Exames</Link>
                </li>
                <li>
                    <Link to="/courses">Cursos</Link>
                </li>
                <li>
                    <Link to="/contact">Contacto</Link>
                </li>
            </ul>
            <div className="user-entry">
                <Link className="login" to="/login">Log In</Link>
                <Link className="signup" to="/signup">Registo</Link>
            </div>
            {/*Icon for mobile links */}
            <div className="mobile-menu-icon">
                <i></i>
            </div>
        </nav>
    );
}

export default NavBar;
