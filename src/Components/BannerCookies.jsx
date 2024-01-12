// Componente que renderiza banner de aceitação de cookies

import React, { useState, useEffect } from "react";

const CookieBanner = () => {

    //iniciar o estado do banner em false, para não aparecer ao renderizar a página
    const [showBanner, setShowBanner] = useState(false);

    //useEffect para verificar se os cookies já foram aceites
    useEffect(() => {
        if(!localStorage.getItem('cookiesAccepted')) {
            //se os cookies ainda não foram aceites, vai mostrar o banner
            setShowBanner(true);
        }
    }, []);

    //função para aceitar cookies e esconder o banner
    const acceptCookies = () => {
        localStorage.setItem('cookiesAccepted', true);
        setShowBanner(false)
    };

    //renderizar o componente
    return (
        showBanner && (
            <div className="cookie-banner">
                <p> 
                    Este site utiliza cookies para garantir a melhor experiência. 
                    Ao continuar, você concorda com nossa política de cookies.
                </p>
                <button onClick={acceptCookies}>Aceitar</button>
            </div>
        )
    )
};

export default CookieBanner;