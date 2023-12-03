import React, { useState } from "react";
import { Link } from 'react-router-dom';
//import icons
import iconMundo from '../Assets/Icons/languages.png';
import iconMessage from '../Assets/Icons/online-lesson.png'
import iconMundoTalk from '../Assets/Icons/language.png'
//import slideshow das secções e comentários
import SectionsSlideshow from "../Components/SectionsSlideshow";
import CommentsSlideshow from "../Components/ComentsSlideshow";

function Home() {
    return (
        <div className="home">
            <div className="h-intro">
                <div>
                    <div>
                        <h2>Explora novas culturas</h2>
                        <h2>Comunica com o mundo</h2>
                        <h2>Amplia os teus horizontes</h2>
                    </div>
                    <div>
                        <img  src={iconMundo} alt='icon do mundo'/>
                    </div>
                </div>
                <div>
                    <p>
                        Estamos empenhados em fornecer uma experiência de aprendizagem de idiomas excepcional,
                        adaptada às tuas necessidades!
                    </p>
                    <Link to='/contact'>Começar Agora!</Link>
                </div>
            </div>
            <div className="h-message">
                <div>
                    <img src={iconMessage} alt='pessoa a anunciar mensagem num ecran' />
                </div>
                <div>
                    <h3>Próximo exame:</h3>
                    <p>Inglês - 5 de março 2024</p>
                    <Link to='/exams'>Ver todos</Link>
                </div>
            </div>
            <SectionsSlideshow />
            <div className="h-invitation">
                <h3>Junta-te a Nós!</h3>
                <p>
                    Não esperes mais para embarcar nesta emocionante jornada de aprendizagem de línguas.
                    Inscreve-te hoje na Culturália e começa a transformar as tuas competências linguísticas.
                    Estamos ansiosos por te receber na nossa comunidade de alunos dedicados e entusiastas.
                </p>
                <div>
                    <img src= {iconMundoTalk} alt='mundo numa caixa de mensagem' />
                    <Link to='/contact'>Contacta-nos para obter mais informações sobre como te inscreveres</Link>
                </div>
            </div>
            <CommentsSlideshow />
        </div>
    )
}

export default Home;